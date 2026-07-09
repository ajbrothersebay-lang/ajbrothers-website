import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        AJ Brothers Dashboard
      </h1>

      <div className="mb-6">
        <p className="text-lg">
          Total Products: <strong>{products.length}</strong>
        </p>
      </div>

      {products.length === 0 ? (
        <div className="border rounded-lg p-6">
          <p>No products found.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4"
            >
              <h2 className="font-bold text-lg">
                {product.name}
              </h2>

              <p>SKU: {product.sku}</p>
              <p>Price: &pound;{product.sellPrice}</p>
              <p>Stock: {product.stock}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}