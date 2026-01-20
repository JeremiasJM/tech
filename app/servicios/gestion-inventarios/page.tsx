'use client';

import {
  Container,
  Title,
  Text,
  Paper,
  Badge,
  Group,
  Stack,
  Box,
  ThemeIcon,
  Button,
  SimpleGrid,
  Grid,
  List
} from '@mantine/core';
import {
  IconPackage,
  IconBarcode,
  IconTrendingUp,
  IconCheck,
  IconArrowRight,
  IconAlertTriangle,
  IconUsers,
  IconClipboardList
} from '@tabler/icons-react';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';

const caracteristicas = [
  {
    icon: IconPackage,
    title: 'Control Integral',
    description: 'Gestión completa de inventarios para todas las áreas: informática, RRHH, farmacia y más'
  },
  {
    icon: IconBarcode,
    title: 'Códigos de Barras',
    description: 'Sistema de códigos para identificación rápida y control de movimientos'
  },
  {
    icon: IconTrendingUp,
    title: 'Tiempo Real',
    description: 'Seguimiento inmediato de materiales, stock y movimientos en todas las áreas'
  }
];

const beneficios = [
  'Control de stock en tiempo real',
  'Alertas automáticas de stock mínimo',
  'Trazabilidad completa de movimientos',
  'Gestión multi-depósito centralizada',
  'Reportes de consumo por área',
  'Optimización de compras y presupuesto'
];

const areas = [
  {
    title: 'Área Informática',
    description: 'Equipos, componentes, periféricos y software licenciado'
  },
  {
    title: 'Recursos Humanos',
    description: 'Elementos de oficina, uniformes, equipamiento laboral'
  },
  {
    title: 'Farmacia Municipal',
    description: 'Medicamentos, insumos médicos, productos sanitarios'
  },
  {
    title: 'Obras y Servicios',
    description: 'Materiales de construcción, herramientas, repuestos'
  }
];

