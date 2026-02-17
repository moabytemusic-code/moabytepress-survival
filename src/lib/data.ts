export interface Book {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
    amazonUrl: string;
    bullets: string[];
    faq: { question: string; answer: string }[];
    pairsWithSlug?: string;
    isComingSoon?: boolean;
}

export const books: Book[] = [
    {
        slug: 'survival-planting-101',
        title: 'Survival Planting 101',
        subtitle: 'High-Calorie Crops for Crisis',
        description: 'Stop growing salad. Start growing calories. This guide teaches you the exact crops needed to sustain a family when the grocery store closes.',
        imageSrc: '/images/book_survival_planting_101_v2.png',
        amazonUrl: 'https://a.co/d/097HcIZL',
        bullets: [
            'The 5 crops that provide 80% of required calories',
            'Soil preparation for maximum yield without chemical inputs',
            'Harvest and storage techniques for winter survival'
        ],
        faq: [
            {
                question: 'Is this for beginners?',
                answer: 'Yes. It assumes zero prior gardening knowledge, but focuses strictly on calorie crops.'
            },
            {
                question: 'Do I need a large farm?',
                answer: 'No. The methods work for backyards, though yield scales with space.'
            }
        ],
        pairsWithSlug: 'survival-vertical-gardening'
    },
    {
        slug: 'survival-vertical-gardening',
        title: 'Survival Vertical Gardening',
        subtitle: 'Maximize Yield in Minimal Space',
        description: 'Urban survival requires density. Learn to grow 3x the food in the same footprint by going up, not out.',
        imageSrc: '/images/book_vertical_gardening_v2.png',
        amazonUrl: 'https://a.co/d/0b9z0wcz',
        bullets: [
            'Trellising systems for beans, squash, and tomatoes',
            'Container strategies for patios and balconies',
            'Hydroponic basics for indoor production'
        ],
        faq: [
            {
                question: 'Can I do this on a balcony?',
                answer: 'Absolutely. This book is designed for space-constrained growers.'
            },
            {
                question: 'What materials do I need?',
                answer: 'Simple hardware store items: PVC, cattle panels, and fabric pots.'
            }
        ],
        pairsWithSlug: 'survival-planting-101'
    }
];

export function getBook(slug: string) {
    return books.find((book) => book.slug === slug);
}
