import Image from 'next/image'
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import resolveConfig from 'tailwindcss/resolveConfig'
import twConfig from '@/tailwind.config.js'
import { InfinitySpin } from 'react-loader-spinner'

function useContent({ children, isLoading, isError, isSuccess, errorMessage, successMessage, loaderColor }) {
  const tw = useMemo(() => resolveConfig(twConfig))

  if (isLoading)
    return (
      <div className="m-[-20px]">
        <InfinitySpin
          width={150}
          color={tw.theme.colors[loaderColor] || loaderColor || tw.theme.colors['gray-04']}
        />
      </div>
    )

  if (isError)
    return <>
      <Image
        src="/alert-octagon-white.svg"
        width={24} height={24}
        alt="alert"
      />
      {errorMessage}
    </>

  if (isSuccess)
    return <>
      <Image
        src="/check-white.svg"
        width={24} height={24}
        alt="check"
      />
      {successMessage}
    </>

  return children
}

function useColor({ isLoading, isError, isSuccess }) {
  const tw = useMemo(() => resolveConfig(twConfig))

  if (isError)
    return {
      color: tw.theme.colors.white,
      background: tw.theme.colors.error
    }

  if (isSuccess)
    return {
      color: tw.theme.colors.white,
      background: tw.theme.colors.success
    }
}

export default function Button({
  isError,
  isLoading,
  isSuccess,
  errorMessage,
  successMessage,
  loaderColor,
  children,
  className,
  compact,
  ...rest
}) {
  return <button
    className={
      twMerge(
        `flex gap-[20px] ${compact ? 'px-[24px] py-[12px]' : 'px-[50px] py-[25px]'} rounded-[20px] text-[20px] text-gray-04 bg-primary dark:text-gray-02 dark:bg-gray-04 dark:font-medium justify-center items-center shadow-md`,
        className,
      )
    }
    style={useColor({ isLoading, isError, isSuccess })}
    {...rest}
  >
    {useContent({ children, isLoading, isError, isSuccess, errorMessage, successMessage, loaderColor })}
  </button>
}
