import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
 
export default NextAuth(authConfig).auth;
 
export const config = {
 
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

export function middleware(request) {
  const response = NextResponse.next();
  response.cookies.delete('myCookie', {
    path: '/',
  });
  return response;
}