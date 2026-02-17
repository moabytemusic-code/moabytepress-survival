import { LucideIcon } from 'lucide-react';

interface PillarCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    colorClass: string;
}

export default function PillarCard({ title, description, icon: Icon, colorClass }: PillarCardProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div className={`inline-flex items-center justify-center p-3 rounded-lg mb-5 ${colorClass}`}>
                <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]">{title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
        </div>
    );
}
