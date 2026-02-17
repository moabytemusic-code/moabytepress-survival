import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#E5E5E5] text-gray-800 py-12 md:py-16 border-t border-gray-200">
            <div className="container-width grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <Link href="/" className="text-2xl font-bold tracking-tight text-[#3F5234] hover:text-[#5A734B] transition-colors">MOABYTE PRESS</Link>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                        Tactical, practical guides for food resilience and modern survival. Building independence before you need it.
                    </p>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">EST. 2026</div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest">Connect</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li><Link href="/books" className="hover:text-[#3F5234] transition-colors">Our Books</Link></li>
                        <li><Link href="/systems" className="hover:text-[#3F5234] transition-colors">Survival Systems</Link></li>
                        <li><Link href="/blog" className="hover:text-[#3F5234] transition-colors">Latest Articles</Link></li>
                        <li><Link href="/about" className="hover:text-[#3F5234] transition-colors">About Us</Link></li>
                        <li><Link href="/free" className="text-[#3F5234] font-medium hover:text-[#5A734B] transition-colors">Free Blueprint</Link></li>
                    </ul>
                </div>

                {/* Disclaimer */}
                <div className="space-y-4 text-xs text-gray-500 leading-relaxed">
                    <p>
                        The content provided on this website is for informational and educational purposes only. It is not intended as professional agricultural, medical, legal, or emergency planning advice.
                    </p>
                    <p>
                        Use common sense and consult with qualified experts before implementing major changes to your property or lifestyle. Moabyte Press assumes no liability for actions taken based on this information.
                    </p>
                    <p className="pt-4 border-t border-gray-300 flex justify-between">
                        <span>&copy; {new Date().getFullYear()} Moabyte Press. All rights reserved.</span>
                        <span className="text-[10px] text-gray-400">v2.1 (Light Mode Fix)</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
