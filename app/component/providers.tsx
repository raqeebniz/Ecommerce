"use client"

import { ReactNode } from "react"
import { CartProvider as USCPrivider} from "use-shopping-cart" 


 export default function CartProvider({ children }: { children: ReactNode }) {
    return (
    <USCPrivider
     mode="payment"
     cartMode="client-only"
     stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
     successUrl="http://localhost:3000/success"
     cancelUrl="http://localhost:3000/success/error"
     currency="USD"
     billingAddressCollection= {true}
     shouldPersist={true}
     language="en-US"
    > 
    {children} 
    </USCPrivider>
    );
 }