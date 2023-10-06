import FormError from '@/components/FormError'

export default function TextField({ name, register, error, validationSchema, ...rest }) {
  return (
    <div className="flex flex-col gap-[5px]">
      <input
        type="text"
        className="bg-gray-04 p-[20px] rounded-[20px] resize-none outline-none placeholder-placeholder text-[20px] w-full"
        {...register(name, validationSchema)}
        {...rest}
      />

      {error?.type === 'required' && (
        <FormError>Заполните это поле</FormError>
      )}

      {error?.type === 'minLength' && (
        <FormError>{error.message}</FormError>
      )}
    </div>
  )
}
