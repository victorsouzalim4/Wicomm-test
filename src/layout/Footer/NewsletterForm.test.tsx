import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { NewsletterForm } from './NewsletterForm'

const renderForm = () =>
  render(<NewsletterForm title="Receba ofertas" subtitle="Em primeira mão" />)

describe('NewsletterForm', () => {
  it('mostra um erro quando o e-mail é inválido', async () => {
    renderForm()

    await userEvent.type(screen.getByLabelText('Nome'), 'Ana')
    await userEvent.type(screen.getByLabelText('E-mail'), 'ana@')
    await userEvent.click(screen.getByRole('button', { name: 'Cadastrar' }))

    expect(screen.getByRole('alert')).toHaveTextContent('Preencha seu nome e um e-mail válido.')
    expect(screen.getByLabelText('E-mail')).toHaveAttribute('aria-invalid', 'true')
  })

  it('confirma a inscrição quando nome e e-mail são válidos', async () => {
    renderForm()

    await userEvent.type(screen.getByLabelText('Nome'), 'Ana')
    await userEvent.type(screen.getByLabelText('E-mail'), 'ana@exemplo.com')
    await userEvent.click(screen.getByRole('button', { name: 'Cadastrar' }))

    expect(screen.getByText(/Inscrição feita!/)).toBeInTheDocument()
    expect(screen.queryByRole('alert')).toBeNull()
  })
})
