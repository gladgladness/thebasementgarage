'use client'  
import { useFormState, useFormStatus } from 'react-dom';
import { register } from '@/backend/actions'; 
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function RegUser() {
  const [errorMessage, formAction] = useFormState(register, null);

  return (
    <form  action={formAction} className="space-y-3 w-max h-max py-0">
      <div className="flex-1 rounded-lg bg-gray-100 px-6 pb-4 pt-8">
        <h1 className= "mb-3 text-2xl dark:text-black">
          New user? Register below:
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-base font-medium text-gray-900"
              htmlFor="fname"
            >
              First Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="fname"
                type="fname"
                name="fname"
                placeholder="Enter your first name"
                required
              />
             
            </div>
          </div>

          <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-base font-medium text-gray-900"
              htmlFor="lname"
            >
              Last Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="lname"
                type="lname"
                name="lname"
                placeholder="Enter your last name"
                required
              />
             
            </div>
          </div>
        <div>
            <label
              className="mb-3 mt-5 block text-base font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
             
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-base font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={4}
              />
              
            </div>
          </div>
        
          
        </div>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
        <SignUpButton />
        
      </div>
     </div>
    </form>
   );
}

function SignUpButton() {
    const { pending } = useFormStatus();
    const pathname = usePathname(); 
   
    return (
      <>
        <div>
          <button className=" inline-flex  mt-3  rounded bg-blue-500 px-6 pb-2 pt-2.5 text-base font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" aria-disabled={pending}>
          Register
          </button>
        </div>
        <div className='text-black py-2'>
        <p>
          <Link className={`link ${pathname === './' ? 'active' : ''} underline hover:text-blue-700 font-semibold`} href="./">
                    Click Here
          </Link>
                  &nbsp; to go back to log in.
            </p>
        </div>
      
      </>
    );
  }