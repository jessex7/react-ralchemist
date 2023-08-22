import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from "@/components/NavBar";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ralchemist',
  description: 'Created by Joe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="night">
      <body className={inter.className}>
        <NavBar />
        <hr style={{
          width: "99%",
          margin: "auto",
          height: "1px"
        }}
        />
        {/* <main className="flex flex-col min-h-screen items-center justify-between p-5">  */}
        <main className="flex flex-col items-center justify-between p-5">
          {children}
        </main>

      </body>
    </html>
  )
}
