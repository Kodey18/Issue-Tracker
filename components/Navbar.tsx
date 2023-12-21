"use client"

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const currentPath = usePathname();

    const navlinks = [
        {label : "Dashboard", href : "/"},
        {label : "issues", href : "/issues"},
    ]

  return (
    <nav className='flex space-x-8 p-3 px-8 border-b-2'>

        <Link href={"/"} className='bg-gray-400  rounded-[20px]'>
            <img src="/logo.png" alt="Logo" className='h-[40px] w-[40px]'/>
        </Link>

        <ul className='flex space-x-10 items-center font-semibold text-[20px]'>
            {
                navlinks.map((link) => 
                    <li>
                        <Link
                            key={link.href}
                            href={link.href}
                            className={
                                classNames({
                                    'text-zinc-900' : link.href === currentPath,
                                    'text-zinc-500' : link.href !== currentPath,
                                })
                            }
                        > {link.label} </Link>
                    </li>
                )
            }
        </ul>

    </nav>
  )
}

export default Navbar