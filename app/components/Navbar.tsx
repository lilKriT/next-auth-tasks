import { getServerSession } from "next-auth";
import Link from "next/link";
import options from "../api/auth/[...nextauth]/options";

const Navbar = async () => {
  const session = await getServerSession(options);

  return (
    <header className="sticky top-0 flex justify-center border-b border-secondary/30">
      <nav className="container mt-2 flex justify-between items-center">
        <Link href={"/"} className="logo">
          LOGO
        </Link>
        <menu className="flex gap-2">
          {session ? (
            <>
              <li>
                <Link href={"/extra"} className="navLink">
                  Extra
                </Link>
              </li>
              <li>
                <Link href={"/api/auth/signout"} className="navLink">
                  Log Out
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link href={"/api/auth/signin"} className="navLink">
                Log In
              </Link>
            </li>
          )}
        </menu>
      </nav>
    </header>
  );
};

export default Navbar;
