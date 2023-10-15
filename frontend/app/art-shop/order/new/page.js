'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import Dialog from '@/components/Dialog'
import BackButton from '@/components/BackButton'
import TextArea from '@/components/TextArea'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ky from '@/ky'

export default function OrderNew() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = data =>
    ky.post('api/new-picture-orders', { json: { data } })

  const [showDialog, setShowDialog] = useState(true)

  return (
    <Dialog closeUrl="/art-shop" showDialog={showDialog} setShowDialog={setShowDialog}>
      <form
        className="flex flex-col gap-[20px] p-[20px] w-[580px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <BackButton onClick={() => setShowDialog(false)} />
        <h1 className="text-[36px] sm:text-[32px] font-semibold mx-[10px]">
          Заказать картину
        </h1>
        <div className="flex flex-col gap-[15px]">
          <TextArea
            name="description"
            placeholder="Введите ваши пожелания"
            register={register}
            error={errors.description}
            validationSchema={{
              required: true,
              minLength: {
                value: 3,
                message: 'Слишком короткое описание',
              },
            }}
          />
          <TextField
            name="contact"
            register={register}
            placeholder="Введите почту или номер телефона"
            error={errors.contact}
            validationSchema={{
              required: true,
              minLength: 5,
            }}
          />
        </div>
        <div className="flex flex-col gap-[15px]">
          <Button compact type="submit">
            <Image
              src="/coins-stacked-03-gray-02.svg"
              alt="coins-stacked"
              width={24} height={24}
            />
            Заказать за 1 000 ₽
          </Button>
        </div>
      </form>
    </Dialog>
  )
}
