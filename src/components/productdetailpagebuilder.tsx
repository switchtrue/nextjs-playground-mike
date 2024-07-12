import { Recommendations } from "./recommendations";
import { CustomerReviews } from "./customerreviews";
import { ProductInformation } from "./productinformation";

export function ProductDetailPageBuilder() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <ProductInformation />
        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Recommended Products
          </h2>
          <Recommendations />
        </div>
        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Customer Reviews
          </h2>
          <CustomerReviews />
        </div>
      </div>
    </div>
  );
}
