import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Hari Verse — Premium Personal Digital Universe",
  description:
    "Welcome to Hari Verse — a futuristic digital universe showcasing projects, skills, and the Telegram ecosystem. Explore the interconnected systems of Hari's digital identity.",
  keywords: [
    "Hari",
    "Hari Verse",
    "digital universe",
    "portfolio",
    "Telegram ecosystem",
    "developer",
    "futuristic",
  ],
  openGraph: {
    title: "Hari Verse — Premium Personal Digital Universe",
    description:
      "A futuristic digital universe representing identity, ecosystem, projects, and online presence.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
