import dynamic from "next/dynamic";
import { type RegisteredComponent } from "@builder.io/sdk-react";
import { ProductInformation } from "./components/productinformation";
import { CustomerReviewsWithClientFetching } from "./components/customerreviewswithclientfetching";
import { RecommendationsWithClientFetching } from "./components/recommendationswithclientfetching";

export const customComponents: RegisteredComponent[] = [
  {
    component: ProductInformation,
    name: "Product Information",
    inputs: [
      {
        name: "product",
        type: "object",
      },
    ],
  },
  {
    component: CustomerReviewsWithClientFetching,
    name: "Customer Reviews",
    inputs: [
      {
        name: "product",
        type: "object",
      },
    ],
  },
  {
    component: RecommendationsWithClientFetching,
    name: "Recommendations",
    inputs: [
      {
        name: "product",
        type: "object",
      },
    ],
  },
];
