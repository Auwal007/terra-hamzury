import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Terra Climate & Technology Initiative',
  description: 'Where Land Meets Water, Technology Sustains Both',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
