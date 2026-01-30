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
        style={{ position: 'relative', paddingTop: '80px', paddingBottom: '80px' }}
      >
        <Overlay opacity={0.7} color="primary.5" zIndex={1} />
        <Container size="xl" style={{ position: 'relative', zIndex: 2 }}>
          <Grid align="center" gutter={50}>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap="xl">
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
                  Digitalizamos la Gestión, Conectamos la Ciudad
                </Badge>
                
                <Title
                  order={1}
                  size="3.2rem"
                  fw={700}
                  lh={1.1}
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
                    digitaliza la gestión
                  </Text>{' '}
                  y conecta la ciudad
                </Title>
                
                <Text size="xl" c="gray.2" lh={1.6} maw={600}>
                  Transformamos la administración pública con soluciones tecnológicas 
                  que digitalizan procesos y conectan organismos para una gestión más eficiente.
                </Text>
                
                <Group gap="md">
                  <Button
                    component={Link}
                    href="/contacto"
                    size="lg"
                    leftSection={<IconRocket size={20} />}
                  >
                    Solicitar Demostración
                  </Button>
                  <Button
                    component={Link}
                    href="/servicios"
                    variant="outline"
                    color="white"
                    size="lg"
                    leftSection={<IconChartBar size={20} />}
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
                    Ver Servicios
                  </Button>
                </Group>
                
                {/* Trust Indicators */}
                <Group gap="xl" mt="xl">
                  <Box>
                    <Text size="xs" c="gray.3" tt="uppercase" fw={600} mb="xs">
                      Experiencia
                    </Text>
                    <Text size="lg" fw={700} c="blue.1">
                      +12 años
                    </Text>
                  </Box>
                  <Box>
                    <Text size="xs" c="gray.3" tt="uppercase" fw={600} mb="xs">
                      Certificación
                    </Text>
                    <Text size="lg" fw={700} c="blue.1">
                      ISO 27001
                    </Text>
                  </Box>
                  <Box>
                    <Text size="xs" c="gray.3" tt="uppercase" fw={600} mb="xs">
                      Cumplimiento
                    </Text>
                    <Text size="lg" fw={700} c="blue.1">
                      100% Normativo
                    </Text>
                  </Box>
                </Group>
              </Stack>
            </Grid.Col>
            
            
          </Grid>
        </Container>
      </BackgroundImage>    
  

      {/* Services Section */}
      <Box style={{ backgroundColor: '#f8fafe', padding: '80px 0' }}>
        <Container size="xl">
          <Stack gap="3rem" align="center">
            <AnimatedElement delay={0.1}>
              <Box ta="center" mx={"auto"} maw={800}>
                <Badge variant="light" color="blue" size="lg" mb="md">
                  Nuestros Servicios
                </Badge>
                <Title order={2} size="2.8rem" fw={700} c="gray.8" mb="lg">
                  Soluciones tecnológicas para el{' '}
                  <Text span c="blue.6" inherit>
                    sector público
                  </Text>
                </Title>
                <Text size="lg" c="gray.6" lh={1.6}>
                  Digitalizamos la gestión pública con tecnología avanzada y 
                  conectamos organismos para crear ciudades más inteligentes y eficientes.
                </Text>
              </Box>
            </AnimatedElement>

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl" w="100%" style={{ justifyContent: 'center' }}>
              {services.map((service, index) => (
                <AnimatedElement key={service.title} delay={0.2 + (index * 0.1)}>
                  <Paper p="2rem" radius="xl" style={{ 
                    backgroundColor: 'white',
                    border: '2px solid #e3f2fd',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    cursor: 'default',
                    margin: '0 auto'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                    e.currentTarget.style.borderColor = '#3b82f6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '#e3f2fd';
                  }}>
                    <Stack gap="lg" h="100%">
                      <ThemeIcon size={70} color={service.color} variant="light" radius="xl" mx="auto">
                        <service.icon size={35} />
                      </ThemeIcon>
                      
                      <Box ta="center">
                        <Title order={4} size="lg" fw={600} mb="sm" c="gray.8">
                          {service.title}
                        </Title>
                        <Text c="gray.6" size="md" lh={1.6}>
                          {service.description}
                        </Text>
                      </Box>
                      
                      <Button
                        variant="light"
                        color="blue"
                        fullWidth
                        mt="auto"
                        radius="md"
                      >
                        Conocer más
                      </Button>
                    </Stack>
                  </Paper>
                </AnimatedElement>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Testimonial Section */}
      <Box style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
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
                  
                  <Paper p="2rem" radius="xl" style={{ 
                    backgroundColor: '#f8fafe',
                    border: '2px solid #e3f2fd'
                  }}>
                    <Stack gap="lg">
                      <Text c="gray.7" size="lg" lh={1.6} style={{ fontStyle: 'italic' }}>
                        "{testimonial.content}"
                      </Text>
                      
                      <Group gap="md">
                        <ThemeIcon size={50} color="blue" variant="filled" radius="xl">
                          <Text c="white" fw={600}>{testimonial.avatar}</Text>
                        </ThemeIcon>
                        <Box>
                          <Text fw={600} size="lg" c="gray.8">
                            {testimonial.name}
                          </Text>
                          <Text size="md" c="gray.6">
                            {testimonial.position}
                          </Text>
                          <Text size="md" c="blue.6" fw={500}>
                            {testimonial.organization}
                          </Text>
                        </Box>
                      </Group>
                    </Stack>
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
                    <Paper p="xl" radius="lg" style={{ 
                      textAlign: 'center', 
                      backgroundColor: '#f8fafe',
                      border: '2px solid #e3f2fd',
                      transition: 'all 0.3s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                      <Stack gap="sm">
                        <Text size="3xl" fw={700} c="blue.6">{metric.value}</Text>
                        <Text size="sm" c="gray.6" fw={500}>{metric.label}</Text>
                      </Stack>
                    </Paper>
                  </AnimatedElement>
                ))}
              </SimpleGrid>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box style={{ backgroundColor: 'var(--mantine-color-primary-5)', padding: '80px 0' }}>
        <Container size="xl">
          <Stack gap="2rem" align="center" ta="center">
            <AnimatedElement delay={0.1}>
              <Badge variant="white" color="blue" size="xl">
                ¿Listo para la transformación?
              </Badge>
            </AnimatedElement>
            
            <AnimatedElement delay={0.2}>
              <Title order={2} size="3rem" fw={700} c="white" maw={800} mx="auto">
                Moderniza tu organismo público con{' '}
                <Text span c="blue.1" inherit>
                  tecnología avanzada
                </Text>
              </Title>
            </AnimatedElement>
            
            <AnimatedElement delay={0.3}>
              <Text size="xl" c="blue.1" lh={1.6} maw={700} mx="auto">
                Solicita una demostración personalizada y descubre cómo nuestras 
                soluciones pueden revolucionar la gestión de tu institución.
              </Text>
            </AnimatedElement>
            
            <AnimatedElement delay={0.4}>
              <Group gap="lg" mt="xl" justify='center'>
                <Button
                  component={Link}
                  href="/contacto"
                  size="xl"
                  variant="white"
                  color="blue"
                  leftSection={<IconRocket size={24} />}
                  radius="md"
                  styles={{
                    root: {
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      padding: '1rem 2rem'
                    }
                  }}
                >
                  Solicitar Demostración
                </Button>
                <Button
                  component={Link}
                  href="/servicios"
                  size="xl"
                  variant="outline"
                  color="white"
                  leftSection={<IconChartBar size={24} />}
                  radius="md"
                  styles={{
                    root: {
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      padding: '1rem 2rem',
                      borderColor: 'white'
                    }
                  }}
                >
                  Ver Servicios
                </Button>
              </Group>
            </AnimatedElement>           
           
          </Stack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
