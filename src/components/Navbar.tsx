'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from 'react'

function Navbar() {

    const pathName = usePathname()

    const navLinks = [
        {
            href: '/',
            title: 'home'
        },
        {
            href: '/store',
            title: 'store'
        },
    ]

  return (
    <nav className="shadow">
        {
            navLinks.map((item) => (
                <Link className={`mr-4 ${pathName === item.href ? "text-sky-700" : ""}`} key={item.href} href={item.href}> 
                {item.title}
                </Link>
            ))    
        }

    </nav>
  )
}

export default Navbar