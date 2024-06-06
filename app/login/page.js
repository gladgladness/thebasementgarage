import ThemeButton from "../components/themebutton";
import LoginForm from "../components/loginform";
 
export default function LoginPage() {
  return (
    
    <main className="bg-[url('../public/login.jpg')] bg-center bg-cover bg-no-repeat"
    
    >

      <ThemeButton />
      <div className="flex items-center justify-center md:h-screen">
      
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <LoginForm/>
      </div>
      </div>
    </main>
  );
}