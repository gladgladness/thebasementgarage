'use client'
import { signOut } from "@/auth"
//import { useRouter } from "next/navigation";

export default function SignOutButton() {
   // const router = useRouter();
    const handleSignOut = async () => {
        await signOut();
         // router.push("./");
      };
    
    return (
      <div>
          <button onClick={handleSignOut} type="submit">Sign out</button>
        
      </div>
    )
  }