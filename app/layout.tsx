import type { Metadata } from "next";
import {
  Comfortaa,
  Cormorant,
  Covered_By_Your_Grace,
  DM_Serif_Display,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import CustomToaster from "@/components/custom/custom-toaster";

// Load fonts with unique variable names
const serif_display = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif_display",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Restaurant",
  description: "Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} ${montserrat.variable} ${serif_display.variable}  bg-[#F6F1E7] dark:bg-[#1D1C1C] dark:text-[#F9F3F0]   text-[#1B1B1B]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}

          {/* ✅ Add the global toaster here */}
          <CustomToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
