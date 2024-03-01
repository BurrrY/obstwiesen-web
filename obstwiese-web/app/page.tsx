import {Meadow} from "@/__generated__/graphql";


export const dynamic = "force-dynamic";

import {NewMeadowForm} from "@/components/MeadowAdd";
import {Meadows} from "@/components/Meadows";


export default async function Page() {
  return (
      <main className="flex min-h-screen flex-col items-center p-4 border border-red-600 ">
          <NewMeadowForm />
          <Meadows />
      </main>
  );
};
