import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'E-PMC | Engineering Project Management & Control',
  description: 'Enterprise engineering project management, assignment control, documentation, licensing, and analytics platform.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
