'use client';

import { MaintenancePage } from '../../components/MaintenancePage';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Box } from '@mantine/core';

export default function IAGobiernoPage() {
  return (
    <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <MaintenancePage
        title="IA para Gobierno"
        description="Estamos desarrollando soluciones de inteligencia artificial especializadas para transformar la gestión gubernamental."
        estimatedTime="Lanzamiento Q2 2026"
        features={[
          "Chatbots inteligentes para atención ciudadana",
          "Análisis predictivo para toma de decisiones",
          "Automatización de procesos administrativos",
          "Detección de patrones en datos gubernamentales",
          "Optimización de recursos públicos con IA"
        ]}
        contactEnabled={true}
      />
      <Footer />
    </Box>
  );
}