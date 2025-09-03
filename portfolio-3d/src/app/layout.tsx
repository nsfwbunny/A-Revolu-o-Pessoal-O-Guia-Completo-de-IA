import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imersão 3D | Experiência Cinematográfica",
  description: "Um mundo de entretenimento com efeitos visuais impressionantes e qualidade premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
