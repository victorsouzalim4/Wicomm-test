import whatsappUrl from '@/assets/icons/whatsapp.svg'

/** Botão flutuante do WhatsApp (Figma: 46px, posição fixa no canto direito). */
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/551123888203"
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco pelo WhatsApp (abre em outra aba)"
      className="fixed right-4 bottom-4 z-30 size-11.5 rounded-full shadow-dropdown transition-transform hover:scale-110 md:right-6 md:bottom-6"
    >
      <img src={whatsappUrl} alt="" width={46} height={46} />
    </a>
  )
}
