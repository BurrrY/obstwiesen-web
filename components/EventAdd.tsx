'use client';


import {CREATE_EVENT, MULTI_UPLOAD_FILES, UPLOAD_FILE} from "@/graphlql/queries";
import {useMutation} from "@apollo/client";
import {useState} from "react";


interface NewEventFormProps {
    parent_id: string
}

export const NewEventForm = ({parent_id}: NewEventFormProps) => {
    const [file, setFile] = useState(null);

    const [addEvents] = useMutation(CREATE_EVENT)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setFile(event.target.files);
        console.log("File changed", event.target.files);
        console.log("File changed2", file);
    };

    let dateTime = new Date().toISOString().substring(0, 16)


    const createFileMessage = (formData: FormData) => {
        let title = formData.get('title') as string;
        let timestamp = formData.get('timestamp') as string;
        let desc = formData.get('desc') as string;
        addEvents({ variables: { parentID: parent_id, title: title, description: desc, timestamp: timestamp, files: file }});
    };

    return (
        <div className="border border-gray-300 justify-center">
            <p className="block p-2 text-2xl font-normal text-gray-500">
                New Event
            </p>

            <form action={createFileMessage} className="flex flex-col gap-y-2 items-center p-3">
                <div className=" w-full">
                    <input
                        className="shadow appearance-none border rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" id="title" name="title" placeholder="Title" required/>
                </div>
                <div className=" w-full">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="datetime-local" id="timestamp" value={dateTime} name="timestamp" placeholder="Timestamp" required/>
                </div>
                <div className=" w-full">
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="desc" name="desc" placeholder="Description" required/>
                </div>


                <div className="w-full">
                    <input onChange={handleFileChange} multiple={true}
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           type="file" id="file" name="file" placeholder="file" required/>
                </div>

                <div className="flex justify-between w-full">
                    <button type="submit"
                            className="bg-owc-vibrant-leaf-green hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}