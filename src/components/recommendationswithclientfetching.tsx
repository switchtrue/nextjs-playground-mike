"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useEffect, useState } from "react";

export function RecommendationsWithClientFetching() {
  const [recommendations, setRecommendations] = useState<any>();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://dummyapi.online/api/products");
      const data = await res.json();
      setRecommendations(data);
    };
    fetchUsers();
  }, []);

  if (!recommendations) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {[1, 2, 3, 4].map((_, index) => (
          <Card key={index} className="group">
            <Skeleton className="w-full h-48 rounded-t-lg" />
            <CardContent className="p-4">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-full mt-2" />
              <div className="flex items-center gap-2 mt-2">
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-6 w-20" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {[0, 1, 2, 3].map((_, index) => (
        <Card key={index} className="group">
          <Link href="#" className="absolute z-10" prefetch={false}>
            <span className="sr-only">View Product</span>
          </Link>
          <img
            src={recommendations[index]?.thumbnailImage}
            alt="Product 1"
            width={300}
            height={300}
            className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-80 transition-opacity"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">
              {recommendations[index]?.name}
            </h3>
            <p className="text-muted-foreground text-sm">
              {recommendations[index]?.productCategory}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xl font-bold">
                ${recommendations[index]?.basePrice}
              </span>
              <Badge variant="outline" className="px-2 py-1 text-sm">
                Free Shipping
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
