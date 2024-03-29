'use client';


import {CREATE_MEADOW} from "@/graphlql/queries";
import {useMutation} from "@apollo/client";
import {OwcSubmitButton, OwcTextInput} from "@/components/forms/FormElements";
import {useI18n} from "@/locales/client";


// @ts-ignore
interface NewMeadowFormProps {
    onFormSubmit: () => void;
}

export const NewMeadowForm = ({onFormSubmit}: NewMeadowFormProps) => {
    const t = useI18n()
    let  newMeadowName  = "";
    const [addMeadows] = useMutation(CREATE_MEADOW, {
        variables: { newMeadowName },
    })

    const createMessage = async (formData: FormData) => {
        let newMeadowName2 = formData.get('meadowName') as string;
        await addMeadows({ variables: { meadowName: newMeadowName2.trim() }});
        onFormSubmit()
    };

    return (
        <div className="bg-owc-soft-coral-light p-4 rounded rounded-3xl">
            <form action={createMessage} className="flex flex-col lg:gap-x-2 gap-y-2 items-center">
                <p className="block lg:text-2xl text-lg font-normal text-gray-500">
                    { t('new meadow') }
                </p>
                <OwcTextInput  name="meadowName" label="Name" />
                <OwcSubmitButton text={t('Create') } disabled={false} />
            </form>
        </div>
    );
}