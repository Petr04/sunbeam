'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '@/i18n.config'
import { useState, useCallback, useEffect } from 'react'



export default function LanguagePicker({ dark, className, lang }) {
  const pathName = usePathname()

  const redirectedPathName = (locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => setShowModal(!showModal)

  const hideMenu = useCallback(() => {
    if (window.innerWidth < 1180)
      setShowModal(false)
   }, [])

  useEffect(() => {
    hideMenu()
    window.addEventListener('resize', hideMenu)
    return () => window.removeEventListener('resize', hideMenu)
  }, [hideMenu]) 

  

  return (
    <>
      {showModal === false &&
        <div className={`flex flex-row gap-[5px] ${className} ${dark ? 'dark' : ''}`}  onClick={toggleModal}>  
          <p className="lt:text-xl wide:text-2xl sm:text-base  text-primary dark:text-gray-02">
            {lang}
          </p>
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
      }

      {showModal === true &&
        <div className={`flex flex-row gap-[5px] ps-[0.3rem] ${dark ? 'dark' : ''} bg-primary dark:bg-gray-02 rounded-[0.7rem] ${className}`}>   
        <ul className="flex flex-col">   
          {lang === "ru" &&
            i18n.locales.map(locale => {
              return (
                <li key={locale} className="list-none">
                  <Link
                    href={redirectedPathName(locale)}
                    className='lt:text-xl wide:text-2xl sm:text-base text-background'
                  >
                    {locale}
                  </Link>            
                </li>
              )
            }).reverse()
          }

          {lang === "en" &&
            i18n.locales.map(locale => {
              return (
                <li key={locale} className="list-none">
                  <Link
                    href={redirectedPathName(locale)}
                    className='lt:text-xl wide:text-2xl sm:text-base text-background'
                  >
                    {locale}
                  </Link>            
                </li>
              )
            })
          }
          
        </ul>

        <button onClick={toggleModal}>
          <Image
            className="mt-[-1.7rem]"
            src="/chevron-light-down.svg"
            width={24}
            height={24}
            alt="Языки"
          />
        </button>
      </div>
      }
    </>
  )
}