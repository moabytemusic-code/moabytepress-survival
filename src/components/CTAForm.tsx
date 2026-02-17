'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Loader2 } from 'lucide-react';

interface CTAFormProps {
    compact?: boolean;
    className?: string;
    source?: string;
}

export default function CTAForm({ compact = false, className = '', source = 'survival_site' }: CTAFormProps) {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, first_name: firstName, source }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong. Please try again.');
            }

            router.push('/thanks');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
            {!compact && (
                <div>
                    <label htmlFor="firstName" className="sr-only">First Name (Optional)</label>
                    <input
                        id="firstName"
                        type="text"
                        placeholder="First Name (Optional)"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="input-field"
                    />
                </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field shadow-sm"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary whitespace-nowrap"
                >
                    {loading ? <Loader2 className="animate-spin h-5 w-5" /> : (
                        <>
                            Get the Blueprint <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                    )}
                </button>
            </div>

            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            <p className="text-xs text-gray-500 mt-2 text-center sm:text-left">
                No spam. Unsubscribe anytime.
            </p>
        </form>
    );
}
