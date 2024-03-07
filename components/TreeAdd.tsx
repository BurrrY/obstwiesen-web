'use client';


import {CREATE_TREE} from "@/graphlql/queries";
import {useMutation} from "@apollo/client";


interface NewTreeFormProps {
    meadowid: string
    onFormSubmit: () => void;
}

export const NewTreeForm = ({meadowid,  onFormSubmit }: NewTreeFormProps) => {
    let  newTreeName  = "";
    let  parent_meadow  = "";
    const [addTrees] = useMutation(CREATE_TREE, {
        variables: { meadow: parent_meadow, name: newTreeName },
    })

    const createMessage = async (formData: FormData) => {
        let newTreeName2 = formData.get('treeName') as string;
        let parent_meadow2 = formData.get('meadowID') as string;
        await addTrees({variables: {meadow: parent_meadow2.trim(), name: newTreeName2.trim()}});
        onFormSubmit();
    };

    return (
        <div  className="bg-owc-soft-coral-light p-4">
            <form action={createMessage} className="flex lg:flex-row flex-col lg:gap-x-2 gap-y-2 items-center lg:p-3">
                <p className="block lg:text-2xl text-lg font-normal text-gray-500">
                    Create new tree
                </p>
                <div className="w-full">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" id="treeName" name="treeName" required/>
                </div>

                <input type={`hidden`} value={meadowid} name="meadowID"/>
                <div className="w-full">
                    <button type="submit"
                            className="bg-owc-vibrant-leaf-green w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}