import { NextResponse } from 'next/server';

const locales = ['tr', 'en', 'ru'];
const defaultLocale = 'tr';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Static files and internal Next.js paths should be ignored
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/assets') ||
        pathname.includes('.') ||
        pathname.startsWith('/api') ||
        pathname === '/favicon.ico'
    ) {
        return NextResponse.next();
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return NextResponse.next();

    // Redirect if there is no locale
    const url = new URL(`/${defaultLocale}${pathname}`, request.url);

    // Clean up double slashes if any
    url.pathname = url.pathname.replace(/\/+/g, '/');

    return NextResponse.redirect(url);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|api|favicon.ico|.*\\..*).*)',
    ],
};
