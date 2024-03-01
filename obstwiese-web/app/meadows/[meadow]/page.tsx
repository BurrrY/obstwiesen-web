import {Meadow} from "@/__generated__/graphql";


export const dynamic = "force-dynamic";

import {NewMeadowForm} from "@/components/MeadowAdd";
import {MeadowDetail} from "@/components/MeadowDetail";

export default function Page({ params }: { params: { meadow: string } }) {
    //return <div>ID: {params.meadow}</div>
    return <MeadowDetail id={params.meadow} />
}