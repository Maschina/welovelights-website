'use client'

import { usePathname } from 'next/navigation'
import SupportButton from '@/components/support-button'

export default function ConditionalSupportButton() {
  const pathname = usePathname()
  
  // Don't show support button on docs routes
  if (pathname?.startsWith('/docs')) {
    return null
  }
  
  return <SupportButton />
}

