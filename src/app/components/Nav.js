import Link from 'next/link'



export default function Nav({titulo, url}) {
  return (

    <nav>
        <div>
          <Link href={url} className="text-lg font-bold hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out p-3">{titulo}</Link>
        </div>
    </nav>
  )
}

//<Link href={url} className="text-lg font-bold">{titulo}</Link>