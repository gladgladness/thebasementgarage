
//import { signOut } from '@/auth'
//import { cookies } from 'next/headers';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
};

/*

export default async function SignoutButton(){
   const handleSignOut = await signOut({ redirect: true, callbackUrl: '/' });
   async function deleteCookie() {
    
   cookies().delete();
   }
    return(
        <form>
            <button delete={deleteCookie} onClick={handleSignOut} className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                <div className="hidden md:block">Sign Out</div>
            </button>
        </form>
   
)};

*/