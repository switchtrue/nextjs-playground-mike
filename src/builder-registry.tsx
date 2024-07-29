import dynamic from "next/dynamic";
import { type RegisteredComponent } from "@builder.io/sdk-react/edge";

export const customComponents: RegisteredComponent[] = [
  {
    component: dynamic(() =>
      import("./components/productinformation").then(
        (mod) => mod.ProductInformation
      )
    ),
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
    name: "Customer Reviews",
    inputs: [
      {
        name: "product",
        type: "object",
      },
    ],
  },
  {
    component: dynamic(() =>
      import("./components/recommendationswithclientfetching").then(
        (mod) => mod.RecommendationsWithClientFetching
      )
    ),
    name: "Recommendations",
    inputs: [
      {
        name: "Constructor Pod ID",
        type: "string",
      },
    ],
  },
  {
    component: dynamic(() =>
      import("./components/customerreviewsforsuspense").then(
        (mod) => mod.CustomerReviewsForSuspense
      )
    ),
    name: "Customer Reviews (Suspense)",
    inputs: [
      {
        name: "product",
        type: "object",
      },
    ],
  },
  {
    component: dynamic(() =>
      import("./components/recommendationsforsuspense").then(
        (mod) => mod.RecommendationsForSuspense
      )
    ),
    name: "Recommendations (Suspense)",
    inputs: [
      {
        name: "Constructor Pod ID",
        type: "string",
      },
    ],
  },
];
