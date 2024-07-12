import { ProductDetailPage } from "@/components/productdetailpage";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-24">
      <h1>Mike&apos;s Playground</h1>
      <h2>Demos</h2>
      <ul>
        <li className="border-b-2 p-6">
          <Link href="/server-only" className="underline">
            /server-only
          </Link>
          <p>
            A single react component for the whole page - it is not marked up
            with &quot;use client&quot;; so it is a server component. This does
            not use useState or useEffect and does not do any data fetching.
          </p>
        </li>
        <li className="border-b-2 p-6">
          <Link
            href="/client-recommendations-and-reviews"
            className="underline"
          >
            /client-recommendations-and-reviews
          </Link>
          <p>
            The core page is a server component, but the list of recommended
            products and the user views are client components. This does not use
            useState or useEffect and does not do any data fetching.
          </p>
        </li>
        <li className="border-b-2 p-6">
          <Link
            href="/client-recommendations-and-reviews-with-data-fetching"
            className="underline"
          >
            /client-recommendations-and-reviews-with-data-fetching
          </Link>
          <p>
            The core page is a server component, but the list of recommended
            products and the user views are client components. The user reviews
            fetch the names of the users from a remote end-point with an initial
            loading state
          </p>
        </li>
      </ul>
    </main>
  );
}
