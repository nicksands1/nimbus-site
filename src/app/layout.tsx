import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import TemporaryUrlAlert from "../components/TemporaryUrlAlert";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NimbusChain",
  description: "Landing Page/Roadmap",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon"/>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TemporaryUrlAlert />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}