import React from "react";
import "../styles/index.css";
import { Analytics } from "@vercel/analytics/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Analytics />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
