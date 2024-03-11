'use client';


import {CREATE_EVENT, MULTI_UPLOAD_FILES, UPLOAD_FILE} from "@/graphlql/queries";
import {useMutation} from "@apollo/client";
import {useState} from "react";
import {OwcSubmitButton, OwcTextInput, OwcDateInput, OwcTextarea, OwcFileInput} from "@/components/forms/FormElements";


interface NewEventFormProps {
    parent_id: string
    onFormSubmit: () => void;
}


export const NewEventForm = ({parent_id,  onFormSubmit}: NewEventFormProps) => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState<boolean>(false);

    const [addEvents] = useMutation(CREATE_EVENT)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setFile(event.target.files);
        console.log("File changed", event.target.files);
        console.log("File changed2", file);
    };

    let dateTime = new Date().toISOString().substring(0, 16)


    const createFileMessage = async (formData: FormData) => {
        setUploading(true)
        console.log(formData)
        let title = formData.get('title') as string;
        let timestamp = formData.get('timestamp') as string;
        let desc = formData.get('desc') as string;
        await addEvents({
            variables: {
                parentID: parent_id,
                title: title,
                description: desc,
                timestamp: timestamp,
                files: file
            }
        });
        onFormSubmit()
        setUploading(false)
    };

    if (uploading) {

        return (
            <div>
                <hr/>
                <div className="flex flex-col gap-y-2 items-center p-3">
                    <p className="block lg:text-2xl text-lg font-normal text-gray-500">
                        loading...
                    </p>
                </div>
            </div>
        );

    } else {
        return (
            <div className="justify-center ">

                <form action={createFileMessage} className="flex flex-col gap-y-2 items-center p-3">
                    <p className="block lg:text-2xl text-lg font-normal text-gray-500">
                        new event
                    </p>
                    <OwcTextInput name="title" label="Title" required={true}/>
                    <OwcDateInput name="timestamp" label="Timestamp" defaultValue={dateTime} required={true}/>
                    <OwcTextarea name="desc" label="Description"/>
                    <OwcFileInput name="file" label="Images" onChange={handleFileChange} multiple={true}/>
                    <OwcSubmitButton text="Create" disabled={false}/>
                </form>
            </div>
        );
    }
}