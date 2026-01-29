import { BugOff, CirclePlus } from "lucide-react";
import Link from "next/link"
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { getChangelogEntries, type ChangelogEntry } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "We Love Lights - Changelog",
};

export interface ChangelogProps {
  className?: string;
  title?: string;
  description?: string;
  entries?: ChangelogEntry[];
}

const Changelog = ({
  entries: propEntries,
  className,
}: ChangelogProps) => {
  const entries = propEntries || getChangelogEntries();
  return (
    <section className={cn("", className)}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-16">
          <h1 className="mb-4 text-6xl font-bold tracking-tight text-muted-foreground">
            Changelog
          </h1>
          <div className="flex flex-col items-start mb-4">
            <p className="text-base text-muted-foreground">
              This is a record of all the significant changes that have been made to We Love Lights.
            </p>
            <p className="text-base text-muted-foreground">
             Click <Link
                href="/changelog.json"
                className="underline"
              >here</Link> for tool access.
            </p>
          </div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden xs:block absolute left-[70px] top-8 bottom-8 w-[2px] bg-tertiary-darker" />
          
          <div className="space-y-12">
            {entries.map((entry, index) => (
              <div
                key={index}
                className="relative flex gap-8 items-start"
              >
                {/* Timeline capsule (hidden on mobile) */}
                <div className={cn("hidden xs:flex relative z-10 py-3 flex-col items-center justify-center w-[140px] rounded-3xl shrink-0 bg-tertiary-darker")}>
                  <span className="text-xl text-white font-bold">
                    {entry.version}
                  </span>
                  {entry.date && (
                    <span className="text-muted-foreground text-xs">
                    {entry.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  )}
                </div>

                {/* Changelog entry */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-2 w-full text-white bg-tertiary-darker p-4 rounded-3xl">

                  {/* Version and date (mobile only) */}
                  <div className="xs:hidden flex flex-col w-full">
                    <span className="text-xl text-white font-bold">
                      Version {entry.version}
                    </span>
                    {entry.date && (
                      <span className="text-muted-foreground text-xs">
                        {entry.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  {entry.features && entry.features.length > 0 && (
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-row items-center gap-2">
                      <CirclePlus className="size-4 text-green-500" />
                      <span className="font-bold">Features</span>
                    </div>
                    <div>
                      {entry.features && entry.features.length > 0 && (
                        <ul className="list-outside list-disc pl-5">
                          {entry.features.map((item, itemIndex) => (
                            <li key={itemIndex} className={cn("pb-2", itemIndex == (entry.features?.length ?? 0) - 1 ? "pb-0" : "pb-2")}>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  )}

                  {/* Bug Fixes */}
                  {entry.bugfixes && entry.bugfixes.length > 0 && (
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-row items-center gap-2">
                      <BugOff className="size-4 text-yellow-500" />
                      <span className="font-bold">Resolved Issues</span>
                    </div>
                    <div>
                      {entry.bugfixes && entry.bugfixes.length > 0 && (
                        <ul className="list-outside list-disc pl-5">
                          {entry.bugfixes.map((item, itemIndex) => (
                            <li key={itemIndex} className={cn("pb-2", itemIndex == (entry.bugfixes?.length ?? 0) - 1 ? "pb-0" : "pb-2")}>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Changelog };

export default Changelog;
