---
marp: true
theme: default
paginate: true
transition: fade
style: |
  :root {
    color: #514236;
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  }

  section {
    background: #fbf7f0;
    color: #514236;
    padding: 56px;
  }

  h1,
  h2 {
    color: #514236;
    font-family: Georgia, "Times New Roman", serif;
    letter-spacing: 0;
  }

  h1 {
    font-size: 56px;
  }

  h2 {
    font-size: 42px;
  }

  strong {
    color: #9a705f;
  }

  img {
    border-radius: 12px;
    box-shadow: 0 18px 44px rgba(81, 66, 54, 0.16);
  }

  .eyebrow {
    color: #9a705f;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .split {
    align-items: center;
    display: grid;
    gap: 44px;
    grid-template-columns: 1fr 1fr;
  }

  .cards {
    display: grid;
    gap: 18px;
    grid-template-columns: repeat(3, 1fr);
  }

  .card {
    background: #fffdf8;
    border: 1px solid #eee2d4;
    border-radius: 10px;
    padding: 22px;
  }

  .muted {
    color: #7c6256;
  }
---

<!-- _class: lead -->

<p class="eyebrow">Product Intro</p>

# Charm & Crumb

A cozy jewelry customizer for building personalized clay charm pieces before checkout.

![bg right:45% fit](../screenshots/01-home.png)

---

## What It Is

<div class="split">
  <div>
    <p><strong>Charm & Crumb</strong> is a frontend product customizer for cute, food-inspired polymer clay jewelry.</p>
    <p class="muted">Customers choose a base, select a finish, collect tiny charms, place them visually, and review the final design.</p>
  </div>
  <div>
    <img src="../screenshots/02-base-material.png" alt="Base and material selection" />
  </div>
</div>

---

## Who It Is For

<div class="cards">
  <div class="card">
    <h3>Gift Shoppers</h3>
    <p>People looking for a small personalized present that feels handmade and specific.</p>
  </div>
  <div class="card">
    <h3>Charm Collectors</h3>
    <p>Customers who enjoy cute accessories and want to mix favorite motifs into one piece.</p>
  </div>
  <div class="card">
    <h3>Small Makers</h3>
    <p>Independent jewelry sellers who need a clearer way to present custom order options.</p>
  </div>
</div>

---

## What It Does

<div class="split">
  <div>
    <ul>
      <li>Guides customers through a simple step-by-step flow</li>
      <li>Shows base options, material finishes, and charm collections</li>
      <li>Keeps selected charms visible in a tray</li>
      <li>Lets customers drag charms onto the jewelry preview</li>
      <li>Summarizes the order before confirmation</li>
    </ul>
  </div>
  <div>
    <img src="../screenshots/03-charms-tray.png" alt="Charm selection and tray" />
  </div>
</div>

---

## The Core Experience

<div class="split">
  <div>
    <h3>Design by Seeing</h3>
    <p class="muted">Instead of guessing from a static product list, customers can build the piece visually and adjust placement before they commit.</p>
  </div>
  <div>
    <img src="../screenshots/04-placement.png" alt="Drag and drop placement" />
  </div>
</div>

---

## Why It Helps

<div class="cards">
  <div class="card">
    <h3>Less Guesswork</h3>
    <p>The preview makes the finished piece easier to imagine.</p>
  </div>
  <div class="card">
    <h3>More Confidence</h3>
    <p>The review step confirms exactly what the customer picked.</p>
  </div>
  <div class="card">
    <h3>More Delight</h3>
    <p>The interaction turns ordering into a small creative moment.</p>
  </div>
</div>

---

## Current Status

<div class="split">
  <div>
    <ul>
      <li>Frontend-only demo built with Next.js, React, TypeScript, and Tailwind CSS</li>
      <li>Responsive customizer flow</li>
      <li>Animated logo-inspired hero bracelet</li>
      <li>Order confirmation screen with final design summary</li>
    </ul>
  </div>
  <div>
    <img src="../screenshots/05-confirmation.png" alt="Order confirmation" />
  </div>
</div>

---

<!-- _class: lead -->

# Charm & Crumb

Personalized clay jewelry, designed one tiny charm at a time.
