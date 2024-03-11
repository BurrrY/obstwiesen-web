"use client";


import {Meadow} from "@/__generated__/graphql";
import {useQuery} from "@apollo/client";
import { GET_MEADOW} from "@/graphlql/queries";
import {NewTreeForm} from "@/components/TreeAdd";
import {OwcLinkCard} from "@/components/LinkCard";
import {NewImageForm} from "@/components/ImageAdd";
import {ImageLoader} from "@/components/ImageLoader";
import Image from "next/image";



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
                <aside className="lg:w-1/3 px-2">
                    <div className="top-0 p-4 w-full bg-owc-soft-coral-light p-4 rounded rounded-3xl">
                        <h1
                            className="font-sans text-4xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                            {meadow.name}
                        </h1>

                        <Image src={`${meadow.banner?.path}`}
                               className="w-full"
                               loader={ImageLoader} alt="Description"
                               sizes="100vw"

                               width={70}
                               height={45}
                               style={{
                                   width: '100%',
                                   height: 'auto',
                               }}
                        />

                        <NewTreeForm meadowid={meadow.id} onFormSubmit={() => refetch()}/>
                        <NewImageForm parentID={meadow.id} onFormSubmit={() => refetch()}/>
                    </div>
                </aside>
                <main role="main" className="flex flex-col items-center lg:w-2/3 pt-3 px-4 bg-owc-deep-green rounded-3xl">
                    <h2
                        className="font-sans text-3xl antialiased font-semibold leading-tight tracking-normal text-inherit  mb-6">
                        Trees
                    </h2>

                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-10 w-full" >
                        {meadow.trees.map((tree, meadowIndex) => (
                            <OwcLinkCard href={`/meadows/${meadow.id}/trees/${tree.id}`} key={tree.id} title= {tree.name} content={``} banner={tree.banner}/>
                        ))}
                    </div>

                </main>
            </div>
        </div>

    );
};