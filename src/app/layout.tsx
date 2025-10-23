import localFont from "next/font/local";
import '@/app/global.css';
import { Provider } from './provider';

const suit = localFont({
  src: "./fonts/SUIT-Variable.woff2",
  variable: "--font-suit",
  display: "swap",
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ko" className={suit.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
