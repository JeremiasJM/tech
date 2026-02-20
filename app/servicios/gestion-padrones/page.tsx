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

      {/* Tipos de Padrones */}
      <Box style={{ backgroundColor: '#1e40af' }} py={80}>
        <Container size="xl">
          <Stack gap="xl">
            <Title order={2} ta="center" size="2.5rem" fw={600} c="white">
              Tipos de Padrones que Gestionamos
            </Title>
            
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
              {tiposPadrones.map((item, index) => (
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
                        <IconDatabase size={25} color="white" />
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
                Nuestro sistema de gestión de padrones centraliza 
                y organiza toda la información ciudadana, garantizando 
                datos precisos y actualizados.
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
                    <IconSearch size={30} color="white" />
                  </Box>
                  <Text fw={700} size="2.5rem" c="white" style={{ 
                    textShadow: '0 2px 10px rgba(0,0,0,0.2)' 
                  }}>90%</Text>
                  <Text size="lg" c="rgba(255,255,255,0.9)" fw={600}>Más rápido en consultas</Text>
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
                    <IconShield size={30} color="white" />
                  </Box>
                  <Text fw={700} size="2.5rem" 
                    style={{
                      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>100%</Text>
                  <Text size="md" c="gray.6" fw={500}>Datos seguros y confiables</Text>
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