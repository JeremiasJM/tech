'use client';

import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Grid,
  Card,
  Box,
  Badge,
  Avatar,
  Paper,
  BackgroundImage,
  Overlay,
  SimpleGrid,
  ThemeIcon,
  List,
  Divider,
  NumberFormatter,
  Progress
} from '@mantine/core';
import {
  IconBuilding,
  IconShield,
  IconUsers,
  IconFileText,
  IconBrain,
  IconChartBar,
  IconClock,
  IconTrendingUp,
  IconAward,
  IconRocket,
  IconTarget,
  IconCheck,
  IconArrowRight,
  IconGlobe,
  IconDatabase,
  IconCloudComputing,
  IconDeviceDesktop,
  IconMap,
  IconPackage,
  IconList
} from '@tabler/icons-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LoadingLink } from '../components/LoadingLink';
import Link from 'next/link';



const services = [
  {
    icon: IconFileText,
    title: 'Gestión de Multas/Infracciones',
    description: 'Sistema móvil para infracciones con constancias QR y envío automático a Tribunal de Faltas.',
    color: 'blue'
  },
  {
    icon: IconBrain,
    title: 'Asistente Virtual/Chatbot',
    description: 'Automatización de consultas y trámites con chatbot inteligente para digitalizar la atención ciudadana.',
    color: 'blue'
  },
  {
    icon: IconMap,
    title: 'Gestión de Obras Públicas',
    description: 'Plataforma con mapa interactivo para cargar obras, registrar materiales y costos. Transparencia total para vecinos y gestión interna eficiente.',
    color: 'blue'
  },
  {
    icon: IconPackage,
    title: 'Gestión de Stock/Inventarios',
    description: 'Control integral de inventarios para todas las áreas: informática, RRHH, farmacia y más. Seguimiento en tiempo real de materiales y recursos.',
    color: 'blue'
  },
  {
    icon: IconClock,
    title: 'Sistema de Turnos',
    description: 'Optimización de atención ciudadana con algoritmos de distribución.',
    color: 'blue'
  },
  {
    icon: IconList,
    title: 'Gestión de Padrones',
    description: 'Información completa de padrones con datos certeros. Actualización y modificación en tiempo real para mantener registros precisos.',
    color: 'blue'
  }
];

const testimonial = {
  name: 'Dr. María González',
  position: 'Directora de Modernización',
  organization: 'Municipio de San Isidro',
  content: 'La implementación de TechGov redujo nuestros tiempos de tramitación en un 70%. La ciudadanía valora enormemente la transparencia y eficiencia lograda.',
  avatar: 'MG'
};

// Componente para animaciones de scroll
interface AnimatedElementProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

