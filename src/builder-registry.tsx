"use client";

import dynamic from "next/dynamic";
import { type RegisteredComponent } from "@builder.io/sdk-react";
// import { ProductInformation } from "./components/productinformation";
// import { CustomerReviewsWithClientFetching } from "./components/customerreviewswithclientfetching";
// import { RecommendationsWithClientFetching } from "./components/recommendationswithclientfetching";

export const customComponents: RegisteredComponent[] = [
  {
    component: dynamic(() =>
      import("./components/productinformation").then(
        (mod) => mod.ProductInformation
      )
    ),
    // component: ProductInformation,
    name: "Product Information",
    inputs: [
      {
        name: "product",
        type: "object",
      },
    ],
  },
  {
    component: dynamic(() =>
      import("./components/customerreviewswithclientfetching").then(
        (mod) => mod.CustomerReviewsWithClientFetching
      )
    ),
    // component: CustomerReviewsWithClientFetching,
    name: "Customer Reviews",
  },
  {
    component: dynamic(() =>
      import("./components/recommendationswithclientfetching").then(
        (mod) => mod.RecommendationsWithClientFetching
      )
    ),
    // component: RecommendationsWithClientFetching,
    name: "Recommendations",
  },
];
