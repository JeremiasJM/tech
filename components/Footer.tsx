'use client';

import {
  Container,
  Group,
  Text,
  Grid,
  Stack,
  Anchor,
  Divider,
  Avatar,
  Box,
  ActionIcon,
  Badge,
  Paper,
  UnstyledButton
} from '@mantine/core';
import {
  IconBuilding,
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandFacebook,
  IconWorld,
  IconFileText,
  IconShield,
  IconBrain,
  IconUsers,
  IconAward,
  IconChevronRight,
  IconClock,
  IconCertificate,
  IconArrowUp,
  IconExternalLink
} from '@tabler/icons-react';
import Link from 'next/link';
import { LoadingLink } from './LoadingLink';

const footerLinks = {
  servicios: [
    { label: 'Sistema de Turnos', href: '/servicios/sistema-turnos', icon: IconClock },
    { label: 'Gestión de Inventarios', href: '/servicios/gestion-inventarios', icon: IconFileText },
    { label: 'Gestión de Multas', href: '/servicios/gestion-multas', icon: IconShield },
    { label: 'Gestión de Padrones', href: '/servicios/gestion-padrones', icon: IconUsers },
    { label: 'Obras Públicas', href: '/servicios/obras-publicas', icon: IconBuilding },
    { label: 'Asistente Virtual', href: '/servicios/asistente-virtual', icon: IconBrain }
  ],
  company: [
    { label: 'Nosotros', href: '/nosotros', icon: IconUsers },
    { label: 'Implementaciones', href: '/implementaciones', icon: IconAward },
    { label: 'Contacto', href: '/contacto', icon: IconMail }
  ],
  legal: [
    { label: 'Política de Privacidad', href: '/privacidad' },
    { label: 'Términos de Servicio', href: '/terminos' },
    { label: 'Política de Cookies', href: '/cookies' },
    { label: 'Normativas', href: '/normativas' }
  ]
};

