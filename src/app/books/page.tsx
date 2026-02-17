import BookCard from '@/components/BookCard';

export default function BooksPage() {
    return (
        <div className="bg-[#Fdfbf7] min-h-screen py-20">
            <div className="container-width">
                <header className="mb-16 text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Survival Food Library</h1>
                    <p className="text-lg text-gray-600">
                        Tactical guides designed for real-world application. No fluff, just production systems that work.
                    </p>
                </header>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 border-b pb-4 text-[#1A1A1A]">Available Field Guides</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <BookCard
                            title="Survival Planting 101"
                            subtitle="High-Calorie Crops for Crisis"
                            imageSrc="/images/book_survival_planting_101.png"
                            slug="survival-planting-101"
                            amazonUrl="https://amazon.com/dp/placeholder1"
                        />
                        <BookCard
                            title="Survival Vertical Gardening"
                            subtitle="Maximize Yield in Minimal Space"
                            imageSrc="/images/book_vertical_gardening.png"
                            slug="survival-vertical-gardening"
                            amazonUrl="https://amazon.com/dp/placeholder2"
                        />
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-8 border-b pb-4 text-[#1A1A1A] opacity-70">In Development</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-80">
                        <BookCard
                            title="Survival Seed Saving"
                            subtitle="Genetic Independence & Heirloom Security"
                            imageSrc=""
                            slug="seed-saving"
                            isComingSoon
                        />
                        <BookCard
                            title="Off-Grid Water & Soil"
                            subtitle="Fertility & Hydration Without Infrastructure"
                            imageSrc=""
                            slug="water-soil"
                            isComingSoon
                        />
                        <BookCard
                            title="Urban Survival Food Systems"
                            subtitle="Stealth Growing for City Dwellers"
                            imageSrc=""
                            slug="urban-systems"
                            isComingSoon
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
