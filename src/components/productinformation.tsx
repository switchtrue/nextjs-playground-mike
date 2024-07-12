"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProductInformation(props: { product: string }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
      <div>
        <Carousel className="rounded-lg overflow-hidden">
          <CarouselContent>
            <CarouselItem>
              <img
                src="/placeholder.svg"
                alt="Product Image 1"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/placeholder.svg"
                alt="Product Image 2"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/placeholder.svg"
                alt="Product Image 3"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="grid gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{props.product}</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
            <span className="text-muted-foreground text-sm">(23 reviews)</span>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">$59.99</span>
            <Badge variant="outline" className="px-2 py-1 text-sm">
              Free Shipping
            </Badge>
          </div>
          <p className="text-muted-foreground">In stock and ready to ship.</p>
        </div>
        <div>
          <p>
            Introducing the Acme Prism T-Shirt, a perfect blend of style and
            comfort for the modern individual. This tee is crafted with a
            meticulous composition of 60% combed ringspun cotton and 40%
            polyester jersey, ensuring a soft and breathable fabric that feels
            gentle against the skin.
          </p>
          <p className="mt-4">
            The design of the Acme Prism T-Shirt is as striking as it is
            comfortable. The shirt features a unique prism-inspired pattern that
            adds a modern and eye-catching touch to your ensemble.
          </p>
        </div>
        <div className="flex gap-2">
          <Button size="lg">Add to Cart</Button>
          <Button size="lg" variant="outline">
            <HeartIcon className="w-5 h-5 mr-2" />
            Add to Wishlist
          </Button>
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

function HeartIcon(props: any) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
