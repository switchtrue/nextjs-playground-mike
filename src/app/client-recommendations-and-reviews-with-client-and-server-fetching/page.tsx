import { ProductDetailPageWithClientAndServerFetching } from "@/components/productdetailpagewithclientandserverfetching";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductDetailPageWithClientAndServerFetching />
    </main>
  );
}
