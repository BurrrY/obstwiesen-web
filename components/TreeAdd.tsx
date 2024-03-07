'use client';


import {CREATE_TREE} from "@/graphlql/queries";
import {useMutation} from "@apollo/client";
import {OwcSubmitButton, OwcTextInput} from "@/components/forms/FormElements";


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
            <form action={createMessage} className="flex flex-col lg:gap-x-2 gap-y-2 items-center lg:p-3">
                <p className="block lg:text-2xl text-lg font-normal text-gray-500">
                    new tree
                </p>

                <OwcTextInput  name="treeName" label="Name" />
                <OwcSubmitButton text="Create" />
                <input type={`hidden`} value={meadowid} name="meadowID"/>
            </form>
        </div>
    );
}