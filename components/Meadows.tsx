"use client";


import {Meadow} from "@/__generated__/graphql";
import {useMutation, useQuery} from "@apollo/client";
import {CREATE_MEADOW, GET_MEADOWS} from "@/graphlql/queries";
import {useEffect, useState} from "react";
import {NewEventForm} from "@/components/EventAdd";



interface MeadowDetailProps {
    id: string
}

interface ChildProps {
    triggerRefetch: boolean;
}
export const Meadows = ({triggerRefetch}: ChildProps) => {
    const {data, loading, error, refetch} = useQuery(GET_MEADOWS)

    useEffect(() => {
        refetch();
    }, [triggerRefetch, refetch]);

    if (loading) return <div>Loading...</div>
    if (error) return <div>error</div>

    const meadows: Meadow[] = data.meadows;


    return (<div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-2">
        {meadows.map((meadow, meadowIndex) => (
            <div className=" border-gray-300 rounded-xl border bg-owc-warm-orange p-8 m-1 w-full" key={meadow.id}>
                <a href={`/meadows/${meadow.id}`}
                    className="block font-sans text-2xl md:text-3xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                    {meadow.name}
                </a>
                <p className="block py-4 text-1xl font-normal text-gray-500">
                    <p>{meadow.trees.length} trees</p>
                </p>
            </div>
        ))}
    </div>);
};