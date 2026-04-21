import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import FramerWrapper from "@/component/motionwrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata = {
  title: "PREPOC Technologies",
  description: "Digital Engineering Labs",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-[#0f011d] transition-colors duration-500`}>
        <FramerWrapper>
          {children}
        </FramerWrapper>
      </body>
    </html>
  );
}