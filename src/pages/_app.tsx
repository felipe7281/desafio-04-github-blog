
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/Logo.svg'
import { Container, Header, ShopCartButton } from '../styles/pages/app'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  const cartQuantity = 2
  
  return(
      <Container>
        <Header>
          <Image src={logoImg} alt="" />

          <ShopCartButton>
              {cartQuantity>=1 && <span>{cartQuantity}</span>}
              <Handbag size={24} color='#c4c4cc' />
          </ShopCartButton>
        </Header>
        <Component {...pageProps} />
        
      </Container>
  )
}
