'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ThemeButton from './themebutton'
 
export function Links() {
  const pathname = usePathname()
 
  return (
    <nav>
      <ul className="bg-sky-600 flex justify-center space-x-8">
        <li className="hover:bg-gray-400">
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/dashboard">
            Dashboard
          </Link>
          </li>
          <li className="hover:bg-gray-400 flex">
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/dashboard/vehicle-registration">
            Vehicle Registration
          </Link>
          </li>
          <li className="hover:bg-gray-400">
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/dashboard/vehicle-routines">
            Vehicle Routines
          </Link>
        </li>
        <li className="hover:bg-gray-400">
          <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/dashboard/vehicle-scheduling">
            Vehicle Scheduling
          </Link>
        </li>
        <li className="hover:bg-gray-400">
          <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/dashboard/invoices">
            Invoices
          </Link>
        </li>
        
          <ThemeButton className="justify-end" />
        
      </ul>
      
    </nav>

  )
}