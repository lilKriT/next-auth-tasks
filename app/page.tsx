import usePrisma from "@/lib/hooks/usePrisma";
import TaskList from "./components/TaskList";

export default async function Home() {
  const tasks = await usePrisma.task.findMany();

  return (
    <main className="">
      <h1>Tasks.</h1>
      <TaskList tasks={tasks} />
    </main>
  );
}
