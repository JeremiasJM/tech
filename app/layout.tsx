import type { Metadata } from "next";
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Soluciones Tecnológicas Gubernamentales | TechGov",
  description: "Tecnología para un Estado más eficiente, transparente y cercano. Soluciones tecnológicas especializadas para organismos gubernamentales.",
  keywords: "gobierno digital, transformación digital, tecnología gubernamental, sistemas administrativos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider 
          theme={{
            primaryColor: 'blue',
            colors: {
              blue: [
                '#ebf4ff',
                '#c8e1ff',
                '#9fcdff',
                '#74b8ff',
                '#4da3ff',
                '#1a8fff',
                '#0070e6',
                '#005bb3',
                '#004580',
                '#00304d'
              ],
            },
            fontFamily: inter.style.fontFamily,
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
