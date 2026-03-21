import "./globals.css";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://michailkarnas.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Michail Karnas – Senior Analytics Engineer",
  description:
    "Portfolio of Michail Karnas, showcasing data engineering, analytics, and big-data projects.",
  openGraph: {
    title: "Michail Karnas – Senior Analytics Engineer",
    description:
      "Portfolio of Michail Karnas, showcasing data engineering, analytics, and big-data projects.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Michail Karnas portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Michail Karnas – Senior Analytics Engineer",
    description:
      "Portfolio of Michail Karnas, showcasing data engineering, analytics, and big-data projects.",
    images: ["/og-image.svg"]
  }
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Michail Karnas",
    jobTitle: "Senior Analytics Engineer",
    url: siteUrl,
    email: "mailto:Michail_Karnas@hotmail.com"
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-background text-foreground antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
