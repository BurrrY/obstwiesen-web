'use server';

import {Meadow} from "@/__generated__/graphql";
import {ApolloClient, InMemoryCache, gql, useMutation} from "@apollo/client";


const CREATE_USER_MUTATION = gql`mutation ($meadowName: String!) {
                    createMeadow(input: { name: $meadowName }) {
                        id
                        name
                    }
                }
          `;
export async function createMeadow(formData: FormData) {

    console.log('Creating meadow');
    console.log(formData);
    console.log("Name:", formData.get("name"));
    await submitMeadow(formData.get("name") as string)
}


function submitMeadow(meadowName: string):Promise<Meadow>   {


    const [createUser, { data, loading, error }] = useMutation(CREATE_USER_MUTATION);


    const handleCreateUser = async () => {
        try {
            const { data } = await createUser({
                variables: {
                    name: meadowName,
                },
            });
            console.log('meadow created:', data.createUser);
        } catch (error) {
            console.error('Error creating user:', error);
        }

        return data
    };


    return handleCreateUser();
}