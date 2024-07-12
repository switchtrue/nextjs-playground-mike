"use client";

import { Content } from "@builder.io/sdk-react/edge";
import { customComponents } from "../builder-registry";

const PUBLIC_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY || "";

export default function BuilderContent(props: any) {
  return (
    <Content
      content={props.content}
      apiKey={PUBLIC_API_KEY}
      model="page"
      customComponents={customComponents}
      data={props.data}
    />
  );
}
