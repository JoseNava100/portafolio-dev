import "./globals.css";
import { Onest } from "next/font/google";

const onest = Onest({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Portafolio de José Nava",
  description: "Contrata a José Nava para crear tu aplicación web. Desarrollador Web Full Stack. Especializado en desarrollo de aplicaciones web únicas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={onest.className}>
        {children}
      </body>
    </html>
  );
}
