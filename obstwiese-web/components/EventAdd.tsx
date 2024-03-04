'use client';


import {CREATE_EVENT, UPLOAD_FILE} from "@/graphlql/queries";
import {useMutation} from "@apollo/client";
import {useState} from "react";
import { useApolloClient } from "@apollo/client/react/hooks/useApolloClient.js";


interface NewEventFormProps {
    parent_id: string
}

export const NewEventForm = ({parent_id}: NewEventFormProps) => {
    let  newEventName  = "";
    const [file, setFile] = useState(null);

    const [addEvents] = useMutation(CREATE_EVENT, {
        variables: { parentID: newEventName, title: newEventName, description: newEventName, timestamp: newEventName  },
    })
    const apolloClient = useApolloClient();
    //const [doUpload, { loading, error }] = useMutation(UPLOAD_FILE, {
    //    variables: { parentID: newEventName, file: newEventName  },
    //})

    const [doUpload, { loading, error }] = useMutation(UPLOAD_FILE)

    const createMessage = (formData: FormData) => {
        let title = formData.get('title') as string;
        let timestamp = formData.get('timestamp') as string;
        let desc = formData.get('desc') as string;
        let treeID = formData.get('treeID') as string;
        addEvents({ variables: { parentID: treeID, title: title, description: desc, timestamp: timestamp  }});
    };


    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        console.log("File changed", event.target.files[0]);
        console.log("File changed2", file);
    };

    const createFileMsgSubmit = async () => {
        try {
            console.log("File upload:", file);
            console.log("File parent_id:", parent_id);
            await doUpload({
                variables: {
                    file: file,
                    parentID: parent_id
                },
            });
            console.log('File uploaded successfully');
        } catch (e) {
            console.error('Error uploading file', e);
        }
    };


    const createFileMessage = (formData: FormData) => {
        let file_input = formData.get('file');
        console.log(formData)
        console.log(file_input    )
        let treeID = formData.get('treeID') as string;
        doUpload({ variables: { file: file, parentID: treeID  }});
    };

    return (
        <div className="border border-gray-300 justify-center">
            <p className="block p-2 text-2xl font-normal text-gray-500">
                New Event
            </p>

            <form action={createMessage} className="flex flex-col gap-y-2 items-center p-3">
                <div className=" w-full">
                    <input
                        className="shadow appearance-none border rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" id="title" name="title" placeholder="Title" required/>
                </div>
                <div className=" w-full">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="datetime-local" id="timestamp" name="timestamp" placeholder="Timestamp" required/>
                </div>
                <div className="w-full">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="file" id="file" name="file" placeholder="file" required/>
                </div>
                <div className=" w-full">
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="desc" name="desc" placeholder="Description" required/>
                </div>

                <input type={`hidden`} value={parent_id} name="treeID"/>
                <div className="flex justify-between w-full">
                    <button type="submit"
                            className="bg-owc-vibrant-leaf-green hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Create
                    </button>
                </div>
            </form>

            <p className="flex flex-col gap-y-2 items-center p-3">
                <div className="w-full">
                    <input  onChange={handleFileChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="file" id="file" name="file" placeholder="file" required/>
                </div>

                <input type={`hidden`} value={parent_id} name="treeID"/>
                <div className="flex justify-between w-full">
                    <button  onClick={createFileMsgSubmit}
                            className="bg-owc-vibrant-leaf-green hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Upload
                    </button>
                </div>
            </p>
        </div>
    );
}