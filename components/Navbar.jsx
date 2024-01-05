import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link href="/" className="text-white font-bold">Your Tasks</Link>
            <Link href={"/addTask"} className="bg-white p-2">Add Task</Link>
        </nav>
    )
}

export default Navbar
