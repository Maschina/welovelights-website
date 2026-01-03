import type { Metadata } from "next";
import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { HeaderSubpage } from "@/components/header-subpage";

// export const metadata: Metadata = {
//   title: "We Love Lights - Philips Hue or Phoscon deCONZ lights and devices for macOS",
//   description: "We Love Lights is a macOS app that allows you to control your Philips Hue or Phoscon deCONZ lights and devices.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderSubpage />
      {children}
      <Footer />
    </>
  );
}