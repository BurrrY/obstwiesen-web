"use client";

import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { env } from 'next-runtime-env';


export const Providers = ({children}) => {

    //console.log("NEXT_PUBLIC_GQL_HOST: ", process.env.NEXT_PUBLIC_GQL_HOST)

    const client = new ApolloClient({
           link: createUploadLink(
               {
                   uri: env('NEXT_PUBLIC_GQL_HOST')
               }),
           cache: new InMemoryCache()
    });

    return (

        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
};
