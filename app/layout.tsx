import "./globals.css";
import { RootProvider as FumadocsRootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <body className="min-h-screen">
        <FumadocsRootProvider>{children}</FumadocsRootProvider>
      </body>
    </html>
  );
}