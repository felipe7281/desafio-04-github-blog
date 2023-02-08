import Link from "next/link";
import { ImageContainer, ImagesContainer, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps{
    customerName: string;
    productsImage: string[];

}

export default function Success({customerName, productsImage}: SuccessProps){
    return(
        <>
        <Head>
            <title>Ignite Shop - Pedido</title>
        </Head>

        <SuccessContainer>
            

            <ImagesContainer>

                {productsImage.map((image, i) => (
                    <ImageContainer key={i}>
                        <Image src={image} alt="" width={120} height={110}/>
                    </ImageContainer>
                ))}
                
                
            </ImagesContainer>
            <h1>Compra efetuada</h1>

            <p>Ueba <strong>{customerName}</strong>, seu pedido de <strong>{productsImage.length} camisetas</strong> já etá a caminho da sua casa.</p>

            <Link href="/">
                Voltar ao catálogo
            </Link>




        </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({query, params})=>{
    if(!query.session_id){
        return{
            redirect: {
                destination: "/",
                permanent: false,
        }
    }
}

    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {expand: ['line_items', 'line_items.data.price.product']});

    const customerName = session.customer_details.name;
    const productsImage = session.line_items.data.map(item => {
        const product = item.price.product as Stripe.Product;
        return product.images[0];
    })
    


    return{
        props: {
            customerName,
            productsImage,
        }
    }
}