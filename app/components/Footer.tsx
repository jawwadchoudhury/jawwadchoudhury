//import './css/Navbar.css'
import { Prompt } from 'next/font/google'
import Link from 'next/link'

const prompt = Prompt({
  subsets: ['latin'], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function Navbar() {
  return (
    <div className="bg-[#333] w-full bottom-0 left-0 pl-[10px] h-[10vh] flex select-none">
      <h1 className='text-white mt-auto mb-auto opacity-60'><p className={prompt.className}><Link href='/license' target='_blank'>© 2024 Jawwad Choudhury</Link><br/>Made entirely with NextJS, TailwindCSS and hosted with Vercel - all open source on <Link href="https://github.com/jawwadchoudhury/jawwadchoudhury" className='underline'>Github</Link>.</p></h1>
    </div>
  )
}
