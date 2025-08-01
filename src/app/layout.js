import Header from "@/components/common/Header";
import "./globals.css";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Momnect",
  description: "중고 육아 물품 거래",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
