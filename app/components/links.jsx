'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Links() {
  const pathname = usePathname()
 
  return (
    <nav className="bg-blue-500 p-4">
      <ul className=" justify-center flex space-x-8">
        <li className="hover:bg-blue-600 transition duration-300 ease-in-out">
          <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">
            Dashboard
          </Link>
          </li>
          <li className="hover:bg-blue-600 transition duration-300 ease-in-out">
          <Link className={`link ${pathname === '/dashboard/vehicle-registration' ? 'active' : ''}`} href="/dashboard/vehicle-registration">
            Vehicle Registration
          </Link>
          </li>
          <li className="hover:bg-blue-600 transition duration-300 ease-in-out">
          <Link className={`link ${pathname === '/dashboard/vehicle-routines' ? 'active' : ''}`} href="/dashboard/vehicle-routines">
            Vehicle Routines
          </Link>
        </li>
        <li className="hover:bg-blue-600 transition duration-300 ease-in-out">
          <Link className={`link ${pathname === '/dashboard/vehicle-scheduling' ? 'active' : ''}`} href="/dashboard/vehicle-scheduling">
            Vehicle Scheduling
          </Link>
        </li>
        <li className="hover:bg-blue-600 transition duration-300 ease-in-out">
          <Link className={`link ${pathname === '/dashboard/invoices' ? 'active' : ''}`} href="/dashboard/invoices">
            Invoices
          </Link>
        </li>
       
               
      </ul>
      
    </nav>

  )
}




