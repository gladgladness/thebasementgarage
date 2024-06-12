"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { client } from './db';
import { v4 as uuidv4 } from 'uuid';

export async function authenticate(prevState, formData) {
  try {
    await signIn("credentials", formData);
    // console.log(authenticate)
  } catch (error) {
    console.log({ actionsAuthenticateError: error });

    if (error instanceof AuthError) {
      console.log({ errorType: error.type });
      switch (error.type) {
        case "CredentialsSignin":
        case "CallbackRouteError":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}


const RegisterUser = z.object({
  fname: z.string({
    invalid_type_error: 'Please enter your first name.',
  }),
  lname: z.string({
    invalid_type_error: 'Please enter your last name.',
  }),
  email: z.string({
    invalid_type_error: 'Please enter an email address.',
  }),
  password: z.string({
    invalid_type_error: 'Please enter a password.',
  }),
  });

  export async function register(prevState, formData) {
    const validatedFields = RegisterUser.safeParse({
      fname: formData.get('fname'),
      lname: formData.get('lname'),
      email: formData.get('email'),
      password: formData.get('password'),
      });
  
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return "Missing Fields. Failed to Create Account.";
    }
    
    const { fname, lname, email, password } = validatedFields.data;
    const id= uuidv4();
    
    console.log("done!!");
   
    await TableUsers();
    try{ 
    const hashedPassword = await bcrypt.hash(password, 10);
    await client.query(`
    INSERT INTO users (id, firstName, lastName, email, password)
    VALUES ($1, $2, $3, $4, $5)
    ON CONFLICT (id) DO NOTHING;
  `,  [id, fname, lname, email, hashedPassword]);

    console.log(`Seeded user ${fname}`);
    return("Registered successfully. Returning you to the log in page...");
    }catch(error){
      console.error('Error seeding users:', error);
     console.error ({ errorType: error.type });
      
    }
    redirect('./');
   
  }
  

  async function TableUsers() {
    try {
      
     await client.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
      // Create the "users" table if it doesn't exist
          const createTable = await client.query(`CREATE TABLE IF NOT EXISTS users (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          firstName VARCHAR(255) NOT NULL,
          lastName VARCHAR(255) NOT NULL,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
        );`);
  
      console.log(`Created "users" table`);
        
    return {
      createTable
    };
    
  } catch (error) {
    console.error('Error creating table "users":', error);
    throw error;
  }
  
}

 