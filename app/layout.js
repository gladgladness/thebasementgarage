import { Metadata } from "next";
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'; 
import "./globals.css";
import DarkModeToggle from "./components/themebutton";


export const metadata = {
  title: "The Basement Garage",
  description: "A vehicle garage workshop with the best services",
};

export default function RootLayout({children, pageProps}) {
  return (
    
      <html lang="en" {...pageProps} className="font-serif dark: text-white">
        <ThemeProvider attribute="class">
        <body>{children}
        <DarkModeToggle/>
        </body>
        </ThemeProvider>
        </html>
    
    
     
  );
}
