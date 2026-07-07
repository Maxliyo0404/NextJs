import Link from 'next/link'
import React from 'react'
const products = [
  {id: '1', name: "Samsung Galaxy S21"},
  {id: '2', name: "Samsung Galaxy S24"},
  {id: '3', name: "Ipxone 14 pro max"},
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