"use client";


import {Meadow} from "@/__generated__/graphql";
import {useQuery} from "@apollo/client";
import { GET_MEADOW} from "@/graphlql/queries";
import {NewTreeForm} from "@/components/TreeAdd";



interface MeadowDetailProps {
    id: string
}


export const MeadowDetail = ({id}: MeadowDetailProps) => {
    let meadowID = id

    const {data, loading, error, refetch} = useQuery(GET_MEADOW, {
        variables: { id: meadowID },
    })


    if (loading) return <div>Loading...</div>
    if (error) return <div>error</div>

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

                        <NewTreeForm meadowid={meadow.id} onFormSubmit={() => refetch()}/>
                    </div>
                </aside>
                <main role="main" className="lg:w-2/3 pt-3 px-4 bg-owc-deep-green">
                    <h2
                        className="block font-sans text-3xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                        Trees
                    </h2>

                    <div className="grid xl:grid-cols-5 md:grid-cols-2 grid-cols-1">
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