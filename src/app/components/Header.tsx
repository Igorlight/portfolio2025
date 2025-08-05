import React from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  return (
    <header className='border-b border-white/15 sticky top-0 z-50 bg-background'>
        <div className='max-w-[1632px] mx-auto px-4 flex items-center justify-between'>
        <Logo/>
        <Link href="https://wa.me/79141056954" target="_blank" className='hover:text-white/80 transition-colors'>Написать мне</Link>
        </div>
    </header>
  )
}
