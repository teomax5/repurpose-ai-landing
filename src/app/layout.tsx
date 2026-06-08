import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Repurpose AI",
  description:
    "Turn one blog into multiple pieces of content using AI.",
  verification: {
    google: "jKyzlXspOULXVRTjZEpFNTZbRO4dmKZkMuRT_hveBNs",},  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}