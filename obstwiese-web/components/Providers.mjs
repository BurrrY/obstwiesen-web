"use client";

import {ReactNode} from "react";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

//export const Providers = ({children}: {children: React.ReactNode}) => {
export const Providers = ({children}) => {
    const client = new ApolloClient({
           //uri: "http://localhost:8080/query",
           link: createUploadLink({ uri: 'http://localhost:8080/query' }),
           cache: new InMemoryCache()
    });

    //console.log("Client Providers initialized!", client)


    return (

        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
};