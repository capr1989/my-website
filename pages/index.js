import Link from "next/link";

export default () => (
  <div>
    <Link href="/page1" as={`${process.env.ASSET_PREFIX}/page1`}>
      <a>Go to page</a>
    </Link>
    Root page
  </div>
);
