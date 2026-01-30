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
              <Paper key={index} 
                radius="2rem" 
                style={{ 
                  background: `linear-gradient(135deg, 
                    ${index % 2 === 0 ? '#ffffff' : '#f8fafe'} 0%, 
                    ${index % 2 === 0 ? '#f8fafe' : '#ffffff'} 100%)`,
                  border: '3px solid #e3f2fd',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textAlign: 'center',
                  height: '100%',
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
                    <item.icon size={35} color="white" />
                  </Box>
                  
                  <Title order={4} fw={700}
                    style={{
                      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                    {item.title}
                  </Title>
                  
                  <Text c="gray.6" size="md" lh={1.6}>
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
                <Paper key={index} 
                  radius="1.5rem" 
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 100%)',
                    border: '2px solid rgba(255,255,255,0.25)',
                    backdropFilter: 'blur(10px)',
                    height: '100%',
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
                  
                  <Stack gap="md" style={{ position: 'relative', padding: '1.5rem', zIndex: 2 }}>
                    <Group>
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
                        <IconClock size={25} color="white" />
                      </Box>
                      <Title order={4} fw={700} c="white">
                        {item.title}
                      </Title>
                    </Group>
                    <Text c="rgba(255,255,255,0.9)" size="sm" lh={1.6}>
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
              <List spacing="sm" size="md" c="#1e40af">
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
              <Paper 
                radius="2rem" 
                style={{ 
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.9) 0%, rgba(30,64,175,0.95) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '3px solid rgba(255,255,255,0.2)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 12px 40px rgba(30,64,175,0.3)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) rotate(-1deg)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(255,255,255,0.2)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(30,64,175,0.3)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }}>
                
                {/* Elemento decorativo */}
                <Box style={{
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  width: 80,
                  height: 80,
                  background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
                  borderRadius: '50%'
                }} />
                
                <Stack align="center" gap="md" style={{ position: 'relative', padding: '2rem', zIndex: 2 }}>
                  <Box style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(240,249,255,0.2) 100%)',
                    borderRadius: '50%',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 8px 25px rgba(255,255,255,0.15)'
                  }}>
                    <IconChartLine size={30} color="white" />
                  </Box>
                  <Text fw={700} size="2.5rem" c="white" style={{ 
                    textShadow: '0 2px 10px rgba(0,0,0,0.2)' 
                  }}>60%</Text>
                  <Text size="lg" c="rgba(255,255,255,0.9)" fw={600}>Reducción en tiempo de espera</Text>
                </Stack>
              </Paper>
              
              <Paper 
                radius="2rem" 
                style={{ 
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafe 100%)',
                  border: '3px solid #e3f2fd',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(30,64,175,0.08)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) rotate(1deg)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(30,64,175,0.15)';
                  e.currentTarget.style.borderColor = '#1e40af';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
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
                  background: 'radial-gradient(circle, rgba(30,64,175,0.06) 0%, transparent 70%)',
                  borderRadius: '50%'
                }} />
                
                <Stack align="center" gap="md" style={{ position: 'relative', padding: '1.5rem', zIndex: 2 }}>
                  <Box style={{
                    background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                    borderRadius: '50%',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 25px rgba(30,64,175,0.25)'
                  }}>
                    <IconUsers size={30} color="white" />
                  </Box>
                  <Text fw={700} size="2.5rem" 
                    style={{
                      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>24/7</Text>
                  <Text size="md" c="gray.6" fw={500}>Disponibilidad para ciudadanos</Text>
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