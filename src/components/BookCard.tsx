'use client'; // Client component for onClick

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface BookCardProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    slug: string;
    amazonUrl?: string;
    isComingSoon?: boolean;
}

export default function BookCard({
    title,
    subtitle,
    imageSrc,
    slug,
    amazonUrl,
    isComingSoon = false,
}: BookCardProps) {

    const handleAmazonClick = () => {
        trackEvent({ event: 'amazon_click', label: slug });
    };

    return (
        <div className="tactical-card flex flex-col h-full overflow-hidden group">
            <div className="relative aspect-[2/3] w-full bg-gray-100 overflow-hidden">
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">No Cover</div>
                )}
                {isComingSoon && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
                        <span className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                            Coming Soon
                        </span>
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1A1A1A] leading-tight mb-1 group-hover:text-[#3F5234] transition-colors">
                    {isComingSoon ? title : <Link href={`/books/${slug}`}>{title}</Link>}
                </h3>
                <p className="text-sm text-gray-500 mb-4 font-medium">{subtitle}</p>

                <div className="mt-auto space-y-3 pt-4">
                    {!isComingSoon && (
                        <>
                            {amazonUrl && (
                                <a
                                    href={amazonUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleAmazonClick}
                                    className="w-full btn-primary flex items-center justify-center gap-2 text-sm py-2"
                                >
                                    Buy on Amazon <ArrowUpRight className="h-4 w-4" />
                                </a>
                            )}
                            <Link
                                href={`/books/${slug}`}
                                className="w-full btn-secondary text-sm py-2"
                            >
                                Read Overview
                            </Link>
                        </>
                    )}
                    {isComingSoon && (
                        <div className="w-full py-2 text-center text-sm text-gray-400 italic border border-dashed border-gray-300 rounded-md">
                            Notify me when available
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
