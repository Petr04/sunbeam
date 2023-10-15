import { useMemo } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import twConfig from '@/tailwind.config.js'

export default function statusToColor(status) {
  const tw = useMemo(() => resolveConfig(twConfig))

  if (status === 'expired' || status === 'error')
    return {
      color: tw.theme.colors.white,
      background: tw.theme.colors.error
    }

  if (status === 'paid' || status === 'success')
    return {
      color: tw.theme.colors.white,
      background: tw.theme.colors.success
    }

  return {
    color: tw.theme.colors['gray-04'],
    background: tw.theme.colors.primary
  }
}
