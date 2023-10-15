import FormError from '@/components/FormError'

export default function CheckBox({ name, register, error, validationSchema, children, ...rest }) {
  return (
    <div className="flex flex-col gap-[5px]">
      <label className="flex items-baseline gap-[15px] text-[18px] text-gray-02">
        <input
          type="checkbox"
          className="accent-primary"
          style={{transform: 'scale(1.5)', border: 'none', outline: 'none'}}
          {...register(name, validationSchema)}
          {...rest}
        />
        {children}
      </label>

      {error?.type === 'required' && (
        <FormError>{error.message || 'Заполните это поле'}</FormError>
      )}
    </div>
  )
}
