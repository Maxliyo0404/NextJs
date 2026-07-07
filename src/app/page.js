import Link from 'next/link'
import React from 'react'

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="./about" >About Pages</Link>
    </div>
  )
}

export default HomePage