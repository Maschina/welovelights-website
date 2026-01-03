import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Image from 'next/image'
import TextLogo from '@/assets/text-logo-dark@2x.png'

export const metadata = {
  title: 'We Love Lights - Documentation',
  description: 'Documentation for We Love Lights macOS app',
}

const navbar = (
  <Navbar
    logo={<Image src={TextLogo} alt="Text Logo" width={219} height={45} className="w-32 h-auto" />}
  />
)

const footer = <Footer>&copy; 2019-{new Date().getFullYear()} Robert Hahn. All rights reserved.</Footer>

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Get only the pageMap for the docs content directory
  const pageMap = await getPageMap('/docs')
  
  return (
    <Layout
      navbar={navbar}
      pageMap={pageMap}
      docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
      footer={footer}
      darkMode={true}
      nextThemes={{
        defaultTheme: 'dark',
        forcedTheme: 'dark',
      }}
    >
      {children}
    </Layout>
  )
}