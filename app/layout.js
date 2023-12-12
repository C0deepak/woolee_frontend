import './globals.css'

export const metadata = {
  title: 'Woolee',
  description: 'for Indians by Indians',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
