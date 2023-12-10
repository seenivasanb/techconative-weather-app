import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather Forecast App",
  description:
    "The project revolves around creating a web application using Next.js with the primary objective of providing users with accurate and timely weather forecasts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "development" && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            data-project-id="..."
            src="https://snippet.meticulous.ai/v1/meticulous.js"
          ></script>
        )}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
