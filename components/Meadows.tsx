"use client";


import {Meadow} from "@/__generated__/graphql";
import {useQuery} from "@apollo/client";
import {GET_MEADOWS} from "@/graphlql/queries";
import {useEffect} from "react";
import {OwcLinkCard} from "@/components/LinkCard";
import {useI18n} from "@/locales/client";
import MapComponent, {FallbackCoords} from "@/components/map";
import {LoadingScreen} from "@/components/Loading";


interface ChildProps {
    triggerRefetch: boolean;
}



export const Meadows = ({triggerRefetch}: ChildProps) => {
    const t = useI18n()
    const {data, loading, error, refetch} = useQuery(GET_MEADOWS)

    useEffect(() => {
        refetch();
    }, [triggerRefetch, refetch]);

    if (loading) return (
        <LoadingScreen />
    );
    if (error) return <div>{t('error')}</div>

    const meadowList: Meadow[] = data.meadows;

    let mapCenter: [number, number] = FallbackCoords()
    let markers: [[number, number], string, string][] = []
    for (const meadow of meadowList) {

        for (const myTree of meadow.trees) {
            if (myTree.lat && myTree.lang) {
                markers.push([[myTree.lat, myTree.lang], myTree.name, `/meadows/${meadow.id}/trees/${myTree.id}`])
                mapCenter = [myTree.lat, myTree.lang];
            }
        }
    }

    return (
        <div className="w-full">
            <div className="w-full mb-8">
                <MapComponent center={mapCenter} markers={markers}/>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 w-full">


                {meadowList.map((meadow, meadowIndex) => (
                    <OwcLinkCard href={`/meadows/${meadow.id}`} key={meadow.id} title={meadow.name}
                                 content={t('trees', {count: meadow.trees.length})} banner={meadow.banner}/>
                ))}
            </div>
        </div>


    );
};