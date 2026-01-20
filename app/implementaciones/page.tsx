'use client';

import {
  Container,
  Title,
  Text,
  Grid,
  Paper,
  Badge,
  Group,
  Stack,
  Box,
  ThemeIcon,
  Card,
  Button,
  SimpleGrid,
  Divider,
  List
} from '@mantine/core';
import {
  IconTarget,
  IconUsers,
  IconSettings,
  IconRocket,
  IconChecks,
  IconClock,
  IconShield,
  IconDeviceAnalytics,
  IconArrowRight,
  IconChartLine,
  IconCheck,
  IconStar,
  IconPhone,
  IconCalendar
} from '@tabler/icons-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

const easySteps = [
  {
    icon: IconPhone,
    number: '01',
    title: 'Conversamos',
    description: 'Una reunión inicial para entender tus necesidades específicas.',
    duration: '1 reunión',
    color: '#1e40af'
  },
  {
    icon: IconTarget,
    number: '02', 
    title: 'Analizamos',
    description: 'Evaluamos tus procesos actuales y diseñamos la solución.',
    duration: '1-2 semanas',
    color: '#00d4ff'
  },
  {
    icon: IconSettings,
    number: '03',
    title: 'Configuramos',
    description: 'Adaptamos el sistema a tus necesidades sin interrumpir tu trabajo.',
    duration: '2-4 semanas',
    color: '#1e40af'
  },
  {
    icon: IconUsers,
    number: '04',
    title: 'Capacitamos',
    description: 'Tu equipo aprende a usar el sistema de manera sencilla.',
    duration: '1 semana',
    color: '#00d4ff'
  },
  {
    icon: IconRocket,
    number: '05',
    title: 'Implementamos',
    description: 'Ponemos en funcionamiento el sistema gradualmente.',
    duration: '3 días',
    color: '#1e40af'
  },
  {
    icon: IconChecks,
    number: '06',
    title: 'Te acompañamos',
    description: 'Soporte continuo para que todo funcione perfectamente.',
    duration: 'Siempre',
    color: '#00d4ff'
  }
];

const whyEasy = [
  {
    icon: IconCheck,
    title: 'Sin interrupciones',
    description: 'Trabajamos mientras tu oficina sigue funcionando normalmente'
  },
  {
    icon: IconCheck,
    title: 'Capacitación incluida',
    description: 'Tu personal queda completamente capacitado para usar el sistema'
  },
  {
    icon: IconCheck,
    title: 'Soporte permanente',
    description: 'Siempre estamos disponibles para resolver cualquier consulta'
  },
  {
    icon: IconCheck,
    title: 'Adaptación personalizada',
    description: 'El sistema se adapta a tu forma de trabajar, no al revés'
  }
];

const guarantees = [
  {
    icon: IconCalendar,
    title: 'Implementación en tiempo',
    subtitle: 'Cumplimos los plazos acordados'
  },
  {
    icon: IconShield,
    title: 'Satisfacción garantizada',
    subtitle: 'O devolvemos tu inversión'
  },
  {
    icon: IconStar,
    title: 'Resultados comprobados',
    subtitle: '+50 organismos ya confían en nosotros'
  }
];

