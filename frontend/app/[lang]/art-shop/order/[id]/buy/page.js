'use client'

import { useState, useMemo, useCallback } from 'react'
import { usePictureContext } from '../PictureProvider'
import { useForm } from 'react-hook-form'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import handleReCaptchaVerify from '@/lib/handleReCaptchaVerify'
import ky from '@/ky'
import Image from 'next/image'
import PictureTitle from '@/components/picture/PictureTitle'
import TextField from '@/components/form/TextField'
import Button from '@/components/Button'
import CheckBox from '@/components/form/CheckBox'

function processData(data) {
  return {
    ...data,
    fullName: `${data.firstName} ${data.lastName} ${data.fatherName}`,
    deliveryAddress: data.pickup ? 'pickup' : data.deliveryAddress,
  }
}

export default function Buy() {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const picture = usePictureContext()
  const { register, handleSubmit, formState: { errors }, getValues } = useForm()
  const [status, setStatus] = useState(null)

  const onSubmit = async data => {
    const token = await handleReCaptchaVerify(executeRecaptcha)

    const response = await ky.post('api/orders', { json: { data:
      {
        recaptchaResponseKey: token,
        ...processData(data)
      }
    } }).json()
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
        className="flex flex-col gap-[40px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-[15px]">
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
        </div>

        <div className="flex flex-col gap-[15px]">
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
        </div>
        <div className="flex flex-col gap-[15px]">
          <CheckBox
            name="personalDataConsent"
            register={register}
            error={errors.personalDataConsent}
            validationSchema={{
              required: {
                value: true,
                message: 'Подтвердите согласие'
              }
            }}
          >
            <p>
              Согласен на обработку персональных данных
            </p>
          </CheckBox>
          <CheckBox
            name="recaptchaConsent"
            register={register}
            error={errors.recaptchaConsent}
            validationSchema={{
              required: {
                value: true,
                message: 'Подтвердите согласие'
              }
            }}
          >
            <p>
              Согласен с <a href="https://policies.google.com/privacy">политикой конфиденциальности</a> и <a href="https://policies.google.com/terms">условиями обслуживания</a> ReCaptcha
            </p>
          </CheckBox>
          <Button
            type="submit"
            className="py-[20px] dark:bg-primary dark:text-gray-04"
            isLoading={status === 'created'}
            isError={status === 'expired' || status === 'error'}
            isSuccess={status === 'paid'}
            errorMessage="Ошибка. Попробовать снова"
            successMessage="Оплачено"
          >
            Заказать за 1 000 ₽
          </Button>
        </div>
      </form>
    </div>
  )
}
