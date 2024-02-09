import type { AppProps } from 'next/app'
import Image from 'next/image'

import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'

import logoImg from '../assets/logo.svg'

globalStyles() // Importa estilos globais sem renderizar novamente quando a página mudar

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="Logotipo" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
