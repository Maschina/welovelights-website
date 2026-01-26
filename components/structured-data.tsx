export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "We Love Lights",
    "operatingSystem": "macOS 13.0 or later",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "6.99",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7", // Update with actual rating
      "ratingCount": "130" // Update with actual count
    },
    "description": "The easiest yet most powerful way to control your Philips Hue lights and Zigbee devices on macOS.",
    "screenshot": "https://welovelights.app/assets/app-window.png",
    "softwareVersion": "3.6.5",
    "downloadUrl": "https://apps.apple.com/app/apple-store/id1479422551"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "We Love Lights",
    "url": "https://welovelights.app",
    "logo": "https://welovelights.app/icon.svg",
    "founder": {
      "@type": "Person",
      "name": "Robert Hahn"
    },
    "sameAs": [
      // Add your social media profiles here when available
      // "https://twitter.com/we_love_lights",
      // "https://github.com/yourusername",
      // "https://www.linkedin.com/company/welovelights"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}