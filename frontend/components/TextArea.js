import TextareaAutosize from 'react-textarea-autosize'
import FormError from '@/components/FormError'

export default function TextArea({ name, register, error, validationSchema, ...rest }) {
  return (
    <div className="flex flex-col gap-[5px]">
      <TextareaAutosize
        className="bg-gray-04 p-[20px] rounded-[20px] resize-none outline-none placeholder-placeholder text-[20px] w-full"
        minRows={5}
        maxRows={10}
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