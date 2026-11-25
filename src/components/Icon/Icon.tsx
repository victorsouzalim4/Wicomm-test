import type { SVGProps } from 'react'
import ArrowRight from '@/assets/icons/arrow-right.svg?react'
import Call from '@/assets/icons/call.svg?react'
import Card from '@/assets/icons/card.svg?react'
import ChevronDown from '@/assets/icons/chevron-down.svg?react'
import Close from '@/assets/icons/close.svg?react'
import DiscountShape from '@/assets/icons/discount-shape.svg?react'
import Heart from '@/assets/icons/heart.svg?react'
import Location from '@/assets/icons/location.svg?react'
import LocationTick from '@/assets/icons/location-tick.svg?react'
import Menu from '@/assets/icons/menu.svg?react'
import Minus from '@/assets/icons/minus.svg?react'
import People from '@/assets/icons/people.svg?react'
import Pix from '@/assets/icons/pix.svg?react'
import Plus from '@/assets/icons/plus.svg?react'
import ProfileCircle from '@/assets/icons/profile-circle.svg?react'
import SearchNormal from '@/assets/icons/search-normal.svg?react'
import ShoppingBag from '@/assets/icons/shopping-bag.svg?react'
import Sms from '@/assets/icons/sms.svg?react'
import Store from '@/assets/icons/store.svg?react'
import Trash from '@/assets/icons/trash.svg?react'
import Truck from '@/assets/icons/truck.svg?react'

/**
 * Ícones Vuesax exportados do Figma (ADR-0012). Os que o Figma não tem (fechar, menu, mais,
 * menos, lixeira, caminhão, cartão e loja) foram desenhados no mesmo padrão: grade de 24px,
 * traço de 1.5px. A cor vem do CSS (currentColor).
 */
const icons = {
  'arrow-right': ArrowRight,
  call: Call,
  card: Card,
  'chevron-down': ChevronDown,
  close: Close,
  'discount-shape': DiscountShape,
  heart: Heart,
  location: Location,
  'location-tick': LocationTick,
  menu: Menu,
  minus: Minus,
  people: People,
  pix: Pix,
  plus: Plus,
  'profile-circle': ProfileCircle,
  search: SearchNormal,
  'shopping-bag': ShoppingBag,
  sms: Sms,
  store: Store,
  trash: Trash,
  truck: Truck,
}

export type IconName = keyof typeof icons

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  /** Texto para leitores de tela. Sem ele, o ícone é decorativo e fica escondido deles. */
  label?: string
}

export function Icon({ name, label, ...props }: IconProps) {
  const Svg = icons[name]
  const svg = <Svg aria-hidden="true" focusable="false" {...props} />

  if (!label) return svg

  return (
    <>
      {svg}
      <span className="sr-only">{label}</span>
    </>
  )
}
