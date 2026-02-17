import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Moabyte Press Survival',
    default: 'Moabyte Press Survival - Practical Food Independence',
  },
  description: 'Tactical guides for food resilience, survival gardening, and self-reliance systems. Get the free 30-Day Blueprint.',
  openGraph: {
    type: 'website',
    siteName: 'Moabyte Press Survival',
    title: 'Moabyte Press Survival - Practical Food Independence',
    description: 'Tactical guides for food resilience, survival gardening, and self-reliance systems.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moabyte Press Survival',
    description: 'Tactical guides for food resilience, survival gardening, and self-reliance systems.',
    // site: '@moabytepress', // if applicable
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen flex flex-col"}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {/* Analytics placeholder - implement GA4 with client component if needed */}
      </body>
    </html>
  );
}
