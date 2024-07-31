"use client";

import { useOptimistic, useTransition } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function ProductListing(props: {
  results: any;
  facets: any;
  filters: any;
}) {
  const router = useRouter();
  let [optimisticFilters, setOptimisticFilters] = useOptimistic(props.filters);
  let [pending, startTransition] = useTransition();

  const onFilterChange = (facet: string, option: string, value: boolean) => {
    let nextValues;
    if (value) {
      // We are checking the filter to true
      nextValues = optimisticFilters[facet] || [];
      nextValues.push(option);
    } else {
      // We are unchecking the filter
      const index = optimisticFilters[facet]?.indexOf(option);
      if (index > -1) {
        // only splice array when item is found
        nextValues = [...optimisticFilters[facet]];
        nextValues.splice(index, 1);
      }
    }
    const nextFilters = {
      ...optimisticFilters,
      [facet]: nextValues,
    };

    const params = new URLSearchParams();
    if (Object.keys(nextFilters).length > 0) {
      for (let filter of Object.keys(nextFilters)) {
        if (nextFilters[filter]) {
          for (let value of nextFilters[filter]) {
            params.append(filter, value);
          }
        }
      }
    }

    startTransition(() => {
      setOptimisticFilters(nextFilters);
      router.push(`/builder-plp?${params.toString()}`, { scroll: false });
    });
  };

  let rootClasses = "container mx-auto px-4 md:px-6 py-12";
  if (pending) {
    rootClasses += " animate-pulse ";
  }

  return (
    <div className={rootClasses}>
      <div className="grid md:grid-cols-[240px_1fr] gap-8">
        <div className="bg-background rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="grid gap-4">
            <div>
              {props.facets
                .filter((facet: any) => facet.type === "multiple")
                .map((facet: any) => {
                  return (
                    <span key={facet.name}>
                      <h3 className="text-base font-medium mb-2">
                        {facet.display_name}
                      </h3>
                      <div className="grid gap-2">
                        {facet.options.map((option: any) => {
                          return (
                            <Label
                              key={option.value}
                              className="flex items-center gap-2 font-normal"
                            >
                              <Checkbox
                                checked={optimisticFilters[
                                  facet.name
                                ]?.includes(option.value)}
                                onCheckedChange={(val: boolean) =>
                                  onFilterChange(facet.name, option.value, val)
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
                  src={product.variations[0].data.image_url}
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
