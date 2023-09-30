import { getServerSession } from "next-auth";
import options from "./api/auth/[...nextauth]/options";
import usePrisma from "@/lib/hooks/usePrisma";
import TaskList from "./components/TaskList";
import UserCard from "./components/UserCard";

export default async function Home() {
  const session = await getServerSession(options);
  // console.log("Session: ", session);

  const tasks = await usePrisma.task.findMany();

  // I could redirect unlogged user like this:
  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/");
  // }
  // Of course I would have to import redirect from next/navigation

  return (
    <main className="min-h-screen flex justify-center">
      <div className="container py-16">
        {session ? (
          <>
            <TaskList tasks={tasks} />
          </>
        ) : (
          <>
            <h1 className="text-4xl text-center">Hello, guest.</h1>
            <p className="mt-8 mx-auto max-w-lg">
              This app lets you organize your tasks. Log in to be able to use
              it.
            </p>
          </>
        )}
      </div>
    </main>
  );
}
