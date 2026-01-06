import "./globals.css";
import { RootProvider as FumadocsRootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from "react";
import SupportButton from "@/components/support-button";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <body className="min-h-screen">
        <FumadocsRootProvider>
          {children}
        </FumadocsRootProvider>
        <SupportButton />
      </body>
    </html>
  );
}