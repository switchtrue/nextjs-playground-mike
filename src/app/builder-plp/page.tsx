// Example file structure, app/[...slug]/page.tsx
// You could alternatively use src/app/[...slug]/page.tsx/
import BuilderContent from "@/components/builder";
import {
  fetchOneEntry,
  getBuilderSearchParams,
  isPreviewing,
} from "@builder.io/sdk-react/edge";

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
  const urlPath = "/builder-plp";

  //   console.log(props.searchParams);

  const content = await fetchOneEntry({
    options: getBuilderSearchParams(props.searchParams),
    apiKey: PUBLIC_API_KEY,
    model: "page",
    userAttributes: { urlPath },
  });

  let url =
    "https://ac.cnstrc.com/browse/Type/Collars?key=key_pAY7o2WrUzyvUaGj";
  const filterQueryParam = Object.keys(props.searchParams).find((k) =>
    k.startsWith("filters")
  );
  if (filterQueryParam) {
    url += `&${Object.keys(props.searchParams)[0]}=${
      Object.values(props.searchParams)[0]
    }`;
  }

  const response = await fetch(url);
  const productsRaw = await response.json();

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
      <BuilderContent content={content} data={productsRaw} />
    </main>
  );
}
