import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps } from 'react';

export function CopyrightFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn("text-center text-sm", className)} {...props}>
      &copy; 2019-{new Date().getFullYear()} <Link href="https://www.linkedin.com/in/profile-robert-hahn/" className="hover:text-primary">Robert Hahn</Link>. All rights reserved.
    </div>
  );
}

