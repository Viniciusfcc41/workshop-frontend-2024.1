import Link from 'next/link'
import Nav from './Nav'

export default function Footer() {
    return (
      <div className="bg-red-900 flex flex-col w-full items-center justify-between p-3">
          <div className='flex items-center justify-evenly w-2/12'>
            

              <a href="https://instagram.com/netflixbrasil" target="_blank">
              <img src="../images/instagramLogo.png" className='w-10 h-10'/>
              </a>
              <a href="https://twitter.com/NetflixBrasil" target="_blank">
              <img src="../images/twitterLogo.png" className='w-10 h-10'/>
              </a>
              <a href="https://www.tiktok.com/@netflixbrasil" target="_blank">
              <img src="../images/tiktokLogo.webp" className='w-10 h-10'/>
              </a>
          </div>
            <p className='text-white'>@2024 Netflix | All Rights Reserved</p>
      </div>
    )
  }