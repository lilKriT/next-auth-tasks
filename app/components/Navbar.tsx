import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-center border-b border-secondary/30">
      <nav className="container mt-2 flex justify-between items-center">
        <Link href={"/"} className="logo">
          LOGO
        </Link>
        <menu className="flex gap-2">
          <li>
            <Link href={"/api/auth/signin"} className="navLink">
              Log In
            </Link>
          </li>
          <li>
            <Link href={"/api/auth/signout"} className="navLink">
              Log Out
            </Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Navbar;
