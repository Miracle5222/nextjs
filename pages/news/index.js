import { Fragment } from "react";
import Link from "next/link";

function NewPage() {
  return (
    <Fragment>
      <h1>List of Items</h1>
      <ul>
        <li>
          <Link href="/news/first-link-page">
            <a>One Click </a>
          </Link>
        </li>
        <li>
          <Link href="/news/second-link-page">
            <a>Two Click</a>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewPage;
