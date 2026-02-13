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
  ThemeIcon,
  Badge,
  Divider
} from '@mantine/core';
import {
  IconTools,
  IconArrowLeft,
  IconClock,
  IconRocket,
  IconMail
} from '@tabler/icons-react';
import { LoadingLink } from './LoadingLink';

interface MaintenancePageProps {
  title?: string;
  description?: string;
  estimatedTime?: string;
  features?: string[];
  contactEnabled?: boolean;
}

export function MaintenancePage({ 
  title = "Página en Desarrollo",
  description = "Estamos trabajando en esta sección para ofrecerte la mejor experiencia.",
  estimatedTime = "Próximamente",
  features = [],
  contactEnabled = true
}: MaintenancePageProps) {
  return (
    <Box style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f8fafe 0%, #e3f2fd 100%)',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      paddingBottom: '80px'
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
            {/* Icon */}
            <ThemeIcon 
              size={120} 
              radius="50%" 
              style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                boxShadow: '0 15px 40px rgba(30,64,175,0.3)'
              }}
            >
              <IconTools size={60} color="white" />
            </ThemeIcon>

            {/* Main Content */}
            <Stack gap="md" align="center">
              <Badge 
                variant="light" 
                color="blue" 
                size="lg"
                leftSection={<IconClock size={16} />}
              >
                {estimatedTime}
              </Badge>
              
              <Title 
                order={1} 
                size="2.5rem" 
                fw={700} 
                style={{
                  background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {title}
              </Title>
              
              <Text size="lg" c="gray.6" lh={1.6} maw={500}>
                {description}
              </Text>
            </Stack>

            {/* Features Preview */}
            {features.length > 0 && (
              <Box w="100%">
                <Divider 
                  label={
                    <Text fw={600} c="gray.7">
                      Próximas Funcionalidades
                    </Text>
                  } 
                  labelPosition="center" 
                  my="xl" 
                />
                <Stack gap="sm">
                  {features.map((feature, index) => (
                    <Group key={index} gap="sm" justify="center">
                      <ThemeIcon size="sm" color="blue" variant="light">
                        <IconRocket size={14} />
                      </ThemeIcon>
                      <Text size="md" c="gray.7">
                        {feature}
                      </Text>
                    </Group>
                  ))}
                </Stack>
              </Box>
            )}

            {/* Action Buttons */}
            <Group gap="md" mt="xl">
              <LoadingLink href="/">
                <Button
                  size="lg"
                  leftSection={<IconArrowLeft size={20} />}
                  variant="light"
                  color="gray"
                >
                  Volver al Inicio
                </Button>
              </LoadingLink>
              
              {contactEnabled && (
                <LoadingLink href="/contacto">
                  <Button
                    size="lg"
                    leftSection={<IconMail size={20} />}
                    style={{
                      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)'
                    }}
                  >
                    Contáctanos
                  </Button>
                </LoadingLink>
              )}
            </Group>

            {/* Additional Info */}
            <Box mt="xl">
              <Text size="sm" c="dimmed">
                ¿Necesitas ayuda inmediata? Contáctanos y te asistiremos personalmente.
              </Text>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}