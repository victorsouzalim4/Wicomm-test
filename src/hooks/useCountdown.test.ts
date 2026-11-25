import { describe, expect, it } from 'vitest'
import { getTimeLeft } from './useCountdown'

describe('getTimeLeft', () => {
  const now = new Date('2026-11-25T12:00:00Z')

  it('separa o tempo restante em dias, horas, minutos e segundos', () => {
    const endsAt = new Date('2026-11-27T15:04:05Z')

    expect(getTimeLeft(endsAt, now)).toEqual({ days: 2, hours: 3, minutes: 4, seconds: 5 })
  })

  it('para em zero quando a oferta já terminou', () => {
    expect(getTimeLeft(new Date('2026-11-24T00:00:00Z'), now)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })
})
