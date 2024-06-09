import { Links } from "../components/links";
import SignoutButton from '../components/signoutbutton'
import ThemeButton from "../components/themebutton";

export default function DashboardLayout({children}) {
    return (
      <html lang="en">
        <body>
        <div>
          <Links /> <SignoutButton /> <ThemeButton /> 
        </div>
        {children}
        </body>
      </html>
    );
  }