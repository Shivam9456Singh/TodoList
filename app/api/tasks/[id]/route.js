import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Task from "@/models/task";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { newTitle: title, newDescription: description } =
      await request.json();
    await connectMongoDB();
    await Task.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Task updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Error updating task",
      status: 500,
      error: error.message,
    });
  }
}

export async function GET(request, { params }) {
  const { id } = params;
  try {
    await connectMongoDB();

    const task = await Task.findById({ _id: id });
    if (!task) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }
    return NextResponse.json({ task }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Error getting task",
      status: 500,
      error: error.message,
    });
  }
}
