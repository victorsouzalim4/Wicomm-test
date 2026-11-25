import { useEffect, useId, useRef, type ReactNode } from 'react'
import { IconButton } from '@/components/IconButton/IconButton'
import { cn } from '@/utils/cn'

interface DrawerProps {
  open: boolean
  onClose: () => void
  title: ReactNode
  side?: 'left' | 'right'
  children: ReactNode
  footer?: ReactNode
}

/**
 * Painel lateral usado pelo mini cart e pelo menu mobile. É um <dialog> nativo aberto com
 * showModal(): o navegador já prende o foco dentro dele, fecha com Esc, deixa o resto da
 * página inerte e devolve o foco ao botão que o abriu.
 */
export function Drawer({ open, onClose, title, side = 'right', children, footer }: DrawerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()

    // Trava a rolagem da página enquanto o painel está aberto.
    document.documentElement.classList.toggle('overflow-hidden', open)
    return () => document.documentElement.classList.remove('overflow-hidden')
  }, [open])

  return (
    // O clique "no próprio dialog" só acontece no fundo escurecido (::backdrop): fecha o painel.
    // Pelo teclado, o Esc já fecha (evento cancel → close).
    // oxlint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      className={cn(
        'fixed inset-y-0 m-0 h-dvh max-h-dvh w-full max-w-full bg-white p-0 text-black sm:max-w-100',
        'backdrop:bg-black/50 open:flex open:flex-col',
        'transition-transform duration-300 motion-reduce:transition-none',
        side === 'right'
          ? 'right-0 left-auto starting:open:translate-x-full'
          : 'right-auto left-0 starting:open:-translate-x-full',
      )}
    >
      <header className="flex items-center justify-between border-b border-surface-200 px-5 py-4">
        <h2 id={titleId} className="text-lg font-semibold">
          {title}
        </h2>
        <IconButton icon="close" label="Fechar" onClick={onClose} className="size-10" />
      </header>

      <div className="flex-1 overflow-y-auto">{children}</div>

      {footer && <footer className="border-t border-surface-200 px-5 py-4">{footer}</footer>}
    </dialog>
  )
}
