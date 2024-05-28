import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
    <link rel="shortcut icon" href="/static/favicon.ico" />
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
