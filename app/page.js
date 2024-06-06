'use client'
import ThemeButton from "./components/themebutton";
import Image from "next/image";
import HomePic from "../public/home.jpg";
import { useState } from "react";
import Link from "next/link";



export default function Home() {

  const [seen, setSeen] = useState(false)

   return (
    <main>
      <ThemeButton/>
      <div class=" p-5 flex flex-col items-center text-center rounded-xl bg-white shadow-xl dark:bg-neutral-700">
        
          <Image class="rounded-t-xl" 
          src={HomePic} 
          alt="Car Workshop" 
          width={800}
          height={1200}
          />

      <div class="p-6">
        <h5 class="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
          The Basement Garage!
        </h5>

        <p class="mb-2 text-base text-neutral-500 dark:text-neutral-300">
        We have the ‘drive’ to ‘drive’ your troubles away. Tune-ups, breakdowns, we handle it all – you could say we’re ‘car’-nivores!
        </p>

        <Link href="/login">
        <button 
          class="mt-3 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
          Log in
        </button>
        </Link>
       </div>

    </div>


    </main>
  );
}