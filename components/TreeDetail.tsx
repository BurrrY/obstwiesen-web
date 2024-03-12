"use client"


import {Tree, Event, File} from "@/__generated__/graphql";
import {useMutation, useQuery} from "@apollo/client";
import {GET_TREE, UPDATE_TREE} from "@/graphlql/queries";
import {NewEventForm} from "@/components/EventAdd";
import {Maybe} from "@graphql-tools/utils";
import Image from 'next/image';
import {ImageLoader} from "@/components/ImageLoader";
import {NewImageForm} from "@/components/ImageAdd";
import {useI18n} from "@/locales/client";
import MapComponent from "@/components/map";
import {OwcSmallButton, OwcSubmitButton} from "@/components/forms/FormElements";
import {useState} from "react";
import {number} from "prop-types";


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
    const [position, setPosition] = useState<[number, number]>([0,0])
    const [newPosition, setNewPosition] = useState<[number, number]>()
    const t = useI18n()

    const [updateTree] = useMutation(UPDATE_TREE)


    const {data, loading, error, refetch} = useQuery(GET_TREE, {
        variables: {id: treeid},
    })



//  <Map center={[tree.lat, tree.lang]} markers={[[tree.lat, tree.lang]]} />
    if (loading) return <div>{t('Loading...')}</div>
    if (error) {
        console.log("error: ", error)
        return <div>{t('error loading trees')}</div>
    }

    const tree: Tree = data.tree;

    if (tree.lang && tree.lang) {
        //setPosition([tree.lat as number, tree.lang as number])
        //console.log("Init Pos:", position)
    }

    function markerReset() {

    }

    const markerStore = async () => {
        console.log("store newLatLang:", newPosition)
        if (!newPosition) {return;}

        const data = {
            id: tree.id,
            lat: newPosition[0],
            lang: newPosition[1],
            name: tree.name,
        }
        console.log("store updateTree:", data)

        await updateTree({
            variables: data
        });
        refetch();
    };



    function PosChanged(newLatLang: [number, number]) {
        console.log("newLatLang PosChanged:", newLatLang)
        setNewPosition(newLatLang)
    }

    let center: [number, number]= [0,0]
    if (tree.lat && tree.lang) {
        center = [tree.lat, tree.lang]
    }
    
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

                        <div>
                            <MapComponent center={center} draggableMarker={center}
                                          onPosChanged={PosChanged}/>
                            <div className="flex flex-row">
                                <OwcSmallButton onClick={markerReset} text={t('reset')}/>
                                <OwcSmallButton onClick={markerStore} text={t('save')}/>
                            </div>
                        </div>


                        <NewEventForm parent_id={tree.id} onFormSubmit={() => refetch()}/>
                        <NewImageForm parentID={tree.id} onFormSubmit={() => refetch()}/>
                    </div>
                </aside>

                <main role="main"
                      className="lg:w-2/3 p-3 px-4 bg-owc-deep-green rounded-3xl flex flex-col items-center">
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