import { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";


export const metadata = {
  title: "The Basement Garage",
  description: "A vehicle garage workshop with the best services",
};

export default function RootLayout({children}) {
  return (
    
    <html lang="en">
      <body>{children}</body>

    </html>
     
  );
}
