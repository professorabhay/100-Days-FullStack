import "../styles/app.scss";
import { Inter } from 'next/font/google'
import Header from "./header";
import { ContextProvider } from "@/components/Clients";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Taskify',
  description: 'Made By Hard-Work - Abhay',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ContextProvider>
       <>
        <Header />
        {children}
       </>
      </ContextProvider>
      </body>
    </html>
  )
  }
