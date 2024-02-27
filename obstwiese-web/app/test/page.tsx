"use client";

type Meadow = {
  name: string;
};


import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql`query m {
  meadows {id, name}
}`

export default function PollPage() {
  const { data } = useSuspenseQuery(query);


  return <div>{data.name}</div>;
};