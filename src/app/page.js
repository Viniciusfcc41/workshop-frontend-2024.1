'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {

  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/shows')
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-0 m-0 bg-[#181818]">
      <div className="w-full bg-gradient-to-b from-red-900 to-transparent">
        <h1 className="text-5xl text-white text-center font-bold mt-3" id='teste'>Nosso catálogo</h1>
      </div>

      <input type="text" className="p-4 mt-4 rounded-lg font-bold text-sm text-left" onChange={(e) => 
        setSearch(e.target.value)} placeholder='Insira aqui o nome da série'/>

      <div className="flex flex-row flex-wrap justify-evenly gap-x-2 gap-y-14 py-10">
      {items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      .map((item) => (
      
            <div key={item.id} className="flex flex-row bg-white rounded-lg border-4 min-w-96 min-h-72 max-w-96">
              <img src={item.image.medium} className="rounded-lg max-h-96 max-w-48"/>
              <div className='flex flex-col px-2 w-full'>
                <h2 className="font-bold text-2xl">{item.name}</h2>
                <p className="">Gênero&#40;s&#41;:</p>
                <div className='flex flex-col justify-between h-full w-full'>
                <ul className='text-sm text-gray-500'>
                  <li>{item.genres[0]}</li>
                  <li>{item.genres[1]}</li>
                  <li>{item.genres[2]}</li>
                </ul>

                <div className='flex flex-col justify-evenly h-20'>

                  <button className='text-white bg-red-600 rounded-lg p-1 hover:bg-red-800 transition-all ease-out 
                  duration-300'>Assistir</button>

                  <button className='text-gray-500 border border-gray-500 rounded-lg p-1 hover:bg-gray-500
                   hover:text-white transition-all ease-out duration-300'>Saiba mais</button>
                </div>
                </div>

              </div>
            </div>
          ))}
      </div>
      

   </main>
  )
}

