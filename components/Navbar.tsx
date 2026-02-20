'use client';

import {
  Group,
  Button,
  Text,
  Container,
  Menu,
  Burger,
  Drawer,
  Stack,
  Divider,
  Box,
  ThemeIcon,
  Anchor
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconChevronDown,
  IconShield,
  IconUsers,
  IconFileText,
  IconBrain,
  IconPhone,
  IconHome,
  IconAward,
  IconRocket
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { LoadingLink } from './LoadingLink';
import { getAssetPath } from '../utils/assets';

const navigationItems = [
  {
    label: 'Servicios',
    href: '#',
    submenu: [
      { label: 'Gestión de Multas/Infracciones', href: '/servicios/gestion-multas' },
      { label: 'Asistente Virtual/Chatbot', href: '/servicios/asistente-virtual' },
      { label: 'Gestión de Obras Públicas', href: '/servicios/obras-publicas' },
      { label: 'Gestión de Stock/Inventarios', href: '/servicios/gestion-inventarios' },
      { label: 'Sistema de Turnos', href: '/servicios/sistema-turnos' },
      { label: 'Gestión de Padrones', href: '/servicios/gestion-padrones' }
    ]
  },
  {
    label: 'Implementaciones',
    href: '/implementaciones',
  },
  {
    label: 'IA Gobierno',
    href: '/ia-gobierno',
  },
  {
    label: 'Nosotros',
    href: '/nosotros',
  },
  {
    label: 'Contacto',
    href: '/contacto',
  }
];

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      {/* Main Header */}
      <Box
        component="header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e9ecef',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}
      >
        <Container size="xl">
          <Group h={80} justify="space-between" px="md">
            {/* Logo */}
            <LoadingLink href="/">
              <Group gap={6} style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <Image
                  src={getAssetPath("/img/logo-luna.png")}
                  alt="Logo Luna"
                  width={60}
                  height={60}
                  style={{ objectFit: 'contain', borderRadius: 15, background: '#fff', minWidth: 40, minHeight: 40 }}
                  className="logo-navbar"
                />
                <Box>
                  <Text fw={700} size="xl" c="dark.8" lh={1.2} className="brand-title-navbar responsive-lunai-title">
                    LunAI
                  </Text>
                  <Text size="xs" c="dimmed" lh={1.2} className="subtitle-navbar">
                    <span className="subtitle-full">Soluciones Gubernamentales</span>
                    <span className="subtitle-short">Sol. Gubernamentales</span>
                  </Text>
                </Box>
              </Group>
            </LoadingLink>

            {/* Desktop Navigation */}
            <Group gap={0} visibleFrom="md">
              {navigationItems.map((item) => {
                if (item.submenu) {
                  return (
                    <Menu 
                      key={item.label} 
                      trigger="hover" 
                      openDelay={100} 
                      closeDelay={400}
                      styles={{
                        dropdown: {
                          zIndex: 1001
                        }
                      }}
                    >
                      <Menu.Target>
                        <Button
                          variant="subtle"
                          color="gray"
                          className="responsive-navbar-link"
                          rightSection={<IconChevronDown size={16} />}
                          styles={{
                            root: {
                              fontWeight: 500,
                              color: '#495057'
                            }
                          }}
                        >
                          {item.label}
                        </Button>
                      </Menu.Target>
                      <Menu.Dropdown>
                        {item.submenu.map((subItem) => (
                          <Menu.Item key={subItem.href}>
                            <LoadingLink href={subItem.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>
                              {subItem.label}
                            </LoadingLink>
                          </Menu.Item>
                        ))}
                      </Menu.Dropdown>
                    </Menu>
                  );
                }

                return (
                  <LoadingLink key={item.label} href={item.href}>
                    <Button
                      variant="subtle"
                      color="gray"
                      className="responsive-navbar-link"
                      styles={{
                        root: {
                          fontWeight: 500,
                          color: '#495057'
                        }
                      }}
                    >
                      {item.label}
                    </Button>
                  </LoadingLink>
                );
              })}

              {/* CTA Button */}
              <LoadingLink href="/contacto">
                <Button
                  ml="md"
                  leftSection={<IconRocket size={18} />}
                  className="responsive-navbar-link"
                >
                  Solicitar Demo
                </Button>
              </LoadingLink>
            </Group>

            {/* Mobile Menu Button */}
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              hiddenFrom="md"
              aria-label="Toggle navigation"
            />
          </Group>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        title={
          <Group gap="sm">
            <Image src={getAssetPath("/img/logo-luna.png")} alt="Logo Luna" width={60} height={60} style={{ objectFit: 'contain', borderRadius: 15, background: '#fff' }} />
            <Box>
              <Text fw={700} size="lg" style={{ whiteSpace: 'nowrap' }}>
                LunAI
              </Text>
            </Box>
          </Group>
        }
        padding="md"
        size="sm"
        hiddenFrom="md"
      >
        <Box mb="xs" mt="xs" px="xs">
          <Text size="xs" c="dimmed" lh={1.2} fw={600} style={{ textAlign: 'center' }}>
            Soluciones Gubernamentales
          </Text>
        </Box>
        <Stack gap="xs">
          {navigationItems.map((item) => {
            if (item.submenu) {
              return (
                <Box key={item.label}>
                  <Text fw={600} size="sm" c="blue" mb="xs">
                    {item.label}
                  </Text>
                  <Stack gap="xs" ml="md">
                    {item.submenu.map((subItem) => (
                      <LoadingLink key={subItem.href} href={subItem.href}>
                        <Button
                          variant="subtle"
                          justify="flex-start"
                          fullWidth
                          onClick={close}
                        >
                          {subItem.label}
                        </Button>
                      </LoadingLink>
                    ))}
                  </Stack>
                  <Divider my="sm" />
                </Box>
              );
            }

            return (
              <LoadingLink key={item.label} href={item.href}>
                <Button
                  variant="subtle"
                  justify="flex-start"
                  fullWidth
                  onClick={close}
                >
                  {item.label}
                </Button>
              </LoadingLink>
            );
          })}

          <LoadingLink href="/contacto">
            <Button
              fullWidth
              leftSection={<IconRocket size={18} />}
              mt="md"
              onClick={close}
            >
              Solicitar Demo
            </Button>
          </LoadingLink>
        </Stack>
      </Drawer>
    </>
  );
}