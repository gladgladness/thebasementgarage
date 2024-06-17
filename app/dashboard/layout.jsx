import { Links } from "../components/links";

export default function DashboardLayout({children}) {
    return (
      <html lang="en">
        <body>
        <div>
          <Links />
        </div>
        {children}
        </body>
      </html>
    );
  }

  
 
