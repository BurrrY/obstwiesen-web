import {Meadow} from "@/__generated__/graphql";


export const dynamic = "force-dynamic";

import {NewMeadowForm} from "@/components/MeadowAdd";
import {MeadowDetail} from "@/components/MeadowDetail";
import {TreeDetail} from "@/components/TreeDetail";

export default function Page({ params }: { params: { meadow: string, tree: string } }) {
    //return <div>ID: {params.meadow}</div>
    return <TreeDetail meadowid={params.meadow} treeid={params.tree} />
}