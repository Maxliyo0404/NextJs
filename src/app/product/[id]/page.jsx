"use client"

import { products } from "@/app/page"
import { useParams } from "next/navigation"

export default function ProductPage() {
    const {id} = useParams()
    const  product = products.find(p=> p?.id === id)
  return (
    <div>
        <h1>{product?.name}</h1>
        <p>{product?.name}</p>
    </div>
  )
}
