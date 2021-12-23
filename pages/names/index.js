import styles from "../../styles/Names.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { names: data },
  };
};

const Names = ({ names }) => {
  return (
    <div>
      <h1>Name List</h1>
      {names.map((named) => (
        <Link href={`/names/${named.id}`} key={named.id}>
          <a className={styles.single}>
            <h3>{named.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Names;
