import { stripe } from "@/src/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Stripe from "stripe";

interface ProductProps{
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;
      }
}

export default function Product({ product }: ProductProps) {
const { isFallback } = useRouter()

if(isFallback) {
    return <div>Loading...</div>
}

    return(
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} alt='' width={520} height={480} />
            </ImageContainer>
            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <p>{product.description}</p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
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
                }).format(price.unit_amount / 100),
                
            }

        },
        revalidate: 60 * 60 * 1, // 1 hour
    }
    
}