import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dan Tsivinsky",
  description: "Dan's personal website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <main className="h-full max-w-[1440px] w-full mx-auto px-4 lg:px-3 py-5 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