const socialLinks = [
  { icon: IconBrandLinkedin, href: '#', label: 'LinkedIn', color: '#0077B5' },
  { icon: IconBrandTwitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
  { icon: IconBrandFacebook, href: '#', label: 'Facebook', color: '#4267B2' },
  { icon: IconWorld, href: '#', label: 'Sitio Web', color: '#74c0fc' }
];

const certifications = [
  { name: 'ISO 27001', icon: IconShield, description: 'Seguridad de la Información' },
  { name: 'CMMI Nivel 3', icon: IconAward, description: 'Madurez en Desarrollo' },
  { name: 'ISO 9001', icon: IconCertificate, description: 'Gestión de Calidad' }
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export function Footer() {
  return (
    <Box
      style={{
        background: 'linear-gradient(135deg, #0f1419 0%, #1a1a1a 50%, #2d3748 100%)',
        color: 'white',
        marginTop: 'auto',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(116, 192, 252, 0.08) 0%, transparent 50%)
          `,
          zIndex: 1
        }}
      />

      <Container size="xl" py="md" style={{ position: 'relative', zIndex: 2 }}>
        <Grid gutter="md" >
          {/* Company Info */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="sm">
              <Group gap="sm">
                <Paper
                  p="sm"
                  style={{
                    background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                    borderRadius: '12px'
                  }}
                >
                  <IconBuilding size={32} color="white" />
                </Paper>
                <Box>
                  <Text fw={700} size="xl" c="white" style={{ lineHeight: 1.2 }}>
                    TechGov
                  </Text>
                  <Text size="sm" c="blue.3" fw={500}>
                    Soluciones Tecnológicas Gubernamentales
                  </Text>
                </Box>
              </Group>
              
              <Text c="gray.4" size="sm" lh={1.6}>
                Transformamos la gestión pública mediante tecnología innovadora. 
                Más de <Badge variant="light" color="blue" size="xs">10 años</Badge> especializados 
                en digitalización del sector gubernamental argentino.
              </Text>

              {/* Contact Info */}
              <Stack gap="sm">
                <Paper p="sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <Stack gap="xs">
                    <Group gap="xs">
                      <IconMail size={16} color="#74c0fc" />
                      <Text size="sm" c="gray.3">contacto@techgov.com.ar</Text>
                    </Group>
                    <Group gap="xs">
                      <IconPhone size={16} color="#74c0fc" />
                      <Text size="sm" c="gray.3">+54 11 4567-8900</Text>
                    </Group>
                    <Group gap="xs">
                      <IconMapPin size={16} color="#74c0fc" />
                      <Text size="sm" c="gray.3">Tucumán, Argentina</Text>
                    </Group>
                  </Stack>
                </Paper>
              </Stack>

              {/* Social Media */}
              <Group gap="xs" mt="sm">
                {socialLinks.map((social) => (
                  <UnstyledButton
                    key={social.label}
                    style={{
                      padding: '8px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.2s ease',
                      ':hover': {
                        backgroundColor: social.color + '20',
                        borderColor: social.color + '40',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    <social.icon size={18} color={social.color} />
                  </UnstyledButton>
                ))}
              </Group>
            </Stack>
          </Grid.Col>

          {/* Services Links */}
          <Grid.Col  px={50} span={{ base: 12, sm: 6, md: 4 }}>
            <Stack gap="sm">
              <Group gap="xs">
                <Text fw={600} c="white" size="md">
                  Servicios
                </Text>
                <Badge variant="dot" color="blue" size="xs">
                  {footerLinks.servicios.length}
                </Badge>
              </Group>
              <Stack gap="xs">
                {footerLinks.servicios.map((link) => (
                  <LoadingLink key={link.href} href={link.href}>
                    <UnstyledButton
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 8px',
                        borderRadius: '6px',
                        transition: 'all 0.2s ease',
                        width: '100%',
                        ':hover': {
                          backgroundColor: 'rgba(116, 192, 252, 0.1)',
                          transform: 'translateX(4px)'
                        }
                      }}
                    >
                      <link.icon size={14} color="#74c0fc" />
                      <Text c="gray.4" size="sm" style={{ flex: 1 }}>
                        {link.label}
                      </Text>
                      <IconChevronRight size={12} color="#74c0fc" style={{ opacity: 0.5 }} />
                    </UnstyledButton>
                  </LoadingLink>
                ))}
              </Stack>
            </Stack>
          </Grid.Col>

          {/* Company Links */}
          <Grid.Col px={50} span={{ base: 12, sm: 6, md: 4 }}>
            <Stack gap="sm">
              <Text fw={600} c="white" size="md">
                Empresa
              </Text>
              <Stack gap="xs">
                {footerLinks.company.map((link) => (
                  <LoadingLink key={link.href} href={link.href}>
                    <UnstyledButton
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 8px',
                        borderRadius: '6px',
                        transition: 'all 0.2s ease',
                        width: '100%',
                        ':hover': {
                          backgroundColor: 'rgba(116, 192, 252, 0.1)',
                          transform: 'translateX(4px)'
                        }
                      }}
                    >
                      <link.icon size={14} color="#74c0fc" />
                      <Text c="gray.4" size="sm" style={{ flex: 1 }}>
                        {link.label}
                      </Text>
                      <IconChevronRight size={12} color="#74c0fc" style={{ opacity: 0.5 }} />
                    </UnstyledButton>
                  </LoadingLink>
                ))}
              </Stack>
            </Stack>
          </Grid.Col>

           {/* Certifications  */}
          {/* <Grid.Col span={{ base: 12, md: 1.5 }}>
            <Stack gap="md">
              <Text fw={600} c="white" size="md">
                Certificaciones
              </Text>
              <Stack gap="sm">
                {certifications.map((cert) => (
                  <Paper
                    key={cert.name}
                    p="sm"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      textAlign: 'center',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      ':hover': {
                        backgroundColor: 'rgba(116, 192, 252, 0.1)',
                        borderColor: 'rgba(116, 192, 252, 0.3)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    <Stack gap="xs" align="center">
                      <cert.icon size={24} color="#74c0fc" />
                      <Text size="xs" c="white" fw={600}>
                        {cert.name}
                      </Text>
                      <Text size="xs" c="gray.5" ta="center">
                        {cert.description}
                      </Text>
                    </Stack>
                  </Paper>
                ))}
              </Stack>
            </Stack>
          </Grid.Col> */}
        
        </Grid>

        <Divider 
          my="md" 
          style={{ 
            borderColor: 'rgba(255, 255, 255, 0.15)',
            background: 'linear-gradient(90deg, transparent 0%, rgba(116, 192, 252, 0.3) 50%, transparent 100%)'
          }} 
        />

        <Group justify="space-between" align="center" style={{ flexWrap: 'wrap' }}>
          <Group gap="md" align="center">
            <Text size="sm" c="gray.4">
              © {new Date().getFullYear()} TechGov. Todos los derechos reservados.
            </Text>
            <Badge variant="dot" color="green" size="sm">
              Desarrollado en Argentina 🇦🇷
            </Badge>
          </Group>
          
          <Group gap="md" align="center">
        
            <UnstyledButton
              onClick={scrollToTop}
              style={{
                padding: '8px',
                borderRadius: '50%',
                backgroundColor: 'rgba(116, 192, 252, 0.1)',
                border: '1px solid rgba(116, 192, 252, 0.3)',
                transition: 'all 0.2s ease',
                ':hover': {
                  backgroundColor: 'rgba(116, 192, 252, 0.2)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <IconArrowUp size={16} color="#74c0fc" />
            </UnstyledButton>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}