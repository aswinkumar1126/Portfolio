import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/modules/shared/components/header";
import Footer from "@/modules/shared/components/footer";
import { SITE } from "@/modules/shared/constants/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: { default: `${SITE.name} | ${SITE.role}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  icons : {
    icon : "/icons/aswin.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Header />
        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 p-4 sm:gap-24 sm:p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
