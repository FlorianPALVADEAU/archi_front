import { Providers } from "@/components/providers";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="en"
      title="We 💘 pepe!"
    >
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}