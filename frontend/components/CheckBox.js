export default function CheckBox({ name, register, children, ...rest }) {
  return (
    <label className="flex items-start gap-[15px] text-[20px] text-gray-02">
      <input
        type="checkbox"
        className="accent-primary w-[24px] h-[24px] border-none"
        {...register(name)}
        {...rest}
      />
      {children}
    </label>
  )
}
