"use client"
import { Button } from "@/components/ui/button";
import urlBuilder from "@sanity/image-url/lib/types/builder";
import { ArrowUpRightFromCircleIcon } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import product from "@/sanity/schemas/product";

export interface ProductCart {
    name: string;
    description: string;
    price: Number;
    currency: string;
    image: any
}

export default function AddToBag({currency,
     name,
     price,
     description,
     image
    }: ProductCart) {
    const { addItem, handleCartClick } = useShoppingCart();

    const Product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        id: "laksdfkj",
    };
    return(
        <Button onClick={() => {
       addItem(Product), handleCartClick();
        }}
        >
        Add To Cart
        </Button>
    );
}



