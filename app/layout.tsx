import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "SecuDork",
  description: "Search security vulnerabilities across multiple engines",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SecuDork",
  },
  icons: {
    apple: [
      {
        url: "/black.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SecuDork" />
        <meta name="application-name" content="SecuDork" />
        <link rel="apple-touch-icon" href="/black.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/black.png" />
        <meta name="theme-color" content="#f9fafb" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#030712" media="(prefers-color-scheme: dark)" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="email=no" />
      </head>
      <body>{children}</body>
    </html>
  )
}
