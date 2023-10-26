'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'

export default function LanguagePicker({ className }) {
  const pathName = usePathname()

  const redirectedPathName = (locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className={`flex flex-row gap-[5px] ${className}`}>
      {i18n.locales.map(locale => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className='lt:text-xl wide:text-2xl sm:text-base  text-primary dark:text-gray-02'
            >
              {locale}
            </Link>
          </li>
        )
      })}
      <Image
        className="dark:hidden"
        src="/chevron-down.svg"
        width={24}
        height={24}
        alt="Языки"
      />
      <Image
        className="hidden dark:block"
        src="/chevron-down-dark.svg"
        width={24}
        height={24}
        alt="Языки"
      />
    </div>
  )
}