"use client";


import {Meadow} from "@/__generated__/graphql";
import {useMutation, useQuery} from "@apollo/client";
import {CREATE_MEADOW, GET_MEADOWS} from "@/graphlql/queries";
import {useState} from "react";

export const createMessage = (formData: FormData) => {
    let  meadowName  = "";
    const [addMeadows] = useMutation(CREATE_MEADOW, {
        variables: { meadowName: meadowName },
    })

    const text = formData.get('text') as string;

    console.log(text)

    addMeadows({ variables: { meadowName: meadowName }});
};
export const Meadows = () => {
    const {data, loading, error} = useQuery(GET_MEADOWS)


    if (loading) return <div>Loading...</div>
    if (error) return <div>error</div>

    const meadows: Meadow[] = data.meadows;


    return (<div className="grid grid-cols-4 gap-4 border border-blue-600 ">
        {meadows.map((meadow, meadowIndex) => (
            <div className="border-gray-300 rounded-xl border bg-gray-200 p-8 m-5" key={meadow.id}>
                <h1 className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                    {meadow.name}
                </h1>
                <p className="block mb-6 text-lg font-normal text-gray-500">
                    <ul className="list-disc list-outside">
                        {meadow.trees.map((tree, treeIndex) => (
                            <li key={tree.id}>{tree.name}</li>
                        ))}
                    </ul>
                </p>
            </div>
        ))}
    </div>);
};