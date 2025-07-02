import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'GenuinAI – Real-time Deepfake Detection',
  description: 'Protecting trust in digital media using AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-black antialiased">
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
