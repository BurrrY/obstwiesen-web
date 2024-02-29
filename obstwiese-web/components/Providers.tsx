"use client";

import {ReactNode} from "react";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";


export const Providers = ({children}: {children: React.ReactNode}) => {
    const client = new ApolloClient({
           uri: "http://localhost:8080/query",
           cache: new InMemoryCache()
    });

    //console.log("Client Providers initialized!", client)


    return (

        <ApolloProvider client={client}>{children}</ApolloProvider>
    )



};