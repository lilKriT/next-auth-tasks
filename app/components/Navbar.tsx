import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href={"/"}>LOGO</Link>
        <menu>
          <li>
            <Link href={"/api/auth/signin"}>Log In</Link>
          </li>
          <li>
            <Link href={"/api/auth/signout"}>Log Out</Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Navbar;
