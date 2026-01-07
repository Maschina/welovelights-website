import type { Metadata } from "next";
import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { HeaderSubpage } from "@/components/header-subpage";
import SupportButton from "@/components/support-button";

// export const metadata: Metadata = {
//   title: "We Love Lights - Philips Hue or Phoscon deCONZ lights and devices for macOS",
//   description: "We Love Lights is a macOS app that allows you to control your Philips Hue or Phoscon deCONZ lights and devices.",
// };

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <div className="bg-tertiary-darkest text-foreground">
      <HeaderSubpage />
      {children}
      <Footer />
    </div>
  );
}