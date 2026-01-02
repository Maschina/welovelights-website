import { cn } from "@/lib/utils";
import Link from "next/link";
import LogoSVG from "@/assets/text-logo-template-dark.svg";
import Icon from "./icon";

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  className?: string;
  tagline?: string;
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  className,
}: FooterProps) => {
  return (
    <footer className={cn("pt-30 pb-16 px-4 w-full flex flex-col items-center justify-center bg-tertiary-darkest", className)}>
      <Icon src={LogoSVG} className="w-full max-w-3xl px-4 text-white/10" alt="App Logo" />
      <p className="text-center text-white/40 text-sm">
        We Love Lights is a solo-project maintained by <Link href="https://www.linkedin.com/in/profile-robert-hahn/" className="hover:text-primary">Robert Hahn</Link>, made in Germany.
        {/* <Link href="/" className="hover:text-primary">Learn more about the author</Link> */}
      </p> 
      <p className="text-white/40 flex flex-col justify-between text-sm">
        &copy; 2025 Robert Hahn. All rights reserved.
      </p>
    </footer>
  );
};

export { Footer };
