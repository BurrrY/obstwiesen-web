"use client";

import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

export const Providers = ({children}) => {

    console.log("GQL-Host: ", process.env.NEXT_PUBLIC_GQL_HOST)

    const client = new ApolloClient({
           link: createUploadLink(
               {
                   //uri: "http://localhost:8080/graphql  "
                   uri: process.env.NEXT_PUBLIC_GQL_HOST
               }),
           cache: new InMemoryCache()
    });

    return (

        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
};