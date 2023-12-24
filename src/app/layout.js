import { Roboto_Condensed } from 'next/font/google'
import './globals.css'
import Flores from "./components/flowers"


const inter = Roboto_Condensed({ 
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] })

export const metadata = {
  title: 'Pedido',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-pink-200`}>{children}
      <Flores />
      </body>
    </html>
  )
}
