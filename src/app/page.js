import Link from 'next/link'
import React from 'react'
export const products = [
  {id: '1', name: "Samsung Galaxy S21", price: '600$'},
  {id: '2', name: "Samsung Galaxy S24", price: '600$'},
  {id: '3', name: "Ipxone 14 pro max", price: '800$'},
]
function HomePage() {
  return (
    <main>
      <h1>Products</h1>
      <ul>
        { 
          products?.map((product, index)=>(
            <li key={product?.id}>
              <Link href={` /product/${product?.id}`}>{product?.name}</Link>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export default HomePage