import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Internship Recommendation",
  description: "AI-based Internship Recommendation Portal",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
