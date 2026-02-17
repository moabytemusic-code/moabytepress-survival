import Image from 'next/image';
import Link from 'next/link';
import { Sprout, ShieldCheck, Anchor, ChevronRight } from 'lucide-react';
import BookCard from '@/components/BookCard';
import PillarCard from '@/components/PillarCard';
import CTAForm from '@/components/CTAForm';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#1A1A1A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/hero_survival_garden.png"
            alt="Thriving survival garden"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-transparent z-10" />

        <div className="relative z-20 container-width py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Build Food Independence <span className="text-[#98B886]">Before You Need It</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
              Practical survival food production systems for real-world conditions. No hype. Just tactical, calorie-dense results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/free" className="btn-primary text-lg px-8">
                Get the Free Blueprint
              </Link>
              <Link href="/books" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
                View the Library
              </Link>
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-widest pt-2">
              Trusted by 10,000+ Practical Preppers
            </p>
          </div>
          {/* Optional: Hero Visual/Form could go here on desktop */}
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-20 bg-[#Fdfbf7]">
        <div className="container-width">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-2">Tactical Guides</h2>
              <p className="text-gray-600">Field-tested knowledge for food security.</p>
            </div>
            <Link href="/books" className="hidden md:flex items-center text-[#3F5234] font-medium hover:underline">
              View all books <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BookCard
              title="Survival Planting 101"
              subtitle="High-Calorie Crops for Crisis"
              imageSrc="/images/book_survival_planting_101.png"
              slug="survival-planting-101"
              amazonUrl="https://amazon.com"
            />
            <BookCard
              title="Survival Vertical Gardening"
              subtitle="Maximize Yield in Minimal Space"
              imageSrc="/images/book_vertical_gardening.png"
              slug="survival-vertical-gardening"
              amazonUrl="https://amazon.com"
            />
            {/* Third slot for balance, or just 2 centered? User asked for 2 featured. */}
            {/* Let's show a "Coming Soon" card to fill the grid or keep it 2 cols? User section says "Featured Books (2 cards now)". */}
            <div className="hidden lg:block bg-gray-50 rounded-xl border border-dashed border-gray-300 p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold text-gray-400 mb-2">More Field Guides Coming</h3>
              <p className="text-sm text-gray-500 mb-6">Seeds, Water, and Preservation systems in development.</p>
              <Link href="/api/subscribe" className="text-[#3F5234] text-sm font-medium hover:underline">
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

      {/* The 3 Pillars */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">The Moabyte System</h2>
            <p className="text-gray-600">
              True food independence isn't about hoarding cans. It's about building living systems that produce calories when supply chains fail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PillarCard
              title="Production"
              description="Focus on high-calorie staple crops, not just salad greens. Learn to grow what actually keeps you alive in a calorie-deficit scenario."
              icon={Sprout}
              colorClass="bg-green-100 text-green-700"
            />
            <PillarCard
              title="Stability"
              description="Create resilience through soil fertility, seed saving, and water management. Your garden must survive without the garden center."
              icon={ShieldCheck}
              colorClass="bg-blue-100 text-blue-700"
            />
            <PillarCard
              title="Independence"
              description="Reduce reliance on the grid. Low-tech tools, manual methods, and systems that work when the power is out."
              icon={Anchor}
              colorClass="bg-amber-100 text-amber-700"
            />
          </div>
        </div>
      </section>

      {/* Blueprint CTA */}
      <section className="py-24 bg-[#2F3E26] text-white">
        <div className="container-width">
          <div className="bg-[#3F5234] rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Don't Wait Until The Shelves Are Empty
              </h2>
              <p className="text-green-100 text-lg">
                Get our free <strong>30-Day Survival Food Starter Blueprint</strong>. A step-by-step checklist to go from zero to a calorie-producing garden in one month.
              </p>
              <ul className="space-y-3 text-green-50">
                <li className="flex items-center gap-2"><span className="text-[#98B886]">✔</span> The 5 Essential Crisis Crops</li>
                <li className="flex items-center gap-2"><span className="text-[#98B86]">✔</span> Small-Space caloric density plan</li>
                <li className="flex items-center gap-2"><span className="text-[#98B86]">✔</span> Printable weekly checklist</li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full bg-white rounded-xl p-6 md:p-8 text-gray-900">
              <h3 className="text-xl font-bold mb-2">Get Instant Access</h3>
              <p className="text-gray-500 text-sm mb-6">Join 10,000+ grounded preppers.</p>
              <CTAForm />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-[#Fdfbf7]">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-12">Field Notes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholder for blog posts - ideally these would be dynamic */}
            {[
              { title: "Survival Gardening vs Hobby Gardening", date: "Feb 12", slug: "survival-gardening-vs-hobby" },
              { title: "High-Calorie Crops: What to Grow", date: "Feb 08", slug: "high-calorie-crops" },
              { title: "Small-Space Food Production", date: "Feb 01", slug: "small-space-food-production" }
            ].map((post, i) => (
              <Link href={`/blog/${post.slug}`} key={i} className="group block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                <div className="text-xs text-[#3F5234] font-bold uppercase tracking-wider mb-2">Tactical Guide</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#3F5234] transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-4">Read the full breakdown on securing your food supply with practical methods...</p>
                <span className="text-sm font-medium text-gray-900 group-hover:underline">Read Article &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
