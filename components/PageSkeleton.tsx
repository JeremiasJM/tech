'use client';

import { Box, Container, Skeleton, Stack, Group, Paper } from '@mantine/core';

export function PageSkeleton() {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Header Skeleton */}
      <Box
        style={{
          backgroundColor: 'white',
          borderBottom: '1px solid #e9ecef',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}
      >
        <Container size="xl">
          <Group h={80} justify="space-between" px="md">
            <Group gap="md">
              <Skeleton height={50} width={50} radius="md" />
              <Box>
                <Skeleton height={20} width={80} mb={4} />
                <Skeleton height={12} width={120} />
              </Box>
            </Group>
            <Group gap="sm" visibleFrom="md">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} height={36} width={80} radius="md" />
              ))}
            </Group>
          </Group>
        </Container>
      </Box>

      {/* Hero Section Skeleton */}
      <Box style={{ padding: '60px 0', backgroundColor: '#f1f3f4' }}>
        <Container size="xl">
          <Stack gap="lg" align="center" ta="center">
            <Skeleton height={32} width={200} radius="md" />
            <Skeleton height={60} width={500} radius="md" />
            <Skeleton height={48} width={350} radius="md" />
            <Group gap="md">
              <Skeleton height={42} width={120} radius="md" />
              <Skeleton height={42} width={120} radius="md" />
            </Group>
          </Stack>
        </Container>
      </Box>

      {/* Content Section Skeleton */}
      <Box style={{ padding: '60px 0', backgroundColor: '#f8fafe' }}>
        <Container size="xl">
          <Stack gap="2rem" align="center">
            <Box ta="center" w="100%">
              <Skeleton height={32} width={150} mx="auto" mb="md" radius="md" />
              <Skeleton height={48} width={400} mx="auto" mb="md" radius="md" />
              <Skeleton height={24} width={300} mx="auto" radius="md" />
            </Box>

            {/* Cards Grid Skeleton */}
            <Box w="100%">
              <Group justify="center" gap="lg">
                {[...Array(6)].map((_, i) => (
                  <Paper
                    key={i}
                    radius="1.5rem"
                    style={{
                      width: '300px',
                      height: '200px',
                      padding: '1.5rem',
                      border: '2px solid #e3f2fd'
                    }}
                  >
                    <Stack gap="md">
                      <Skeleton height={60} width={60} radius="12px" />
                      <Skeleton height={24} width="80%" />
                      <Skeleton height={16} width="100%" />
                      <Skeleton height={16} width="90%" />
                    </Stack>
                  </Paper>
                ))}
              </Group>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Footer Skeleton */}
      <Box style={{ backgroundColor: '#1a1a1a', padding: '50px 0' }}>
        <Container size="xl">
          <Group align="flex-start" justify="space-between" gap="xl">
            <Stack gap="md" style={{ flex: 1 }}>
              <Group gap="sm">
                <Skeleton height={48} width={48} radius="12px" />
                <Box>
                  <Skeleton height={24} width={100} mb={4} />
                  <Skeleton height={16} width={200} />
                </Box>
              </Group>
              <Skeleton height={60} width="100%" />
            </Stack>
            
            {[...Array(3)].map((_, i) => (
              <Stack key={i} gap="sm" style={{ flex: 0.5 }}>
                <Skeleton height={20} width={80} />
                {[...Array(4)].map((_, j) => (
                  <Skeleton key={j} height={16} width="90%" />
                ))}
              </Stack>
            ))}
          </Group>
        </Container>
      </Box>
    </Box>
  );
}

export function LoadingOverlay() {
  return (
    <Box
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Stack gap="md" align="center">
        <Box
          style={{
            width: 40,
            height: 40,
            border: '4px solid #e9ecef',
            borderTop: '4px solid #1e40af',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}
        />
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </Stack>
    </Box>
  );
}