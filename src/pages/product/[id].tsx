import { IProduct } from "@/src/context/CartContext";
import { useCart } from "@/src/hooks/useCart";
import { stripe } from "@/src/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import  { useRouter } from "next/router";

import Stripe from "stripe";

interface ProductProps{
    product: IProduct
}

export default function Product({ product }: ProductProps) {


const { isFallback } = useRouter()

const {checkIfItemAlreadyExists, addToCart} = useCart();

if(isFallback) {
    return <div>Loading...</div>
}

const itemAlreadyInCart = checkIfItemAlreadyExists(product.id);





    return(
        <>
        <Head>
            <title>{product.name}</title>
        </Head>

        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} alt='' width={520} height={480} />
            </ImageContainer>
            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <p>{product.description}</p>

                <button 
                    onClick={() => addToCart(product)} 
                    disabled={itemAlreadyInCart}
                >
                        {itemAlreadyInCart 
                            ? 'Produto já está no carrinho'
                            : 'Colocar na sacola'}
                </button>
            </ProductDetails>
        </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    //Buscar os produtos mais vendidos / mais acessados


    return {
        paths: [
            {
                params: {
                    id: "prod_NFPwyyWzPVbCyF"
                }
            }
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }: any) => {
    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    })

    const price =  product.default_price as Stripe.Price


    

    return{
        props: {
            product: {
                id: product.id,
                name: product.name,
                description: product.description,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format( price.unit_amount / 100),
                numberPrice: price.unit_amount / 100, 
                defaultPriceId: price.id,
                
            }

        },
        revalidate: 60 * 60 * 1, // 1 hour
    }
    
}