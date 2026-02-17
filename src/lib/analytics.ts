type EventType = 'lead_optin' | 'amazon_click';

interface AnalyticsEvent {
    event: EventType;
    label?: string;
    value?: number;
    [key: string]: any;
}

export const trackEvent = ({ event, label, value, ...props }: AnalyticsEvent) => {
    // Console log for dev
    if (process.env.NODE_ENV === 'development') {
        console.log(`[Analytics] ${event}`, { label, value, ...props });
    }

    // GA4 Implementation (Window interface would need extension, or use window.gtag if available)
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', event, {
            event_category: 'engagement',
            event_label: label,
            value: value,
            ...props
        });
    }
};
