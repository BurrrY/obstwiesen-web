'use client';


import {CREATE_MEADOW} from "@/graphlql/queries";
import {useMutation} from "@apollo/client";


export const NewMeadowForm = () => {
    let  newMeadowName  = "";
    const [addMeadows] = useMutation(CREATE_MEADOW, {
        variables: { newMeadowName },
    })

    const createMessage = (formData: FormData) => {
        let newMeadowName2 = formData.get('meadowName') as string;
        addMeadows({ variables: { meadowName: newMeadowName2.trim() }});
    };

    return (
        <div  className="border border-gray-300">
            <form action={createMessage} className="flex flex-row gap-x-2 items-center p-3">
                <p className="block p-2 text-2xl font-normal text-gray-500">
                    Create new meadow:
                </p>
                <div className="">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" id="meadowName" name="meadowName"/>

                </div>
                <div className="flex justify-between">
                    <button type="submit"
                            className="bg-owc-vibrant-leaf-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}