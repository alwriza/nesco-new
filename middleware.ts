import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ru", "kz"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Проверяем, есть ли уже локаль в пути
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // ИСПРАВЛЕНО: Вместо пустого return возвращаем NextResponse.next(), 
  // чтобы просто пропустить пользователя на существующую языковую страницу
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Роняем редирект, если локали нет
  const locale = defaultLocale;

  // ИСПРАВЛЕНО: Безопасное создание URL для редиректа на Vercel
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url);

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    // Пропускаем системные папки и статику
    '/((?!api|_next/static|_next/image|favicon.ico|images|events|locales).*)',
  ],
};