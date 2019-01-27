import Link from "next/link";

export default () => {
  return (
    <div>
      <Link href="/" as={`${process.env.ASSET_PREFIX}/`}>
        <a>Go to Home</a>
      </Link>
      <Link href="/page1" as={`${process.env.ASSET_PREFIX}/page1`}>
        <a>Go to page</a>
      </Link>
      ;
    </div>
  );
};
