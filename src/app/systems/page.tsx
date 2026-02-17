import Link from 'next/link';
import { Sprout, ShieldCheck, Anchor } from 'lucide-react';
import PillarCard from '@/components/PillarCard';

export default function SystemsPage() {
    return (
        <div className="bg-[#Fdfbf7] min-h-screen py-20">
            <div className="container-width max-w-4xl mx-auto">
                <header className="mb-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1A1A]">Survival Food Systems</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        The Moabyte resilience model is built on three layers. Focusing on one leaves you vulnerable. You need all three.
                    </p>
                </header>

                <section id="production" className="mb-24 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center justify-center p-3 rounded-lg mb-2 bg-green-100 text-green-700 w-12 h-12">
                            <Sprout className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-[#1A1A1A]">1. Production Systems</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            This is about raw calorie output. Most "survival gardens" are hobby gardens that will starve you. You need high-yield, nutrient-dense crops that grow reliably in your climate.
                        </p>
                        <ul className="space-y-3 text-gray-800 font-medium list-disc ml-5 pl-2">
                            <li>High-Calorie Staple Crops (Corn, Potatoes, Beans)</li>
                            <li>Soil Fertility Management</li>
                            <li>Small-Space Calories</li>
                        </ul>
                        <Link href="/systems/production" className="inline-block mt-4 btn-secondary">
                            Explore Production Methods &rarr;
                        </Link>
                    </div>
                    {/* Placeholder Image */}
                    <div className="flex-1 w-full aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg border border-gray-100 flex items-center justify-center text-gray-400">
                        Image: Lush production garden
                    </div>
                </section>

                <section id="stability" className="mb-24 flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center justify-center p-3 rounded-lg mb-2 bg-blue-100 text-blue-700 w-12 h-12">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-[#1A1A1A]">2. Stability Systems</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            A garden that depends on the store is not a survival garden. Stability means closing loop: saving your own seeds, generating your own fertilizer, and securing water.
                        </p>
                        <ul className="space-y-3 text-gray-800 font-medium list-disc ml-5 pl-2">
                            <li>Heirloom Seed Saving</li>
                            <li>Water Catchment & Purification</li>
                            <li>Long-Term Preservation</li>
                        </ul>
                        <Link href="/systems/stability" className="inline-block mt-4 btn-secondary">
                            Explore Stability Methods &rarr;
                        </Link>
                    </div>
                    <div className="flex-1 w-full aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg border border-gray-100 flex items-center justify-center text-gray-400">
                        Image: Seed bank & jars
                    </div>
                </section>

                <section id="independence" className="mb-24 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center justify-center p-3 rounded-lg mb-2 bg-amber-100 text-amber-700 w-12 h-12">
                            <Anchor className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-[#1A1A1A]">3. Independence Systems</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            When the grid goes down, your electric pump won't work. Independence systems are low-tech, manual backups that ensure survival in a true collapse scenario.
                        </p>
                        <ul className="space-y-3 text-gray-800 font-medium list-disc ml-5 pl-2">
                            <li>Off-Grid Watering</li>
                            <li>Manual Tools & Repair</li>
                            <li>Urban stealth growing</li>
                        </ul>
                        <Link href="/systems/independence" className="inline-block mt-4 btn-secondary">
                            Explore Independence Methods &rarr;
                        </Link>
                    </div>
                    <div className="flex-1 w-full aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg border border-gray-100 flex items-center justify-center text-gray-400">
                        Image: Manual pump & tools
                    </div>
                </section>

            </div>
        </div>
    );
}
