"use client";


import {Tree} from "@/__generated__/graphql";
import {useQuery} from "@apollo/client";
import { GET_TREE} from "@/graphlql/queries";
import {NewEventForm} from "@/components/EventAdd";



interface TreeDetailProps {
    meadowid: string
    treeid: string
}

export const TreeDetail = ({meadowid, treeid}: TreeDetailProps) => {
    const {data, loading, error} = useQuery(GET_TREE, {
        variables: { id: treeid },
    })

    if (loading) return <div>Loading...</div>
    if (error){
        console.log("error: ", error)
        return <div>error</div>
    }

    const tree: Tree = data.tree;

    return (
        <div className="container mx-auto">
            <div className="flex flex-row flex-wrap py-4">
                <aside className="w-1/3 px-2 bg-owc-soft-coral">
                    <div className="sticky top-0 p-4 w-full">
                        <h1
                            className="block font-sans text-4xl mb-2 antialiased font-semibold leading-tight tracking-normal text-inherit">
                            {tree.name}
                        </h1>

                        <NewEventForm parent_id={tree.id}/>
                    </div>
                </aside>
                <main role="main" className="w-2/3 p-3 px-4 bg-owc-deep-green">

                    <h2
                        className="block font-sans text-3xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                        Events
                    </h2>


                    <div className="flex flex-col gap-1 ">
                        {tree.events.map((event, meadowIndex) => (
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
                            </div>
                        ))}
                    </div>

                </main>
            </div>
        </div>

    );

};