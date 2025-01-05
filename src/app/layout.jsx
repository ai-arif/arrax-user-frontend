import { Web3Provider } from "@/components/walletconnect/web3provider";
import AuthProvider from "@/contexts/AuthProvider";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arrax Space",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-sm text-white antialiased md:text-base`}
      >
        <AuthProvider>
          <main>
            <Web3Provider>{children}</Web3Provider>
          </main>
        </AuthProvider>
        <Toaster
          toastOptions={{
            style: {
              background: "#7368ff",
              color: "#ffff",
            },
          }}
        />
      </body>
    </html>
  );
}
