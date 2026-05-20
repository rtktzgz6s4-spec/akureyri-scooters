import './globals.css'

export const metadata = {
  title: 'Akureyri Scooters',
  description: 'Premium scooter rentals in Akureyri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
