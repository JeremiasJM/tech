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
  IconMap,
  IconEye,
  IconTool,
  IconCheck,
  IconArrowRight,
  IconCurrencyDollar,
  IconUsers,
  IconCalendar
} from '@tabler/icons-react';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';

const caracteristicas = [
  {
    icon: IconMap,
    title: 'Mapa Interactivo',
    description: 'Visualización georreferenciada de todas las obras en tiempo real'
  },
  {
    icon: IconTool,
    title: 'Control de Materiales',
    description: 'Registro detallado de materiales, costos y proveedores por obra'
  },
  {
    icon: IconEye,
    title: 'Transparencia Total',
    description: 'Portal público para que vecinos consulten el estado de las obras'
  }
];

const beneficios = [
  'Transparencia total para la ciudadanía',
  'Control preciso de costos y materiales',
  'Seguimiento en tiempo real del avance',
  'Gestión eficiente de recursos humanos',
  'Reportes automáticos de progreso',
  'Historial completo de cada obra'
];

const funcionalidades = [
  {
    title: 'Planificación de Obras',
    description: 'Cronograma detallado con etapas y responsables asignados'
  },
  {
    title: 'Control de Presupuesto',
    description: 'Seguimiento en tiempo real de gastos vs presupuesto asignado'
  },
  {
    title: 'Portal Ciudadano',
    description: 'Acceso público al estado y avance de obras municipales'
  },
  {
    title: 'Gestión de Equipos',
    description: 'Asignación y seguimiento de personal y maquinaria'
  }
];

export default function ObrasPublicasPage() {
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
            leftSection={<IconMap size={16} />}
          >
            Gestión Integral
          </Badge>
          
          <Title order={1} ta="center" size="3.5rem" fw={700} c="#1e40af" lh={1.1}>
            Gestión de{' '}
            <Text span c="#00d4ff" inherit>
              Obras Públicas
            </Text>
          </Title>
          
          <Text size="xl" ta="center" c="dimmed" maw={700} lh={1.6}>
            Plataforma completa con mapa interactivo para gestionar obras públicas, 
            controlar materiales y costos. <strong>Transparencia total para vecinos y gestión interna eficiente.</strong>
          </Text>

          <Group>
            <Button 
              size="xl" 
              color="#1e40af"
              rightSection={<IconArrowRight size={20} />}
            >
              Ver Demo en Vivo
            </Button>
            <Button size="xl" variant="outline" color="#1e40af">
              Conocer Funciones
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
              Funcionalidades Destacadas
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
                        <IconTool size={25} />
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
                Nuestra plataforma de gestión de obras públicas revoluciona 
                la administración de proyectos municipales, brindando transparencia 
                y control total.
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
                    <IconCurrencyDollar size={30} color="#1e40af" />
                  </ThemeIcon>
                  <Text fw={700} size="2rem">30%</Text>
                  <Text size="lg">Ahorro en costos de gestión</Text>
                </Stack>
              </Paper>
              
              <Paper p="xl" radius="lg" style={{ 
                border: '2px solid #1e40af',
                backgroundColor: 'white',
                textAlign: 'center'
              }}>
                <Stack align="center" gap="md">
                  <ThemeIcon size={60} radius="xl" color="#1e40af">
                    <IconEye size={30} />
                  </ThemeIcon>
                  <Text fw={700} size="xl" c="#1e40af">100%</Text>
                  <Text size="sm" c="dimmed">Transparencia garantizada</Text>
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
              ¿Listo para Transparentar tus Obras Públicas?
            </Title>
            
            <Text size="xl" c="white" ta="center" maw={500} opacity={0.9}>
              Implementación completa en 3 semanas con capacitación incluida
            </Text>
            
            <Group>
              <Button 
                size="xl" 
                color="white" 
                variant="white" 
                style={{ color: '#1e40af' }}
                rightSection={<IconCalendar size={20} />}
              >
                Agendar Presentación
              </Button>
              <Button size="xl" variant="outline" color="white">
                Ver Casos de Éxito
              </Button>
            </Group>

            <Text size="sm" c="white" opacity={0.8}>
              🗺️ Mapa incluido • 📊 Reportes automáticos
            </Text>
          </Stack>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}