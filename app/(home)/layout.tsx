import type { Metadata, Viewport } from "next";
import "../globals.css";
import SupportButton from "@/components/support-button";

export const metadata: Metadata = {
  title: "We Love Lights - Philips Hue or Phoscon deCONZ lights and devices for macOS",
  description: "We Love Lights is a macOS app that allows you to control your Philips Hue or Phoscon deCONZ lights and devices.",
};

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
      {/* Floating support button - hidden on /docs routes */}
      <SupportButton />
    </div>
  );
}
