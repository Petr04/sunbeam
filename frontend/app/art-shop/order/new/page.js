'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Dialog from '@/components/Dialog'
import BackButton from '@/components/BackButton'
import TextArea from '@/components/TextArea'
import Button from '@/components/Button'

export default function OrderNew() {
  const [showDialog, setShowDialog] = useState(true)
  const dialog = useRef(null)

  return (
    <Dialog closeUrl="/art-shop" ref={dialog}>
      <div className="flex flex-col gap-[20px] p-[20px]">
        <BackButton onClick={() => dialog.current.closeDialog()} />
        <h1 className="text-[36px] sm:text-[32px] font-semibold mx-[10px]">
          Заказать картину
        </h1>
        <TextArea placeholder="Введите ваши пожелания" />
        <div className="flex flex-col gap-[15px]">
          <Button compact>
            <Image
              src="/coins-stacked-03-gray-02.svg"
              alt="coins-stacked"
              width={24} height={24}
            />
            Заказать за 1 000 ₽
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
