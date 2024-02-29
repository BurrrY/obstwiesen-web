import {Meadow} from "@/__generated__/graphql";


export const dynamic = "force-dynamic";

import {AddForm} from "@/components/add-form";
import {Meadows} from "@/components/Meadows";


export default async function Page() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 border border-red-600 ">

          <AddForm />
          <Meadows />
      </main>
  );
};
