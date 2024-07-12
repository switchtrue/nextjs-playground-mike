// Example file structure, app/[...slug]/page.tsx
// You could alternatively use src/app/[...slug]/page.tsx/
import {
  Content,
  fetchOneEntry,
  getBuilderSearchParams,
  isPreviewing,
} from "@builder.io/sdk-react/edge";
import { customComponents } from "../../builder-registry";

export const dynamic = "force-dynamic";

interface PageProps {
  params: {
    slug: string[];
  };
  searchParams: Record<string, string>;
}

// TO DO: Put here Public API Key here
const PUBLIC_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY || "";

export default async function Page(props: PageProps) {
  const urlPath = "/builder";

  const content = await fetchOneEntry({
    options: getBuilderSearchParams(props.searchParams),
    apiKey: PUBLIC_API_KEY,
    model: "page",
    userAttributes: { urlPath },
  });

  const response = await fetch("https://dummyapi.online/api/products/1");
  const product = await response.json();

  const canShowContent = content || isPreviewing(props.searchParams);

  if (!canShowContent) {
    return (
      <>
        <h1>404</h1>
        <p>Make sure you have your content published at Builder.io.</p>
      </>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Content
        content={content}
        apiKey={PUBLIC_API_KEY}
        model="page"
        customComponents={customComponents}
        data={product}
      />
    </main>
  );
}
