import { useId } from 'react'
import { Icon } from '@/components/Icon/Icon'
import { cn } from '@/utils/cn'

/** Busca do header (Figma: 703×52px, cantos de 5px, fundo #F5F5F5, botão amarelo). */
export function SearchForm({ className }: { className?: string }) {
  const inputId = useId()

  return (
    <search className={cn('flex h-12 lg:h-13', className)}>
      <form action="/busca" className="flex flex-1">
        <label htmlFor={inputId} className="sr-only">
          Buscar produtos
        </label>
        <input
          id={inputId}
          type="search"
          name="q"
          placeholder="Qual produto você procura?"
          className="min-w-0 flex-1 rounded-l-field border border-surface-50 bg-surface-50 px-6.5 text-base placeholder:text-neutral-500 sm:text-sm"
        />
        <button
          type="submit"
          aria-label="Buscar"
          className="flex aspect-square h-full cursor-pointer items-center justify-center rounded-r-field bg-primary transition hover:brightness-95"
        >
          <Icon name="search" className="size-5.5" />
        </button>
      </form>
    </search>
  )
}
