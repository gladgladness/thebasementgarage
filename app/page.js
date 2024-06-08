'use client'
import ThemeButton from "./components/themebutton";
import Background from './components/background';
import LoginForm from "./components/loginform";

export default function Home() {

   return (
    <main>
      
      <Background/>
      <div className=" p-4 flex flex-col items-center text-center rounded-xl h-24 py-4">
        <div className=" skew-x-3">
          <ThemeButton/>
        </div>
          <div className=" p-4 flex flex-col items-center text-center rounded-xl h-24 py-16 bg-amber-900 opacity-80">
          
                <h1 className="mb-2 -mt-12 text-5xl font-extrabold tracking-wide">
                  The Basement Garage!
                </h1>

                <p className="mb-2 text-2xl font-medium">
                We have the ‘drive’ to ‘drive’ your troubles away. Tune-ups, breakdowns, we handle it all – you could say we’re ‘car’-nivores!
                </p>
            </div>
      </div>
           
      <div className="relative mx-auto my-auto flex max-w-[350px] max-h-[500px] flex-col top-56 space-y-4.5 p-4 py-4 md:-mt-32 opacity-80 bg-gray-400 rounded">
          <LoginForm/>
      </div>
   
  </main>
  );
}