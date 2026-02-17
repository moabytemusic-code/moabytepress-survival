export default function AboutPage() {
    return (
        <div className="bg-[#Fdfbf7] min-h-screen py-20">
            <div className="container-width max-w-4xl mx-auto">
                <header className="mb-16 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1A1A]">About Moabyte Press Survival</h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        We publish tactical, field-tested guides for food resilience. No fear-mongering. No politics. Just systems that work when the supply chain breaks.
                    </p>
                </header>

                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Our Mission</h2>
                    <div className="prose prose-lg text-gray-800 max-w-none">
                        <p>
                            The world is fragile. Modern agriculture is a just-in-time system that relies on stability. When stability falters, the supermarket shelves empty in 48 hours.
                        </p>
                        <p>
                            Most "survival" advice is either:
                        </p>
                        <ul>
                            <li><strong>Too Extreme:</strong> Bunkers, ammo, and "lone wolf" fantasies.</li>
                            <li><strong>Too Hobbyist:</strong> Beautiful raised beds full of lettuce and tomatoes that provide almost zero calories.</li>
                        </ul>
                        <p>
                            <strong>Moabyte Press fills the gap.</strong> We focus on <em>Calorie Production</em>. We teach you how to grow, store, and process the foods that actually keep you alive: corn, potatoes, beans, and winter squash.
                        </p>
                        <p>
                            Our guides are written for real people with families, jobs, and limited space. We believe that food independence is the ultimate form of security.
                        </p>
                    </div>
                </section>

                <section className="flex flex-col md:flex-row gap-8 items-center bg-[#2F3E26] text-white rounded-2xl p-8 md:p-12">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-4">Start Your Resilience Journey</h2>
                        <p className="text-green-100 mb-6">
                            Join thousands of practical preppers who are building systems, not stockpiles.
                        </p>
                        <ul className="space-y-4 text-sm mb-6">
                            <li className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-[#3F5234] flex items-center justify-center font-bold">1</span>
                                <span>Download the 30-Day Blueprint</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-[#3F5234] flex items-center justify-center font-bold">2</span>
                                <span>Read our Core Library books</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-[#3F5234] flex items-center justify-center font-bold">3</span>
                                <span>Build your calorie production system</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 w-full bg-white text-gray-900 rounded-xl p-6 shadow-lg">
                        <h3 className="font-bold mb-2">Get The Blueprint</h3>
                        <p className="text-sm text-gray-500 mb-4">Free PDF checklist.</p>
                        {/* We can reuse CTAForm here or link to it */}
                        <a href="/free" className="btn-primary w-full text-center block">
                            Access Free Download
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
