import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Our Big Family Tree",
  description: "A student family-tree demo with fictional people, name search, and parent connections.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
