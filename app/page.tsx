import usePrisma from "@/lib/hooks/usePrisma";
import TaskList from "./components/TaskList";
import { getServerSession } from "next-auth";
import options from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const tasks = await usePrisma.task.findMany();

  const session = await getServerSession(options);
  console.log("Session: ", session);

  return (
    <main className="min-h-screen flex justify-center">
      <div className="container">
        <h1>Tasks.</h1>
        <TaskList tasks={tasks} />
      </div>
    </main>
  );
}
