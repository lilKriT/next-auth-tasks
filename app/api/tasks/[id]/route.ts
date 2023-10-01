import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import options from "../../auth/[...nextauth]/options";
import usePrisma from "@/lib/hooks/usePrisma";
import { revalidatePath } from "next/cache";

export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  const session = await getServerSession(options);

  if (!+id) {
    return NextResponse.json(
      { message: "Provide a proper ID" },
      { status: 400 }
    );
  }

  if (!session) {
    return NextResponse.json(
      { message: `You need to be logged in.` },
      { status: 400 }
    );
  }

  try {
    const taskToDelete = await usePrisma.task.findFirst({
      where: { id: { equals: +id } },
    });

    if (!taskToDelete) {
      return NextResponse.json({ message: "Task not found" }, { status: 400 });
    }

    if (taskToDelete.userId !== session.user.id) {
      return NextResponse.json(
        { message: "You must be the task's owner to delete it." },
        { status: 400 }
      );
    }

    await usePrisma.task.delete({ where: { id: +id } });

    revalidatePath("/");
    return NextResponse.json({ message: `Task: ${+id} deleted.` });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
