import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import textLogoTemplate from "@/assets/text-logo-template-dark@2x.png";
import LogoSVG from "@/assets/text-logo-template-dark.svg";
import Icon from "./icon";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  className?: string;
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  className,
  menuItems = [
    // {
    //   title: "We Love Lights",
    //   links: [
    //     { text: "Home", url: "/" },
    //     { text: "Features", url: "#" },
    //   ],
    // },
    {
      title: "Behind the Scenes",
      links: [
        { text: "About the Author", url: "#" },
        { text: "Imprint", url: "#" },
        // { text: "Blog", url: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Changelog", url: "#" },
      ],
    },
    // {
    //   title: "Social",
    //   links: [
    //     { text: "Twitter", url: "#" },
    //     { text: "LinkedIn", url: "#" },
    //   ],
    // },
  ],
  copyright = "© 2025 Robert Hahn. All rights reserved.",
  bottomLinks = [
    // { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "/privacy" },
  ],
}: Footer2Props) => {
  return (
    <footer className={cn("pt-30 pb-10 text-white w-full flex flex-col items-center justify-center footer-gradient", className)}>
      <Icon src={LogoSVG} className="w-full max-w-[1000px] px-4 text-white/10" alt="App Logo" />
      <div className="flex flex-col gap-2 items-center justify-center text-white/40 text-sm">
        <p>We Love Lights is a solo-project maintained by <Link href="https://www.linkedin.com/in/profile-robert-hahn/" className="hover:text-primary">Robert Hahn</Link>, made in Germany.</p>
        {/* <Link href="/" className="hover:text-primary">Learn more about the author</Link> */}
      </div> 
      {/* <div className="grid grid-cols-2 gap-4 lg:grid-cols-6">
        {menuItems.map((section, sectionIdx) => (
          <div key={sectionIdx}>
            <h3 className="mb-1 font-bold">{section.title}</h3>
            <ul className="space-y-1 text-white">
              {section.links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="hover:text-primary"
                >
                  <Link href={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
      <div className="text-white/40 flex flex-col justify-between text-sm">
        <p>{copyright}</p>
        {/* <ul className="flex gap-4">
          {bottomLinks.map((link, linkIdx) => (
            <li key={linkIdx} className="underline hover:text-primary">
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul> */}
      </div>
    </footer>
  );
};

export { Footer };
