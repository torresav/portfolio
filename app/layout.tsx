import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Aaron Torres Portfolio",
    description: "Created by Aaron Torres",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div>
                    <Navbar />
                </div>
                <div className="px-8 md:px-8 sm:px-8 lg:px-8">{children}</div>
            </body>
        </html>
    );
}
