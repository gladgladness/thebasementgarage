'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ThemeButton from './themebutton'
import SignOutButton from './signoutbutton'
 
export function Links() {
  const pathname = usePathname()
 
  return (
    <nav className="bg-blue-500 p-2 rounded">
      <ul className=" justify-end  space-x-1 flex md:flex md:flex-grow flex-row">
        <li className="hover:bg-blue-600 transition duration-300 ease-in-out rounded-lg p-2">
          <Link className={`link ${pathname === '/dashboard' ? ' active: bg-gray-600 rounded-lg p-2' : ''}`} href="/dashboard">
            Dashboard
          </Link>
          </li>
          <li className="hover:bg-blue-600 transition duration-300 ease-in-out rounded-lg p-2">
          <Link className={`link ${pathname === '/dashboard/vehicle-registration' ? 'active: bg-gray-600 rounded-lg p-2' : ''}`} href="/dashboard/vehicle-registration">
            Vehicle Registration
          </Link>
          </li>
          <li className="hover:bg-blue-600 transition duration-300 ease-in-out rounded-lg p-2">
          <Link className={`link ${pathname === '/dashboard/vehicle-routines' ? 'active: bg-gray-600 rounded-lg p-2' : ''}`} href="/dashboard/vehicle-routines">
            Vehicle Routines
          </Link>
        </li>
        <li className="hover:bg-blue-600 transition duration-300 ease-in-out rounded-lg p-2">
          <Link className={`link ${pathname === '/dashboard/vehicle-scheduling' ? 'active: bg-gray-600 rounded-lg p-2' : ''}`} href="/dashboard/vehicle-scheduling">
            Vehicle Scheduling
          </Link>
        </li>
        <li className="hover:bg-blue-600 transition duration-300 ease-in-out rounded-lg p-2">
          <Link className={`link ${pathname === '/dashboard/invoices' ? 'active: bg-gray-600 rounded-lg p-2' : ''}`} href="/dashboard/invoices">
            Invoices
          </Link>
        </li>
        <li className="p-1.5">
          <ThemeButton/> 
        </li> 
        <li className="p-1"> 
         <SignOutButton/> 
        </li>
      </ul>
    </nav>
  )
}




