'use client';

import {
  Container,
  Title,
  Text,
  Button,
  Stack,
  Box,
  Paper,
  Group,
  ThemeIcon
} from '@mantine/core';
import {
  IconError404,
  IconHome,
  IconSearch,
  IconArrowLeft
} from '@tabler/icons-react';
import { LoadingLink } from '../components/LoadingLink';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function NotFound() {
  return (
    <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <Box style={{ 
        flex: 1,
        background: 'linear-gradient(135deg, #f8fafe 0%, #e3f2fd 100%)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '40px',
        paddingBottom: '40px'
      }}>
        <Container size="md">
          <Paper 
            radius="2rem" 
            style={{ 
              padding: '3rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafe 100%)',
              border: '3px solid #e3f2fd',
              boxShadow: '0 20px 60px rgba(30,64,175,0.1)',
              textAlign: 'center'
            }}
          >
            <Stack gap="xl" align="center">
              {/* Error Icon */}
              <ThemeIcon 
                size={120} 
                radius="50%" 
                style={{
                  background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                  boxShadow: '0 15px 40px rgba(220,38,38,0.3)'
                }}
              >
                <IconError404 size={60} color="white" />
              </ThemeIcon>

              {/* Content */}
              <Stack gap="md" align="center">
                <Title 
                  order={1} 
                  size="3rem" 
                  fw={700} 
                  c="gray.8"
                >
                  ¡Ups! Página no encontrada
                </Title>
                
                <Text size="lg" c="gray.6" lh={1.6} maw={500}>
                  La página que buscas no existe o está en desarrollo. 
                  Te invitamos a explorar nuestras otras secciones disponibles.
                </Text>
              </Stack>

              {/* Action Buttons */}
              <Group gap="md" mt="xl">
                <LoadingLink href="/">
                  <Button
                    size="lg"
                    leftSection={<IconHome size={20} />}
                    style={{
                      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)'
                    }}
                  >
                    Ir al Inicio
                  </Button>
                </LoadingLink>
                
                <LoadingLink href="/servicios">
                  <Button
                    size="lg"
                    leftSection={<IconSearch size={20} />}
                    variant="light"
                    color="blue"
                  >
                    Ver Servicios
                  </Button>
                </LoadingLink>
                
                <Button
                  size="lg"
                  leftSection={<IconArrowLeft size={20} />}
                  variant="outline"
                  color="gray"
                  onClick={() => window.history.back()}
                >
                  Volver Atrás
                </Button>
              </Group>

              {/* Help Text */}
              <Box mt="xl">
                <Text size="sm" c="dimmed">
                  Si crees que esto es un error, por favor{' '}
                  <LoadingLink href="/contacto">
                    <Text span c="blue.6" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                      contáctanos
                    </Text>
                  </LoadingLink>
                  {' '}y te ayudaremos.
                </Text>
              </Box>
            </Stack>
          </Paper>
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
}