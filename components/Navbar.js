import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/orange.png" alt='logo' width={80} height={80} />
      <h1>Orange List</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/names">
        <a>Names</a>
      </Link>
    </nav>
  );
};

export default Navbar;
