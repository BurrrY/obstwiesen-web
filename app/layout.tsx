
import "./globals.css";
import {Providers} from "@/components/Providers.mjs";
import {PageHeader} from "@/components/Header";
import { PublicEnvScript } from 'next-runtime-env';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
          <PublicEnvScript/>
      </head>
      <body>
      <PageHeader/>
      <Providers>{children}</Providers>
      </body>
      </html>
  );
}
