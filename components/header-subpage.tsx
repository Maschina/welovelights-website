"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
// import LogoSVG from "@/assets/text-logo-template-dark.svg";
import TextLogo from "@/assets/text-logo-dark@2x.png";
import Image from "next/image";
import Icon from "./icon";

export function HeaderSubpage() {
  return (
    <header className="container mx-auto p-4 pb-14 max-w-5xl">
      <div className="flex items-center justify-between">
        {/* Go Back Button */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white transition-colors"
        >
          <ArrowLeft className="size-5" />
          {/* <Icon
            src={LogoSVG}
            className="w-32 h-auto"
            alt="Go Back"
          /> */}
          <Image src={TextLogo} alt="Text Logo" width={219} height={45} className="w-32 h-auto" />
        </Link>
      </div>
    </header>
  );
}
