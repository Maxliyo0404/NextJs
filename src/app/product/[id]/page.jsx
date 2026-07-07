"use client"

import { products } from "@/app/page"
import { useParams } from "next/navigation"

export default function ProductPage() {
    const {id} = useParams()
    const  product = products
  return (
    <div>
        
    </div>
  )
}
