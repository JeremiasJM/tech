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
  ActionIcon
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
  IconAward
} from '@tabler/icons-react';
import Link from 'next/link';

const footerLinks = {
  servicios: [
    { label: 'Gestión Documental', href: '/servicios/gestion-documental' },
    { label: 'Expedientes Digitales', href: '/servicios/expedientes-digitales' },
    { label: 'Sistema de Turnos', href: '/servicios/sistema-turnos' },
    { label: 'Interoperabilidad', href: '/servicios/interoperabilidad' },
    { label: 'Seguridad', href: '/servicios/seguridad' },
    { label: 'Firma Digital', href: '/servicios/firma-digital' }
  ],
  legal: [
    { label: 'Política de Privacidad', href: '/privacidad' },
    { label: 'Términos de Servicio', href: '/terminos' },
    { label: 'Política de Cookies', href: '/cookies' },
    { label: 'Normativas', href: '/normativas' }
  ]
};

export function Footer() {
  return (
    <Box
      style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        marginTop: 'auto'
      }}
    >
      <Container size="xl" py="xl">
        <Grid gutter="xl">
          {/* Company Info */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="md">
              <Group gap="sm">
                <Avatar
                  size={48}
                  style={{
                    backgroundColor: '#1c7ed6',
                    color: 'white'
                  }}
                >
                  <IconBuilding size={28} />
                </Avatar>
                <Box>
                  <Text fw={700} size="xl" c="white">
                    TechGov
                  </Text>
                  <Text size="sm" c="gray.4">
                    Soluciones Tecnológicas Gubernamentales
                  </Text>
                </Box>
              </Group>
              
              <Text c="gray.5" size="sm" lh={1.6}>
                Tecnología para un Estado más eficiente, transparente y cercano. 
                Especializados en soluciones digitales para organismos gubernamentales 
                con más de una década de experiencia en transformación digital del sector público.
              </Text>

              {/* Contact Info */}
              <Stack gap="xs">
                <Group gap="xs">
                  <IconMail size={16} color="#74c0fc" />
                  <Text size="sm" c="gray.4">contacto@techgov.com.ar</Text>
                </Group>
                <Group gap="xs">
                  <IconPhone size={16} color="#74c0fc" />
                  <Text size="sm" c="gray.4">+54 11 4567-8900</Text>
                </Group>
                <Group gap="xs">
                  <IconMapPin size={16} color="#74c0fc" />
                  <Text size="sm" c="gray.4">Buenos Aires, Argentina</Text>
                </Group>
              </Stack>

              {/* Social Media */}
              <Group gap="xs" mt="md">
                <ActionIcon variant="subtle" color="gray" size="sm">
                  <IconBrandLinkedin size={18} />
                </ActionIcon>
                <ActionIcon variant="subtle" color="gray" size="sm">
                  <IconBrandTwitter size={18} />
                </ActionIcon>
                <ActionIcon variant="subtle" color="gray" size="sm">
                  <IconBrandFacebook size={18} />
                </ActionIcon>
                <ActionIcon variant="subtle" color="gray" size="sm">
                  <IconWorld size={18} />
                </ActionIcon>
              </Group>
            </Stack>
          </Grid.Col>

          {/* Services Links */}
          <Grid.Col span={{ base: 12, sm: 6, md: 2.5 }}>
            <Stack gap="md">
              <Text fw={600} c="white" size="md">
                Servicios
              </Text>
              <Stack gap="xs">
                {footerLinks.servicios.map((link) => (
                  <Anchor
                    key={link.href}
                    component={Link}
                    href={link.href}
                    c="gray.5"
                    size="sm"
                    style={{
                      textDecoration: 'none',
                      '&:hover': {
                        color: '#74c0fc'
                      }
                    }}
                  >
                    {link.label}
                  </Anchor>
                ))}
              </Stack>
            </Stack>
          </Grid.Col>

         

          {/* Legal Links */}
          <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
            <Stack gap="md">
              <Text fw={600} c="#1e40af" size="md">
                Legal
              </Text>
              <Stack gap="xs">
                {footerLinks.legal.map((link) => (
                  <Anchor
                    key={link.href}
                    component={Link}
                    href={link.href}
                    c="gray.5"
                    size="sm"
                    style={{
                      textDecoration: 'none',
                      '&:hover': {
                        color: '#74c0fc'
                      }
                    }}
                  >
                    {link.label}
                  </Anchor>
                ))}
              </Stack>
            </Stack>
          </Grid.Col>

          {/* Certifications & Awards */}
          <Grid.Col span={{ base: 12, md: 1 }}>
            <Stack gap="md">
              <Text fw={600} c="#1e40af" size="md">
                Certificaciones
              </Text>
              <Stack gap="sm" align="center">
                <Box
                  style={{
                    padding: '8px',
                    backgroundColor: '#2a2a2a',
                    borderRadius: '4px',
                    border: '1px solid #404040'
                  }}
                >
                  <IconShield size={24} color="#74c0fc" />
                </Box>
                <Text size="xs" c="gray.6" ta="center">ISO 27001</Text>
                
                <Box
                  style={{
                    padding: '8px',
                    backgroundColor: '#2a2a2a',
                    borderRadius: '4px',
                    border: '1px solid #404040'
                  }}
                >
                  <IconAward size={24} color="#74c0fc" />
                </Box>
                <Text size="xs" c="gray.6" ta="center">CMMI Nivel 3</Text>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider my="xl" color="gray.8" />

        <Group justify="space-between" align="center">
          <Text size="xs" c="dimmed">
            © {new Date().getFullYear()} TechGov. Todos los derechos reservados.
          </Text>
          <Group gap="md">
            <Text size="xs" c="dimmed">
              Desarrollado en Argentina 🇦🇷
            </Text>
            <Text size="xs" c="dimmed">
              Cumple con normativas gubernamentales
            </Text>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}