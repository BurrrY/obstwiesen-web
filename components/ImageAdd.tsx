'use client';


import {CREATE_EVENT, MULTI_UPLOAD_FILES, UPLOAD_FILE} from "@/graphlql/queries";
import {useMutation} from "@apollo/client";
import {useState} from "react";
import {OwcSubmitButton, OwcTextInput, OwcDateInput, OwcTextarea, OwcFileInput} from "@/components/forms/FormElements";


interface NewImageFormProps {
    parentID: string
    onFormSubmit: () => void;
}


export const NewImageForm = ({parentID,  onFormSubmit}: NewImageFormProps) => {

    const [file, setFile] = useState(null);

    const [addFile] = useMutation(UPLOAD_FILE)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setFile(event.target.files[0]);
        console.log("File changed", event.target.files);
        console.log("File changed2", file);
    };

    const createFileMessage = async (formData: FormData) => {
        const frmVars = {
            parentID: parentID,
            file: file
        }

        console.log("frmVars:", frmVars)
        await addFile({
            variables: frmVars
        });
        onFormSubmit()
    };

    return (
        <div>
            <hr />
            <form action={createFileMessage} className="flex flex-col gap-y-2 items-center p-3">
                <p className="block lg:text-2xl text-lg font-normal text-gray-500">
                    add image
                </p>
                <OwcFileInput name="file" label="Images" onChange={handleFileChange} multiple={false}/>
                <OwcSubmitButton text="Add"/>
            </form>
        </div>
    );
}