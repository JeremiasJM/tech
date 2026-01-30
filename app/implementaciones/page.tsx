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
              <Card key={index} 
                radius="2rem" 
                style={{ 
                  height: '100%', 
                  background: `linear-gradient(135deg, 
                    ${index % 2 === 0 ? '#ffffff' : '#f8fafe'} 0%, 
                    ${index % 2 === 0 ? '#f8fafe' : '#ffffff'} 100%)`,
                  border: '3px solid #e3f2fd',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(30,64,175,0.08)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(30,64,175,0.15)';
                  e.currentTarget.style.borderColor = '#1e40af';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(30,64,175,0.08)';
                  e.currentTarget.style.borderColor = '#e3f2fd';
                }}>
                
                {/* Elemento decorativo */}
                <Box style={{
                  position: 'absolute',
                  top: -15,
                  right: -15,
                  width: 60,
                  height: 60,
                  background: `radial-gradient(circle, ${step.color === '#1e40af' ? 'rgba(30,64,175,0.08)' : 'rgba(0,212,255,0.08)'} 0%, transparent 70%)`,
                  borderRadius: '50%'
                }} />
                
                <Stack gap="md" style={{ position: 'relative', padding: '1.5rem', zIndex: 2 }}>
                  <Group justify="space-between" align="flex-start">
                    <Box style={{ 
                      background: `linear-gradient(135deg, ${step.color} 0%, ${step.color === '#1e40af' ? '#3b82f6' : '#1e88e5'} 100%)`,
                      color: 'white', 
                      borderRadius: '50%', 
                      width: 50, 
                      height: 50, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      boxShadow: `0 6px 20px ${step.color === '#1e40af' ? 'rgba(30,64,175,0.3)' : 'rgba(0,212,255,0.3)'}`,
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1) rotate(10deg)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                    }}>
                      {step.number}
                    </Box>
                    <Badge variant="light" size="sm" 
                      style={{
                        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                        border: '2px solid #e3f2fd',
                        color: '#1e40af'
                      }}>
                      {step.duration}
                    </Badge>
                  </Group>
                  
                  <Stack gap="xs">
                    <Group gap="sm">
                      <Box style={{
                        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                        borderRadius: '50%',
                        padding: '0.6rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid #e3f2fd'
                      }}>
                        <step.icon size={20} color={step.color} />
                      </Box>
                      <Text fw={700} size="lg" 
                        style={{
                          background: `linear-gradient(135deg, ${step.color} 0%, ${step.color === '#1e40af' ? '#3b82f6' : '#1e88e5'} 100%)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                        {step.title}
                      </Text>
                    </Group>
                    <Text c="gray.6" size="sm" lh={1.6}>
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
                <Paper key={index} 
                  radius="1.5rem" 
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 100%)',
                    border: '2px solid rgba(255,255,255,0.25)',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                  }}>
                  
                  {/* Elemento decorativo */}
                  <Box style={{
                    position: 'absolute',
                    top: -15,
                    right: -15,
                    width: 60,
                    height: 60,
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                    borderRadius: '50%'
                  }} />
                  
                  <Group gap="md" style={{ position: 'relative', padding: '1.5rem', zIndex: 2 }}>
                    <Box style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 100%)',
                      borderRadius: '50%',
                      padding: '0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      backdropFilter: 'blur(5px)'
                    }}>
                      <item.icon size={25} color="white" />
                    </Box>
                    <Stack gap="xs" style={{ flex: 1 }}>
                      <Text fw={700} size="lg" c="white">{item.title}</Text>
                      <Text c="rgba(255,255,255,0.9)" size="sm" lh={1.5}>{item.description}</Text>
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
              <Paper key={index} 
                radius="2rem" 
                style={{ 
                  background: `linear-gradient(135deg, 
                    ${index % 2 === 0 ? '#ffffff' : '#f8fafe'} 0%, 
                    ${index % 2 === 0 ? '#f8fafe' : '#ffffff'} 100%)`,
                  border: '3px solid #e3f2fd',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(30,64,175,0.08)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(30,64,175,0.15)';
                  e.currentTarget.style.borderColor = '#1e40af';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(30,64,175,0.08)';
                  e.currentTarget.style.borderColor = '#e3f2fd';
                }}>
                
                {/* Elemento decorativo */}
                <Box style={{
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  width: 80,
                  height: 80,
                  background: `radial-gradient(circle, ${['rgba(30,64,175,0.06)', 'rgba(0,212,255,0.06)', 'rgba(59,130,246,0.06)'][index % 3]} 0%, transparent 70%)`,
                  borderRadius: '50%'
                }} />
                
                <Stack align="center" gap="md" style={{ position: 'relative', padding: '2rem', zIndex: 2 }}>
                  <Box style={{
                    background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                    borderRadius: '50%',
                    padding: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 25px rgba(30,64,175,0.25)',
                    transform: 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                  }}>
                    <guarantee.icon size={35} color="white" />
                  </Box>
                  
                  <Stack gap="xs" align="center">
                    <Text fw={700} size="lg" 
                      style={{
                        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                      {guarantee.title}
                    </Text>
                    <Text c="gray.6" size="sm">{guarantee.subtitle}</Text>
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