export default function EditTaskForm() {
    return (
        <div className="align-center p-5 my-0 w-full max-w-screen-lg mx-auto">
            <form className="flex flex-col gap-3">
                <input
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" type="text" placeholder="Task Title"
                />
                <textarea
                    className="border border-gray-300 rounded-md px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" placeholder="Task Details"
                ></textarea>
                <button className="bg-green-500 hover:bg-green-600 focus:bg-green-600 font-bold text-white py-2 px-4 rounded-md focus:outline-none transition duration-300 ease-in-out self-center">Update Task</button>
            </form>
        </div>


    )

}