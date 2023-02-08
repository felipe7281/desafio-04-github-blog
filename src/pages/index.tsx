import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

import { HomeContainer, Product } from "../styles/pages/home"

import React, { useState } from 'react'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'


import { stripe } from "../lib/stripe"
import {  GetStaticProps } from "next"
import Stripe from "stripe"
import { CartButton } from "../components/CartButton"
import { useCart } from "../hooks/useCart"
import { IProduct } from "../context/CartContext"

interface HomeProps{
  products: IProduct[];
}





export default function Home({products} : HomeProps) {

const {addToCart, checkIfItemAlreadyExists} = useCart();

const [currentSlide, setCurrentSlide] = useState(0);
const [loaded, setLoaded] = useState(false);
const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
  // outras configuraçoes de sua preferência, como na aula

  slides: {
    perView: 3,
    spacing: 48,
  },
  initial: 0,
  slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
  },
  created() {
      setLoaded(true);
  },
});

  function handleAddToCart(e: MouseEvent, product: IProduct) {
    e.preventDefault();
    addToCart(product);

  }
  
  return (
    <>
     <Head>
        <title>Ignite Shop - Home</title>
      </Head>

    <HomeContainer ref={sliderRef} className="keen-slider">  
     
        {products.map(product => {
          return(
            <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
              <Product className="keen-slider__slide" >
                <Image src={product.imageUrl} width={520} height={480} alt={""}/>

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <CartButton 
                    color="green" 
                    size="large" 
                    onClick={(e) => handleAddToCart(e, product)}
                    disabled={checkIfItemAlreadyExists(product.id)}
                  />
                </footer>
              </Product>
            </Link>
          )
        })}

       

    

    </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price =  product.default_price as Stripe.Price


    return{
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      numberPrice: price.unit_amount / 100,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }

}