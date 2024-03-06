import {Meadow} from "@/__generated__/graphql";


export const dynamic = "force-dynamic";

import {NewMeadowForm} from "@/components/MeadowAdd";
import {Meadows} from "@/components/Meadows";
import {NewEventForm} from "@/components/EventAdd";


export default async function Page() {

    return (
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row flex-wrap py-4">
                <aside className="lg:w-1/3 px-2 bg-owc-soft-coral">
                    <div className="sticky top-0 p-4 w-full">
                        <h1
                            className="block font-sans text-4xl mb-2 antialiased font-semibold leading-tight tracking-normal text-inherit">
                            Hello!
                        </h1>
                        <NewMeadowForm />
                    </div>
                </aside>

                <main role="main" className="lg:w-2/3 p-3 px-4 bg-owc-deep-green">
                    <h2
                        className="block font-sans text-3xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                        Meadows
                    </h2>
                    <Meadows />
                </main>
            </div>
        </div>

    );
};
