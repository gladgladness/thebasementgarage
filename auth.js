"use server";

import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { client } from "./app/backend/db";
import bcrypt from "bcrypt";

async function getUser(email) {
  try {
    const query = await client.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    console.log(query);
    //console.log(result[0])
    // Return the first row from the result
    return query.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(4),
          })
          .safeParse(credentials);

        console.log({ parsedCredentials: parsedCredentials });

        if (!parsedCredentials.success) {
          console.log(credentials, "Invalid credentials");

          return null;
        }

        const { email, password } = parsedCredentials.data;
        const user = await getUser(email).catch((e) =>
          console.log("Invalid user", e)
        );
        console.log({ user: user });

        if (!user) {
          console.log("passwords do not match/ invalid credentials");
          return null;
        }

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) {
          return null;
        }

        return user;
      },
    }),
  ],
});
