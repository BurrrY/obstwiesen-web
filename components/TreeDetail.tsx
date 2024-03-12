"use client"


import {Tree, Event, File} from "@/__generated__/graphql";
import {useQuery} from "@apollo/client";
import { GET_TREE} from "@/graphlql/queries";
import {NewEventForm} from "@/components/EventAdd";
import {Maybe} from "@graphql-tools/utils";
import Image from 'next/image';
import {ImageLoader} from "@/components/ImageLoader";
import {NewImageForm} from "@/components/ImageAdd";
import {useI18n} from "@/locales/client";


interface TreeDetailProps {
    meadowid: string
    treeid: string
}

//const EventImage = (src: Maybe<Array<File>>) => {



function EventImage(props: { data: Maybe<Array<File>> | undefined }) {
    const t = useI18n()

    let fileList = props.data
    if (!fileList ||fileList.length == 0) {
        return (<p>{ t('No files') }</p>)
    }

    return (
        <div className="flex flex-col gap-1 ">
            {fileList.map((file, idx) => (
                <div className="bg-owc-warm-orange p-3 m-2 w-full relative  "
                     key={file.path}>
                    <Image src={`${file.path}`}
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
                </div>
            ))}
        </div>
    );
}

function EventElem(props: { data: Maybe<Array<Event>> | undefined }) {
    const t = useI18n()

    let eventList = props.data
    if (!eventList) {
        return (<p>{ t('No files') }</p>)
    }

    return (
        <div className="flex flex-col gap-1  w-full">
            {eventList.map((event, idx) => (
                <div className="bg-owc-warm-orange p-3 m-2"
                     key={event.id}>
                    <h1
                        className="font-sans text-3xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                        {event.title}
                    </h1>
                    <p
                        className="font-sans antialiased tracking-normal text-inherit">
                        {event.timestamp}
                    </p>
                    <p
                        className="font-sans antialiased tracking-normal text-inherit">
                        {event.description}
                    </p>
                    <EventImage data={event.files} />
                </div>
            ))}
        </div>

    );
}

export const TreeDetail = ({meadowid, treeid}: TreeDetailProps) => {
    const t = useI18n()
    const {data, loading, error, refetch} = useQuery(GET_TREE, {
        variables: {id: treeid},
    })


    if (loading) return <div>{t('Loading...')}</div>
    if (error) {
        console.log("error: ", error)
        return <div>{t('error loading trees')}</div>
    }

    const tree: Tree = data.tree;

    return (
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row flex-wrap py-4">
                <aside className="lg:w-1/3 px-2">
                    <div className="top-0 p-4 w-full bg-owc-soft-coral-light p-4 rounded rounded-3xl">
                        <h1
                            className="block font-sans text-4xl mb-2 antialiased font-semibold leading-tight tracking-normal text-inherit">
                            {tree.name}
                        </h1>


                        <Image src={`${tree.banner?.path}`}
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

                        <NewEventForm parent_id={tree.id} onFormSubmit={() => refetch()}/>
                        <NewImageForm parentID={tree.id} onFormSubmit={() => refetch()}/>
                    </div>
                </aside>

                <main role="main" className="lg:w-2/3 p-3 px-4 bg-owc-deep-green rounded-3xl flex flex-col items-center">
                    <h2
                        className="block font-sans text-3xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                        {t('events')}
                    </h2>
                    <EventElem data={tree.events}/>
                </main>
            </div>
        </div>

    );

};