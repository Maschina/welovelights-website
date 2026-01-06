import { source } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import Link from "next/link";
import { findNeighbour, Item } from 'fumadocs-core/page-tree';
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CopyrightFooter } from "@/components/copyright-footer";
import { Feedback } from "@/components/feedback";

function FooterItem({ item, index }: { item: Item; index: 0 | 1 }) {
  const Icon = index === 0 ? ChevronLeft : ChevronRight;

  return (
    <Link
      href={item.url}
      className={cn(
        'flex flex-col gap-2 rounded-lg border p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground @max-lg:col-span-full',
        index === 1 && 'text-end',
      )}
    >
      <div
        className={cn(
          'inline-flex items-center gap-1.5 font-medium',
          index === 1 && 'flex-row-reverse',
        )}
      >
        <Icon className="-mx-1 size-4 shrink-0 rtl:rotate-180" />
        <p>{item.name}</p>
      </div>
      <p className="text-fd-muted-foreground truncate">
        {item.description ?? (index === 0 ? "Previous" : "Next")}
      </p>
    </Link>
  );
}

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  // Get previous and next pages for navigation
  const tree = source.getPageTree();
  const neighbours = findNeighbour(tree, page.url);

  const footer = (
    <div className="flex flex-col gap-8 mt-12 mb-8 xl:mb-0">
      <div
        className={cn(
          '@container grid gap-4',
          neighbours.previous && neighbours.next ? 'grid-cols-2' : 'grid-cols-1'
        )}
      >
      {neighbours.previous && <FooterItem item={neighbours.previous} index={0} />}
      {neighbours.next ? <FooterItem item={neighbours.next} index={1} /> : null}
      </div>
      
      {/* Copyright Statement */}
      <CopyrightFooter className="text-fd-muted-foreground" />
    </div>
  );

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      footer={{ component: footer }}
      tableOfContent={{
        style: 'clerk',
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
      <Feedback />
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<'/docs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}