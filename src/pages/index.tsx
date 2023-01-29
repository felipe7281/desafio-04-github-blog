import Image from "next/image"

import Link from "next/link"



import { HomeContainer, Product } from "../styles/pages/home"

import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'






import { Arrow } from "../assets/components/Arrow"
import { stripe } from "../lib/stripe"
import {  GetStaticProps } from "next"
import Stripe from "stripe"

interface HomeProps{
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string
  }
}



export default function Home({products} : HomeProps) {
// const [ sliderRef, instanceRef ] = useKeenSlider({
//   slides: {
//     perView: 3,
//     spacing: 48,
    
//   }
// })

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
  
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">  
      
        {products.map(product => {
          return(
            <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
              <Product className="keen-slider__slide" >
                <Image src={product.imageUrl} width={520} height={480} alt={""}/>

                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          )
        })}

       

        {loaded && instanceRef.current && (
  <>
      <Arrow
          left
          onClick={(e: { stopPropagation: () => any }) =>
              e.stopPropagation() || instanceRef.current?.prev()
          }
          disabled={currentSlide === 0}
      />

      <Arrow
          onClick={(e: { stopPropagation: () => any }) =>
              e.stopPropagation() || instanceRef.current?.next()
          }
          disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
          }
      />
  </>
)}

    </HomeContainer>
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
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }

}