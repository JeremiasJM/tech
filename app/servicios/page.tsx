'use client';

import { MaintenancePage } from '../../components/MaintenancePage';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Box } from '@mantine/core';

export default function ServiciosPage() {
  return (
    <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <MaintenancePage
        title="Nuestros Servicios"
        description="Estamos perfeccionando nuestro catálogo completo de servicios. Mientras tanto, puedes explorar cada servicio individualmente."
        estimatedTime="Disponible Pronto"
        features={[
          "Catálogo completo de servicios",
          "Comparador de soluciones",
          "Calculadora de presupuestos",
          "Casos de éxito detallados",
          "Demos interactivas"
        ]}
        contactEnabled={true}
      />
      <Footer />
    </Box>
  );
}