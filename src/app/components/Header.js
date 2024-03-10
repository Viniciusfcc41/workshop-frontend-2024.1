import Link from 'next/link'
import Nav from './Nav'

export default function Header() {
  return (
    <div className="bg-[#060606] flex items-center justify-between p-3">
        <div>
            <img src="../images/netflixLogo.png" className="w-30 h-10"/>
        </div>

        <div className="flex items-center justify-between gap-x-4 text-white">
          <Nav titulo="Inicio" url="./app/page"/>
          <Nav titulo="Destaques" url="/"/>
          <Nav titulo="Sobre" url="/"/>
        </div>
    </div>
  )
}