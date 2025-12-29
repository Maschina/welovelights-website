import type { Metadata, Viewport } from "next";
import "./globals.css";
import ScrollBackground from "@/components/scroll-background";

export const metadata: Metadata = {
  title: "We Love Lights - Philips Hue or Phoscon deCONZ lights and devices for macOS",
  description: "We Love Lights is a macOS app that allows you to control your Philips Hue or Phoscon deCONZ lights and devices.",
};

export const viewport: Viewport = {
  themeColor: "#0a122d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <ScrollBackground>
          {children}
        </ScrollBackground>
      </body>
    </html>
  );
}
