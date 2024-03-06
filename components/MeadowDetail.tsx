"use client";


import {Meadow} from "@/__generated__/graphql";
import {useQuery} from "@apollo/client";
import { GET_MEADOW} from "@/graphlql/queries";
import {owcHeader} from "@/components/typo_header";
import {NewMeadowForm} from "@/components/MeadowAdd";
import {NewTreeForm} from "@/components/TreeAdd";
import {NewEventForm} from "@/components/EventAdd";



interface MeadowDetailProps {
    id: string
}

export const MeadowDetail = ({id}: MeadowDetailProps) => {
    let meadowID = id

    const {data, loading, error} = useQuery(GET_MEADOW, {
        variables: { id: meadowID },
    })


    if (loading) return <div>Loading...</div>
    if (error) return <div>error</div>
    console.log("error: ", error)

    const meadow: Meadow = data.meadow;


    return (
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row flex-wrap py-4">
                <aside className="lg:w-1/3 px-2 bg-owc-soft-coral">
                    <div className="sticky  top-0 p-4 w-full">
                        <h1
                            className="block font-sans text-4xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                            {meadow.name}
                        </h1>

                        <NewTreeForm meadowid={meadow.id}/>
                    </div>
                </aside>
                <main role="main" className="lg:w-2/3 pt-3 px-4 bg-owc-deep-green">
                    <h2
                        className="block font-sans text-3xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                        Trees
                    </h2>

                    <div className="grid lg:grid-cols-5 grid-cols-2">
                        {meadow.trees.map((tree, meadowIndex) => (
                            <div className="bg-owc-warm-orange flex p-8 m-5"
                                 key={tree.id}>
                                <a href={`/meadows/${meadow.id}/trees/${tree.id}`}
                                   className="font-sans text-3xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                                    {tree.name}
                                </a>
                            </div>
                        ))}
                    </div>

                </main>
            </div>
        </div>

    );

    return (<div className="flex">
        <div className="shadow  border-gray-300 rounded-xl border bg-owc-warm-orange p-8 m-5" key={meadow.id}>
            <a href={`/meadows/${meadow.id}`}
               className="block font-sans text-3xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                {meadow.name}
            </a>
            <p className="block py-4 text-2xl font-normal text-gray-500">
                <p>{meadow.trees.length} trees</p>
                </p>
            </div>

    </div>);
};