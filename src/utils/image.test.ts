import { describe, expect, it } from 'vitest'
import { buildSrcSet, optimizeImage } from './image'

const url = 'https://res.cloudinary.com/ycsxevam/image/upload/produto-athena'

describe('optimizeImage', () => {
  it('insere formato automático, qualidade automática e largura na URL do Cloudinary', () => {
    expect(optimizeImage(url, { width: 400 })).toBe(
      'https://res.cloudinary.com/ycsxevam/image/upload/f_auto,q_auto,w_400/produto-athena',
    )
  })

  it('arredonda a largura', () => {
    expect(optimizeImage(url, { width: 210.6 })).toContain('w_211/')
  })

  it('devolve a URL intacta quando não é do Cloudinary', () => {
    expect(optimizeImage('https://exemplo.com/foto.png', { width: 400 })).toBe(
      'https://exemplo.com/foto.png',
    )
  })
})

describe('buildSrcSet', () => {
  it('gera uma versão da imagem para cada largura', () => {
    expect(buildSrcSet(url, [210, 420])).toBe(
      `${optimizeImage(url, { width: 210 })} 210w, ${optimizeImage(url, { width: 420 })} 420w`,
    )
  })
})
