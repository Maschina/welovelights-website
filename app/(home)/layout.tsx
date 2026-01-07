import type { Metadata, Viewport } from "next";
import "../globals.css";
import SupportButton from "@/components/support-button";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-tertiary-darkest text-foreground">
      {children}
    </div>
  );
}
