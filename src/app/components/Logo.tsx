import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'

export default function Logo({className}: {className?: string}) {
  return (
    <Link href="/" className={cn('font-bold text-2xl py-4 hover:text-white/80 transition-colors', className)}>КИ</Link>
  )
}
