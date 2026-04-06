import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Kemesha Thompson Resume',
  description: 'Next.js + Tailwind CSS Resume',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
