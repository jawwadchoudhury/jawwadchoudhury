//import './css/Navbar.css'
import { Prompt } from 'next/font/google'
import Link from 'next/link'
import './css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const prompt = Prompt({
  subsets: ['latin'], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const varela = Prompt({
  subsets: ['latin'], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const bitter = Prompt({
  subsets: ['latin'], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function Navbar() {
  return (
    <div className="bg-[#1a1a1a] w-full bottom-0 left-0 py-[40px] px-[240px] text-white">
      <div className='inline-block mr-20 mb-5 mt-5'>
        <h1 className='uppercase font-normal text-[16px] mb-[10px]'><p className={bitter.className}>Company</p></h1>
        <ul className='leading-5'>
          <li className='textitem text-[14px] text-[#909499]'><a href="/" className={varela.className}>Home</a></li>
          <li className='textitem text-[14px] text-[#909499]'><a href="/" className={varela.className}>About Terminal</a></li>
          <li className='textitem text-[14px] text-[#909499]'><a href="/" className={varela.className}>Services</a></li>
          <li className='textitem text-[14px] text-[#909499]'><a href="/" className={varela.className}>Plans & Pricing</a></li>
          <li className='textitem text-[14px] text-[#909499]'><a href="/" className={varela.className}>Blog</a></li>
        </ul>
      </div>
      <div className='inline-block mr-10'>
        <h1 className='uppercase font-normal text-[16px] mb-[10px]'><p className={bitter.className}>Get Help</p></h1>
        <ul className='leading-5'>
          <li className='textitem text-[14px] text-[#909499]'><a href="/" className={varela.className}>Knowledge Base</a></li>
          <li className='textitem text-[14px] text-[#909499]'><a href="/" className={varela.className}>Frequently Asked Questions</a></li>
          <li className='textitem text-[14px] text-[#909499]'><a href="/" className={varela.className}>Forum</a></li>
          <li className='textitem text-[14px] text-[#909499]'><a href="/" className={varela.className}>Contact Us</a></li>
          <li className='textitem text-[14px] text-[#909499] select-none'>‎ </li>
        </ul>
      </div>
      <div className='inline-block'>
        <div className='block'>
        <h1 className='uppercase font-normal text-[16px] mb-[10px] inline-block mr-2'><FontAwesomeIcon icon={faXTwitter}/></h1>
        <h1 className='uppercase font-normal text-[16px] mb-[10px] inline-block'><FontAwesomeIcon icon={faFacebookSquare}/></h1>
        </div>
        <ul className='leading-5'>
          <li className='jawwadchoudhury text-[14px] text-[#909499] select-none mb-1.5'><a href="https://jawwadchoudhury.co.uk" target='_blank'>Website by Jawwad Choudhury</a></li>
          <li className='textitem text-[14px] text-[#909499] select-none'>‎</li>
          <li className='textitem text-[14px] text-[#909499] select-none'>‎</li>
          <li className='textitem text-[14px] text-[#909499] select-none'>‎</li>
          <li className='textitem text-[14px] text-[#909499] select-none'>‎</li>
        </ul>
      </div>
    </div>
    // <div className="bg-[#333] w-full bottom-0 left-0 pl-[10px] h-[10vh] flex select-none">
    //   <h1 className='text-white mt-auto mb-auto opacity-60'><p className={prompt.className}><Link href='/license' target='_blank'>© 2024 Jawwad Choudhury</Link><br/>Made entirely with NextJS, TailwindCSS and hosted with Vercel - all open source on <Link href="https://github.com/jawwadchoudhury/jawwadchoudhury" className='underline'>Github</Link>.</p></h1>
    // </div>
  )
}
