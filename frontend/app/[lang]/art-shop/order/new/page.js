'use client'

import { useState, useMemo, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { handleReCaptchaVerify } from '@/components/ReCaptchaProviderClient'
import Image from 'next/image'
import Dialog from '@/components/Dialog'
import BackButton from '@/components/BackButton'
import TextArea from '@/components/form/TextArea'
import TextField from '@/components/form/TextField'
import Button from '@/components/Button'
import ky from '@/ky'

export default function OrderNew() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [status, setStatus] = useState(null)

  const { executeRecaptcha } = useGoogleReCaptcha()

  const onSubmit = useCallback(async data => {
    setTimeout(() => setStatus(st => st === null ? 'loading' : st), 700)
    const token = await handleReCaptchaVerify(executeRecaptcha)
    const response = await ky.post('api/new-picture-orders', { json: { data: {
      recaptchaResponseKey: token,
      ...data
    }}})

    if (response.ok)
      setStatus('success')
    else
      setStatus('error')
  }, [status, executeRecaptcha])

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
          <Button
            className="dark:bg-primary dark:text-gray-04"
            compact
            type="submit"
            isLoading={status === 'loading'}
            isError={status === 'error'}
            isSuccess={status === 'success'}
            errorMessage="Ошибка. Попробовать снова"
            successMessage="Отправлено"
          >
            <Image
              src="/coins-stacked-03-gray-04.svg"
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
