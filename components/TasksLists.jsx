import React from 'react'
import RemoveBtn from './RemoveBtn'
import { HiPencilAlt } from "react-icons/hi"
import Link from 'next/link'


const getTasks = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/tasks", {
            cache: 'no-store'
        });
        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }
        return res.json();
    }
    catch (error) {
        console.log("Error loading Tasks: ", error)
    }
};

export default async function TasksLists() {
    const { tasks } = await getTasks();

    return (
        <>
            {tasks.map((task) => (
                <div key={task._id} className="p-5">
                    <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-center">
                        <div>
                            <h2 className="font-bold text-2xl">{task.title}</h2>
                            <div>{task.description}</div>
                        </div>
                        <div className="flex gap-2">
                            <RemoveBtn id={task._id} />
                            <Link href={`/editTask/${task._id}`}>
                                <HiPencilAlt size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

