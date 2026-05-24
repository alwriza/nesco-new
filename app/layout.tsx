import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEScO — National Engineering Science Olympiad",
  description:
    "An innovative scientific competition developing analytical thinking, teamwork, and an interdisciplinary approach for students across Kazakhstan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700;800&family=Inter:wght@400;500;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}