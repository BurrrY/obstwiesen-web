'use server';

import {Meadow} from "@/__generated__/graphql";
import {useMutation} from "@apollo/client";
import {CREATE_MEADOW} from "@/graphlql/queries";


export async function createMeadow(formData: FormData) {
    console.log('Creating meadow');
    console.log(formData);
    console.log("Name:", formData.get("name"));
    await submitMeadow(formData.get("name") as string)
}


function submitMeadow(meadowName: string):Promise<Meadow>   {

    const [createMeadow, { data, loading, error }] = useMutation(CREATE_MEADOW);


    const handleCreateUser = async () => {
        try {
            const { data } = await createMeadow({
                variables: {
                    name: meadowName,
                },
            });
            console.log('meadow created:', data.meadow);
        } catch (error) {
            console.error('Error creating user:', error);
        }

        return data
    };


    return handleCreateUser();
}