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
  Grid
} from '@mantine/core';
import {
  IconTarget,
  IconEye,
  IconShield,
  IconUsers,
  IconBulb,
  IconHeart,
  IconTrophy,
  IconCalendar,
  IconBuilding,
  IconArrowRight
} from '@tabler/icons-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

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

const misionVision = [
  {
    icon: IconTarget,
    title: 'Nuestra Misión',
    description: 'Transformar la gestión pública a través de soluciones tecnológicas innovadoras que simplifican procesos, mejoran la eficiencia y acercan el Estado a los ciudadanos.'
  },
  {
    icon: IconEye,
    title: 'Nuestra Visión',
    description: 'Ser la empresa líder en transformación digital del sector público en Argentina, reconocida por nuestra excelencia técnica y compromiso con la modernización del Estado.'
  }
];

const pilares = [
  {
    icon: IconShield,
    title: 'Confiabilidad',
    description: 'Sistemas seguros y estables que garantizan la continuidad operativa de tu organismo.'
  },
  {
    icon: IconBulb,
    title: 'Innovación',
    description: 'Tecnología de vanguardia adaptada a las necesidades específicas del sector público.'
  },
  {
    icon: IconUsers,
    title: 'Acompañamiento',
    description: 'Soporte continuo y capacitación personalizada para asegurar el éxito de cada implementación.'
  },
  {
    icon: IconHeart,
    title: 'Compromiso',
    description: 'Dedicación total al servicio público y al mejoramiento de la gestión gubernamental.'
  }
];

const estadisticas = [
  {
    icon: IconCalendar,
    number: '+10',
    label: 'Años de experiencia'
  },
  {
    icon: IconBuilding,
    number: '+50',
    label: 'Organismos atendidos'
  },
  {
    icon: IconTrophy,
    number: '100%',
    label: 'Satisfacción garantizada'
  }
];

