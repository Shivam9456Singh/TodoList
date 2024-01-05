"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Enter Title and Description");
        }
        try {
            const res = await fetch('http://localhost:3000/api/tasks', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title, description }),
            });

            if (res.ok) {
                router.push('/');
            }
            else {
                throw new Error("Failed to add Task.");
            }
        }
        catch (error) {
            console.log(error);
        }

    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5 max-w-md mx-auto bg-white shadow-md rounded-md">
            <label className="text-lg font-semibold mb-2">Task Title</label>
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="border border-slate-500 p-2 rounded-md"
                type="text"
                placeholder="Enter Task Title"
            />

            <label className="text-lg font-semibold mb-2">Task Details</label>

            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                type="text"
                className="border border-slate-500 p-2 rounded-md"
                placeholder="Enter Task Details"
                rows="4" />

            <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-800 text-2xl">
                Add Task
            </button>
        </form>
    );
};

export default AddTask;
