//our-domain.com/news
import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <>
      <Fragment>
        <h1>The News Page</h1>
        <ul>
          <li>
            <Link href="/news/next-is-a-great-framwork">
              NextJS Is A Great Framework
            </Link>
          </li>
          <li>Something Else</li>
        </ul>
      </Fragment>
    </>
  );
}

export default NewsPage;
