import { getPostData, getSortedPostsData } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PostPageProps) {
    const { slug } = await params;
    const post = await getPostData(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params;
    let post;
    try {
        post = await getPostData(slug);
    } catch (error) {
        notFound();
    }

    return (
        <div className="bg-[#Fdfbf7] min-h-screen py-20">
            <div className="container-width max-w-3xl mx-auto">
                <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-[#3F5234] mb-8 font-medium text-sm transition-colors">
                    &larr; Back to Field Notes
                </Link>

                <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                    <header className="mb-10 text-center border-b border-gray-100 pb-10">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full">
                                {post.category?.replace('-', ' ')}
                            </span>
                            <time className="text-sm text-gray-400">{post.date}</time>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
                            {post.title}
                        </h1>
                        <p className="text-xl text-gray-500 italic max-w-2xl mx-auto leading-relaxed">
                            {post.excerpt}
                        </p>
                    </header>

                    <div
                        className="prose prose-lg prose-green max-w-none text-gray-800"
                        dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
                    />

                    <div className="mt-16 bg-[#2F3E26] text-white rounded-xl p-8 md:p-10 text-center">
                        <h3 className="text-2xl font-bold mb-3">Build Your Food Security</h3>
                        <p className="text-green-100 mb-6 max-w-lg mx-auto">
                            Get the free 30-Day Survival Food Starter Blueprint. A complete checklist for calories in crisis.
                        </p>
                        <a href="/free" className="inline-block btn-primary bg-white text-[#3F5234] hover:bg-gray-100 border-transparent w-full md:w-auto">
                            Download Free Blueprint
                        </a>
                    </div>
                </article>
            </div>
        </div>
    );
}
