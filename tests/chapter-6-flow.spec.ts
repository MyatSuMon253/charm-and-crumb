import { expect, test, type Page } from "@playwright/test";

async function choosePreDesignedItem(page: Page, name: string) {
  const card = page
    .getByText(name, { exact: true })
    .locator('xpath=ancestor::*[@data-slot="card"][1]');

  await card
    .getByRole("button", { name: "Customize This Design" })
    .click();
}

async function addCurrentDesignToOrder(page: Page) {
  await page.getByRole("button", { name: "Review & Place" }).click();
  await page
    .getByRole("button", { name: "Add Design to Order" })
    .click();
}

test("builds a multi-design order and records it in order history", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  await page.waitForTimeout(750);

  await expect(
    page.getByRole("heading", { name: "Start With a Pre-Designed Piece" }),
  ).toBeVisible();

  await choosePreDesignedItem(page, "Cafe Date");
  await page.getByRole("button", { name: "Review & Place" }).click();

  await expect(page.getByText("Necklace preview")).toBeVisible();
  await expect(page.locator(".piece-ring.necklace")).toBeVisible();
  await page.screenshot({
    path: "screenshots/ch6-desktop-necklace-placement.png",
  });

  await page
    .getByRole("button", { name: "Add Design to Order" })
    .click();
  await expect(page.getByText("Review Your Order", { exact: true })).toBeVisible();

  await page.getByRole("button", { name: "Add Another Design" }).click();
  await choosePreDesignedItem(page, "Fruit Picnic");
  await addCurrentDesignToOrder(page);

  await expect(page.getByText("2 designs in this order")).toBeVisible();
  await page.getByRole("button", { name: "Confirm 2 Designs" }).click();

  await expect(
    page.getByRole("heading", { name: "Order Successful!" }),
  ).toBeVisible();
  await expect(page.getByText("Crafting").first()).toBeVisible();
  await expect(page.getByText(/^CC-\d{8}-001$/).first()).toBeVisible();

  const orderHistory = page.getByRole("heading", { name: "Order History" });
  await orderHistory.scrollIntoViewIfNeeded();
  await expect(orderHistory).toBeVisible();
  await expect
    .poll(() =>
      page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    )
    .toBe(true);
  await page.evaluate(() => window.scrollTo({ left: 0 }));
  await page.screenshot({
    path: "screenshots/ch6-desktop-order-history.png",
  });
});

test("shows the pre-designed collection and base preview on mobile", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.waitForTimeout(750);

  const collectionHeading = page.getByRole("heading", {
    name: "Start With a Pre-Designed Piece",
  });
  await collectionHeading.scrollIntoViewIfNeeded();
  await expect(collectionHeading).toBeVisible();
  await page.screenshot({
    path: "screenshots/ch6-mobile-collection.png",
  });

  await choosePreDesignedItem(page, "Tokyo Snack");
  await page.getByRole("button", { name: "Review & Place" }).click();
  await expect(page.getByText("Keychain preview")).toBeVisible();
  await expect(page.locator(".piece-ring.keychain")).toBeVisible();
});

test("renders a distinct placement preview for every base", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  await page.waitForTimeout(750);

  const bases = [
    { name: "Bracelet", visual: "bracelet" },
    { name: "Necklace", visual: "necklace" },
    { name: "Keychain", visual: "keychain" },
    { name: "Ring", visual: "ring" },
    { name: "Earrings", visual: "earrings" },
    { name: "Phone Charm", visual: "phone-charm" },
  ];

  for (const base of bases) {
    await page.getByRole("radio", { name: new RegExp(`${base.name} preview`) }).click();
    await page.locator(".step-dot").nth(2).click();

    await expect(page.getByText(`${base.name} preview`)).toBeVisible();
    await expect(page.locator(`.piece-ring.${base.visual}`)).toBeVisible();

    await page.locator(".step-dot").first().click();
  }
});