export default function NosotrosPage() {
  return (
    <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafe' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box style={{ backgroundColor: 'white', padding: '80px 0' }}>
        <Container size="xl">
          <Stack ta={"center"} align="center" gap="xl">
            <AnimatedElement delay={0.1}>
              <Badge ta="center"
                size="xl" 
                variant="light" 
                color="blue"
                leftSection={<IconBuilding size={18} />}
              >
                Quiénes Somos
              </Badge>
            </AnimatedElement>
            
            <AnimatedElement delay={0.2}>
              <Title order={1} ta="center" size="3.8rem" fw={700} c="#1e40af" lh={1.1} maw={900} mx="auto">
                Expertos en{' '}
                <Text span c="#00d4ff" inherit>
                  Transformación Digital
                </Text>{' '}
                del Estado
              </Title>
            </AnimatedElement>
            
            <AnimatedElement delay={0.3}>
              <Text size="xl" ta="center" c="gray.6" maw={800} mx="auto" lh={1.7} fw={400}>
                Somos una empresa especializada en soluciones tecnológicas para organismos gubernamentales, 
                con más de una década transformando la gestión pública en Argentina. 
                <Text span fw={600} c="#1e40af">Digitalizamos procesos, conectamos sistemas y modernizamos el Estado.</Text>
              </Text>
            </AnimatedElement>
          </Stack>
        </Container>
      </Box>

      {/* Estadísticas */}
      <Box style={{ backgroundColor: 'white', padding: '60px 0' }}>
        <Container size="xl">
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            {estadisticas.map((stat, index) => (
              <AnimatedElement key={index} delay={0.1 + (index * 0.1)}>
                <Paper 
                  radius="2rem" 
                  style={{ 
                    background: `linear-gradient(135deg, 
                      ${index === 0 ? '#f8fafe' : index === 1 ? '#ffffff' : '#f0f9ff'} 0%, 
                      ${index === 0 ? '#ffffff' : index === 1 ? '#f8fafe' : '#ffffff'} 100%)`,
                    border: '3px solid transparent',
                    backgroundClip: 'padding-box',
                    textAlign: 'center',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'default',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(30, 64, 175, 0.08)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(30,64,175,0.2)';
                    e.currentTarget.style.borderColor = '#00d4ff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(30, 64, 175, 0.08)';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}>
                  {/* Elemento decorativo de fondo */}
                  <Box style={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: 80,
                    height: 80,
                    background: `radial-gradient(circle, ${index === 0 ? 'rgba(30,64,175,0.05)' : index === 1 ? 'rgba(0,212,255,0.05)' : 'rgba(59,130,246,0.05)'} 0%, transparent 70%)`,
                    borderRadius: '50%'
                  }} />
                  <Stack align="center" gap="lg" style={{ position: 'relative', padding: '2.5rem 2rem', zIndex: 2 }}>
                    <Box style={{ 
                      background: `linear-gradient(135deg, ${index === 0 ? '#1e40af' : index === 1 ? '#00d4ff' : '#3b82f6'} 0%, ${index === 0 ? '#3b82f6' : index === 1 ? '#1e88e5' : '#1e40af'} 100%)`,
                      borderRadius: '50%',
                      padding: '1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 8px 25px ${index === 0 ? 'rgba(30,64,175,0.3)' : index === 1 ? 'rgba(0,212,255,0.3)' : 'rgba(59,130,246,0.3)'}`
                    }}>
                      <stat.icon size={35} color="white" />
                    </Box>
                    <Text fw={700} size="3.8rem" lh={1} 
                      style={{
                        background: `linear-gradient(135deg, ${index === 0 ? '#1e40af' : index === 1 ? '#00d4ff' : '#3b82f6'} 0%, ${index === 0 ? '#3b82f6' : index === 1 ? '#1e88e5' : '#1e40af'} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                      {stat.number}
                    </Text>
                    <Text fw={600} size="lg" c="gray.6">{stat.label}</Text>
                  </Stack>
                </Paper>
              </AnimatedElement>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Misión y Visión */}
      <Box style={{ backgroundColor: '#1e40af', padding: '80px 0' }}>
        <Container size="xl">
          <Stack gap="2rem">
            <AnimatedElement delay={0.1}>
              <Box ta="center">
                <Badge variant="white" color="blue" size="xl" mb="lg">
                  Nuestra Filosofía
                </Badge>
                <Title order={2} ta="center" size="3rem" fw={700} c="white" mb="md">
                  Misión y Visión
                </Title>
                <Text size="lg" c="blue.1" ta="center" maw={700} mx="auto">
                  Los principios que guían nuestro trabajo y definen nuestro futuro
                </Text>
              </Box>
            </AnimatedElement>
            
            <Grid mt="xl">
              {misionVision.map((item, index) => (
                <Grid.Col key={index} span={{ base: 12, md: 6 }}>
                  <AnimatedElement delay={0.2 + (index * 0.2)} direction={index === 0 ? 'left' : 'right'}>
                    <Paper 
                      radius="2rem" 
                      style={{ 
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafe 50%, #ffffff 100%)',
                        height: '100%',
                        border: '3px solid rgba(255,255,255,0.8)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'default',
                        position: 'relative',
                        overflow: 'hidden',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.2)';
                        e.currentTarget.style.borderColor = '#00d4ff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)';
                      }}>
                      {/* Elementos decorativos */}
                      <Box style={{
                        position: 'absolute',
                        top: -30,
                        right: -30,
                        width: 100,
                        height: 100,
                        background: `radial-gradient(circle, ${index === 0 ? 'rgba(30,64,175,0.08)' : 'rgba(0,212,255,0.08)'} 0%, transparent 70%)`,
                        borderRadius: '50%'
                      }} />
                      <Box style={{
                        position: 'absolute',
                        bottom: -20,
                        left: -20,
                        width: 60,
                        height: 60,
                        background: `radial-gradient(circle, ${index === 0 ? 'rgba(0,212,255,0.06)' : 'rgba(30,64,175,0.06)'} 0%, transparent 70%)`,
                        borderRadius: '50%'
                      }} />
                      
                      <Stack gap="xl" style={{ position: 'relative', padding: '3rem', zIndex: 2 }}>                        <Group justify="center">
                          <Box style={{
                            background: `linear-gradient(135deg, ${index === 0 ? '#1e40af' : '#00d4ff'} 0%, ${index === 0 ? '#3b82f6' : '#1e88e5'} 100%)`,
                            borderRadius: '50%',
                            padding: '1.2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: `0 8px 25px ${index === 0 ? 'rgba(30,64,175,0.25)' : 'rgba(0,212,255,0.25)'}`
                          }}>
                            <item.icon size={35} color="white" />
                          </Box>
                        </Group>
                        <Title order={3} fw={700} size="1.8rem" ta="center"
                          style={{
                            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}>
                          {item.title}
                        </Title>
                        <Text c="gray.7" size="lg" lh={1.8} fw={400} ta="center">
                          {item.description}
                        </Text>
                      </Stack>
                    </Paper>
                  </AnimatedElement>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Nuestros Pilares */}
      <Box style={{ backgroundColor: '#f8fafe', padding: '80px 0' }}>
        <Container size="xl">
          <Stack gap="3rem">
            <AnimatedElement delay={0.1}>
              <Box ta="center">
                <Badge variant="light" color="blue" size="xl" mb="lg">
                  Nuestros Valores
                </Badge>
                <Title order={2} ta="center" size="3rem" fw={700} c="#1e40af" mb="md">
                  Nuestros Pilares
                </Title>
                <Text ta="center" c="gray.6" size="lg" maw={700} mx="auto" lh={1.6}>
                  Los valores fundamentales que guían nuestro trabajo y definen nuestra identidad
                </Text>
              </Box>
            </AnimatedElement>
            
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
              {pilares.map((pilar, index) => (
                <AnimatedElement key={index} delay={0.2 + (index * 0.1)}>
                  <Paper 
                    radius="2rem" 
                    style={{ 
                      height: '100%', 
                      background: `linear-gradient(135deg, 
                        ${index % 2 === 0 ? '#ffffff' : '#f8fafe'} 0%, 
                        ${index % 2 === 0 ? '#f8fafe' : '#ffffff'} 100%)`,
                      border: '3px solid #e3f2fd',
                      textAlign: 'center',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'default',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(30,64,175,0.08)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-15px) scale(1.03)';
                      e.currentTarget.style.boxShadow = '0 20px 50px rgba(30,64,175,0.15)';
                      e.currentTarget.style.borderColor = '#1e40af';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(30,64,175,0.08)';
                      e.currentTarget.style.borderColor = '#e3f2fd';
                    }}>
                    
                    {/* Elemento decorativo flotante */}
                    <Box style={{
                      position: 'absolute',
                      top: -15,
                      right: -15,
                      width: 60,
                      height: 60,
                      background: `radial-gradient(circle, ${['rgba(30,64,175,0.06)', 'rgba(0,212,255,0.06)', 'rgba(59,130,246,0.06)', 'rgba(168,85,247,0.06)'][index]} 0%, transparent 70%)`,
                      borderRadius: '50%'
                    }} />
                    
                    <Stack align="center" gap="lg" h="100%" style={{ position: 'relative', padding: '2.5rem 1.5rem', zIndex: 2 }}>
                      <Box style={{
                        background: `linear-gradient(135deg, ${['#1e40af', '#00d4ff', '#3b82f6', '#a855f7'][index]} 0%, ${['#3b82f6', '#1e88e5', '#1e40af', '#6366f1'][index]} 100%)`,
                        borderRadius: '50%',
                        padding: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 8px 25px ${['rgba(30,64,175,0.25)', 'rgba(0,212,255,0.25)', 'rgba(59,130,246,0.25)', 'rgba(168,85,247,0.25)'][index]}`,
                        transform: 'scale(1)',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                      }}>
                        <pilar.icon size={40} color="white" />
                      </Box>
                      <Title order={4} fw={700} size="1.4rem" ta="center"
                        style={{
                          background: `linear-gradient(135deg, ${['#1e40af', '#00d4ff', '#3b82f6', '#a855f7'][index]} 0%, ${['#3b82f6', '#1e88e5', '#1e40af', '#6366f1'][index]} 100%)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                        {pilar.title}
                      </Title>
                      <Text c="gray.6" size="md" lh={1.7} ta="center" fw={400}>
                        {pilar.description}
                      </Text>
                    </Stack>
                  </Paper>
                </AnimatedElement>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Nuestro Compromiso */}
      <Box style={{ backgroundColor: '#1e40af', padding: '80px 0' }}>
        <Container size="xl">
          <Stack gap="2rem" align="center">
            <AnimatedElement delay={0.1}>
              <Box ta="center">
                <Badge variant="white" color="blue" size="xl" mb="lg">
                  Nuestro Propósito
                </Badge>
                <Title order={2} ta="center" size="3rem" fw={700} c="white">
                  Nuestro Compromiso
                </Title>
              </Box>
            </AnimatedElement>
            
            <AnimatedElement delay={0.3}>
              <Paper 
                radius="2rem" 
                style={{ 
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafe 50%, #ffffff 100%)',
                  maxWidth: 900,
                  width: '100%',
                  textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default',
                  border: '3px solid rgba(255,255,255,0.8)',
                  margin: '0 auto',
                  position: 'relative',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.2)';
                  e.currentTarget.style.borderColor = '#00d4ff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)';
                }}>
                
                {/* Elementos decorativos de fondo */}
                <Box style={{
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: 150,
                  height: 150,
                  background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
                  borderRadius: '50%'
                }} />
                <Box style={{
                  position: 'absolute',
                  bottom: -30,
                  left: -30,
                  width: 100,
                  height: 100,
                  background: 'radial-gradient(circle, rgba(30,64,175,0.06) 0%, transparent 70%)',
                  borderRadius: '50%'
                }} />
                
                <Stack gap="2rem" style={{ position: 'relative', padding: '3.5rem', zIndex: 2 }}>
                  <Text size="1.3rem" lh={1.8} fw={500} c="gray.8">
                    <Text span fw={700} size="1.4rem"
                      style={{
                        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                      "Creemos firmemente que la tecnología debe estar al servicio de las personas."
                    </Text>{' '}
                    Por eso, cada solución que desarrollamos tiene como objetivo principal mejorar la calidad 
                    de vida de los ciudadanos y facilitar el trabajo de los funcionarios públicos.
                  </Text>
                  
                  {/* Divider decorativo mejorado */}
                  <Box style={{ 
                    height: '3px', 
                    width: '120px', 
                    background: 'linear-gradient(90deg, #1e40af 0%, #00d4ff 50%, #1e40af 100%)',
                    margin: '1.5rem auto',
                    borderRadius: '2px',
                    position: 'relative'
                  }}>
                    <Box style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '10px',
                      height: '10px',
                      background: 'linear-gradient(135deg, #00d4ff 0%, #1e88e5 100%)',
                      borderRadius: '50%',
                      boxShadow: '0 0 20px rgba(0,212,255,0.4)'
                    }} />
                  </Box>
                  
                  <Text size="1.1rem" c="gray.7" lh={1.8} fw={400}>
                    Nos enorgullece ser parte de la{' '}
                    <Text span fw={600}
                      style={{
                        background: 'linear-gradient(135deg, #00d4ff 0%, #1e88e5 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                      modernización del Estado argentino
                    </Text>, 
                    contribuyendo a una gestión más eficiente, transparente y cercana a la ciudadanía.
                  </Text>
                </Stack>
              </Paper>
            </AnimatedElement>
          </Stack>
        </Container>
      </Box>

    

      <Footer />
    </Box>
  );
}