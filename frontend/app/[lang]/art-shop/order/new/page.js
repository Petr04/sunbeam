'use client'

import { useState, useMemo, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { handleReCaptchaVerify } from '@/components/order/ReCaptchaProviderClient'
import statusToColor from '@/lib/statusToColor'
import resolveConfig from 'tailwindcss/resolveConfig'
import twConfig from '@/tailwind.config.js'
import Image from 'next/image'
import Dialog from '@/components/Dialog'
import BackButton from '@/components/BackButton'
import TextArea from '@/components/art-shop/TextArea'
import TextField from '@/components/art-shop/TextField'
import Button from '@/components/Button'
import { InfinitySpin } from 'react-loader-spinner'
import ky from '@/ky'

function statusToButtonContent(status) {
  const tw = useMemo(() => resolveConfig(twConfig))

  if (status === 'loading')
    return (
      <div className="m-[-20px]">
        <InfinitySpin
          width={150}
          color={tw.theme.colors['gray-04']}
        />
      </div>
    )

  if (status === 'error')
    return <>
      <Image
        src="/alert-octagon-white.svg"
        width={24} height={24}
        alt="alert"
      />
      Ошибка. Попробовать снова
    </>

  if (status === 'success')
    return <>
      <Image
        src="/check-white.svg"
        width={24} height={24}
        alt="check"
      />
      Отправлено
    </>

  return <>
    <Image
      src="/coins-stacked-03-gray-04.svg"
      alt="coins-stacked"
      width={24} height={24}
    />
    Заказать за 1 000 ₽
  </>
}

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
            compact
            type="submit"
            style={statusToColor(status)}
          >
            {statusToButtonContent(status)}
          </Button>
        </div>
      </form>
    </Dialog>
  )
}
