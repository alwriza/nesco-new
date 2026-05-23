import type { Metadata } from "next";

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
    <html>
      <body>{children}</body>
    </html>
  );
}
