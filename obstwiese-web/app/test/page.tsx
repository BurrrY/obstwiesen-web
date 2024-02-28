import {Meadow} from "@/__generated__/graphql";


export const dynamic = "force-dynamic";

import {ApolloClient, InMemoryCache, gql, useQuery} from "@apollo/client";
import {AddForm} from "@/app/test/add-form";


export default async function Page() {
  const meadows = await getData()


  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 border border-red-600 ">

          <AddForm />

          <div className="grid grid-cols-4 gap-4 border border-blue-600 ">
              {meadows.map((meadow, meadowIndex) => (
                  <div className="border-gray-300 rounded-xl border bg-gray-200 p-8 m-5" key={meadow.id}>
                      <h1 className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                            {meadow.name}
                      </h1>
                        <p className="block mb-6 text-lg font-normal text-gray-500">
                              <ul className="list-disc list-outside">
                                {meadow.trees.map((tree, treeIndex) => (
                                    <li key={tree.id}>{tree.name}</li>
                                ))}
                              </ul>
                        </p>
                  </div>
            ))}
          </div>
      </main>
  );

};


export async function getData():Promise<Meadow[]>   {
  const client = new ApolloClient({
    uri: "http://localhost:8080/query",
    cache: new InMemoryCache()
  });



  const { data } = await client.query({
    query: gql(`query Meadows {
                  meadows {
                      trees {
                          id
                          name
                      }
                      id
                      name
                  }
              }
              `)
  });

  return  data.meadows
}