import React from 'react'
import { loadStripe } from "@stripe/stripe-js"

export async function checkout({ lineItems }) {
    let stripePromise = null
    const getstripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY)
        }
        return stripePromise
    }
    const stripe = await getstripe()
    await stripe.redirectToCheckout({
        mode: "payment",
        lineItems,
        successUrl: `${window.location.origin}/order`,
        cancelUrl: window.location.origin
    })
}