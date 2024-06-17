'use client'
import { signOut } from "@/auth"
import { useFormStatus } from 'react-dom';

export default function SignOutButton() {
    const { pending } = useFormStatus();
    const handleSignOut = async () => {
      const confirmLogout = confirm('Are you sure you want to log out?');
      if (confirmLogout){
        await signOut();
      };
    }
    return (
      <div>
          <button onClick={handleSignOut} type="submit" className=" inline-flex  rounded-lg bg-blue-700 px-4 pb-0.5 pt-0.5 text-base font-medium leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-700 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" aria-disabled={pending}>Log out</button>
        
      </div>
    )
  }