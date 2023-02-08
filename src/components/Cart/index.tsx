import { X } from "phosphor-react";
import { CartButton } from "../CartButton";
import { CartClose, CartContent, CartFinalization, CartProduct, CartProductDetails, CartProductImage, FinalizationDetails } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

import TestImage from '../../assets/2_explorer-t-shirt 1(1).png'
import { useCart } from "@/src/hooks/useCart";
import { useState } from "react";
import axios from "axios";

export function Cart(){
    const {cartItems, removeItemFromCart, cartTotal} = useCart()

    const cartQuantity = cartItems.length;

    const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(cartTotal);

    const [isCreaingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    async function handleCheckout() {
        try {
            setIsCreatingCheckoutSession(true)

            const response = await axios.post('/api/checkout', {
                products: cartItems,
                })
            const {checkoutUrl} = response.data;

            window.location.href = checkoutUrl;
        }
        catch (error) { 
            setIsCreatingCheckoutSession(false);
            alert('Falha ao redirecionar para o checkout')
    }}


    return(
        
             <Dialog.Root>
                <Dialog.Trigger asChild>
                    <CartButton />
                </Dialog.Trigger>

                <Dialog.Portal>
                    <CartContent>
                        <CartClose>
                            <X size={24} weight="bold" />
                        </CartClose>

                        <h2>Sacola de compras</h2>

                        <section>
                            {cartQuantity === 0 && <p>Parece que o seu carrinho está vazio</p>}

                            {cartItems.map((cartItem) => (
                                 <CartProduct key={cartItem.id}>
                                    <CartProductImage>
                                        <Image 
                                            width={100}
                                            height={93}
                                            alt=""
                                            src={cartItem.imageUrl}
                                        />
                                    </CartProductImage>
                                    <CartProductDetails>
                                        <p>{cartItem.name}</p>
                                        <strong>{cartItem.price}</strong>
                                        <button onClick={() => removeItemFromCart(cartItem.id)}>Remover</button>
                                    </CartProductDetails>
    
                                </CartProduct>
                            ))}
                        </section>

                        <CartFinalization>
                            <FinalizationDetails>
                                <div>
                                    <span>
                                        Quantidade
                                    </span>
                                    <p>
                                        {cartQuantity} {cartQuantity === 1 ? 'item': 'itens'}
                                    </p>
                                </div>
                                   <div>
                                    <span>
                                        Valor total
                                    </span>
                                    <p>
                                        {formattedCartTotal} 
                                    </p>
                                </div>
                            </FinalizationDetails>
                            <button onClick={handleCheckout} disabled={isCreaingCheckoutSession || cartQuantity === 0}>Finalizar compra</button>
                        </CartFinalization>
                    </CartContent>
                </Dialog.Portal>
            </Dialog.Root>
       
    )
}