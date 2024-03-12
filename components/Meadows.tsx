"use client";


import {Meadow} from "@/__generated__/graphql";
import {useQuery} from "@apollo/client";
import {GET_MEADOWS} from "@/graphlql/queries";
import {useEffect} from "react";
import {OwcLinkCard} from "@/components/LinkCard";
import {useI18n} from "@/locales/client";


interface ChildProps {
    triggerRefetch: boolean;
}



export const Meadows = ({triggerRefetch}: ChildProps) => {
    const t = useI18n()
    const {data, loading, error, refetch} = useQuery(GET_MEADOWS)

    useEffect(() => {
        refetch();
    }, [triggerRefetch, refetch]);

    if (loading) return <div>{t('Loading...')}</div>
    if (error) return <div>{t('error')}</div>

    const meadows: Meadow[] = data.meadows;


    return (<div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        {meadows.map((meadow, meadowIndex) => (
            <OwcLinkCard href={`/meadows/${meadow.id}`} key={meadow.id} title={meadow.name} content={ t('trees', { count: meadow.trees.length } )} banner={meadow.banner} />
        ))}
    </div>);
};