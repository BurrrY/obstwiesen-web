'use client';


import {UPLOAD_FILE} from "@/graphlql/queries";
import {useMutation} from "@apollo/client";
import {useEffect, useState} from "react";
import {OwcSubmitButton, OwcFileInput} from "@/components/forms/FormElements";
import {useI18n} from "@/locales/client";



interface NewImageFormProps {
    parentID: string
    onFormSubmit: () => void;
}


export const NewImageForm = ({parentID, onFormSubmit}: NewImageFormProps) => {
    const t = useI18n()

    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState<boolean>(false);

    const [addFile] = useMutation(UPLOAD_FILE)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setFile(event.target.files[0]);
        console.log("File changed", event.target.files);
        console.log("File changed2", file);
    };

    const createFileMessage = async (formData: FormData) => {
        setUploading(true)

        const frmVars = {
            parentID: parentID,
            file: file
        }

        console.log("frmVars:", frmVars)
        await addFile({
            variables: frmVars
        });

        onFormSubmit()
        setUploading(false)
    };


    if (uploading) {
        //console.log("uploading: in progress")
        return (
            <div>
                <hr/>
                <div className="flex flex-col gap-y-2 items-center p-3">
                    <p className="block lg:text-2xl text-lg font-normal text-gray-500">
                        {t('Loading...')}
                    </p>
                </div>
            </div>
        );
    } else {
        //console.log("uploading: is done")

        return (
            <div>
                <hr/>
                <form action={createFileMessage} className="flex flex-col gap-y-2 items-center p-3">
                    <p className="block lg:text-2xl text-lg font-normal text-gray-500">
                        {t('new image')}
                    </p>
                    <OwcFileInput name="file" label={t('image')} onChange={handleFileChange} multiple={false}/>
                    <OwcSubmitButton text={t('add')} disabled={false}/>
                </form>
            </div>
        );
    }


}