import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ru", "kz"];
const defaultLocale = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Пропускаем всю статику и системные файлы
  if (
    pathname.startsWith('/images/') ||
    pathname.startsWith('/events/') ||
    pathname.startsWith('/locales/') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // 2. Проверяем, есть ли уже локаль в пути
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 3. БЕЗОПАСНЫЙ редирект без ручного создания `new URL()`
  // Клонируем внутренний объект пути Next.js и просто мутируем его
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Максимально надёжный матчер: исключает внутренности next, статику и api
    '/((?!api|_next/static|_next/image|_next/data|assets|favicon.ico).*)',
  ],
};