function AnimatedElement({ children, delay = 0, direction = 'up' }: AnimatedElementProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero Section */}
      <BackgroundImage
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        style={{ position: 'relative', paddingTop: '60px', paddingBottom: '60px' }}
      >
        <Overlay opacity={0.7} color="primary.5" zIndex={1} />
        <Container size="xl" style={{ position: 'relative', zIndex: 2 }}>
          <Grid align="center" gutter={30}>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap="lg">
                <Badge
                  variant="filled"
                  color="white"
                  size="lg"
                  leftSection={<IconBuilding size={16} />}
                  styles={{
                    root: {
                      color: 'var(--mantine-color-primary-5)'
                    }
                  }}
                >
                  Digitalizamos la Gestión Pública
                </Badge>
                
                <Title
                  order={1}
                  size="2.5rem"
                  fw={700}
                  lh={1.2}
                  c="white"
                  style={{
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Tecnología que{' '}
                  <Text 
                    span 
                    c="primary.2" 
                    inherit
                    style={{
                      fontWeight: 700
                    }}
                  >
                    conecta ciudades
                  </Text>
                </Title>
                
                <Text size="lg" c="gray.2" lh={1.5} maw={500}>
                  Soluciones tecnológicas para organismos gubernamentales. 
                  Digitalizamos procesos y conectamos ciudades.
                </Text>
                
                <Group gap="md">
                  <LoadingLink href="/contacto">
                    <Button
                      size="lg"
                      leftSection={<IconRocket size={20} />}
                    >
                      Ver Demo
                    </Button>
                  </LoadingLink>
                  <LoadingLink href="/servicios">
                    <Button
                      variant="outline"
                      color="white"
                      size="lg"
                      styles={{
                        root: {
                          borderColor: 'white',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'white',
                            color: '#1e40af'
                          }
                        }
                      }}
                    >
                      Servicios
                    </Button>
                  </LoadingLink>
                </Group>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </BackgroundImage>

      {/* Services Section */}
      <Box style={{ backgroundColor: '#f8fafe', padding: '60px 0' }}>
        <Container size="xl">
          <Stack gap="2rem" align="center">
            <AnimatedElement delay={0.1}>
              <Box ta="center" mx={"auto"} maw={600}>
                <Badge variant="light" color="blue" size="lg" mb="md">
                  Nuestros Servicios
                </Badge>
                <Title order={2} size="2.2rem" fw={700} c="gray.8" mb="md">
                  Soluciones para el{' '}
                  <Text span c="blue.6" inherit>
                    sector público
                  </Text>
                </Title>
                <Text size="md" c="gray.6" lh={1.5}>
                  Tecnología avanzada para ciudades más inteligentes.
                </Text>
              </Box>
            </AnimatedElement>

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" w="100%">
              {services.map((service, index) => (
                <AnimatedElement key={service.title} delay={0.2 + (index * 0.1)}>
                  <Paper 
                    radius="1.5rem" 
                    style={{ 
                      background: '#ffffff',
                      border: '2px solid #e3f2fd',
                      transition: 'all 0.3s ease',
                      height: '100%',
                      cursor: 'default',
                      boxShadow: '0 4px 20px rgba(30,64,175,0.08)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(30,64,175,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(30,64,175,0.08)';
                    }}>
                    
                    <Stack gap="md" style={{ padding: '1.5rem' }}>
                      <Box style={{
                        background: `linear-gradient(135deg, ${service.color === 'blue' ? '#1e40af' : '#00d4ff'} 0%, ${service.color === 'blue' ? '#3b82f6' : '#1e88e5'} 100%)`,
                        borderRadius: '12px',
                        padding: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '60px',
                        height: '60px'
                      }}>
                        <service.icon size={28} color="white" />
                      </Box>
                      
                      <Box>
                        <Title order={4} size="md" fw={600} mb="xs" c="gray.8">
                          {service.title}
                        </Title>
                        <Text c="gray.6" size="sm" lh={1.4}>
                          {service.description.split('.')[0]}.
                        </Text>
                      </Box>
                    </Stack>
                  </Paper>
                </AnimatedElement>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Testimonial Section */}
      {/* <Box style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <Container size="xl">
          <Grid align="center" gutter={50}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <AnimatedElement direction="left" delay={0.2}>
                <Stack gap="xl">
                  <Box>
                    <Badge variant="filled" color="blue" size="lg" mb="lg">
                      Caso de Éxito
                    </Badge>
                    <Title order={2} size="2.5rem" fw={700} c="gray.8" mb="md">
                      Resultados que{' '}
                      <Text span c="blue.6" inherit>
                        transforman
                      </Text>
                    </Title>
                    <Text size="lg" c="gray.6" lh={1.6}>
                      Casos reales de implementación exitosa en organismos gubernamentales
                    </Text>
                  </Box>
                  
                  <Paper 
                    radius="2rem" 
                    style={{ 
                      background: 'linear-gradient(135deg, #f8fafe 0%, #ffffff 50%, #f0f9ff 100%)',
                      border: '3px solid #e3f2fd',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(30,64,175,0.08)'
                    }}>
                    <Box style={{
                      position: 'absolute',
                      top: -30,
                      right: -30,
                      width: 100,
                      height: 100,
                      background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
                      borderRadius: '50%'
                    }} />
                    <Box style={{ position: 'relative', padding: '2rem', zIndex: 2 }}>
                      <Stack gap="lg">
                        <Box style={{ position: 'relative' }}>
                          <Box style={{
                            position: 'absolute',
                            top: -10,
                            left: -10,
                            fontSize: '3rem',
                            color: '#00d4ff',
                            opacity: 0.3
                          }}>
                            "
                          </Box>
                          <Text c="gray.7" size="lg" lh={1.6} fw={500} style={{ fontStyle: 'italic' }}>
                            {testimonial.content}
                          </Text>
                          <Box style={{
                            position: 'absolute',
                            bottom: -10,
                            right: -10,
                            fontSize: '3rem',
                            color: '#00d4ff',
                            opacity: 0.3
                          }}>
                            "
                          </Box>
                        </Box>
                        
                        <Group gap="md">
                          <Box style={{
                            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                            borderRadius: '50%',
                            padding: '0.8rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 25px rgba(30,64,175,0.25)'
                          }}>
                            <Text c="white" fw={600} size="lg">{testimonial.avatar}</Text>
                          </Box>
                          <Box>
                            <Text fw={700} size="lg"
                              style={{
                                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                              }}>
                              {testimonial.name}
                            </Text>
                            <Text size="md" c="gray.6" fw={500}>
                              {testimonial.position}
                            </Text>
                            <Text size="md" fw={600}
                              style={{
                                background: 'linear-gradient(135deg, #00d4ff 0%, #1e88e5 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                              }}>
                              {testimonial.organization}
                            </Text>
                          </Box>
                        </Group>
                      </Stack>
                    </Box>
                  </Paper>
                </Stack>
              </AnimatedElement>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 6 }}>
              <SimpleGrid cols={2} spacing="lg">
                {[
                  { value: '70%', label: 'Reducción de Tiempos' },
                  { value: '150+', label: 'Organismos' },
                  { value: '99.9%', label: 'Disponibilidad' },
                  { value: '24/7', label: 'Soporte' }
                ].map((metric, index) => (
                  <AnimatedElement key={metric.label} delay={0.4 + (index * 0.1)} direction="right">
                    <Paper 
                      radius="1.5rem" 
                      style={{ 
                        textAlign: 'center', 
                        background: `linear-gradient(135deg, 
                          ${index % 2 === 0 ? '#f8fafe' : '#f0f9ff'} 0%, 
                          ${index % 2 === 0 ? '#ffffff' : '#f8fafe'} 100%)`,
                        border: '3px solid #e3f2fd',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'default',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 8px 32px rgba(30,64,175,0.08)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.08) rotate(1deg)';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(59, 130, 246, 0.2)';
                        e.currentTarget.style.borderColor = '#1e40af';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(30,64,175,0.08)';
                        e.currentTarget.style.borderColor = '#e3f2fd';
                      }}>
                      
                      <Box style={{
                        position: 'absolute',
                        top: -15,
                        right: -15,
                        width: 50,
                        height: 50,
                        background: `radial-gradient(circle, ${index % 2 === 0 ? 'rgba(30,64,175,0.06)' : 'rgba(0,212,255,0.06)'} 0%, transparent 70%)`,
                        borderRadius: '50%'
                      }} />
                      
                      <Stack gap="sm" style={{ position: 'relative', padding: '1.5rem', zIndex: 2 }}>
                        <Text size="3.5rem" fw={700} lh={1}
                          style={{
                            background: `linear-gradient(135deg, ${index % 2 === 0 ? '#1e40af' : '#00d4ff'} 0%, ${index % 2 === 0 ? '#3b82f6' : '#1e88e5'} 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}>
                          {metric.value}
                        </Text>
                        <Text size="sm" c="gray.6" fw={600}>{metric.label}</Text>
                      </Stack>
                    </Paper>
                  </AnimatedElement>
                ))}
              </SimpleGrid>
            </Grid.Col>
          </Grid>
        </Container>
      </Box> */}

      {/* CTA Section */}
      <Box style={{ backgroundColor: 'var(--mantine-color-primary-5)', padding: '50px 0' }}>
        <Container size="xl">
          <Stack gap="1.5rem" align="center" ta="center">
            <AnimatedElement delay={0.1}>
              <Badge variant="white" color="blue" size="lg">
                ¿Listo para la transformación?
              </Badge>
            </AnimatedElement>
            
            <AnimatedElement delay={0.2}>
              <Title order={2} size="2.2rem" fw={700} c="white" maw={600} mx="auto">
                Moderniza tu organismo con{' '}
                <Text span c="blue.1" inherit>
                  tecnología avanzada
                </Text>
              </Title>
            </AnimatedElement>
            
            <AnimatedElement delay={0.3}>
              <Text size="lg" c="blue.1" lh={1.5} maw={500} mx="auto">
                Solicita una demo y descubre cómo revolucionar 
                la gestión de tu institución.
              </Text>
            </AnimatedElement>
            
            <AnimatedElement delay={0.4}>
              <Group gap="md" mt="lg" justify='center'>
                <LoadingLink href="/contacto">
                  <Button
                    size="lg"
                    variant="white"
                    color="blue"
                    leftSection={<IconRocket size={20} />}
                  >
                    Ver Demo
                  </Button>
                </LoadingLink>
                <LoadingLink href="/servicios">
                  <Button
                    size="lg"
                    variant="outline"
                    color="white"
                    styles={{
                      root: {
                        borderColor: 'white'
                      }
                    }}
                  >
                    Servicios
                  </Button>
                </LoadingLink>
              </Group>
            </AnimatedElement>           
          </Stack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
