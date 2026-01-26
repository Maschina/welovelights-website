import type { Viewport } from "next";
import "../globals.css";

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