export default function GestionInventariosPage() {
  return (
    <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Container size="xl" py={80}>
        <Stack align="center" gap="xl">
          <Badge 
            size="lg" 
            variant="filled" 
            color="blue"
            leftSection={<IconPackage size={16} />}
          >
            Control Total
          </Badge>
          
          <Title order={1} ta="center" size="3.5rem" fw={700} c="#1e40af" lh={1.1}>
            Gestión de{' '}
            <Text span c="#00d4ff" inherit>
              Stock e Inventarios
            </Text>
          </Title>
          
          <Text size="xl" ta="center" c="dimmed" maw={700} lh={1.6}>
            Control integral de inventarios para todas las áreas del organismo. 
            <strong>Seguimiento en tiempo real de materiales, recursos y equipamiento.</strong>
          </Text>

          <Group>
            <Button 
              size="xl" 
              color="#1e40af"
              rightSection={<IconArrowRight size={20} />}
            >
              Ver Sistema en Acción
            </Button>
            <Button size="xl" variant="outline" color="#1e40af">
              Conocer Módulos
            </Button>
          </Group>
        </Stack>
      </Container>

      {/* Características Principales */}
      <Container size="xl" py={80}>
        <Stack gap="xl">
          <Title order={2} ta="center" size="2.5rem" fw={600} c="#1e40af">
            Características Principales
          </Title>
          
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            {caracteristicas.map((item, index) => (
              <Paper key={index} p="xl" radius="lg" style={{ 
                border: '2px solid #1e40af',
                backgroundColor: 'white',
                textAlign: 'center',
                height: '100%'
              }}>
                <Stack align="center" gap="md">
                  <ThemeIcon size={70} radius="xl" color="#1e40af">
                    <item.icon size={35} />
                  </ThemeIcon>
                  <Title order={4} c="#1e40af" fw={600}>
                    {item.title}
                  </Title>
                  <Text c="dimmed" size="sm" lh={1.6}>
                    {item.description}
                  </Text>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Áreas de Aplicación */}
      <Box style={{ backgroundColor: '#1e40af' }} py={80}>
        <Container size="xl">
          <Stack gap="xl">
            <Title order={2} ta="center" size="2.5rem" fw={600} c="white">
              Áreas que Puedes Gestionar
            </Title>
            
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
              {areas.map((item, index) => (
                <Paper key={index} p="xl" radius="lg" style={{ 
                  backgroundColor: 'white',
                  height: '100%'
                }}>
                  <Stack gap="md">
                    <Group>
                      <ThemeIcon size={50} radius="xl" color="#1e40af">
                        <IconClipboardList size={25} />
                      </ThemeIcon>
                      <Title order={4} c="#1e40af" fw={600}>
                        {item.title}
                      </Title>
                    </Group>
                    <Text c="dimmed" size="sm" lh={1.6}>
                      {item.description}
                    </Text>
                  </Stack>
                </Paper>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Beneficios */}
      <Container size="xl" py={80}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <Title order={2} size="2.5rem" fw={600} c="#1e40af">
                Beneficios del Sistema
              </Title>
              <Text size="lg" c="dimmed" lh={1.6}>
                Nuestro sistema de gestión de inventarios centraliza 
                el control de todos los recursos del organismo, 
                optimizando costos y mejorando la eficiencia.
              </Text>
              <List spacing="sm" size="md">
                {beneficios.map((beneficio, index) => (
                  <List.Item 
                    key={index}
                    icon={<ThemeIcon color="#1e40af" size={24} radius="xl">
                      <IconCheck size={16} />
                    </ThemeIcon>}
                  >
                    {beneficio}
                  </List.Item>
                ))}
              </List>
            </Stack>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md">
              <Paper p="xl" radius="lg" style={{ 
                backgroundColor: '#1e40af',
                color: 'white',
                textAlign: 'center'
              }}>
                <Stack align="center" gap="md">
                  <ThemeIcon size={60} radius="xl" color="white" style={{ backgroundColor: 'white' }}>
                    <IconTrendingUp size={30} color="#1e40af" />
                  </ThemeIcon>
                  <Text fw={700} size="2rem">40%</Text>
                  <Text size="lg">Reducción en costos de compras</Text>
                </Stack>
              </Paper>
              
              <Paper p="xl" radius="lg" style={{ 
                border: '2px solid #1e40af',
                backgroundColor: 'white',
                textAlign: 'center'
              }}>
                <Stack align="center" gap="md">
                  <ThemeIcon size={60} radius="xl" color="#1e40af">
                    <IconAlertTriangle size={30} />
                  </ThemeIcon>
                  <Text fw={700} size="xl" c="#1e40af">Sin Faltantes</Text>
                  <Text size="sm" c="dimmed">Control automático de stock</Text>
                </Stack>
              </Paper>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      {/* CTA Final */}
      <Container size="xl" py={80}>
        <Paper 
          p={60} 
          radius="lg" 
          style={{ 
            backgroundColor: '#1e40af', 
            color: 'white', 
            textAlign: 'center' 
          }}
        >
          <Stack align="center" gap="xl">
            <Title order={2} c="white" size="2.5rem" fw={600}>
              ¿Listo para Optimizar tu Control de Stock?
            </Title>
            
            <Text size="xl" c="white" ta="center" maw={500} opacity={0.9}>
              Sistema funcionando en 2 semanas con migración de datos incluida
            </Text>
            
            <Group>
              <Button 
                size="xl" 
                color="white" 
                variant="white" 
                style={{ color: '#1e40af' }}
                rightSection={<IconUsers size={20} />}
              >
                Solicitar Cotización
              </Button>
              <Button size="xl" variant="outline" color="white">
                Ver Funcionalidades
              </Button>
            </Group>

            <Text size="sm" c="white" opacity={0.8}>
              📊 Reportes incluidos • 🏷️ Códigos de barra gratis
            </Text>
          </Stack>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}