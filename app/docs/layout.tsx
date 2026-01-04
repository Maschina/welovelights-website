import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Image from 'next/image'
import TextLogo from '@/assets/text-logo-dark@2x.png'
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: 'We Love Lights - Documentation',
  description: 'Documentation for We Love Lights macOS app',
}

const navbar = (
  <Navbar
    logo={<div className="flex items-center justify-between cursor-pointer">
      {/* Go Back Button */}
      <div
        className="flex items-center gap-2 text-white"
      >
        <ArrowLeft className="size-5" />
        <Image src={TextLogo} alt="Text Logo" width={219} height={45} className="w-32 h-auto" />
      </div>
    </div>}
  />
)

const footer = <Footer className="bg-tertiary-darkest text-xs">
  &copy; 2019-{new Date().getFullYear()} Robert Hahn. All rights reserved.
</Footer>

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Get only the pageMap for the docs content directory
  const pageMap = await getPageMap('/docs')
  
  return (
    <Layout
      navbar={navbar}
      pageMap={pageMap}
      footer={footer}
      editLink={null}
      feedback={{ content: null }}
      darkMode={false}
      nextThemes={{
        defaultTheme: 'dark',
        forcedTheme: 'dark',
      }}
    >
      {children}
    </Layout>
  )
}