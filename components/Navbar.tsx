import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex space-x-8 p-4 px-8 border-b-2'>
        <Link href={"/"} className='bg-gray-400  rounded-[25px]'>
            <img src="/logo.png" alt="Logo" className='h-[50px] w-[50px]'/>
        </Link>
        <ul className='flex space-x-10 items-center font-semibold text-[20px]'>
            <li className='hover:text-slate-700'>
                <Link href={"/"}>Dashboard</Link>
            </li>
            <li className='hover:text-slate-700'>
                <Link href={"/issures"}>issues</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar