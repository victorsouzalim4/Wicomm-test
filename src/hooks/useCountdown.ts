import { useEffect, useState } from 'react'

export interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

/** Tempo restante até `endsAt`, nunca negativo. */
export function getTimeLeft(endsAt: Date, now: Date = new Date()): TimeLeft {
  const totalSeconds = Math.max(0, Math.floor((endsAt.getTime() - now.getTime()) / 1000))

  return {
    days: Math.floor(totalSeconds / 86_400),
    hours: Math.floor((totalSeconds % 86_400) / 3_600),
    minutes: Math.floor((totalSeconds % 3_600) / 60),
    seconds: totalSeconds % 60,
  }
}

/** Contador regressivo que atualiza a cada segundo e para ao chegar a zero. */
export function useCountdown(endsAt: string): TimeLeft {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(new Date(endsAt)))

  useEffect(() => {
    const end = new Date(endsAt)
    const tick = () => {
      const next = getTimeLeft(end)
      setTimeLeft(next)
      return Object.values(next).some((value) => value > 0)
    }

    if (!tick()) return
    const interval = setInterval(() => {
      if (!tick()) clearInterval(interval)
    }, 1000)
    return () => clearInterval(interval)
  }, [endsAt])

  return timeLeft
}
