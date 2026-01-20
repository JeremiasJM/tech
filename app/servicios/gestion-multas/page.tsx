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
  IconFileText,
  IconQrcode,
  IconDeviceMobile,
  IconCheck,
  IconArrowRight,
  IconClock,
  IconShield,
  IconUsers
} from '@tabler/icons-react';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';

const caracteristicas = [
  {
    icon: IconDeviceMobile,
    title: 'Sistema Móvil',
    description: 'Aplicación móvil para que los agentes registren infracciones desde cualquier lugar'
  },
  {
    icon: IconQrcode,
    title: 'Constancias QR',
    description: 'Códigos QR en las actas para verificación inmediata y acceso digital'
  },
  {
    icon: IconFileText,
    title: 'Envío Automático',
    description: 'Integración directa con el Tribunal de Faltas para el procesamiento automático'
  }
];

const beneficios = [
  'Reducción del 80% en tiempo de procesamiento',
  'Eliminación de errores de transcripción manual',
  'Trazabilidad completa de cada infracción',
  'Acceso ciudadano a constancias digitales',
  'Reportes en tiempo real para gestión',
  'Cumplimiento de normativas vigentes'
];

const proceso = [
  {
    step: '1',
    title: 'Detección',
    description: 'El agente identifica la infracción en campo'
  },
  {
    step: '2',
    title: 'Registro',
    description: 'Carga los datos en la aplicación móvil'
  },
  {
    step: '3',
    title: 'Acta Digital',
    description: 'Se genera automáticamente el acta con QR'
  },
  {
    step: '4',
    title: 'Envío',
    description: 'Transmisión automática al Tribunal de Faltas'
  }
];

export default function GestionMultasPage() {
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
            leftSection={<IconFileText size={16} />}
          >
            Sistema de Gestión
          </Badge>
          
          <Title order={1} ta="center" size="3.5rem" fw={700} c="#1e40af" lh={1.1}>
            Gestión de{' '}
            <Text span c="#00d4ff" inherit>
              Multas e Infracciones
            </Text>
          </Title>
          
          <Text size="xl" ta="center" c="dimmed" maw={700} lh={1.6}>
            Sistema móvil completo para el registro y gestión de infracciones con constancias QR 
            y envío automático al Tribunal de Faltas. <strong>Digitaliza todo el proceso.</strong>
          </Text>

          <Group>
            <Button 
              size="xl" 
              color="#1e40af"
              rightSection={<IconArrowRight size={20} />}
            >
              Solicitar Demo
            </Button>
            <Button size="xl" variant="outline" color="#1e40af">
              Ver Funcionalidades
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

      {/* Proceso */}
      <Box style={{ backgroundColor: '#1e40af' }} py={80}>
        <Container size="xl">
          <Stack gap="xl">
            <Title order={2} ta="center" size="2.5rem" fw={600} c="white">
              Proceso Simplificado
            </Title>
            
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
              {proceso.map((item, index) => (
                <Paper key={index} p="xl" radius="lg" style={{ 
                  backgroundColor: 'white',
                  textAlign: 'center',
                  height: '100%'
                }}>
                  <Stack align="center" gap="md">
                    <Box style={{
                      backgroundColor: '#1e40af',
                      color: 'white',
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      fontWeight: 700
                    }}>
                      {item.step}
                    </Box>
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
                Nuestro sistema de gestión de multas transforma completamente el proceso 
                de infracciones, desde la detección hasta el procesamiento judicial.
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
                    <IconClock size={30} color="#1e40af" />
                  </ThemeIcon>
                  <Text fw={700} size="2rem">80%</Text>
                  <Text size="lg">Reducción en tiempo de procesamiento</Text>
                </Stack>
              </Paper>
              
              <Paper p="xl" radius="lg" style={{ 
                border: '2px solid #1e40af',
                backgroundColor: 'white',
                textAlign: 'center'
              }}>
                <Stack align="center" gap="md">
                  <ThemeIcon size={60} radius="xl" color="#1e40af">
                    <IconShield size={30} />
                  </ThemeIcon>
                  <Text fw={700} size="xl" c="#1e40af">100% Seguro</Text>
                  <Text size="sm" c="dimmed">Cumple normativas legales</Text>
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
              ¿Listo para Modernizar tu Sistema de Multas?
            </Title>
            
            <Text size="xl" c="white" ta="center" maw={500} opacity={0.9}>
              Implementamos el sistema completo en menos de 4 semanas
            </Text>
            
            <Group>
              <Button 
                size="xl" 
                color="white" 
                variant="white" 
                style={{ color: '#1e40af' }}
                rightSection={<IconUsers size={20} />}
              >
                Agendar Reunión
              </Button>
              <Button size="xl" variant="outline" color="white">
                Descargar Brochure
              </Button>
            </Group>

            <Text size="sm" c="white" opacity={0.8}>
              ✅ Sin costos de implementación • 📱 Capacitación incluida
            </Text>
          </Stack>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}