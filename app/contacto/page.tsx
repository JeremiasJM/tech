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
  Button,
  TextInput,
  Textarea,
  Select,
  SimpleGrid
} from '@mantine/core';
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconSend,
  IconBuilding,
  IconClock,
  IconMessage
} from '@tabler/icons-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { useState } from 'react';

const contactInfo = [
  {
    icon: IconPhone,
    title: 'Teléfono',
    value: '+54 11 4567-8900',
    subtitle: 'Lunes a Viernes 9-18hs'
  },
  {
    icon: IconMail,
    title: 'Email',
    value: 'contacto@techgov.com.ar',
    subtitle: 'Respuesta en 24hs'
  },
  {
    icon: IconMapPin,
    title: 'Ubicación',
    value: 'Tucumán, Argentina',
    subtitle: 'Atención presencial con cita'
  }
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    organismo: '',
    asunto: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí manejarías el envío del formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
            leftSection={<IconMessage size={16} />}
          >
            Contacto Directo
          </Badge>
          
          <Title order={1} ta="center" size="3.5rem" fw={700} c="#1e40af" lh={1.1}>
            Conversemos sobre tu{' '}
            <Text span c="#00d4ff" inherit>
              Proyecto
            </Text>
          </Title>
          
          <Text size="xl" ta="center" c="dimmed" maw={600} lh={1.6}>
            Estamos listos para ayudarte a digitalizar tu gestión. 
            <strong> Respuesta garantizada en menos de 24 horas.</strong>
          </Text>
        </Stack>
      </Container>

      {/* Contact Info Cards */}
      <Container size="xl" py={40}>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
          {contactInfo.map((info, index) => (
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
                  padding: '1rem',
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
                  <info.icon size={30} color="white" />
                </Box>
                
                <Stack gap="xs" align="center">
                  <Text fw={700} size="lg" 
                    style={{
                      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                    {info.title}
                  </Text>
                  <Text fw={600} size="md" c="gray.8">{info.value}</Text>
                  <Text c="gray.6" size="sm">{info.subtitle}</Text>
                </Stack>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>

      {/* Contact Form */}
      <Box style={{ backgroundColor: '#1e40af' }} py={80}>
        <Container size="xl">
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="xl">
                <Stack gap="md">
                  <Title order={2} size="2.5rem" fw={600} c="white">
                    Cuéntanos sobre tu proyecto
                  </Title>
                  <Text size="lg" c="white" opacity={0.9}>
                    Completa el formulario y nos pondremos en contacto contigo 
                    para analizar tus necesidades específicas.
                  </Text>
                </Stack>

                <Stack gap="md">
                  <Group>
                    <ThemeIcon color="white" size="sm" radius="xl">
                      <IconClock size={16} />
                    </ThemeIcon>
                    <Text c="white" size="sm">Respuesta en menos de 24 horas</Text>
                  </Group>
                  <Group>
                    <ThemeIcon color="white" size="sm" radius="xl">
                      <IconBuilding size={16} />
                    </ThemeIcon>
                    <Text c="white" size="sm">Consulta sin compromiso</Text>
                  </Group>
                  <Group>
                    <ThemeIcon color="white" size="sm" radius="xl">
                      <IconMessage size={16} />
                    </ThemeIcon>
                    <Text c="white" size="sm">Propuesta personalizada</Text>
                  </Group>
                </Stack>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Paper p="xl" radius="lg" style={{ backgroundColor: 'white' }}>
                <form onSubmit={handleSubmit}>
                  <Stack gap="md">
                    <TextInput
                      label="Nombre completo"
                      placeholder="Tu nombre y apellido"
                      required
                      value={formData.nombre}
                      onChange={(e) => handleChange('nombre', e.target.value)}
                      styles={{
                        label: { fontWeight: 600, color: '#1e40af' }
                      }}
                    />

                    <Grid>
                      <Grid.Col span={6}>
                        <TextInput
                          label="Email"
                          type="email"
                          placeholder="tu@email.com"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          styles={{
                            label: { fontWeight: 600, color: '#1e40af' }
                          }}
                        />
                      </Grid.Col>
                      <Grid.Col span={6}>
                        <TextInput
                          label="Teléfono"
                          placeholder="+54 11 1234-5678"
                          value={formData.telefono}
                          onChange={(e) => handleChange('telefono', e.target.value)}
                          styles={{
                            label: { fontWeight: 600, color: '#1e40af' }
                          }}
                        />
                      </Grid.Col>
                    </Grid>

                    <TextInput
                      label="Organismo/Institución"
                      placeholder="Municipalidad, Ministerio, etc."
                      required
                      value={formData.organismo}
                      onChange={(e) => handleChange('organismo', e.target.value)}
                      styles={{
                        label: { fontWeight: 600, color: '#1e40af' }
                      }}
                    />

                    <Select
                      label="¿En qué podemos ayudarte?"
                      placeholder="Selecciona una opción"
                      required
                      value={formData.asunto}
                      onChange={(value) => handleChange('asunto', value || '')}
                      data={[
                        'Gestión de Multas/Infracciones',
                        'Asistente Virtual/Chatbot',
                        'Gestión de Obras Públicas',
                        'Sistema de Turnos',
                        'Gestión de Inventarios',
                        'Gestión de Padrones',
                        'Consultoría General',
                        'Otro (especificar en mensaje)'
                      ]}
                      styles={{
                        label: { fontWeight: 600, color: '#1e40af' }
                      }}
                    />

                    <Textarea
                      label="Mensaje"
                      placeholder="Cuéntanos más detalles sobre tu proyecto o necesidades..."
                      required
                      minRows={4}
                      value={formData.mensaje}
                      onChange={(e) => handleChange('mensaje', e.target.value)}
                      styles={{
                        label: { fontWeight: 600, color: '#1e40af' }
                      }}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      color="#1e40af"
                      fullWidth
                      rightSection={<IconSend size={18} />}
                      style={{ marginTop: '1rem' }}
                    >
                      Enviar Mensaje
                    </Button>
                  </Stack>
                </form>
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      

      <Footer />
    </Box>
  );
}