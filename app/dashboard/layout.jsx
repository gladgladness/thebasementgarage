import { Links } from "../components/links";
import SignOutButton from "../components/signoutbutton";
import ThemeButton from "../components/themebutton";

export default function DashboardLayout({children}) {
    return (
      <html lang="en">
        <body>
        <div>
          <Links />  <ThemeButton /> <SignOutButton/>
        </div>
        {children}
        </body>
      </html>
    );
  }

  
 
