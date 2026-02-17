import { MetadataRoute } from 'next';
import { books } from '@/lib/data';
import { getSortedPostsData } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://survival.moabytepress.com';

    const staticRoutes = [
        '',
        '/books',
        '/free',
        '/systems',
        '/systems/production',
        '/systems/stability',
        '/systems/independence',
        '/blog',
        '/about',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const bookRoutes = books.map((book) => ({
        url: `${baseUrl}/books/${book.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    const blogRoutes = getSortedPostsData().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...bookRoutes, ...blogRoutes];
}
