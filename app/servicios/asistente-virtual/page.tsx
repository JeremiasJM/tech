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
  IconBrain,
  IconMessage,
  IconClock,
  IconCheck,
  IconArrowRight,
  IconRobot,
  IconUsers,
  IconChartLine
} from '@tabler/icons-react';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';

const caracteristicas = [
  {
    icon: IconBrain,
    title: 'Inteligencia Artificial',
    description: 'Chatbot inteligente que comprende y responde consultas ciudadanas automaticamente'
  },
  {
    icon: IconClock,
    title: 'Disponibilidad 24/7',
    description: 'Atención inmediata las 24 horas, todos los días del año'
  },
  {
    icon: IconMessage,
    title: 'Múltiples Canales',
    description: 'Integración con WhatsApp, web, redes sociales y aplicaciones móviles'
  }
];

const beneficios = [
  'Reducción del 70% en consultas telefónicas',
  'Atención inmediata sin esperas',
  'Resolución automática de trámites frecuentes',
  'Derivación inteligente a funcionarios',
  'Base de conocimiento actualizable',
  'Reportes de consultas más frecuentes'
];

const capacidades = [
  {
    title: 'Información de Trámites',
    description: 'Responde sobre requisitos, horarios y documentación necesaria'
  },
  {
    title: 'Estado de Expedientes',
    description: 'Consulta automática del estado de trámites en curso'
  },
  {
    title: 'Turnos Online',
    description: 'Agenda citas y turnos de manera automática'
  },
  {
    title: 'Contacto Directo',
    description: 'Conecta con el área correspondiente cuando es necesario'
  }
];

export default function AsistenteVirtualPage() {
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
            leftSection={<IconBrain size={16} />}
          >
            Inteligencia Artificial
          </Badge>
          
          <Title order={1} ta="center" size="3.5rem" fw={700} c="#1e40af" lh={1.1}>
            Asistente Virtual{' '}
            <Text span c="#00d4ff" inherit>
              Inteligente
            </Text>
          </Title>
          
          <Text size="xl" ta="center" c="dimmed" maw={700} lh={1.6}>
            Chatbot con inteligencia artificial para automatizar consultas y trámites ciudadanos.
            <strong> Atención 24/7 que digitaliza la comunicación con los vecinos.</strong>
          </Text>

          <Group>
            <Button 
              size="xl" 
              color="#1e40af"
              rightSection={<IconArrowRight size={20} />}
            >
              Probar Demo
            </Button>
            <Button size="xl" variant="outline" color="#1e40af">
              Ver Casos de Uso
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

      {/* Capacidades */}
      <Box style={{ backgroundColor: '#1e40af' }} py={80}>
        <Container size="xl">
          <Stack gap="xl">
            <Title order={2} ta="center" size="2.5rem" fw={600} c="white">
              ¿Qué Puede Hacer?
            </Title>
            
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
              {capacidades.map((item, index) => (
                <Paper key={index} p="xl" radius="lg" style={{ 
                  backgroundColor: 'white',
                  height: '100%'
                }}>
                  <Stack gap="md">
                    <Group>
                      <ThemeIcon size={50} radius="xl" color="#1e40af">
                        <IconRobot size={25} />
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
                El asistente virtual revoluciona la atención ciudadana, 
                proporcionando respuestas inmediatas y liberando tiempo 
                valioso de tu personal.
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
                  <Text fw={700} size="2rem">70%</Text>
                  <Text size="lg">Reducción en consultas telefónicas</Text>
                </Stack>
              </Paper>
              
              <Paper p="xl" radius="lg" style={{ 
                border: '2px solid #1e40af',
                backgroundColor: 'white',
                textAlign: 'center'
              }}>
                <Stack align="center" gap="md">
                  <ThemeIcon size={60} radius="xl" color="#1e40af">
                    <IconClock size={30} />
                  </ThemeIcon>
                  <Text fw={700} size="xl" c="#1e40af">24/7</Text>
                  <Text size="sm" c="dimmed">Disponibilidad completa</Text>
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
              ¿Listo para Automatizar la Atención Ciudadana?
            </Title>
            
            <Text size="xl" c="white" ta="center" maw={500} opacity={0.9}>
              Tu asistente virtual funcionando en 2 semanas
            </Text>
            
            <Group>
              <Button 
                size="xl" 
                color="white" 
                variant="white" 
                style={{ color: '#1e40af' }}
                rightSection={<IconUsers size={20} />}
              >
                Solicitar Demo
              </Button>
              <Button size="xl" variant="outline" color="white">
                Consultar Precios
              </Button>
            </Group>

            <Text size="sm" c="white" opacity={0.8}>
              🤖 IA personalizada • 📱 Integración inmediata
            </Text>
          </Stack>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}