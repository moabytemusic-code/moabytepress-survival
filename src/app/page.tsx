import Link from 'next/link';
import Image from 'next/image';
import { Sprout, ShieldCheck, Anchor, ChevronRight } from 'lucide-react';
import BookCard from '@/components/BookCard';
import PillarCard from '@/components/PillarCard';
import CTAForm from '@/components/CTAForm';
import { getSortedPostsData } from '@/lib/blog'; // Import blog data
import { getBook } from '@/lib/data'; // Import book data getter

export default function Home() {
  // Get latest 3 posts for preview section
  const latestPosts = getSortedPostsData().slice(0, 3);

  const plantingBook = getBook('survival-planting-101');
  const verticalBook = getBook('survival-vertical-gardening');

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO Section */}
      <section className="relative bg-[#242B1F] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image
            src="/images/hero_survival_garden.png"
            alt="Thriving survival garden"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#242B1F] via-[#242B1F]/80 to-transparent z-10" />

        <div className="relative z-20 container-width py-24 md:py-40 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-md">
              Build Food Independence <br />
              <span className="text-[#B4D6A2]">Before You Need It</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-100 max-w-lg leading-relaxed drop-shadow-sm">
              Practical survival food systems for small spaces, uncertain times, and real-world resilience.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link href="/free" className="btn-primary text-lg px-8 py-4 bg-[#6B8E5A] hover:bg-[#7DA36C] text-white">
                Get the Free 30-Day Blueprint
              </Link>
              <Link href="/books" className="btn-secondary bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20 hover:text-white">
                Explore the Library
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#242B1F] bg-gray-400" />
                ))}
              </div>
              <p className="text-sm text-gray-300 font-medium">
                Joined by 12,000+ Practical Preppers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3-PILLAR AUTHORITY Section */}
      <section className="py-20 bg-white">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[var(--fg-primary)] mb-4">The Survival Food System Framework</h2>
            <p className="text-[var(--fg-secondary)]">
              True food independence isn't about hoarding cans. It's about building living systems that produce calories when supply chains fail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/systems/production" className="block group decoration-transparent">
              <PillarCard
                title="Production"
                description="High-yield crops. Calorie planning. Soil fertility."
                icon={Sprout}
                colorClass="bg-green-100 text-green-700 group-hover:bg-green-200 transition-colors"
              />
            </Link>
            <Link href="/systems/stability" className="block group decoration-transparent">
              <PillarCard
                title="Stability"
                description="Seed saving. Water planning. Seasonal rotation."
                icon={ShieldCheck}
                colorClass="bg-blue-100 text-blue-700 group-hover:bg-blue-200 transition-colors"
              />
            </Link>
            <Link href="/systems/independence" className="block group decoration-transparent">
              <PillarCard
                title="Independence"
                description="Urban food systems. Off-grid resilience. Long-term scaling."
                icon={Anchor}
                colorClass="bg-amber-100 text-amber-700 group-hover:bg-amber-200 transition-colors"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. LEAD MAGNET Section (Reinforcement) */}
      <section className="py-24 bg-[#F3F1ED]">
        <div className="container-width">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-16 shadow-xl flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#B4D6A2]/10 rounded-full blur-3xl" />

            <div className="lg:w-1/2 space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B4D6A2]/20 text-[#3F5234] text-xs font-bold uppercase tracking-wider">
                Free Resource
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[var(--fg-primary)]">
                Start Your 30-Day Food Resilience Plan
              </h2>
              <p className="text-[var(--fg-secondary)] text-lg md:text-xl leading-relaxed">
                Get our free <strong>30-Day Survival Food Starter Blueprint</strong>. A step-by-step checklist to go from zero to a calorie-producing garden in one month.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-center gap-3"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#B4D6A2] flex items-center justify-center text-white text-[10px]">✔</span> Calorie crop priority chart</li>
                <li className="flex items-center gap-3"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#B4D6A2] flex items-center justify-center text-white text-[10px]">✔</span> Small-space production plan</li>
                <li className="flex items-center gap-3"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#B4D6A2] flex items-center justify-center text-white text-[10px]">✔</span> 90-day expansion roadmap</li>
                <li className="flex items-center gap-3"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#B4D6A2] flex items-center justify-center text-white text-[10px]">✔</span> Beginner setup checklist</li>
              </ul>
            </div>

            <div className="lg:w-1/2 w-full bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 relative z-10">
              <h3 className="text-2xl font-bold mb-3 text-[#1A1A1A]">Get Instant Access</h3>
              <p className="text-gray-500 mb-8">Join 12,000+ grounded preppers building real security.</p>
              <CTAForm source="homepage_main_optin" />
              <p className="text-center text-xs text-gray-400 mt-6">
                Privacy first. No spam. One-click unsubscribe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOOKS Section */}
      <section className="py-20 bg-[#Fdfbf7]">
        <div className="container-width">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[var(--fg-primary)] mb-2">Tactical Guides</h2>
              <p className="text-[var(--fg-secondary)]">Field-tested knowledge for food security.</p>
            </div>
            <Link href="/books" className="hidden md:flex items-center text-[#3F5234] font-medium hover:underline">
              View all books <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plantingBook && (
              <BookCard
                title={plantingBook.title}
                subtitle={plantingBook.subtitle}
                imageSrc={plantingBook.imageSrc}
                slug={plantingBook.slug}
                amazonUrl={plantingBook.amazonUrl}
              />
            )}
            {verticalBook && (
              <BookCard
                title={verticalBook.title}
                subtitle={verticalBook.subtitle}
                imageSrc={verticalBook.imageSrc}
                slug={verticalBook.slug}
                amazonUrl={verticalBook.amazonUrl}
              />
            )}
            {/* Third slot for balance, showing development */}
            <div className="hidden lg:block bg-gray-50 rounded-xl border border-dashed border-gray-300 p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold text-gray-400 mb-2">More Field Guides Coming</h3>
              <p className="text-sm text-gray-500 mb-6">Seeds, Water, and Preservation systems in development.</p>
              <Link href="/free" className="text-[#3F5234] text-sm font-medium hover:underline">
                Join the list to be notified
              </Link>
            </div>
          </div>
          <div className="mt-8 md:hidden text-center">
            <Link href="/books" className="text-[#3F5234] font-medium inline-flex items-center">
              View all books <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. BLOG PREVIEW (Latest 3) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-12">Field Notes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post, i) => (
              <Link href={`/blog/${post.slug}`} key={i} className="group block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all h-full flex flex-col">
                <div className="text-xs text-[#3F5234] font-bold uppercase tracking-wider mb-2">{post.category?.replace(/-/g, ' ')}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#3F5234] transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                <span className="text-sm font-medium text-gray-900 group-hover:underline mt-auto">Read Article &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-20 bg-[#Fdfbf7] text-center border-t border-gray-200">
        <div className="container-width max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Build resilience gradually.</h2>
          <p className="text-gray-600 mb-8 text-lg">
            You don't need to do it all at once. Start with a plan.
          </p>
          <Link href="/free" className="btn-primary px-10 py-4 text-lg shadow-lg">
            Download the Free Blueprint
          </Link>
        </div>
      </section>

    </div>
  );
}
