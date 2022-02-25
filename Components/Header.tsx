import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            src="https://links.papareact.com/yvf"
            alt="Logo"
          />
        </Link>
      </div>
      <div>
        <h2 className="text-red-500">Rafi</h2>
      </div>
    </header>
  )
}

export default Header
