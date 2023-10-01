import { getServerSession } from "next-auth";
import options from "../api/auth/[...nextauth]/options";

const Greeting = async () => {
  const session = await getServerSession(options);
  console.log("Greeting", session?.user.name);

  return (
    <div>
      {session
        ? `Hello, ${session.user.name.split(" ")[0]}.`
        : `Hello, stranger.`}
    </div>
  );
};

export default Greeting;
