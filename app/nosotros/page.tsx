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
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

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
    <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Container size="xl" py={80}>
        <Stack align="center" gap="xl">
          <Badge 
            size="lg" 
            variant="filled" 
            color="blue"
            leftSection={<IconBuilding size={16} />}
          >
            Quiénes Somos
          </Badge>
          
          <Title order={1} ta="center" size="3.5rem" fw={700} c="#1e40af" lh={1.1}>
            Expertos en{' '}
            <Text span c="#00d4ff" inherit>
              Transformación Digital
            </Text>{' '}
            del Estado
          </Title>
          
          <Text size="xl" ta="center" c="dimmed" maw={800} lh={1.6}>
            Somos una empresa especializada en soluciones tecnológicas para organismos gubernamentales, 
            con más de una década transformando la gestión pública en Argentina. 
            <strong> Digitalizamos procesos, conectamos sistemas y modernizamos el Estado.</strong>
          </Text>
        </Stack>
      </Container>

      {/* Estadísticas */}
      <Container size="xl" py={40}>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
          {estadisticas.map((stat, index) => (
            <Paper key={index} p="xl" radius="lg" style={{ 
              border: '2px solid #1e40af',
              backgroundColor: 'white',
              textAlign: 'center'
            }}>
              <Stack align="center" gap="md">
                <ThemeIcon size={60} radius="xl" color="#1e40af">
                  <stat.icon size={30} />
                </ThemeIcon>
                <Text fw={700} size="3rem" c="#1e40af">{stat.number}</Text>
                <Text fw={600} size="lg" c="dimmed">{stat.label}</Text>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>

      {/* Misión y Visión */}
      <Box style={{ backgroundColor: '#1e40af' }} py={80}>
        <Container size="xl">
          <Stack gap="xl">
            <Title order={2} ta="center" size="2.5rem" fw={600} c="white">
              Misión y Visión
            </Title>
            
            <Grid>
              {misionVision.map((item, index) => (
                <Grid.Col key={index} span={{ base: 12, md: 6 }}>
                  <Paper p="xl" radius="lg" style={{ 
                    backgroundColor: 'white',
                    height: '100%',
                    border: '2px solid white'
                  }}>
                    <Stack gap="md">
                      <Group>
                        <ThemeIcon size={60} radius="xl" color="#1e40af">
                          <item.icon size={30} />
                        </ThemeIcon>
                        <Title order={3} c="#1e40af" fw={600}>
                          {item.title}
                        </Title>
                      </Group>
                      <Text c="dimmed" size="lg" lh={1.6}>
                        {item.description}
                      </Text>
                    </Stack>
                  </Paper>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Nuestros Pilares */}
      <Container size="xl" py={80}>
        <Stack gap="xl">
          <Stack align="center" gap="md">
            <Title order={2} ta="center" size="2.5rem" fw={600} c="#1e40af">
              Nuestros Pilares
            </Title>
            <Text ta="center" c="dimmed" size="lg" maw={600}>
              Los valores fundamentales que guían nuestro trabajo y definen nuestra identidad
            </Text>
          </Stack>
          
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
            {pilares.map((pilar, index) => (
              <Paper key={index} p="xl" radius="lg" style={{ 
                height: '100%', 
                border: '1px solid #e9ecef',
                transition: 'all 0.3s ease',
                textAlign: 'center'
              }}>
                <Stack align="center" gap="md">
                  <ThemeIcon size={70} radius="xl" color="#1e40af" variant="light">
                    <pilar.icon size={35} />
                  </ThemeIcon>
                  <Title order={4} c="#1e40af" fw={600}>
                    {pilar.title}
                  </Title>
                  <Text c="dimmed" size="sm" lh={1.5} ta="center">
                    {pilar.description}
                  </Text>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Nuestro Compromiso */}
      <Box style={{ backgroundColor: '#1e40af' }} py={80}>
        <Container size="xl">
          <Stack gap="xl" align="center">
            <Title order={2} ta="center" size="2.5rem" fw={600} c="white">
              Nuestro Compromiso
            </Title>
            
            <Paper p={60} radius="lg" style={{ 
              backgroundColor: 'white',
              maxWidth: 800,
              textAlign: 'center'
            }}>
              <Stack gap="xl">
                <Text size="xl" c="dimmed" lh={1.7}>
                  <strong>Creemos firmemente que la tecnología debe estar al servicio de las personas.</strong> 
                  Por eso, cada solución que desarrollamos tiene como objetivo principal mejorar la calidad 
                  de vida de los ciudadanos y facilitar el trabajo de los funcionarios públicos.
                </Text>
                
                <Text size="lg" c="dimmed" lh={1.6}>
                  Nos enorgullece ser parte de la modernización del Estado argentino, 
                  contribuyendo a una gestión más eficiente, transparente y cercana a la ciudadanía.
                </Text>
              </Stack>
            </Paper>
          </Stack>
        </Container>
      </Box>

    

      <Footer />
    </Box>
  );
}