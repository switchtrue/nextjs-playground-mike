import { ProductDetailPageWithClientFetching } from "@/components/productdetailpagewithclientfetching";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductDetailPageWithClientFetching />
    </main>
  );
}
