import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

globalStyles() // Importa estilos globais sem renderizar novamente quando a página mudar

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
