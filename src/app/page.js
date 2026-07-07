import Link from 'next/link'
import React from 'react'
const product = [
  {id: '1', name: "Samsung Galaxy S21"},
  {id: '2', name: "Samsung Galaxy S24"},
  {id: '3', name: "Ipxone 14 pro max"},
]
function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="./about" >About Pages</Link>
    </div>
  )
}

export default HomePage