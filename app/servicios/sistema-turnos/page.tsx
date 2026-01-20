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
  IconClock,
  IconCalendar,
  IconUsers,
  IconCheck,
  IconArrowRight,
  IconBell,
  IconDeviceTablet,
  IconChartLine
} from '@tabler/icons-react';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';

const caracteristicas = [
  {
    icon: IconCalendar,
    title: 'Turnos Online',
    description: 'Los ciudadanos pueden sacar turnos 24/7 desde web o aplicación móvil'
  },
  {
    icon: IconBell,
    title: 'Recordatorios',
    description: 'Notificaciones automáticas por SMS, email y WhatsApp'
  },
  {
    icon: IconDeviceTablet,
    title: 'Gestión Centralizada',
    description: 'Panel administrativo para gestionar horarios, servicios y recursos'
  }
];

const beneficios = [
  'Eliminación de filas y esperas innecesarias',
  'Optimización de recursos y personal',
  'Mejor experiencia ciudadana',
  'Reducción de ausentismo con recordatorios',
  'Estadísticas de demanda por servicio',
  'Integración con otros sistemas municipales'
];

const funcionalidades = [
  {
    title: 'Portal Ciudadano',
    description: 'Sitio web responsive donde los vecinos pueden gestionar sus turnos'
  },
  {
    title: 'Algoritmo Inteligente',
    description: 'Distribución automática según disponibilidad y tipo de trámite'
  },
  {
    title: 'Panel Administrativo',
    description: 'Control total de horarios, servicios y configuración del sistema'
  },
  {
    title: 'Reportes y Analytics',
    description: 'Métricas detalladas de uso, demanda y satisfacción ciudadana'
  }
];

export default function SistemaTurnosPage() {
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
            leftSection={<IconClock size={16} />}
          >
            Optimización Ciudadana
          </Badge>
          
          <Title order={1} ta="center" size="3.5rem" fw={700} c="#1e40af" lh={1.1}>
            Sistema de{' '}
            <Text span c="#00d4ff" inherit>
              Turnos Online
            </Text>
          </Title>
          
          <Text size="xl" ta="center" c="dimmed" maw={700} lh={1.6}>
            Sistema completo de turnos online que optimiza la atención ciudadana con algoritmos inteligentes. 
            <strong>Elimina las filas y mejora la experiencia de tus vecinos.</strong>
          </Text>

          <Group>
            <Button 
              size="xl" 
              color="#1e40af"
              rightSection={<IconArrowRight size={20} />}
            >
              Probar Sistema
            </Button>
            <Button size="xl" variant="outline" color="#1e40af">
              Ver Demo
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

      {/* Funcionalidades */}
      <Box style={{ backgroundColor: '#1e40af' }} py={80}>
        <Container size="xl">
          <Stack gap="xl">
            <Title order={2} ta="center" size="2.5rem" fw={600} c="white">
              Funcionalidades Avanzadas
            </Title>
            
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
              {funcionalidades.map((item, index) => (
                <Paper key={index} p="xl" radius="lg" style={{ 
                  backgroundColor: 'white',
                  height: '100%'
                }}>
                  <Stack gap="md">
                    <Group>
                      <ThemeIcon size={50} radius="xl" color="#1e40af">
                        <IconClock size={25} />
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
                El sistema de turnos revoluciona la atención ciudadana, 
                eliminando esperas y optimizando la gestión de recursos 
                humanos y tiempo.
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
                    <IconChartLine size={30} color="#1e40af" />
                  </ThemeIcon>
                  <Text fw={700} size="2rem">60%</Text>
                  <Text size="lg">Reducción en tiempo de espera</Text>
                </Stack>
              </Paper>
              
              <Paper p="xl" radius="lg" style={{ 
                border: '2px solid #1e40af',
                backgroundColor: 'white',
                textAlign: 'center'
              }}>
                <Stack align="center" gap="md">
                  <ThemeIcon size={60} radius="xl" color="#1e40af">
                    <IconUsers size={30} />
                  </ThemeIcon>
                  <Text fw={700} size="xl" c="#1e40af">24/7</Text>
                  <Text size="sm" c="dimmed">Disponibilidad para ciudadanos</Text>
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
              ¿Listo para Eliminar las Filas de Espera?
            </Title>
            
            <Text size="xl" c="white" ta="center" maw={500} opacity={0.9}>
              Tu sistema de turnos funcionando en 1 semana
            </Text>
            
            <Group>
              <Button 
                size="xl" 
                color="white" 
                variant="white" 
                style={{ color: '#1e40af' }}
                rightSection={<IconCalendar size={20} />}
              >
                Solicitar Implementación
              </Button>
              <Button size="xl" variant="outline" color="white">
                Ver Precios
              </Button>
            </Group>

            <Text size="sm" c="white" opacity={0.8}>
              ⏰ Instalación inmediata • 📱 App incluida
            </Text>
          </Stack>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}