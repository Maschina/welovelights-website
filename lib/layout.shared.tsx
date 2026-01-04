import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { ArrowLeft } from "lucide-react";
import TextLogo from "@/assets/text-logo-dark@2x.png";
import Image from "next/image";

export function baseOptions(): BaseLayoutProps {
  const title = (
    <div className="flex items-center gap-2 cursor-pointer">
      <ArrowLeft className="size-5" />
      <Image src={TextLogo} alt="Text Logo" width={219} height={45} className="w-32 h-auto" />
    </div>
  )

  return {
    nav: {
      title: title,
    },
  };
}