import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ['latin'],weight: ["400", "500", "600", "700", "800", "900"], });

export const metadata = {
  title: "Refy",
  description: "AB Dummy Pte. Ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Navbar/> */}
      {/* <h1>navbar</h1> */}
      <body className={` ${inter.className} `}>{children}</body>
      {/* <h1>Footer</h1> */}
      {/* <Footer/> */}
    </html>
  );
}
