"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";
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
          return "Invalid credentials / User does not exist.";
        
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
    
    await TableUsers();
    try{ 
      
      const user = await client.query('SELECT * FROM users WHERE email = $1', [email]);
      try {
        if (user.rowCount>=1) {
          return `User ${email} already exists`;
           }
      }catch (error) {
          console.error('Error checking email existence:', error);
          return false;
      }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    await client.query(`
    INSERT INTO users (id, firstName, lastName, email, password)
    VALUES ($1, $2, $3, $4, $5)
    ON CONFLICT (id) DO NOTHING;`, 
    [id, fname, lname, email, hashedPassword]);

    console.log(`Seeded user ${email}`);
    
    return(`Registered user ${email} successfully.`);
        
    }catch(error){
      console.error('Error seeding users:', error);
      console.error ({ errorType: error.type });
    }
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

 