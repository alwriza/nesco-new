import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ru", "kz"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Игнорируем файлы, картинки и статику сразу в коде, чтобы не ломать роутер
  if (
    pathname.startsWith('/images/') ||
    pathname.startsWith('/events/') ||
    pathname.startsWith('/locales/') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // 2. Проверяем наличие локали
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 3. Безопасный редирект, если локали нет
  const locale = defaultLocale;
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url);

  return NextResponse.redirect(redirectUrl);
}

// Конфиг матчера остается, но делаем его максимально простым
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|_next/data|assets|favicon.ico).*)',
  ],
};