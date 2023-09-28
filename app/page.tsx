import { getServerSession } from "next-auth";
import options from "./api/auth/[...nextauth]/options";
import usePrisma from "@/lib/hooks/usePrisma";
import TaskList from "./components/TaskList";

export default async function Home() {
  const session = await getServerSession(options);
  console.log("Session: ", session);

  const tasks = await usePrisma.task.findMany();

  // I could redirect unlogged user like this:
  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/");
  // }
  // Of course I would have to import redirect from next/navigation

  return (
    <main className="min-h-screen flex justify-center">
      <div className="container">
        {session ? <p>You're logged in.</p> : <p>Not logged in.</p>}
        <h1>Tasks.</h1>
        <TaskList tasks={tasks} />
      </div>
    </main>
  );
}
