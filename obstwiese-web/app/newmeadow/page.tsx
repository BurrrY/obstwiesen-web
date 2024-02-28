'use client';


export const dynamic = "force-dynamic";

import {FormEvent} from "react";


export default async function Page() {

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: formData,
        })

        // Handle response if necessary
        const data = await response.json()
        // ...
    }

        return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 border border-red-600 ">

          <div className=" border border-gray-800 border-4 rounded-xl p-4 px-10">
              <h1 className="block font-sans text-2xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                  New Meadow!
              </h1>
              <form onSubmit={onSubmit}
                    className="max-w-sm mx-auto ">

                  <div className="mb-5">
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name:</label>
                      <input type="text" id="first" name="name"
                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                  </div>
                  <div className="mb-5">
                      <button type="submit"
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Create
                      </button>
                  </div>
              </form>
          </div>

      </main>
  );

};