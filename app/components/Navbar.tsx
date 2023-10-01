import { getServerSession } from "next-auth";
import Link from "next/link";
import options from "../api/auth/[...nextauth]/options";
import Greeting from "./Greeting";

const Navbar = async () => {
  const session = await getServerSession(options);

  return (
    <header className="sticky top-0 flex justify-center border-b border-secondary/30">
      <nav className="container mt-2 grid grid-cols-3">
        <Link href={"/"} className="logo">
          LOGO
        </Link>
        <div className="flex justify-center">
          <Greeting />
        </div>
        <menu className="flex gap-2 justify-end">
          {session ? (
            <>
              {session.user.role === "admin" && (
                <li>
                  <Link href={"/extra"} className="navLink">
                    Extra
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href={"/api/auth/signout?callbackUrl=/"}
                  className="navLink"
                >
                  Log Out
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link href={"/api/auth/signin?callbackUrl=/"} className="navLink">
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
