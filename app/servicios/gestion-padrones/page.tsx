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
  IconList,
  IconDatabase,
  IconSearch,
  IconCheck,
  IconArrowRight,
  IconShield,
  IconUsers,
  IconRefresh
} from '@tabler/icons-react';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';

const caracteristicas = [
  {
    icon: IconDatabase,
    title: 'Base de Datos Completa',
    description: 'Información centralizada y organizada de todos los padrones municipales'
  },
  {
    icon: IconSearch,
    title: 'Búsqueda Inteligente',
    description: 'Motor de búsqueda avanzado con múltiples filtros y criterios'
  },
  {
    icon: IconRefresh,
    title: 'Actualización Automática',
    description: 'Sincronización con organismos oficiales para mantener datos actualizados'
  }
];

const beneficios = [
  'Acceso inmediato a información padronal',
  'Datos siempre actualizados y certeros',
  'Búsquedas rápidas y precisas',
  'Integración con otros sistemas municipales',
  'Backup automático de seguridad',
  'Cumplimiento de normativas de protección de datos'
];

const tiposPadrones = [
  {
    title: 'Padrón Electoral',
    description: 'Información completa de electores habilitados en cada distrito'
  },
  {
    title: 'Registro de Contribuyentes',
    description: 'Base de datos de contribuyentes municipales y sus obligaciones'
  },
  {
    title: 'Censo Poblacional',
    description: 'Datos demográficos y estadísticos de la población local'
  },
  {
    title: 'Registro de Comercios',
    description: 'Padrón completo de actividades comerciales e industriales'
  }
];

export default function GestionPadronesPage() {
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
            leftSection={<IconList size={16} />}
          >
            Gestión de Datos
          </Badge>
          
          <Title order={1} ta="center" size="3.5rem" fw={700} c="#1e40af" lh={1.1}>
            Gestión de{' '}
            <Text span c="#00d4ff" inherit>
              Padrones
            </Text>
          </Title>
          
          <Text size="xl" ta="center" c="dimmed" maw={700} lh={1.6}>
            Sistema completo para gestionar padrones municipales con información certera y actualizada. 
            <strong>Acceso inmediato a datos confiables con actualización en tiempo real.</strong>
          </Text>

          <Group>
            <Button 
              size="xl" 
              color="#1e40af"
              rightSection={<IconArrowRight size={20} />}
            >
              Ver Capacidades
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

      {/* Tipos de Padrones */}
      <Box style={{ backgroundColor: '#1e40af' }} py={80}>
        <Container size="xl">
          <Stack gap="xl">
            <Title order={2} ta="center" size="2.5rem" fw={600} c="white">
              Tipos de Padrones que Gestionamos
            </Title>
            
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
              {tiposPadrones.map((item, index) => (
                <Paper key={index} p="xl" radius="lg" style={{ 
                  backgroundColor: 'white',
                  height: '100%'
                }}>
                  <Stack gap="md">
                    <Group>
                      <ThemeIcon size={50} radius="xl" color="#1e40af">
                        <IconDatabase size={25} />
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
                Nuestro sistema de gestión de padrones centraliza 
                y organiza toda la información ciudadana, garantizando 
                datos precisos y actualizados.
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
                    <IconSearch size={30} color="#1e40af" />
                  </ThemeIcon>
                  <Text fw={700} size="2rem">90%</Text>
                  <Text size="lg">Más rápido en consultas</Text>
                </Stack>
              </Paper>
              
              <Paper p="xl" radius="lg" style={{ 
                border: '2px solid #1e40af',
                backgroundColor: 'white',
                textAlign: 'center'
              }}>
                <Stack align="center" gap="md">
                  <ThemeIcon size={60} radius="xl" color="#1e40af">
                    <IconShield size={30} />
                  </ThemeIcon>
                  <Text fw={700} size="xl" c="#1e40af">100%</Text>
                  <Text size="sm" c="dimmed">Datos seguros y confiables</Text>
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
              ¿Listo para Organizar tus Padrones?
            </Title>
            
            <Text size="xl" c="white" ta="center" maw={500} opacity={0.9}>
              Sistema completo con migración de datos en 2 semanas
            </Text>
            
            <Group>
              <Button 
                size="xl" 
                color="white" 
                variant="white" 
                style={{ color: '#1e40af' }}
                rightSection={<IconUsers size={20} />}
              >
                Consultar Implementación
              </Button>
              <Button size="xl" variant="outline" color="white">
                Ver Características
              </Button>
            </Group>

            <Text size="sm" c="white" opacity={0.8}>
              📊 Migración incluida • 🔒 Máxima seguridad
            </Text>
          </Stack>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}