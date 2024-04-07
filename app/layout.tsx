import { Metadata } from 'next';
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | Jawwad Choudhury',
    default: 'Jawwad Choudhury',
  },
  description: '(Web Developer and Programmer)',
  metadataBase: new URL('https://jawwadchoudhury.co.uk')
}

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className="scroll-smooth">
      <body className="dark:bg-[#444]">
        <Navbar />
        <>
        {children}
        </>
        <Footer />
      </body>
    </html>
  )
}
