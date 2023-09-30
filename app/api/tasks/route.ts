import usePrisma from "@/lib/hooks/usePrisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import options from "../auth/[...nextauth]/options";

export async function GET(request: NextRequest) {
  const tasks = usePrisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(options);

  if (!session) {
    return NextResponse.json({ message: "Not logged in" }, { status: 400 });
  }

  //   console.log("Session: ", session);

  const json = await request.json();

  if (!json.title) {
    return NextResponse.json({ message: "Missing data" }, { status: 400 });
  }

  try {
    const task = await usePrisma.task.create({ data: { ...json, userId: 1 } });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }

  return NextResponse.json({ message: "Added a task" });
}
