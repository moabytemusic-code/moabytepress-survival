import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { email, first_name, source } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const apiKey = process.env.BREVO_API_KEY;
        // Default to List 64 per master prompt if not specified in ENV
        const listId = process.env.BREVO_LIST_ID ? parseInt(process.env.BREVO_LIST_ID) : 64;

        if (!apiKey) {
            console.error('BREVO_API_KEY is missing');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        const payload = {
            email,
            attributes: {
                FIRSTNAME: first_name || '',
                SOURCE: source || 'survival_site',
                SURVIVAL_INTEREST: true,
            },
            updateEnabled: true,
            listIds: [listId],
        };

        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'api-key': apiKey,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Brevo API Error:', errorData);
            return NextResponse.json({ error: errorData.message || 'Failed to subscribe' }, { status: response.status });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Subscription error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
