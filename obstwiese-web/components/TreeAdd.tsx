'use client';


import {CREATE_TREE} from "@/graphlql/queries";
import {useMutation} from "@apollo/client";


interface NewTreeFormProps {
    meadowid: string
}

export const NewTreeForm = ({meadowid}: NewTreeFormProps) => {
    let  newTreeName  = "";
    let  parent_meadow  = "";
    const [addTrees] = useMutation(CREATE_TREE, {
        variables: { meadow: parent_meadow, name: newTreeName },
    })

    const createMessage = (formData: FormData) => {
        let newTreeName2 = formData.get('treeName') as string;
        let parent_meadow2 = formData.get('meadowID') as string;
        addTrees({ variables: { meadow: parent_meadow2.trim(), name: newTreeName2.trim() }});
    };

    return (
        <div  className="border border-gray-300">
            <form action={createMessage} className="flex flex-row gap-x-2 items-center p-3">
                <p className="block p-2 text-2xl font-normal text-gray-500">
                    Create new tree:
                </p>
                <div className="">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" id="treeName" name="treeName" required/>
                </div>

                <input type={`hidden`} value={meadowid} name="meadowID"/>
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