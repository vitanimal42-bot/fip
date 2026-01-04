export async function getExchangeRates() {
    try {
        const res = await fetch('https://api.exchangerate-api.com/v4/latest/TRY', {
            next: { revalidate: 86400 } // Cache for 24 hours (86400 seconds)
        });
        if (!res.ok) throw new Error('Failed to fetch exchange rates');
        return await res.json();
    } catch (error) {
        console.error('Currency Fetch Error:', error);
        // Fallback rates in case API is down
        return {
            rates: {
                USD: 0.033,
                RUB: 3.10
            }
        };
    }
}

export function formatPrice(tryPrice, rates, lang) {
    const numericPrice = parseFloat(tryPrice.replace(/[^0-9.]/g, ''));

    if (lang === 'en') {
        const usdPrice = (numericPrice * rates.USD).toFixed(2);
        return `$${usdPrice}`;
    }

    if (lang === 'ru') {
        const rubPrice = Math.round(numericPrice * rates.RUB);
        return `${rubPrice} ₽`;
    }

    return `${numericPrice.toLocaleString('tr-TR')} TL`;
}
