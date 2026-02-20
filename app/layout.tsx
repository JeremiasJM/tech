import type { Metadata } from "next";
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Inter } from "next/font/google";
import "./globals.css";
import "./navbar-1079.css";
import "./navbar-responsive.css";
import { theme } from '../theme';
import { LoadingProvider } from '../components/LoadingProvider';
import { LoadingWrapper } from '../components/LoadingWrapper';

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "LunAI - Soluciones Gubernamentales",
  description: "Tecnología para un Estado más eficiente, transparente y cercano. Soluciones gubernamentales innovadoras con inteligencia artificial.",
  keywords: "gobierno digital, transformación digital, tecnología gubernamental, sistemas administrativos, inteligencia artificial",
  icons: {
    icon: "/img/logo-luna.png",
    shortcut: "/img/logo-luna.png",
    apple: "/img/logo-luna.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <LoadingProvider>
            <LoadingWrapper>
              {children}
            </LoadingWrapper>
          </LoadingProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
