'use client';

import Link from 'next/link';
import Home from '@/components/homeLogo';
function Header() {

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Home/>
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="/rack-rates"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Rack Rates
          </Link>
          
        </div>
      </div>
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      {children}
    </section>
  );
}
