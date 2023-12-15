import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/context/authContext'

export const metadata = {
  title: 'Woolee',
  description: 'for Indians by Indians',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider >
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </AuthProvider>
    </html>
  )
}
