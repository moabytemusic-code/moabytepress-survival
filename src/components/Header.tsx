import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E5E5E5]">
      <div className="container-width flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter text-[#1A1A1A]">
          <span className="text-[#3F5234]">MOABYTE</span> PRESS
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-gray-500 ml-2">Survival</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-600">
          <Link href="/books" className="hover:text-[#3F5234] transition-colors">Books</Link>
          <Link href="/systems" className="hover:text-[#3F5234] transition-colors">Systems</Link>
          <Link href="/blog" className="hover:text-[#3F5234] transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-[#3F5234] transition-colors">About</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/free" className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#3F5234] hover:bg-[#2F3E26] shadow-sm transition-all">
            Free Blueprint
          </Link>
          {/* Mobile menu toggle would go here */}
        </div>
      </div>
    </header>
  );
}
