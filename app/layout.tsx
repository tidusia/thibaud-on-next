import React from "react";
import "../styles/index.css";
import { Analytics } from "@vercel/analytics/react";
import Nav from "../components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
