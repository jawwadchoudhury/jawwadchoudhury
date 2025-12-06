import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Metadata } from 'next';
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Home | Jawwad Choudhury',
  description: '(Web Developer and Programmer)',
  metadataBase: new URL('https://jawwadchoudhury.co.uk'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className="scroll-smooth">
    <link rel="shortcut icon" href="/static/favicon.ico" />
      <body className="">
        
        <Navbar />
        <>
        {children}
        </>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
