import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getBook, books } from '@/lib/data';
import BookCard from '@/components/BookCard';
import CTAForm from '@/components/CTAForm';

interface BookPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return books.map((book) => ({
        slug: book.slug,
    }));
}

export async function generateMetadata({ params }: BookPageProps) {
    const { slug } = await params;
    const book = getBook(slug);

    if (!book) {
        return {
            title: 'Book Not Found',
        };
    }

    return {
        title: `${book.title} | Moabyte Press Survival`,
        description: book.description,
    };
}

export default async function BookPage({ params }: BookPageProps) {
    const { slug } = await params;
    const book = getBook(slug);

    if (!book) {
        notFound();
    }

    const pairedBook = book.pairsWithSlug ? getBook(book.pairsWithSlug) : null;

    return (
        <div className="bg-[#Fdfbf7] min-h-screen py-20">
            <div className="container-width max-w-6xl">
                <div className="lg:grid lg:grid-cols-12 gap-12">

                    {/* Main Content - Left 8 */}
                    <div className="lg:col-span-8 mb-12 lg:mb-0">
                        <Link href="/books" className="inline-block mb-6 text-sm font-medium text-gray-500 hover:text-[#3F5234]">
                            &larr; Back to Library
                        </Link>

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12">
                            <div className="flex flex-col md:flex-row gap-8 mb-8">
                                <div className="w-full md:w-1/3 flex-shrink-0 relative aspect-[2/3] rounded-lg overflow-hidden shadow-md">
                                    {book.imageSrc ? (
                                        <Image
                                            src={book.imageSrc}
                                            alt={book.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">No Cover</div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">{book.title}</h1>
                                    <p className="text-xl text-[#3F5234] font-medium mb-6">{book.subtitle}</p>

                                    <div className="prose text-gray-700 mb-6 leading-relaxed">
                                        <p>{book.description}</p>
                                    </div>

                                    <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center w-full md:w-auto mb-4">
                                        Buy on Amazon <ArrowUpRight className="ml-2 w-4 h-4" />
                                    </a>
                                    <p className="text-xs text-gray-400">Secure checkout via Amazon.com</p>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-8">
                                <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                                <ul className="space-y-3">
                                    {book.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-[#98B886] font-bold">✓</span>
                                            <span className="text-gray-700">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                            <h2 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {book.faq.map((item, i) => (
                                    <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                        <h4 className="font-bold text-gray-900 mb-2">{item.question}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Right 4 */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* Pairs Well With */}
                        {pairedBook && (
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Complete the System</h3>
                                <h4 className="font-bold text-[#1A1A1A] mb-2">Pairs well with:</h4>
                                <div className="mb-4">
                                    <BookCard
                                        title={pairedBook.title}
                                        subtitle={pairedBook.subtitle}
                                        imageSrc={pairedBook.imageSrc}
                                        slug={pairedBook.slug}
                                        amazonUrl={pairedBook.amazonUrl}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Blueprint CTA */}
                        <div className="bg-[#2F3E26] text-white rounded-xl shadow-lg p-6 sticky top-24">
                            <h3 className="text-xl font-bold mb-2">Free Starter Plan</h3>
                            <p className="text-green-100 text-sm mb-4">
                                Don't just read. Start growing. Get the 30-Day Blueprint checklist.
                            </p>
                            <CTAForm source={`book_page_${slug}`} compact />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
