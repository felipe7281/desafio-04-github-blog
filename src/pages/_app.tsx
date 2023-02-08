
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/Logo.svg'
import { Container, Header, ShopCartButton } from '../styles/pages/app'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog';
import { Cart } from '../components/Cart'
import { CartContextProvider } from '../context/CartContext'
import { useRouter } from 'next/router'


globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const {pathname} = useRouter();

  const showCartButton = pathname !== '/success';


  
  return(
    <CartContextProvider>
      <Container>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>
          {showCartButton && <Cart />}
          
        </Header>
        <Component {...pageProps} />
        
      </Container>
    </CartContextProvider>
  )
}
