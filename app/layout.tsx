import type { Metadata, Viewport } from "next";
import "./globals.css";
import ConditionalSupportButton from "@/components/conditional-support-button";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased bg-tertiary-darkest`}
      >
        {children}
        {/* Floating support button - hidden on /docs routes */}
        <ConditionalSupportButton />
      </body>
    </html>
  );
}
