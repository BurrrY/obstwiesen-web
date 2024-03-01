"use client";


import {Meadow} from "@/__generated__/graphql";
import {useMutation, useQuery} from "@apollo/client";
import {CREATE_MEADOW, GET_MEADOWS} from "@/graphlql/queries";
import {useState} from "react";



export const Meadows = () => {
    const {data, loading, error} = useQuery(GET_MEADOWS)


    if (loading) return <div>Loading...</div>
    if (error) return <div>error</div>

    const meadows: Meadow[] = data.meadows;


    return (<div className="grid grid-cols-5 gap-4 ">
        {meadows.map((meadow, meadowIndex) => (
            <div className="shadow  border-gray-300 rounded-xl border bg-owc-warm-orange p-8 m-5" key={meadow.id}>
                <h1 className="block font-sans text-3xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                    {meadow.name}
                </h1>
                <p className="block py-4 text-2xl font-normal text-gray-500">
                    <p>{meadow.trees.length} trees</p>
                </p>
            </div>
        ))}
    </div>);
};