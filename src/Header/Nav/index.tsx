'use client'

import React from 'react'
import Link from 'next/link'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-3 items-center">
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="link" />
      })}
      <div className="flex flex-column gap-4">
        <Link href="https://www.facebook.com/theopeningdoorsprojectricelane">F</Link>
        <Link href="https://www.instagram.com/openingdoorsproject">I</Link>
      </div>
    </nav>
  )
}
