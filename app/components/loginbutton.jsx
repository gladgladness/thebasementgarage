import { useFormStatus } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LoginButton() {
    const { pending } = useFormStatus();
    const pathname = usePathname();
   
    return (
    <>
      <div>
      <button className=" inline-flex  mt-3  rounded bg-blue-500 px-6 pb-2 pt-2.5 text-base font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" aria-disabled={pending}>
        Log In 
      </button>
      </div>
       <div className='text-black py-2'>
       <p>New to us? &nbsp;
           <Link className={`link ${pathname === './register' ? 'active' : ''} underline hover:text-blue-700 font-semibold`} href="./register">
             Click Here
           </Link>
           &nbsp; to register.</p>
       </div>
    </>
    );
  }