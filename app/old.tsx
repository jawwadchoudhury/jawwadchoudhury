import './home.css'
import { Prompt } from 'next/font/google'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

const prompt = Prompt({
  subsets: ['latin'], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function Home() {
  return (
    <>
    <main className="mx-auto min-h-[100%] relative">
      <div id="screen" data-src="https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg">
        <h1 className='landingh1'><p className={prompt.className}><span className='font-bold'>Hi, I&apos;m Jawwad.</span></p></h1>
        <h2 className='desc'><p className={prompt.className}>(Web Developer and Programmer)</p></h2>
        <h2 className="profiles"><Link href='https://github.com/jawwadchoudhury' rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></Link><Link href='https://twitter.com/jawwadchoudhury' rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></Link><Link href='https://www.instagram.com/jawwadchoudhury/' rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link></h2>
      </div>
      <div className="pt-5 pb-10 bg-[#444]">
        <h3 className='pb-5'><p className={prompt.className}>I&apos;m a web developer from the UK, and have several years of experience on all sorts of frameworks and tools, and can design and create responsive websites efficiently for all devices and platforms.</p></h3>
        <h3 className="text-3xl pb-7"><p className={prompt.className}>Here&apos;s what I can do...</p></h3>
        <div className='flex flex-wrap gap-[1vw]'>
          <div className='card html'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='cardsvg'>
              <path fill="#b9b9b9" d="M71,460 L30,0 481,0 440,460 255,512" className='outside'/>
              <path fill="#b9b9b9" d="M256,472 L405,431 440,37 256,37" className='outside'/>
              <path fill="#d4d4d4" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z" className='inside'/>
              <path fill="#d4d4d4" d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z" className='inside'/>
            </svg>
          </div>
          <div className='card css'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='cardsvg'>
            <path fill="#b9b9b9" d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z" className='outside'/>
            <path fill="#b9b9b9" d="M405.388 431.408l35.148-393.73H256v435.146z" className='outside'/>
            <path fill="#d4d4d4" d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z" className='inside'/>
            <path fill="#d4d4d4" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z" className='inside'/>
          </svg>
          </div>
          <div className='card js'>
          <svg viewBox="0 0 452 520" className='cardsvg'>
            <path fill='#b9b9b9' d='M 0,0 L 451,0 410,460 225,512 41,460' className='outside'/>
            <path fill='#b9b9b9' d='M 226,472 L375,431 410,37 226,37' className='outside'/>
            <path fill='#d4d4d4' d='M 226,94 L 113,94 102,265 226,265 226,208 160,208 165,150 226,150 z M 226,355 L 162,338 158,293 102,293 109,382 226,414 z' className='inside'/>
            <path fill='#d4d4d4' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L 339,94 357,180 301,180 293,150 226,150 z' className='inside'/>
          </svg>
          </div>
        </div>
        <h3 className='text-2xl pb-7 mt-7'><p className={prompt.className}>and much more...</p></h3>
      <div className='flex flex-wrap'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" version="1.1" preserveAspectRatio="xMidYMid" className='moresvg'>
              <path fill="#d4d4d4" d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" version="1.1" className='moresvg'>
          <path fill="#d4d4d4" d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" viewBox="0 0 512 512" className='moresvg'>
          <path fill="#d4d4d4" d="M401.054,224c3.714,4.115,4.595,11.181,2.653,21.19c-2.029,10.425-5.935,17.862-11.723,22.32   c-5.793,4.458-14.602,6.687-26.432,6.687h-17.849l10.957-56.37h20.103C389.913,217.827,397.34,219.886,401.054,224z    M149.754,217.827h-20.103l-10.958,56.37h17.848c11.827,0,20.639-2.229,26.432-6.687c5.789-4.458,9.694-11.896,11.723-22.32   c1.942-10.01,1.06-17.075-2.653-21.19C168.33,219.886,160.903,217.827,149.754,217.827z M511.5,256   c0,74.229-114.393,134.403-255.5,134.403S0.5,330.229,0.5,256c0-74.228,114.393-134.403,255.5-134.403S511.5,181.772,511.5,256z    M198.542,265.286c3.04-5.448,5.203-11.461,6.483-18.037c3.102-15.967,0.761-28.403-7.024-37.313   c-7.781-8.91-20.165-13.363-37.136-13.363h-56.423L78.265,331.261h29.342l6.958-35.805h25.134c11.087,0,20.21-1.164,27.372-3.497   c7.161-2.329,13.669-6.233,19.528-11.719C191.514,275.72,195.493,270.738,198.542,265.286z M301.814,295.456l12.181-62.682   c2.479-12.747,0.619-21.971-5.572-27.664c-6.196-5.688-17.449-8.537-33.768-8.537h-25.933l6.961-35.81h-29.11l-26.182,134.692   h29.11l14.996-77.165h23.267c7.448,0,12.317,1.232,14.604,3.698c2.287,2.467,2.773,7.091,1.455,13.869l-11.581,59.598H301.814z    M427.011,209.937c-7.78-8.91-20.164-13.363-37.135-13.363h-56.424l-26.178,134.688h29.343l6.957-35.805h25.135   c11.086,0,20.21-1.164,27.371-3.497c7.161-2.329,13.669-6.233,19.528-11.719c4.92-4.521,8.896-9.502,11.943-14.954   c3.044-5.448,5.202-11.461,6.483-18.037C437.137,231.282,434.796,218.846,427.011,209.937z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill='#d4d4d4' viewBox="0 0 32 32" className='moresvg'>
          <path d="M8.562,15.256A21.159,21.159,0,0,0,16,16.449a21.159,21.159,0,0,0,7.438-1.194c1.864-.727,2.525-1.535,2.525-2V9.7a10.357,10.357,0,0,1-2.084,1.076A22.293,22.293,0,0,1,16,12.078a22.36,22.36,0,0,1-7.879-1.3A10.28,10.28,0,0,1,6.037,9.7v3.55C6.037,13.724,6.7,14.528,8.562,15.256Z"/>
          <path d="M8.562,21.961a15.611,15.611,0,0,0,2.6.741A24.9,24.9,0,0,0,16,23.155a24.9,24.9,0,0,0,4.838-.452,15.614,15.614,0,0,0,2.6-.741c1.864-.727,2.525-1.535,2.525-2v-3.39a10.706,10.706,0,0,1-1.692.825A23.49,23.49,0,0,1,16,18.74a23.49,23.49,0,0,1-8.271-1.348,10.829,10.829,0,0,1-1.692-.825V19.96C6.037,20.426,6.7,21.231,8.562,21.961Z"/>
          <path d="M16,30c5.5,0,9.963-1.744,9.963-3.894V23.269a10.5,10.5,0,0,1-1.535.762l-.157.063A23.487,23.487,0,0,1,16,25.445a23.422,23.422,0,0,1-8.271-1.351c-.054-.02-.106-.043-.157-.063a10.5,10.5,0,0,1-1.535-.762v2.837C6.037,28.256,10.5,30,16,30Z"/>
          <ellipse cx="16" cy="5.894" rx="9.963" ry="3.894"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#d4d4d4" viewBox="0 0 32 32" version="1.1" className='moresvg'>
          <path d="M30.428 14.663l-13.095-13.094c-0.35-0.349-0.833-0.565-1.367-0.565s-1.017 0.216-1.367 0.565l0-0-2.713 2.718 3.449 3.449c0.22-0.077 0.473-0.121 0.737-0.121 1.269 0 2.297 1.028 2.297 2.297 0 0.269-0.046 0.526-0.131 0.766l0.005-0.016 3.322 3.324c0.222-0.079 0.479-0.125 0.746-0.125 1.268 0 2.296 1.028 2.296 2.296s-1.028 2.296-2.296 2.296c-1.268 0-2.296-1.028-2.296-2.296 0-0.313 0.063-0.611 0.176-0.883l-0.006 0.015-3.11-3.094v8.154c0.764 0.385 1.279 1.163 1.279 2.061 0 1.27-1.030 2.3-2.3 2.3s-2.3-1.030-2.3-2.3c0-0.634 0.256-1.207 0.671-1.623l-0 0c0.211-0.211 0.462-0.382 0.741-0.502l0.015-0.006v-8.234c-0.842-0.354-1.422-1.173-1.422-2.126 0-0.32 0.065-0.624 0.183-0.901l-0.006 0.015-3.389-3.405-8.98 8.974c-0.348 0.351-0.562 0.834-0.562 1.368s0.215 1.017 0.563 1.368l13.096 13.092c0.349 0.35 0.832 0.566 1.366 0.566s1.016-0.216 1.366-0.566l13.034-13.034c0.35-0.349 0.567-0.833 0.567-1.366s-0.217-1.017-0.567-1.366l-0-0z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#d4d4d4" viewBox="-1.5 0 24 24" className='moresvg'><path d="m10.639 24c-.001 0-.002 0-.003 0-.339 0-.656-.091-.928-.251l.009.005-2.937-1.737c-.438-.246-.224-.332-.08-.383.506-.159.946-.365 1.352-.618l-.024.014c.028-.013.06-.02.094-.02.046 0 .089.014.125.038l-.001-.001 2.256 1.339c.039.021.086.034.136.034s.097-.013.138-.035l-.002.001 8.794-5.077c.081-.05.134-.138.134-.238 0-.001 0-.001 0-.002v-10.147c-.001-.101-.055-.19-.136-.239l-.001-.001-8.791-5.072c-.039-.022-.086-.035-.135-.035s-.096.013-.137.036l.001-.001-8.789 5.073c-.083.049-.138.138-.139.24v10.149c0 .101.055.188.137.234l.001.001 2.41 1.392c1.307.654 2.107-.116 2.107-.889v-10.022c0-.14.114-.254.254-.254h.003 1.115.001c.14 0 .254.113.254.254v10.022c0 1.745-.95 2.746-2.604 2.746-.02 0-.043.001-.066.001-.725 0-1.402-.205-1.976-.56l-2.29-1.318c-.556-.328-.922-.923-.922-1.605v-10.151c.001-.68.368-1.273.914-1.595l.009-.005 8.795-5.082c.267-.149.585-.236.924-.236s.658.088.934.241l-.01-.005 8.794 5.082c.555.327.921.92.923 1.6v10.15c-.001.681-.368 1.276-.915 1.6l-.009.005-8.792 5.078c-.264.155-.582.246-.922.246-.002 0-.005 0-.007 0z"/><path d="m13.356 17.009c-3.848 0-4.655-1.766-4.655-3.249v-.001c0-.14.113-.253.253-.253h.002 1.137.001c.127 0 .232.093.252.214v.001c.171 1.158.683 1.742 3.01 1.742 1.853 0 2.64-.419 2.64-1.402 0-.567-.223-.987-3.102-1.269-2.406-.24-3.894-.77-3.894-2.695 0-1.774 1.496-2.833 4-2.833 2.818 0 4.212.978 4.388 3.076.001.007.001.015.001.022 0 .141-.114.254-.254.254h-1.133c-.12 0-.221-.085-.246-.198v-.002c-.274-1.218-.94-1.607-2.746-1.607-2.023 0-2.258.705-2.258 1.232 0 .64.278.826 3.009 1.187 2.702.358 3.986.863 3.986 2.762-.004 1.919-1.601 3.017-4.388 3.017z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#d4d4d4" viewBox="0 0 24 24" className='moresvg'><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </div>
      </div>
    </main>
    </>
    
  )
}
