import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Providers } from "./providers";

const fira_code = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Aditya Gupta",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={fira_code.className}>
        <Providers>
          <div class="bg-animation">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
