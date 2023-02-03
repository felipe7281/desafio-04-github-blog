
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/Logo.svg'
import { Container, Header, ShopCartButton } from '../styles/pages/app'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog';
import { ShopCart } from './shopcart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  const cartQuantity = 1
  
  return(
      <Container>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <ShopCartButton>
                {cartQuantity>=1 && <span>{cartQuantity}</span>}
                <Handbag weight='bold' size={24}  />
              </ShopCartButton>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Content>
                <ShopCart/>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </Header>
        <Component {...pageProps} />
        
      </Container>
  )
}
