'use client';
import React from 'react';
import './contact.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Prompt } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const prompt = Prompt({
    subsets: ['latin'], 
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  })

export default function Contact() {
    
    async function handleSubmit(event) {
        console.log(process.env.ACCESS_KEY)
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", process.env.ACCESS_KEY.toString());

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            alert("Your email has been sent!")
        }
    }

  return (
    
    <div className="bg-[#1d1f21] w-full bottom-0 left-0 mt-[10vh] h-[90vh] py-[30px] text-white flex flex-col justify-between float-left">
      <div className='inline-block bg-gray-600 mx-[20px] w-[1000px]'>
        <h1>Hello</h1>
      </div>
      <div className='inline-block bg-gray-600 mx-[20px] w-[1000px]'>
        <h1>World</h1>
      </div>
    </div>
    // <main className='pt-[16vh] h-[90vh] text-white'>
    //     <div className='bg-[#333] float-left w-[45vw] ml-[4vw] h-[68.5vh] flex flex-col justify-between'>
    //         <form onSubmit={handleSubmit} className='mt-[2.5vh]'>
    //           <input className="w-[40vw] mt-[5vh] ml-[2.5vw] border-[2px] border-white bg-inherit mb-5 opacity-60 placeholder:text-white rounded-[5px] h-[7.5vh] pl-3" placeholder="Name" type="text" name="name" required/>
    //           <input className="w-[40vw] ml-[2.5vw] border-[2px] border-white bg-inherit mb-5 mt-5 opacity-60 placeholder:text-white rounded-[5px] h-[7.5vh] pl-3" placeholder="Email" type="email" name="email" required/>
    //           <textarea className="w-[40vw] ml-[2.5vw] border-[2px] border-white bg-inherit mt-5 opacity-60 placeholder:text-white resize-none rounded-[5px] h-[20vh] pt-[1vw] pl-3" placeholder="Message" name="message" required minLength={40} maxLength={500}/>
    //           <button className="ml-auto mr-auto block text-[#333] bg-white  hover:bg-slate-0 font-medium bg-inherit rounded-lg text-sm mb-2 border-[2px] px-20 py-3 mt-8" type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
    //         </form>
    //     </div>
    //     <div className='bg-[#333] float-right w-[45vw] mr-[4vw] h-[68.5vh] flex flex-col justify-between'>
    //       <ul className='absolute top-[50%] translate-y-[-50%] w-full'>
    //         <li className='mb-5'>
    //         <ul className='text-[1.5vw] ml-[10vw]'>
    //           <li className='mb-5'><FontAwesomeIcon icon={faLocationDot}/> <span className={prompt.className}>Surrey, UK</span></li>
    //           <li className='mb-5'><FontAwesomeIcon icon={faPhone}/> <span className={prompt.className}>+44 7453 412433</span></li>
    //           <li className='mb-5'><FontAwesomeIcon icon={faEnvelope}/> <span className={prompt.className}>contact@jawwadchoudhury.co.uk</span></li>
    //         </ul>
    //         </li>
    //         <div className='h-0.5 w-[45%] bg-white'/>
    //         <li>
    //         <ul className='ml-[15vw] mt-5'>
    //           <button className='bg-[#fff] text-[#333] w-[5vw] h-[5vw] text-[2vw] rounded-[50%]'><FontAwesomeIcon icon={faInstagram}/></button>
    //           <button className='bg-[#fff] text-[#333] w-[5vw] h-[5vw] text-[2vw] rounded-[50%] ml-[5vw]'><FontAwesomeIcon icon={faXTwitter}/></button>
    //         </ul>
    //         </li>
    //       </ul>
    //     </div>
    // </main>
  );
}