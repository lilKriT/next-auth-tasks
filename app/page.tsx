import usePrisma from "@/lib/hooks/usePrisma";

export default async function Home() {
  const tasks = await usePrisma.task.findMany();

  return (
    <main className="">
      <h1>Tasks.</h1>
      <p>You have {tasks.length} tasks</p>
      {tasks.map((task) => (
        <p>Abc {task.id}</p>
      ))}
    </main>
  );
}
