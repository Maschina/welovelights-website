import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '@/mdx-components'
// (The mdx-components file is for any custom MDX components, see note below)

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const { metadata } = await importPage(resolvedParams.mdxPath)
  return metadata
}

const Wrapper = getMDXComponents().wrapper

export default async function Page({ params, ...props }) {
  const resolvedParams = await params
  const result = await importPage(resolvedParams.mdxPath)
  const { default: MDXContent, toc, metadata } = result
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={resolvedParams} />
    </Wrapper>
  )
}
