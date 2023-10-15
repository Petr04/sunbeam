'use client'

import { useState, useMemo } from 'react'
import { usePictureContext } from '../PictureProvider'
import { useForm } from 'react-hook-form'
import resolveConfig from 'tailwindcss/resolveConfig'
import twConfig from '@/tailwind.config.js'
import ky from '@/ky'
import Image from 'next/image'
import { InfinitySpin } from 'react-loader-spinner'
import PictureTitle from '@/components/PictureTitle'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import CheckBox from '@/components/CheckBox'

function processData(data) {
  return {
    ...data,
    fullName: `${data.firstName} ${data.lastName} ${data.fatherName}`,
    deliveryAddress: data.pickup ? 'pickup' : data.deliveryAddress,
  }
}

function statusToButtonContent(status) {
  const tw = useMemo(() => resolveConfig(twConfig))

  if (status === null)
    return 'Заказать за 1 000 ₽'

  if (status === 'created')
    return (
      <div className="m-[-20px]">
        <InfinitySpin
          width={150}
          color={tw.theme.colors['gray-04']}
        />
      </div>
    )

  if (status === 'expired' || status === 'error')
    return <>
      <Image
        src="/alert-octagon-white.svg"
        width={24} height={24}
        alt="alert"
      />
      Ошибка. Попробовать снова
    </>

  if (status === 'paid')
    return <>
      <Image
        src="/check-white.svg"
        width={24} height={24}
        alt="check"
      />
      Оплачено
    </>
}

function statusToColor(status) {
  const tw = useMemo(() => resolveConfig(twConfig))

  if (status === 'expired' || status === 'error')
    return {
      color: tw.theme.colors.white,
      background: tw.theme.colors.error
    }

  if (status === 'paid')
    return {
      color: tw.theme.colors.white,
      background: tw.theme.colors.success
    }

  return {
    color: tw.theme.colors['gray-04'],
    background: tw.theme.colors.primary
  }
}

export default function Buy() {
  const picture = usePictureContext()

  const { register, handleSubmit, formState: { errors }, getValues } = useForm()

  const [status, setStatus] = useState(null)

  const onSubmit = async data => {
    const response = await ky.post('api/orders', { json: { data: processData(data) } }).json()
    window.open(response.data.invoiceUrl, '_blank')

    const interval = setInterval(async () => {
      const check = await ky.get('api/orders/' + response.data.id).json()
      setStatus(check.data?.status || 'error')

      if (status === 'paid' || status === 'expired')
        clearInterval(interval)
    }, 2000)
  }

  return (
    <div className="flex flex-col gap-[40px]">
      <PictureTitle picture={picture} />
      <form
        className="flex flex-col gap-[15px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          name="lastName"
          placeholder="Фамилия"
          register={register}
          error={errors.lastName}
          validationSchema={{
            required: true,
            minLength: 2,
          }}
        />
        <TextField
          name="firstName"
          placeholder="Имя"
          register={register}
          error={errors.firstName}
          validationSchema={{
            required: true,
            minLength: 2,
          }}
        />
        <TextField
          name="fatherName"
          placeholder="Отчество"
          register={register}
          error={errors.fatherName}
          validationSchema={{
            required: true,
            minLength: 2,
          }}
        />
        <TextField
          name="phoneNumber"
          placeholder="Телефон"
          register={register}
          error={errors.phoneNumber}
          validationSchema={{
            required: true,
            minLength: 5,
          }}
        />
        <TextField
          name="email"
          placeholder="Почта"
          register={register}
          error={errors.email}
          validationSchema={{
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Некорректный email'
            }
          }}
        />
        <TextField
          name="deliveryAddress"
          placeholder="Адрес доставки"
          register={register}
          error={errors.deliveryAddress}
          validationSchema={{
            validate: value => (getValues().pickup || value.trim().length > 0)
              || 'Укажите адрес доставки или выберите самовывоз',
          }}
        />
        <CheckBox
          name="pickup"
          register={register}
        >
          Самовывоз по адресу<br/>г. Омск, ул. Энегретиков, 70
        </CheckBox>
        <Button
          type="submit"
          className="py-[20px]"
          style={statusToColor(status)}
        >
          {statusToButtonContent(status)}
        </Button>
      </form>
    </div>
  )
}
