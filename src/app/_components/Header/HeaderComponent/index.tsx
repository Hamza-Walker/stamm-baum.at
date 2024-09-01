'use client'

import { Gutter } from '../../Gutter'
import { Header } from '../../../../payload/payload-types'
import { HeaderNav } from '../Nav'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import classes from './index.module.scss'
import logo from '../../../../../public/stamm-baum-logo.png'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()

  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image src={logo} alt="Logo" width={170} height={40} className={classes.logo} />
        </Link>

        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}
export default HeaderComponent
