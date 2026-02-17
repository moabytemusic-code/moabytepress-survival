import BookCard from '@/components/BookCard';
import { books } from '@/lib/data';

export default function BooksPage() {
    const availableBooks = books.filter(book => !book.isComingSoon);
    const comingSoonBooks = books.filter(book => book.isComingSoon);

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
                        {availableBooks.map((book) => (
                            <BookCard
                                key={book.slug}
                                title={book.title}
                                subtitle={book.subtitle}
                                imageSrc={book.imageSrc}
                                slug={book.slug}
                                amazonUrl={book.amazonUrl}
                            />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-8 border-b pb-4 text-[#1A1A1A] opacity-70">In Development</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-80">
                        {comingSoonBooks.map((book) => (
                            <BookCard
                                key={book.slug}
                                title={book.title}
                                subtitle={book.subtitle}
                                imageSrc={book.imageSrc}
                                slug={book.slug}
                                isComingSoon
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
