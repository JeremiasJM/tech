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
  Input,
  Textarea,
  Combobox,
  InputBase,
  useCombobox,
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

// Estilos CSS globales para el Combobox
const selectStyles = `
[data-mantine-color-scheme] .mantine-Combobox-dropdown {
  background-color: white !important;
  border: 1px solid #d1d5db !important;
  border-radius: 8px !important;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
}

[data-mantine-color-scheme] .mantine-Combobox-option {
  color: #1f2937 !important;
  background-color: white !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  padding: 12px 16px !important;
}

[data-mantine-color-scheme] .mantine-Combobox-option[data-combobox-selected="true"] {
  background-color: #1e40af !important;
  color: white !important;
}

[data-mantine-color-scheme] .mantine-Combobox-option:hover,
[data-mantine-color-scheme] .mantine-Combobox-option[data-combobox-hovered="true"] {
  background-color: #f3f4f6 !important;
  color: #1e40af !important;
}

[data-mantine-color-scheme] .mantine-Combobox-option[data-combobox-selected="true"]:hover {
  background-color: #1e40af !important;
  color: white !important;
}
`;

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

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const asuntoOptions = [
    'Gestión de Multas/Infracciones',
    'Asistente Virtual/Chatbot',
    'Gestión de Obras Públicas',
    'Sistema de Turnos',
    'Gestión de Inventarios',
    'Gestión de Padrones',
    'Consultoría General',
    'Otro (especificar en mensaje)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí manejarías el envío del formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  const handleChange = (field: string, value: string) => {
    let processedValue = value;
    
    // Validaciones según el campo
    switch (field) {
      case 'nombre':
        // Máximo 50 caracteres, solo letras y espacios
        if (value.length <= 50 && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(value)) {
          processedValue = value;
        } else {
          return; // No actualiza si no cumple las validaciones
        }
        break;
        
      case 'email':
        // Máximo 100 caracteres
        if (value.length <= 100) {
          processedValue = value;
        } else {
          return;
        }
        break;
        
      case 'telefono':
        // Solo números, espacios, +, -, (, ) - máximo 15 caracteres
        const cleanValue = value.replace(/[^0-9\s\+\-\(\)]/g, '');
        if (cleanValue.length <= 15) {
          processedValue = cleanValue;
        } else {
          return;
        }
        break;
        
      case 'organismo':
        // Máximo 100 caracteres
        if (value.length <= 100) {
          processedValue = value;
        } else {
          return;
        }
        break;
        
      case 'mensaje':
        // Máximo 500 caracteres
        if (value.length <= 500) {
          processedValue = value;
        } else {
          return;
        }
        break;
        
      default:
        processedValue = value;
    }
    
    setFormData(prev => ({ ...prev, [field]: processedValue }));
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: selectStyles }} />
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
                    <Input.Wrapper
                      label="Nombre completo"
                      required
                      styles={{
                        label: { fontWeight: 600, color: '#1e40af' }
                      }}
                    >
                      <Input
                        placeholder="Tu nombre y apellido"
                        value={formData.nombre}
                        onChange={(e) => handleChange('nombre', e.target.value)}
                        styles={{
                          input: {
                            '&:focus': {
                              borderColor: '#1e40af',
                              backgroundColor: '#f8faff',
                              boxShadow: '0 0 0 3px rgba(30, 64, 175, 0.1)'
                            },
                            transition: 'all 0.2s ease'
                          }
                        }}
                      />
                    </Input.Wrapper>

                    <Grid>
                      <Grid.Col span={6}>
                        <Input.Wrapper
                          label="Email"
                          required
                          styles={{
                            label: { fontWeight: 600, color: '#1e40af' }
                          }}
                        >
                          <Input
                            type="email"
                            placeholder="tu@email.com"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            styles={{
                              input: {
                                '&:focus': {
                                  borderColor: '#1e40af',
                                  backgroundColor: '#f8faff',
                                  boxShadow: '0 0 0 3px rgba(30, 64, 175, 0.1)'
                                },
                                transition: 'all 0.2s ease'
                              }
                            }}
                          />
                        </Input.Wrapper>
                      </Grid.Col>
                      <Grid.Col span={6}>
                        <Input.Wrapper
                          label="Teléfono"
                          styles={{
                            label: { fontWeight: 600, color: '#1e40af' }
                          }}
                        >
                          <Input
                            placeholder="+54 11 1234-5678"
                            value={formData.telefono}
                            onChange={(e) => handleChange('telefono', e.target.value)}
                            styles={{
                              input: {
                                '&:focus': {
                                  borderColor: '#1e40af',
                                  backgroundColor: '#f8faff',
                                  boxShadow: '0 0 0 3px rgba(30, 64, 175, 0.1)'
                                },
                                transition: 'all 0.2s ease'
                              }
                            }}
                          />
                        </Input.Wrapper>
                      </Grid.Col>
                    </Grid>

                    <Input.Wrapper
                      label="Organismo/Institución"
                      required
                      styles={{
                        label: { fontWeight: 600, color: '#1e40af' }
                      }}
                    >
                      <Input
                        placeholder="Municipalidad, Ministerio, etc."
                        value={formData.organismo}
                        onChange={(e) => handleChange('organismo', e.target.value)}
                        styles={{
                          input: {
                            '&:focus': {
                              borderColor: '#1e40af',
                              backgroundColor: '#f8faff',
                              boxShadow: '0 0 0 3px rgba(30, 64, 175, 0.1)'
                            },
                            transition: 'all 0.2s ease'
                          }
                        }}
                      />
                    </Input.Wrapper>

                    <Combobox
                      store={combobox}
                      onOptionSubmit={(val) => {
                        handleChange('asunto', val);
                        combobox.closeDropdown();
                      }}
                    >
                      <Combobox.Target>
                        <InputBase
                          component="button"
                          type="button"
                          pointer
                          rightSection={<Combobox.Chevron />}
                          onClick={() => combobox.toggleDropdown()}
                          rightSectionPointerEvents="none"
                          label="¿En qué podemos ayudarte?"
                          required
                          styles={{
                            label: { fontWeight: 600, color: '#1e40af' },
                            input: {
                              '&:focus': {
                                borderColor: '#1e40af',
                                backgroundColor: '#f8faff',
                                boxShadow: '0 0 0 3px rgba(30, 64, 175, 0.1)'
                              },
                              transition: 'all 0.2s ease',
                              textAlign: 'left'
                            }
                          }}
                        >
                          {formData.asunto || <Input.Placeholder>Selecciona una opción</Input.Placeholder>}
                        </InputBase>
                      </Combobox.Target>

                      <Combobox.Dropdown>
                        <Combobox.Options>
                          {asuntoOptions.map((item) => (
                            <Combobox.Option value={item} key={item}>
                              {item}
                            </Combobox.Option>
                          ))}
                        </Combobox.Options>
                      </Combobox.Dropdown>
                    </Combobox>

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
                    
                    <Text size="xs" c="dimmed" ta="right">
                      {formData.mensaje.length}/500 caracteres
                    </Text>

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
    </>
  );
}