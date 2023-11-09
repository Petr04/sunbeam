'use client'

import Image from 'next/image'
import Link from 'next/link'
import DialogWithLayout from '@/components/DialogWithLayout'
import Button from '@/components/Button'
import { theme } from '@/tailwind.config.js'

const buttons = [
  {
    label: 'Купить картину',
    icon: '/image-03-gray-04.svg',
    href: '/art-shop',
  },
  {
    label: 'Заказать картину',
    icon: '/brush-01-gray-04.svg',
    href: '/art-shop/order/new',
  },
  {
    label: 'Поддерживать регулярно',
    icon: '/boosty-white.svg',
    background: '#F15F2C',
    textColor: 'white',
  },
  {
    label: 'Отправить деньги',
    icon: '/coins-hand-white.svg',
    background: theme.colors['gray-04'],
    textColor: 'white',
  },
  {
    label: 'Отправить криптовалюту',
    icon: '/currency-bitcoin-white.svg',
    background: theme.colors['gray-04'],
    textColor: 'white',
    href: '?support=true&send=crypto'
  },
]

export default function SupportDialog() {
  return (
    <>
      {buttons.map(button => (
        <Link
          href={button.href || ''}
          scroll={false}
          key={button.label}
        >
          <Button
            className="w-full"
            style={{
              background: button.background || '',
              color: button.textColor || '',
            }}
          >
            <Image
              src={button.icon}
              alt={button.icon.slice(1)}
              width={24} height={24}
            />
            {button.label}
          </Button>
        </Link>
      ))}
    </>
  )
}
