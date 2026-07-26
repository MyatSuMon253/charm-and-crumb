import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  findBase,
  findMaterial,
  type OrderRecord,
} from "./customizer-data";

export function OrderHistory({ orders }: { orders: OrderRecord[] }) {
  if (orders.length === 0) return null;

  return (
    <section
      id="orders"
      className="mx-auto max-w-[1120px] px-4 pb-20 min-[621px]:px-8"
      aria-labelledby="order-history-heading"
    >
      <div className="mb-5">
        <p className="eyebrow">YOUR ORDERS</p>
        <h2
          id="order-history-heading"
          className="font-serif text-3xl text-(--brown)"
        >
          Order History
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 min-[901px]:grid-cols-2">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <CardTitle>{order.id}</CardTitle>
                  <CardDescription>
                    {new Intl.DateTimeFormat("en", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    }).format(new Date(order.createdAt))}
                  </CardDescription>
                </div>
                <Badge variant="secondary">{order.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <ul className="flex flex-col gap-2">
                {order.items.map((item, index) => {
                  const base = findBase(item.baseId);
                  const material = findMaterial(item.materialId);

                  return (
                    <li
                      key={item.id}
                      className="flex items-center justify-between gap-3 rounded-lg border border-(--line) p-3"
                    >
                      <span>
                        Design {index + 1}: {material?.name} {base?.name}
                      </span>
                      <strong>${item.total.toFixed(2)}</strong>
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center justify-between gap-3 border-t border-(--line) pt-3">
                <span className="text-(--warm-muted)">
                  {order.items.length}{" "}
                  {order.items.length === 1 ? "design" : "designs"}
                </span>
                <strong>${order.total.toFixed(2)}</strong>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
