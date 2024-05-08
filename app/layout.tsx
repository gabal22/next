import type { Metadata } from "next";
import { NavBar } from "@/components";
import { Footer } from "@/components";
import "./globals.css";


export const metadata: Metadata = {
  title: "car project",
  description: "best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
