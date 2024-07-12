"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function Recommendations() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      <Card className="group">
        <Link href="#" className="absolute z-10" prefetch={false}>
          <span className="sr-only">View Product</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Product 1"
          width={300}
          height={300}
          className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-80 transition-opacity"
        />
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">Acme Hoodie</h3>
          <p className="text-muted-foreground text-sm">Cozy and Stylish</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xl font-bold">$49.99</span>
            <Badge variant="outline" className="px-2 py-1 text-sm">
              Free Shipping
            </Badge>
          </div>
        </CardContent>
      </Card>
      <Card className="group">
        <Link href="#" className="absolute z-10" prefetch={false}>
          <span className="sr-only">View Product</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Product 2"
          width={300}
          height={300}
          className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-80 transition-opacity"
        />
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">Acme Joggers</h3>
          <p className="text-muted-foreground text-sm">
            Comfortable and Versatile
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xl font-bold">$39.99</span>
            <Badge variant="outline" className="px-2 py-1 text-sm">
              Free Shipping
            </Badge>
          </div>
        </CardContent>
      </Card>
      <Card className="group">
        <Link href="#" className="absolute z-10" prefetch={false}>
          <span className="sr-only">View Product</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Product 3"
          width={300}
          height={300}
          className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-80 transition-opacity"
        />
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">Acme Sneakers</h3>
          <p className="text-muted-foreground text-sm">
            Comfortable and Stylish
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xl font-bold">$79.99</span>
            <Badge variant="outline" className="px-2 py-1 text-sm">
              Free Shipping
            </Badge>
          </div>
        </CardContent>
      </Card>
      <Card className="group">
        <Link href="#" className="absolute z-10" prefetch={false}>
          <span className="sr-only">View Product</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Product 4"
          width={300}
          height={300}
          className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-80 transition-opacity"
        />
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">Acme Backpack</h3>
          <p className="text-muted-foreground text-sm">Durable and Spacious</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xl font-bold">$59.99</span>
            <Badge variant="outline" className="px-2 py-1 text-sm">
              Free Shipping
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
