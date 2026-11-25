import crownUrl from '@/assets/brand/logo-amakha-coroa.svg'
import vtexUrl from '@/assets/brand/logo-vtex.svg'
import wicommUrl from '@/assets/brand/logo-wicomm.svg'
import amexUrl from '@/assets/brand/payment/amex.svg'
import boletoUrl from '@/assets/brand/payment/boleto.svg'
import dinersUrl from '@/assets/brand/payment/diners.svg'
import eloUrl from '@/assets/brand/payment/elo.svg'
import mastercardUrl from '@/assets/brand/payment/mastercard.svg'
import pixUrl from '@/assets/brand/payment/pix.svg'
import visaUrl from '@/assets/brand/payment/visa.svg'
import facebookUrl from '@/assets/icons/social-facebook.svg'
import instagramUrl from '@/assets/icons/social-instagram.svg'
import youtubeUrl from '@/assets/icons/social-youtube.svg'
import { Container } from '@/components/Container/Container'
import { Icon } from '@/components/Icon/Icon'
import { useFooter } from '@/hooks/useStoreData'
import type { FooterResponse, PaymentMethod, SocialNetwork } from '@/types/api'
import { optimizeImage } from '@/utils/image'
import { NewsletterForm } from './NewsletterForm'

const paymentLogos: Record<PaymentMethod, { src: string; name: string }> = {
  amex: { src: amexUrl, name: 'American Express' },
  diners: { src: dinersUrl, name: 'Diners Club' },
  visa: { src: visaUrl, name: 'Visa' },
  mastercard: { src: mastercardUrl, name: 'Mastercard' },
  elo: { src: eloUrl, name: 'Elo' },
  pix: { src: pixUrl, name: 'Pix' },
  boleto: { src: boletoUrl, name: 'Boleto' },
}

const socialLogos: Record<SocialNetwork, { src: string; name: string }> = {
  facebook: { src: facebookUrl, name: 'Facebook' },
  youtube: { src: youtubeUrl, name: 'YouTube' },
  instagram: { src: instagramUrl, name: 'Instagram' },
}

const columnTitle = 'text-sm font-semibold uppercase'
const footerLink = 'text-xs hover:underline'

/** Footer (Figma: fundo #EEEEEE, newsletter, colunas de links, contato, endereços e pagamentos). */
export function Footer() {
  const { data } = useFooter()

  return (
    <footer className="bg-surface-200 pt-8 pb-16">
      {data && (
        <Container className="flex flex-col gap-8">
          <NewsletterForm title={data.newsletter.title} subtitle={data.newsletter.subtitle} />
          <FooterContent data={data} />
          <FooterBottom data={data} />
        </Container>
      )}
    </footer>
  )
}

function FooterContent({ data }: { data: FooterResponse }) {
  const [institutional, reseller, help] = data.columns

  return (
    <div className="grid gap-8 border-t border-neutral-300 pt-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr_1.3fr]">
      <div className="flex flex-col items-start gap-4">
        <img src={crownUrl} alt="Amakha Paris" width={115} height={74} className="h-16 w-auto" />
        <ul className="-mx-2 flex gap-1" aria-label="Redes sociais">
          {data.social.map(({ network, href }) => (
            <li key={network}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex size-9.5 items-center justify-center rounded-full transition hover:bg-black/5"
              >
                <img
                  src={socialLogos[network].src}
                  alt={`${socialLogos[network].name} (abre em outra aba)`}
                  className="size-full"
                />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs">{data.about.text}</p>
        <a href={data.about.href} className={footerLink}>
          Ver mais<span className="sr-only"> sobre a Amakha Paris</span>
        </a>
      </div>

      <div className="flex flex-col gap-6">
        {[institutional, reseller].filter(Boolean).map((column) => (
          <LinkColumn key={column.title} {...column} />
        ))}
        <img
          src={optimizeImage(data.seal.url, { width: 140 })}
          alt={data.seal.alt}
          width={70}
          height={70}
          loading="lazy"
          className="size-17.5"
        />
      </div>

      {help && <LinkColumn {...help} />}

      <div className="flex flex-col gap-3">
        <h2 className={columnTitle}>Atendimento</h2>
        <p className="flex gap-2 text-xs">
          <Icon name="call" className="size-5 shrink-0" />
          <span>
            <a href={`tel:+55${data.contact.phone.replace(/\D/g, '')}`} className="hover:underline">
              {data.contact.phone}
            </a>
            <br />({data.contact.phoneNote})
          </span>
        </p>
        <p className="flex items-center gap-2 text-xs">
          <Icon name="sms" className="size-5 shrink-0" />
          <a href={`mailto:${data.contact.email}`} className="break-all hover:underline">
            {data.contact.email}
          </a>
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className={columnTitle}>Onde estamos</h2>
        <ul className="flex flex-col gap-3">
          {data.addresses.map((place, index) => (
            <li key={place.label} className="flex gap-2 text-xs">
              <Icon name={index === 0 ? 'location' : 'location-tick'} className="size-5 shrink-0" />
              <address className="not-italic">
                <strong className="font-medium">{place.label}:</strong> {place.address}
              </address>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function LinkColumn({ title, links }: FooterResponse['columns'][number]) {
  return (
    <nav aria-label={title} className="flex flex-col gap-2">
      <h2 className={columnTitle}>{title}</h2>
      <ul className="flex flex-col gap-1">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={footerLink}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function FooterBottom({ data }: { data: FooterResponse }) {
  return (
    <div className="flex flex-col gap-6 border-t border-neutral-300 pt-8 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <h2 className="text-sm font-medium uppercase">Formas de pagamento:</h2>
        <ul className="flex flex-wrap gap-2">
          {data.paymentMethods.map((method) => (
            <li key={method}>
              <img
                src={paymentLogos[method].src}
                alt={paymentLogos[method].name}
                width={34}
                height={24}
              />
            </li>
          ))}
        </ul>
      </div>
      <p className="flex items-center gap-4">
        <span className="sr-only">Desenvolvido por</span>
        <img src={wicommUrl} alt="Wicomm" width={72} height={14} />
        <span className="sr-only">com</span>
        <img src={vtexUrl} alt="VTEX" width={44} height={18} />
      </p>
    </div>
  )
}
