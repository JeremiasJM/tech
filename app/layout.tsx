import type { Metadata } from "next";
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Inter } from "next/font/google";
import "./globals.css";
import { theme } from '../theme';
import { LoadingProvider } from '../components/LoadingProvider';
import { LoadingWrapper } from '../components/LoadingWrapper';

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
