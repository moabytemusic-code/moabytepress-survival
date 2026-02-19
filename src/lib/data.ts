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
    rssExplanation?: string;
    showDiagram?: boolean;
}

export const books: Book[] = [
    {
        slug: 'survival-planting-101',
        title: 'Survival Planting 101',
        subtitle: 'High-Calorie Crops for Crisis',
        description: 'Stop growing salad. Start growing calories. This guide teaches you the exact crops needed to sustain a family when the grocery store closes.',
        imageSrc: '/images/book_survival_planting_101_final.png',
        amazonUrl: 'https://a.co/d/0b9z0wcz',
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
        imageSrc: '/images/book_vertical_gardening_final.png',
        amazonUrl: 'https://a.co/d/097HcIZL',
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
    },
    {
        slug: 'survival-seed-saving',
        title: 'Survival Seed Saving',
        subtitle: 'The Regenerative Seed System™',
        description: 'Never buy seeds again. Learn the specific techniques for harvesting, processing, and storing seeds from your highest-producing crops to ensure long-term food security.',
        imageSrc: '/images/book_seed_saving_placeholder.png',
        amazonUrl: 'https://amazon.com/author/moabytepress', // Use a general author link if specific is unknown
        rssExplanation: 'The Regenerative Seed System™ (RSS) is a closed-loop framework for maintaining genetic diversity and crop resilience. By selecting for local conditions year after year, you create a personalized "landrace" that outperforms generic store-bought seeds.',
        showDiagram: true,
        bullets: [
            'Wet vs. Dry processing techniques for every major calorie crop',
            'Storage protocols to maintain 90%+ germination for 5+ years',
            'How to prevent cross-pollination in small gardens',
            'Selecting for resilience: Which plants to save from first'
        ],
        faq: [
            {
                question: 'Don\'t seeds expire?',
                answer: 'If stored incorrectly, yes. Using the RSS protocols, many seeds remain viable for 5-10 years, though we recommend a 3-year rotation.'
            },
            {
                question: 'Can I save seeds from grocery store produce?',
                answer: 'Rarely. Most grocery produce is hybrid (F1), which won\'t grow "true to seed." This book focuses on open-pollinated and heirloom varieties.'
            }
        ],
        pairsWithSlug: 'survival-planting-101'
    }
];

export function getBook(slug: string) {
    return books.find((book) => book.slug === slug);
}
