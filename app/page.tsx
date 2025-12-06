'use client';

import './home.css'
import { Prompt } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';
import { useState } from 'react';

const prompt = Prompt({
  subsets: ['latin'], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})



export default function Home() {
  
  return (
    <>
        <div id="screen" data-src="https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg">
            <h1 className='landingh1'><p className={prompt.className}><span className='font-bold'>Steady on...</span></p></h1>
            <h2 className='desc'><p className={prompt.className}>The website&apos;s not ready just yet, but keep a watchful eye,<br/> and it&apos;ll be ready to go soon.</p></h2>
            <h2 className="profiles">
              <Link href='https://www.github.com/jawwadchoudhury' rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
              <Link href='https://www.instagram.com/jawwadchoudhury' rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
            </h2>
        </div>
    </>
    
  )
}
