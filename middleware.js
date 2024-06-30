import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';

 
export default NextAuth(authConfig).auth;

export async function middleware(request) {
  if (request.method === 'POST') {
    
    const body = await request.json();

    const responseBody = {
      message: 'POST request received',
      data: body,
    };

    return NextResponse.json(responseBody);
  }

 return NextResponse.next();
}


 
export const config = {
 
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  matcher: ['/api/:path*'],
  
};