export default function ImplementacionesPage() {
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
            leftSection={<IconRocket size={16} />}
          >
            Implementación Fácil y Rápida
          </Badge>
          
          <Title order={1} ta="center" size="3.5rem" fw={700} c="#1e40af" lh={1.1}>
            Tu Sistema Funcionando en{' '}
            <Text span c="#00d4ff" inherit>
              Solo 6 Semanas
            </Text>
          </Title>
          
          <Text size="xl" ta="center" c="dimmed" maw={700} lh={1.6}>
            Un proceso simple y probado que transforma tu gestión sin complicaciones.
            <strong> Sin estrés, sin interrupciones, con resultados garantizados.</strong>
          </Text>

          <Group>
            <Button 
              size="xl" 
              color="#1e40af"
              rightSection={<IconArrowRight size={20} />}
            >
              Comenzar Ahora
            </Button>
            <Button size="xl" variant="outline" color="#1e40af">
              Ver Demo
            </Button>
          </Group>
        </Stack>
      </Container>

      {/* Easy Process */}
      <Container size="xl" py={80}>
        <Stack gap="xl">
          <Stack align="center" gap="md">
            <Title order={2} ta="center" size="2.5rem" fw={600} c="#1e40af">
              Es Más Fácil de lo que Piensas
            </Title>
            <Text ta="center" c="dimmed" size="lg" maw={600}>
              Solo 6 pasos simples para tener tu sistema funcionando perfectamente
            </Text>
          </Stack>
          
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
            {easySteps.map((step, index) => (
              <Card key={index} padding="xl" radius="lg" style={{ 
                height: '100%', 
                border: '2px solid #f8f9fa',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: step.color,
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 25px rgba(30, 64, 175, 0.1)'
                }
              }}>
                <Stack gap="md">
                  <Group justify="space-between" align="flex-start">
                    <Box style={{ 
                      backgroundColor: step.color, 
                      color: 'white', 
                      borderRadius: '50%', 
                      width: 40, 
                      height: 40, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      fontWeight: 700
                    }}>
                      {step.number}
                    </Box>
                    <Badge variant="light" size="sm" color="gray">
                      {step.duration}
                    </Badge>
                  </Group>
                  
                  <Stack gap="xs">
                    <Group gap="sm">
                      <ThemeIcon size={40} radius="xl" color={step.color} variant="light">
                        <step.icon size={20} />
                      </ThemeIcon>
                      <Text fw={600} size="lg" c={step.color}>
                        {step.title}
                      </Text>
                    </Group>
                    <Text c="dimmed" size="sm" lh={1.6}>
                      {step.description}
                    </Text>
                  </Stack>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Why It's Easy */}
      <Box style={{ backgroundColor: '#1e40af' }} py={80}>
        <Container size="xl">
          <Stack gap="xl">
            <Title order={2} ta="center" size="2.5rem" fw={600} c="white">
              ¿Por Qué Es Tan Fácil?
            </Title>
            
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
              {whyEasy.map((item, index) => (
                <Paper key={index} p="xl" radius="lg" style={{ backgroundColor: 'white', border: '2px solid white' }}>
                  <Group gap="md">
                    <ThemeIcon size={50} radius="xl" color="white" style={{ backgroundColor: 'white' }}>
                      <item.icon size={25} color="#1e40af" />
                    </ThemeIcon>
                    <Stack gap="xs" style={{ flex: 1 }}>
                      <Text fw={600} size="lg" c="#1e40af">{item.title}</Text>
                      <Text c="dimmed" size="sm" lh={1.5}>{item.description}</Text>
                    </Stack>
                  </Group>
                </Paper>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Guarantees */}
      <Container size="xl" py={80}>
        <Stack gap="xl">
          <Title order={2} ta="center" size="2.5rem" fw={600} c="#1e40af">
            Nuestras Garantías
          </Title>
          
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            {guarantees.map((guarantee, index) => (
              <Paper key={index} p="xl" radius="lg" ta="center" style={{ 
                border: '2px solid #1e40af',
                backgroundColor: 'white'
              }}>
                <Stack align="center" gap="md">
                  <ThemeIcon size={70} radius="xl" color="#1e40af">
                    <guarantee.icon size={35} />
                  </ThemeIcon>
                  <Stack gap="xs" align="center">
                    <Text fw={700} size="lg" c="#1e40af">{guarantee.title}</Text>
                    <Text c="dimmed" size="sm">{guarantee.subtitle}</Text>
                  </Stack>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Timeline Simple */}
      <Box style={{ backgroundColor: '#1e40af' }} py={80}>
        <Container size="xl">
          <Stack gap="xl" align="center">
            <Title order={2} ta="center" size="2.5rem" fw={600} c="white">
              Timeline Real de Implementación
            </Title>
            
            <Paper p="xl" radius="lg" style={{ backgroundColor: 'white', maxWidth: 800 }}>
              <Stack gap="md">
                <Group justify="center">
                  <Box style={{ 
                    backgroundColor: '#1e40af', 
                    color: 'white', 
                    padding: '20px 40px', 
                    borderRadius: '50px',
                    textAlign: 'center'
                  }}>
                    <Text fw={700} size="xl">4-6 semanas</Text>
                    <Text size="sm">promedio total</Text>
                  </Box>
                </Group>
                
                <Divider my="md" />
                
                <Stack gap="sm">
                  <Group justify="space-between">
                    <Text fw={500}>📞 Primera reunión</Text>
                    <Text c="#1e40af" fw={600}>Día 1</Text>
                  </Group>
                  <Group justify="space-between">
                    <Text fw={500}>⚡ Configuración inicial</Text>
                    <Text c="#1e40af" fw={600}>Semana 1-2</Text>
                  </Group>
                  <Group justify="space-between">
                    <Text fw={500}>👨‍🎓 Capacitación del equipo</Text>
                    <Text c="#1e40af" fw={600}>Semana 3</Text>
                  </Group>
                  <Group justify="space-between">
                    <Text fw={500}>🚀 Sistema en funcionamiento</Text>
                    <Text c="#1e40af" fw={600}>Semana 4</Text>
                  </Group>
                </Stack>
              </Stack>
            </Paper>
          </Stack>
        </Container>
      </Box>

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
              Empezemos Hoy Mismo
            </Title>
            
            <Text size="xl" c="white" ta="center" maw={500} opacity={0.9}>
              Una simple conversación puede cambiar para siempre la forma en que trabajas
            </Text>
            
            <Group>
              <Button 
                size="xl" 
                color="white" 
                variant="white" 
                style={{ color: '#1e40af' }}
                rightSection={<IconPhone size={20} />}
              >
                Llamar Ahora
              </Button>
              <Button size="xl" variant="outline" color="white">
                Agendar Reunión
              </Button>
            </Group>

            <Text size="sm" c="white" opacity={0.8}>
              ⏱️ Respuesta en menos de 2 horas • 📞 Sin compromiso
            </Text>
          </Stack>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}