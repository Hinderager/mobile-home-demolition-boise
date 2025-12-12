import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mobile Home Demolition Boise | Coming Soon',
  description: 'Complete mobile home and manufactured home demolition in Boise, Idaho. Full demolition, site cleanup, and permit assistance.',
  keywords: 'mobile home demolition, Boise, Idaho, manufactured home removal, trailer demolition',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
