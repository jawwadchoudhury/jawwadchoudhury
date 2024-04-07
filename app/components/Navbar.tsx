import Link from 'next/link';
import './css/Navbar.css'
import { Poppins, IBM_Plex_Mono, Prompt } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const prompt = Prompt({
  subsets: ['latin'], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
})

export default function Navbar() {
  return (
    /*<nav classNameName="bg-[#333] p-4 sticky top-0 drop-shadow-xl z-10 h-[10vh] items-center content-between w-[100%]">
        <div classNameName="prose prose-xl flex justify-between flex-col sm:flex-row">
          <div classNameName={ibmPlexMono.classNameName}>
            <Link href="/" classNameName='title'>&gt; Jawwad Choudhury</Link>
          </div>
          <div classNameName={poppins.classNameName}>
            <ul classNameName="flex float-right absolute right-0 pr-[5vw]">
              <li><Link href="/#" className='link'>Projects</Link></li>
              <li><Link href="/#" className='link'>About</Link></li>
              <li><Link href="/#" className='link'>Contact</Link></li>
            </ul>
          </div>
        </div>
    </nav> */
    <div>
      <nav className="bg-[#333] fixed w-[100vw] z-20 top-0 left-0">
        <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
          <Link className='logo' href="/">
            <h3 className='title'><p className={ibmPlexMono.className}>&gt; jawwad choudhury</p></h3>
          </Link>
          <input type="checkbox" id="check" />

          <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
            <li><Link href="/about" className='link'><p className={prompt.className}>About</p></Link></li>
            <li><Link href="/projects" className='link'><p className={prompt.className}>Projects</p></Link></li>
            <li><Link href="/contact" className='link'><p className={prompt.className}>Contact</p></Link></li>

            <label htmlFor="check" className="close-menu"><FontAwesomeIcon icon={faXmark} /></label>
          </span>

          <label htmlFor="check" className="open-menu"><FontAwesomeIcon icon={faBars} /></label>
        </ul>
      </nav>
    </div>


  
  )
}
