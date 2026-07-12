import type { Metadata } from "next";
import "./globals.css";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
export const metadata: Metadata = {
  metadataBase: new URL("https://radissondaynightspa.com"),

  title: {
    default: "Radisson Day Night Spa | Luxury Spa in Indore",
    template: "%s | Radisson Day Night Spa",
  },

  description:
    "Experience premium spa services in Indore including Swedish Massage, Deep Tissue Massage, Thai Massage, Couple Spa, Aroma Therapy and Steam Bath in a luxurious and relaxing environment.",

  keywords: [
    "Spa in Indore",
    "Best Spa in Indore",
    "Luxury Spa Indore",
    "Massage Centre Indore",
    "Couple Spa Indore",
    "Swedish Massage",
    "Thai Massage",
    "Deep Tissue Massage",
    "Aroma Therapy",
    "Steam Bath",
  ],

  alternates: {
    canonical: "https://radissondaynightspa.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  applicationName: "Radisson Day Night Spa",

  authors: [
    {
      name: "Radisson Day Night Spa",
    },
  ],

  creator: "Radisson Day Night Spa",

  publisher: "Radisson Day Night Spa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
  <LocalBusinessSchema />
  {children}
</body>
    </html>
  );
}
