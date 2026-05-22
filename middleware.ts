import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ru", "kz"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ИСПРАВЛЕНО: Явно игнорируем запросы к статике и твоим папкам внутри кода,
  // чтобы Edge-функция Vercel не падала при разборе регулярных выражений.
  if (
    pathname.startsWith('/images/') ||
    pathname.startsWith('/events/') ||
    pathname.startsWith('/locales/') ||
    pathname.includes('.') // пропускает файлы вроде favicon.ico, sitemap.xml и т.д.
  ) {
    return NextResponse.next();
  }

  // Проверяем, есть ли уже локаль в пути
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Редирект, если локали нет
  const locale = defaultLocale;
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url);

  return NextResponse.redirect(redirectUrl);
}

// ИСПРАВЛЕНО: Стандартный, максимально простой матчер, одобренный Vercel.
// Он фильтрует только внутренние системные файлы Next.js и API.
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|_next/data|assets|favicon.ico).*)',
  ],
};