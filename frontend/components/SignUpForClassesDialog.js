'use client'

import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import DialogWithLayout from '@/components/DialogWithLayout'
import TextArea from '@/components/form/TextArea'
import TextField from '@/components/form/TextField'
import CheckBox from '@/components/form/CheckBox'
import Button from '@/components/Button'
import ky from '@/ky'

export default function SignUpForClassesDialog({ show }) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [forFree, setForFree] = useState(false)
  const [status, setStatus] = useState(null)

  const onSubmit = useCallback(async (data) => {
    setTimeout(() => setStatus(st => st === null ? 'loading' : st), 700)
    ky.post('api/applicants', { json: { data } })
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'))
  })

  return (
    <DialogWithLayout
      closeUrl="/"
      showDialog={show}
      className="w-[450px]"
    >
      <form
        className="flex flex-col gap-[20px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          name="fullName"
          placeholder="ФИО ученика"
          register={register}
          error={errors.fullName}
          validationSchema={{
            required: true,
            validate: value => (value.trim().split(/\s+/).length >= 2)
              || 'Введите фамилию и полное имя ученика, а также отчество при наличии'
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
        <CheckBox
          name="forFree"
          register={register}
          onChange={() => setForFree(v => !v)}
        >Хочу заниматься бесплатно</CheckBox>
        {forFree && <p className="text-[16px] text-gray-01">
          Когда придёте на занятия, принесите документы, подтверждающие льготу
        </p>}
        <TextArea
          name="comment"
          placeholder="Можете добавить комментарий или задать вопрос"
          register={register}
        />
        <Button
          type="submit"
          isLoading={status === 'loading'}
          isError={status === 'error'}
          isSuccess={status === 'success'}
          errorMessage="Ошибка. Попробовать снова"
          successMessage="Заявка отправлена"
        >
          Оставить заявку
        </Button>
        {
          status === 'success' &&
            <div className="text-gray-01 text-[20px] w-full text-center">
              Скоро мы свяжемся с вами
            </div>
        }
      </form>
    </DialogWithLayout>
  )
}
