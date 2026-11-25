/**
 * Transformações do Cloudinary aplicadas à URL original que vem da API (ADR-0008 e ADR-0010):
 * f_auto entrega WebP/AVIF quando o navegador aceita, q_auto ajusta a qualidade
 * w_<largura> redimensiona no servidor e c_limit impede ampliar além do tamanho original
 * (ampliar só deixaria o arquivo maior, sem ganhar nitidez).
 */
const UPLOAD_SEGMENT = '/upload/'

export function optimizeImage(url: string, { width }: { width: number }): string {
  if (!url.includes(UPLOAD_SEGMENT)) return url

  return url.replace(
    UPLOAD_SEGMENT,
    `${UPLOAD_SEGMENT}f_auto,q_auto,c_limit,w_${Math.round(width)}/`,
  )
}

/** Monta o atributo srcset com uma versão da imagem para cada largura. */
export function buildSrcSet(url: string, widths: number[]): string {
  return widths.map((width) => `${optimizeImage(url, { width })} ${width}w`).join(', ')
}
