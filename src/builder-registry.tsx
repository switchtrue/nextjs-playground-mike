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
        type: "string",
      },
    ],
  },
  {
    component: CustomerReviewsWithClientFetching,
    name: "Customer Reviews",
  },
  {
    component: RecommendationsWithClientFetching,
    name: "Recommendations",
  },
];
