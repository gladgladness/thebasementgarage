import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import {  z } from 'zod';
import { getClient } from './app/db';
import bcrypt from 'bcrypt';


export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize(credentials) {
      const parsedCredentials = z.object({
         email: z.string().email(), password: z.string().min(4) 
        }).safeParse(credentials);

        if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);
            console.log(user)
            
            if (!user) return null;
            return user;
            //const passwordsMatch = await bcrypt.compare(password, user.password);

           // if (passwordsMatch) return user;
            //else console.log('passwords do not match')
          }
   
         //  console.log(credentials, 'Invalid credentials');
           //return null;
    },
  }),],
});

async function  getUser(email){
    try {
      const client = await getClient();
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];

    // Execute the query and get the result
    const result = await client.query(query, values);
    console.log(result)
    //console.log(result[0])
    // Return the first row from the result
    return result.rows[0];
    
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }

  }