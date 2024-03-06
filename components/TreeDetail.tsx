"use client";


import {Tree, Event, File} from "@/__generated__/graphql";
import {useQuery} from "@apollo/client";
import { GET_TREE} from "@/graphlql/queries";
import {NewEventForm} from "@/components/EventAdd";
import {Maybe} from "@graphql-tools/utils";
import Image from 'next/image';


interface TreeDetailProps {
    meadowid: string
    treeid: string
}

//const EventImage = (src: Maybe<Array<File>>) => {

function EventImage(props: { data: Maybe<Array<File>> | undefined }) {

    let fileList = props.data
    if (!fileList ||fileList.length == 0) {
        return (<p>No files.</p>)
    }


    return (
        <div className="flex flex-col gap-1 ">
            {fileList.map((file, idx) => (
                <div className="bg-owc-warm-orange p-3 m-2"
                     key={file.path}>
                    <Image src={file.path} alt="Description" width={500} height={300} />
                </div>
            ))}
        </div>
    );
}

function EventElem(props: { data: Maybe<Array<Event>> | undefined }) {

    let eventList = props.data
    if (!eventList) {
        return (<p>No events.</p>)
    }

    return (
        <div className="flex flex-col gap-1 ">
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
    const {data, loading, error} = useQuery(GET_TREE, {
        variables: {id: treeid},
    })

    if (loading) return <div>Loading...</div>
    if (error) {
        console.log("error: ", error)
        return <div>error</div>
    }

    const tree: Tree = data.tree;

    return (
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row flex-wrap py-4">
                <aside className="lg:w-1/3 px-2 bg-owc-soft-coral">
                    <div className="sticky top-0 p-4 w-full">
                        <h1
                            className="block font-sans text-4xl mb-2 antialiased font-semibold leading-tight tracking-normal text-inherit">
                            {tree.name}
                        </h1>
                        <NewEventForm parent_id={tree.id}/>
                    </div>
                </aside>

                <main role="main" className="lg:w-2/3 p-3 px-4 bg-owc-deep-green">
                    <h2
                        className="block font-sans text-3xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                        Events
                    </h2>
                    <EventElem data={tree.events}/>
                </main>
            </div>
        </div>

    );

};