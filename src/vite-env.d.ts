/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Endereço base da API. Padrão: "/api" (API mock em public/api). */
  readonly VITE_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
