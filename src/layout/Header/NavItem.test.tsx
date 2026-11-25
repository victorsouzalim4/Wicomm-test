import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { NavItem } from './NavItem'

const perfumaria = {
  label: 'Perfumaria',
  href: '/perfumaria',
  children: [{ label: 'Kits', href: '/perfumaria/kits' }],
}

const renderItem = (item = perfumaria) =>
  render(
    <ul>
      <NavItem item={item} />
    </ul>,
  )

describe('NavItem', () => {
  it('abre o dropdown pelo clique e fecha com Esc', async () => {
    renderItem()
    const trigger = screen.getByRole('button', { name: 'Perfumaria' })

    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Ver tudo em Perfumaria' })).toHaveAttribute(
      'href',
      '/perfumaria',
    )

    await userEvent.keyboard('{Escape}')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('fecha ao clicar fora', async () => {
    renderItem()
    const trigger = screen.getByRole('button', { name: 'Perfumaria' })
    await userEvent.click(trigger)

    await userEvent.click(document.body)

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('vira um link simples quando não há subcategorias', () => {
    renderItem({ label: 'Promoções', href: '/promocoes', children: [] })

    expect(screen.getByRole('link', { name: 'Promoções' })).toHaveAttribute('href', '/promocoes')
  })
})
