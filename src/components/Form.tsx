import { categories } from "../data/Categories"
import { useState, FormEvent, ChangeEvent } from "react"
import type { Activity } from "../types"

const initialState = {
    category: 2,
    name: '',
    calories: 0
}


function Form() {

    const [activity, setActivity] = useState<Activity>(initialState)


    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    function handleChange(e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) {
        console.log(e.target)
    }

    return (
        <form className="w-full text-black dark:text-white" onSubmit={handleSubmit}>
            <div className="mb-5 grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-medium dark:text-white">Category</label>
                <select
                    id="category"
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300  dark:border-gray-600 p-2.5 w-full focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={activity.category} onChange={handleChange}
                >
                    {
                        categories.map(category =>
                            <option key={category.id} value={category.id}>{category.name}</option>
                        )
                    }
                </select>
            </div>
            <div className="mb-5 grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-medium dark:text-white">Activity</label>
                <input id="name"
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300  dark:border-gray-600 p-2.5 w-full focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-5 grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-medium dark:text-white">Calories</label>
                <input
                    id="calories"
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300  dark:border-gray-600 p-2.5 w-full focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                />
            </div>
            <input
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            />
        </form>
    )
}
export default Form
