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
  IconBuilding,
  IconShield,
  IconUsers,
  IconFileText,
  IconBrain,
  IconPhone,
  IconHome,
  IconAward,
  IconRocket
} from '@tabler/icons-react';
import Link from 'next/link';
import { LoadingLink } from './LoadingLink';

const navigationItems = [
  {
    label: 'Inicio',
    href: '/',
  },
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
              <Group gap="md" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <ThemeIcon size={50} variant="filled" radius="md">
                  <IconBuilding size={28} />
                </ThemeIcon>
                <Box>
                  <Text fw={700} size="xl" c="dark.8" lh={1.2}>
                    TechGov
                  </Text>
                  <Text size="xs" c="dimmed" lh={1.2}>
                    Soluciones Gubernamentales
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
            <ThemeIcon size={40} variant="filled" radius="md">
              <IconBuilding size={22} />
            </ThemeIcon>
            <Text fw={700} size="lg">
              TechGov
            </Text>
          </Group>
        }
        padding="md"
        size="sm"
        hiddenFrom="md"
      >
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