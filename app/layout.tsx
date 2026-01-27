import "./globals.css";
import { RootProvider as FumadocsRootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from "react";
import SupportButton from "@/components/support-button";
import type { Metadata } from "next";
import { OrganizationSchema } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "We Love Lights - macOS App to Control Philips Hue from your Mac",
  description: "The easiest yet most powerful way for Mac users to control your Philips Hue lights and Zigbee devices on macOS.",
  keywords: [
    // Primary Keywords
    "Philips Hue Mac app",
    "Philips Hue macOS",
    "Hue control Mac",
    "smart home Mac",
    "smart lighting macOS",
    
    // Device & Bridge Types
    "deCONZ Mac",
    "ConBee macOS",
    "Zigbee Mac app",
    "Philips Hue Bridge",
    "multi-bridge control",
    
    // Features
    "Hue menu bar app",
    "Hue remote access",
    "Hue scenes Mac",
    "Hue automation macOS",
    "smart home automation",
    "motion sensor control",
    "smart plug Mac",
    "Hue color picker",
    
    // Device Types
    "Hue lights control",
    "Hue motion sensors",
    "Hue switches",
    "Hue smart plugs",
    "Hue dimmer switch",
    
    // Integration & Advanced
    "Shortcuts app Hue",
    "macOS Shortcuts integration",
    "Hue keyboard shortcuts",
    "Hue rules engine",
    "Hue zones Mac",
    "Hue rooms control",
    
    // Use Cases
    "professional Hue control",
    "Hue studio",
    "smart home professional",
    "Mac menu bar utilities",
    "native macOS smart home"
  ],
  authors: [{ name: "Robert Hahn", url: "https://welovelights.app" }],
  creator: "Robert Hahn",
  publisher: "Robert Hahn",
  applicationName: "We Love Lights",
  category: "Utilities",
  classification: "Smart Home Control Application",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://welovelights.app",
    languages: { "en-US": "https://welovelights.app" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://welovelights.app",
    siteName: "We Love Lights",
    title: "We Love Lights - macOS App to Control Philips Hue from your Mac",
    description: "The easiest yet most powerful way for Mac users to control your Philips Hue lights and Zigbee devices on macOS.",
    images: [
      {
        url: "https://welovelights.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "We Love Lights - macOS App to Control Philips Hue from your Mac",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "We Love Lights - macOS App to Control Philips Hue from your Mac",
    description: "The easiest yet most powerful way for Mac users to control your Philips Hue lights and Zigbee devices on macOS.",
    images: ["https://welovelights.app/opengraph-image.png"],
    creator: "@we_love_lights", // Add your Twitter handle
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <head>
        {/* Basic Favicons */}
        <link rel="icon" type="image/x-icon" sizes="any" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />

        {/* iOS/macOS Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon.png" />

        {/* Structured Data */}
        <OrganizationSchema />
      </head>
      <body className="min-h-screen">
        <FumadocsRootProvider>
          {children}
        </FumadocsRootProvider>
        {/* Floating support button - hidden on /docs routes */}
        <SupportButton />
      </body>
    </html>
  );
}