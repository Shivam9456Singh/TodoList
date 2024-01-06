"use client";

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function EditTaskForm({ id, title, description }) {

    const [newTitle, setNewTitle] = useState(title);

    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    newTitle, newDescription
                }),
            });
            if (!res.ok) {
                throw new Error("Failed to update Task");
            }
            router.refresh();
            router.push("/");
        }
        catch (error) {
            console.log(error);
        }

    };

    return (

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                type="text"
                placeholder="Task Title"
            />

            <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                className="border border-gray-300 rounded-md px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                type="text"
                placeholder="Task Details"
            />
            <button className="bg-green-500 hover:bg-green-600 focus:bg-green-600 font-bold text-white py-2 px-4 rounded-md focus:outline-none transition duration-300 ease-in-out self-center">Update Task</button>
        </form>



    )

}