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

  // Get all the query strings that aren't related to Builder
  const filterQueryParams = Object.keys(props.searchParams).filter(
    (k) => !k.startsWith("builder") && !k.startsWith("__builder_editing__")
  );

  const params = new URLSearchParams();
  const filters: any = {};
  for (let filter of filterQueryParams) {
    if (typeof props.searchParams[filter] === "string") {
      params.append(`filters[${filter}]`, props.searchParams[filter]);
      filters[filter] = [props.searchParams[filter]];
    } else {
      for (let filterValue of props.searchParams[filter]) {
        params.append(`filters[${filter}]`, filterValue);
      }
      filters[filter] = props.searchParams[filter];
    }
  }

  params.append("key", "key_pAY7o2WrUzyvUaGj");
  let url = `https://ac.cnstrc.com/browse/Type/Collars?${params.toString()}`;

  const response = await fetch(url);
  const productsRaw = await response.json();
  productsRaw.filters = filters;

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
