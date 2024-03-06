
import "./globals.css";
import {Providers} from "@/components/Providers.mjs";
import {PageHeader} from "@/components/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageHeader />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
