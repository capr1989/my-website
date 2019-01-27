import Link from "next/link";

export default () => (
  <div>
    <Link href="/" as={`${process.env.ASSET_PREFIX}/`}>
      <a>Go to page</a>
    </Link>
    page1
  </div>
);
