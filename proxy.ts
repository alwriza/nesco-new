import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ru", "kz"];
const defaultLocale = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Игнорируем статику
  if (
    pathname.startsWith('/images/') ||
    pathname.startsWith('/events/') ||
    pathname.startsWith('/locales/') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Проверяем наличие локали
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Убираем дублирование слэша для корня
  const cleanPathname = pathname === '/' ? '' : pathname;

  // Создаем чистый URL вида /en или /en/rules
  const redirectUrl = new URL(`/${defaultLocale}${cleanPathname}`, request.url);

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|_next/data|assets|favicon.ico).*)',
  ],
};