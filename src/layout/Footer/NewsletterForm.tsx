import { useId, useState, type FormEvent } from 'react'

interface NewsletterFormProps {
  title: string
  subtitle: string
}

type Status = 'idle' | 'error' | 'success'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Newsletter (Figma: faixa com degradê #050505 → #6B6B6B, inputs brancos de 40px, botão amarelo).
 * Não há backend: a inscrição é validada e confirmada na própria tela.
 */
export function NewsletterForm({ title, subtitle }: NewsletterFormProps) {
  const [status, setStatus] = useState<Status>('idle')
  const titleId = useId()
  const messageId = useId()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()

    if (!name || !EMAIL_PATTERN.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    event.currentTarget.reset()
  }

  const inputClasses =
    'h-10 rounded bg-white px-4 text-base text-black placeholder:text-neutral-500 sm:text-xs'

  return (
    <section aria-labelledby={titleId} className="bg-newsletter px-6 py-8 text-white md:px-14">
      <h2 id={titleId} className="text-xl font-bold md:text-2xl">
        {title}
      </h2>
      <p className="mt-1 text-sm">{subtitle}</p>

      {status === 'success' ? (
        <p aria-live="polite" className="mt-4 text-sm font-medium text-primary">
          Inscrição feita! Você vai receber nossas novidades por e-mail.
        </p>
      ) : (
        <form
          noValidate
          onSubmit={handleSubmit}
          aria-describedby={status === 'error' ? messageId : undefined}
          className="mt-4 flex flex-col gap-2 sm:flex-row"
        >
          <label className="sr-only" htmlFor={`${titleId}-name`}>
            Nome
          </label>
          <input
            id={`${titleId}-name`}
            name="name"
            autoComplete="name"
            placeholder="Nome"
            className={`${inputClasses} sm:w-36`}
          />
          <label className="sr-only" htmlFor={`${titleId}-email`}>
            E-mail
          </label>
          <input
            id={`${titleId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Digite seu e-mail"
            aria-invalid={status === 'error'}
            className={`${inputClasses} sm:w-73`}
          />
          <button
            type="submit"
            className="h-10 cursor-pointer rounded bg-primary px-8 text-sm font-semibold text-black uppercase transition hover:brightness-95"
          >
            Cadastrar
          </button>
        </form>
      )}
      {status === 'error' && (
        <p id={messageId} role="alert" className="mt-2 text-sm text-primary">
          Preencha seu nome e um e-mail válido.
        </p>
      )}
    </section>
  )
}
