import { ThemeProvider } from 'next-themes'; 
import "./globals.css";

export const metadata = {
  title: "The Basement Garage",
  description: "A vehicle garage workshop with the best services",
};

export default function RootLayout({children, pageProps}) {
  return (
    
      <html lang="en" className="font-serif">
        
        <body>
          <ThemeProvider attribute="class">
            {children}
            </ThemeProvider>
        </body>
        
      </html>
    
  );
}
