
import Nav from "@/components/Nav";
import "./globals.css";
import Footer from "@/components/Footer";
import BannerClientWrapper from "@/components/BannerClientWrapper";

export const metadata = {
  title: "Middle Path Digital",
  description: "Middle Path Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <BannerClientWrapper />
        <div className="pt-16">
          <Nav />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
