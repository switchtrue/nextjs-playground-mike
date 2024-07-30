"use client";

import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export function ProductListing(props: { results: any; filters: any }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onFilterChange = (facet: string, option: string, value: boolean) => {
    if (value) {
      const urlQueryString = `filters[${facet}]=${option}`;
      router.push(`/builder-plp?${urlQueryString}`, { scroll: false });
    } else {
      router.push(`/builder-plp`, { scroll: false });
    }
  };

  if (!props.results || !props.filters) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid md:grid-cols-[240px_1fr] gap-8">
        <div className="bg-background rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="grid gap-4">
            <div>
              {props.filters
                .filter((filter: any) => filter.type === "multiple")
                .map((filter: any) => {
                  return (
                    <span key={filter.name}>
                      <h3 className="text-base font-medium mb-2">
                        {filter.display_name}
                      </h3>
                      <div className="grid gap-2">
                        {filter.options.map((option: any) => {
                          return (
                            <Label
                              key={option.value}
                              className="flex items-center gap-2 font-normal"
                            >
                              <Checkbox
                                checked={
                                  searchParams
                                    .toString()
                                    .includes(
                                      filter.name.replaceAll(" ", "+")
                                    ) &&
                                  searchParams
                                    .toString()
                                    .includes(option.value.replaceAll(" ", "+"))
                                }
                                onCheckedChange={(val: boolean) =>
                                  onFilterChange(filter.name, option.value, val)
                                }
                              />
                              {option.display_name}
                            </Label>
                          );
                        })}
                      </div>
                    </span>
                  );
                })}
            </div>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Fall Collection</h1>
            <p className="text-muted-foreground">
              Discover Cozy Elegance: The Fall Collection for a Stylish Season
              Ahead
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {props.results.map((product: any) => (
              <div
                key={product.data.id}
                className="bg-background rounded-lg shadow-sm overflow-hidden"
              >
                <img
                  src="/placeholder.svg"
                  alt={product.variations[0].value}
                  width={300}
                  height={300}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {product.variations[0].value}
                  </h3>
                  <h4 className="text-sm uppercase font-semibold mb-2">
                    {product.variations[0].data.brand}
                  </h4>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-0.5">
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <span className="text-primary font-medium">
                        {product.data.avg_rating.toFixed(1)}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm">
                      ({product.data.avg_rating.toFixed(1)})
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-between">
                    <div className="text-lg font-semibold">
                      ${product.data.once_off_price / 100}
                    </div>
                    <Button variant="outline">Add to Cart</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
