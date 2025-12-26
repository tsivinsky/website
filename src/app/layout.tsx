import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dan Tsivinsky",
  description: "Dan's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <main className="max-w-[1200px] w-full mt-10 mx-auto px-2 h-full flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
