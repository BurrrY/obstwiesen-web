"use client";


import {Meadow, Tree} from "@/__generated__/graphql";
import {useQuery} from "@apollo/client";
import { GET_MEADOW} from "@/graphlql/queries";
import {NewTreeForm} from "@/components/TreeAdd";
import {OwcLinkCard} from "@/components/LinkCard";
import {NewImageForm} from "@/components/ImageAdd";
import {ImageLoader} from "@/components/ImageLoader";
import Image from "next/image";
import {useI18n} from "@/locales/client";
import MapComponent, {FallbackCoords} from "@/components/map";



interface MeadowDetailProps {
    id: string
}




export const MeadowDetail = ({id}: MeadowDetailProps) => {
    const t = useI18n()
    let meadowID = id

    const {data, loading, error, refetch} = useQuery(GET_MEADOW, {
        variables: { id: meadowID },
    })


    if (loading) return <div>{ t('Loading...')}</div>
    if (error) return <div>{ t('error') }</div>

    const meadow: Meadow = data.meadow as Meadow;

    let mapCenter: [number, number] =FallbackCoords()
    let markers: [[number, number], string, string][] = []
    for (const myTree of meadow.trees) {
        if (myTree.lat && myTree.lang) {
            markers.push([[myTree.lat, myTree.lang], myTree.name, `/meadows/${meadow.id}/trees/${myTree.id}` ])
            mapCenter=[myTree.lat, myTree.lang];
        }
    }




    console.log("Markers:", markers)


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
                <main role="main"
                      className="flex flex-col items-center lg:w-2/3 pt-3 px-4 bg-owc-deep-green rounded-3xl relative">
                    <h2
                        className="font-sans text-3xl antialiased font-semibold leading-tight tracking-normal text-inherit  mb-6">
                        {t('Trees')}
                    </h2>

                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-10 w-full border">
                        {meadow.trees.map((tree, meadowIndex) => (
                            <OwcLinkCard href={`/meadows/${meadow.id}/trees/${tree.id}`} key={tree.id} title={tree.name}
                                         content={``} banner={tree.banner}/>
                        ))}
                    </div>

                    <h2
                        className="font-sans text-3xl antialiased font-semibold leading-tight tracking-normal text-inherit mb-6">
                        {t('Map')}
                    </h2>

                    <div className="w-full border mb-8">
                        <MapComponent center={mapCenter} markers={markers}/>
                    </div>

                </main>
            </div>
        </div>

);
};