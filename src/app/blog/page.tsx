import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';

export default function BlogIndex() {
    const allPosts = getSortedPostsData();

    return (
        <div className="bg-[#Fdfbf7] min-h-screen py-20">
            <div className="container-width">
                <header className="mb-16 text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Field Notes</h1>
                    <p className="text-lg text-gray-600">
                        Tactical insights for building food systems that last. Practical, tested, and reliable.
                    </p>
                </header>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {allPosts.map((post) => (
                        <article key={post.slug} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider rounded-full">
                                        {post.category?.replace('-', ' ')}
                                    </span>
                                    <time className="text-xs text-gray-400">{post.date}</time>
                                </div>

                                <h2 className="text-xl font-bold text-[#1A1A1A] mb-3 leading-tight group-hover:text-[#3F5234]">
                                    <Link href={`/blog/${post.slug}`} className="hover:text-[#3F5234] transition-colors">
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-gray-100">
                                    <Link href={`/blog/${post.slug}`} className="text-[#3F5234] font-bold text-sm hover:underline inline-flex items-center">
                                        Read Field Note &rarr;
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
