//import './css/Navbar.css'
import { Prompt } from 'next/font/google'

const prompt = Prompt({
  subsets: ['latin'], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function Navbar() {
  return (
    <div className="bg-[#333] w-full bottom-0 left-0 pl-[10px] h-[10vh] flex select-none">
      <h1 className='text-white opacity-[60%] mt-auto mb-auto'><p className={prompt.className}>© 2024 Jawwad Choudhury<br/>Made entirely with NextJS, TailwindCSS and hosted with Firebase</p></h1>
    </div>
  )
}
