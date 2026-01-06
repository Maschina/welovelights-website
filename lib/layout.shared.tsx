import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { ArrowLeft } from "lucide-react";
import TextLogo from "@/assets/text-logo@2x.png";
import TextLogoDark from "@/assets/text-logo-dark@2x.png";
import Image from "next/image";

export function baseOptions(): BaseLayoutProps {
  const title = (
    <div className="flex items-center gap-2 cursor-pointer">
      <ArrowLeft className="size-5 text-fd-muted-foreground" />
      <Image src={TextLogo} alt="Go back to the home page" width={219} height={45} className="w-32 h-auto block dark:hidden" />
      <Image src={TextLogoDark} alt="Go back to the home page" width={219} height={45} className="w-32 h-auto hidden dark:block" />
    </div>
  )

  return {
    nav: {
      title: title,
    },
  };
}