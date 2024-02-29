'use client';

import {createMeadow} from "@/app/test/actions";

export function AddForm() {
    return (
        <div className="">
        <h1 className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal text-inherit">
            New Meadow
        </h1>
        <form onSubmit={createMeadow} method="post"
              className="p-4 max-w-sm mx-auto border border-gray-300 rounded-xl ">

            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name:</label>
                <input type="text" id="first" name="name"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                <SubmitButton />
            </div>
        </form>
    </div>
    );
}


function SubmitButton() {
    return (
        <div className="mb-5">
            <button type="submit" className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Create
            </button>
        </div>
    )
}