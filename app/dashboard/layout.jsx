import { Links } from "../components/links";
//import SignoutButton from "@/auth.config";
import ThemeButton from "../components/themebutton";

export default function DashboardLayout({children}) {
    return (
      <html lang="en">
        <body>
        <div>
          <Links />  <ThemeButton /> 
        </div>
        {children}
        </body>
      </html>
    );
  }