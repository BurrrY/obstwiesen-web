"use server"

import "./globals.css";
import {Providers} from "@/components/Providers.mjs";
import {PageHeader} from "@/components/Header";
import { PublicEnvScript } from 'next-runtime-env';
import { I18nProviderClient } from '../../locales/client'
import {ReactNode} from "react";

//export default function RootLayout({ children,}: Readonly<{  children: React.ReactNode;}>) {
    export default async function RootLayout({ params: { locale }, children }: { params: { locale: string }, children: ReactNode }) {
  return (
      <html lang="en">
      <head>

          <PublicEnvScript/>
      </head>
      <body>
      <PageHeader/>
      <Providers>
          <I18nProviderClient locale={locale}>
              {children}
          </I18nProviderClient></Providers>
      </body>
      </html>
  );
    }
