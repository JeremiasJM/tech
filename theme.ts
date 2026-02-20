import { createTheme } from '@mantine/core';
 
export const theme = createTheme({
  fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif',
 
  colors: {
    primary: [
      '#e3f2fd', // primario suave
      '#bbdefb',
      '#90caf9',
      '#64b5f6',
      '#42a5f5',
      '#1e88e5', // primario principal
      '#1565c0', // primario hover
      '#0d47a1',
      '#0d3c7a',
      '#0a2f5e',
    ],
    success: [
      '#dcfce7',
      '#bbf7d0',
      '#86efac',
      '#4ade80',
      '#22c55e',
      '#16a34a', // éxito principal
      '#15803d',
      '#166534',
      '#14532d',
      '#052e16',
    ],
    warning: [
      '#ffedd5',
      '#fed7aa',
      '#fdba74',
      '#fb923c',
      '#f97316', // advertencia principal
      '#ea580c',
      '#c2410c',
      '#9a3412',
      '#7c2d12',
      '#431407',
    ],
    error: [
      '#fee2e2',
      '#fecaca',
      '#fca5a5',
      '#f87171',
      '#ef4444',
      '#dc2626', // error principal
      '#b91c1c',
      '#991b1b',
      '#7f1d1d',
      '#450a0a',
    ],
  },
 
  primaryColor: 'primary',
 
  shadows: {
    xs: '0 1px 2px rgba(0,0,0,0.04)',
    sm: '0 1px 2px rgba(0,0,0,0.04)',
    md: '0 8px 24px rgba(0,0,0,0.08)',
    lg: '0 8px 24px rgba(0,0,0,0.08)',
    xl: '0 8px 24px rgba(0,0,0,0.08)',
  },
 
  components: {
    Paper: {
      defaultProps: {
        withBorder: true,
        radius: 10,
        shadow: 'xs',
      },
      styles: {
        root: {
          backgroundColor: '#ffffff',
          borderColor: '#e5e7eb',
        },
      },
    },
   
    Button: {
      defaultProps: {
        radius: 8,
        size: 'sm',
      },
      styles: {
        root: {
          fontWeight: 500,
        },
      },
    },
 
    TextInput: {
      defaultProps: {
        radius: 8,
        size: 'sm',
      },
      styles: {
        input: {
          borderColor: '#e5e7eb',
          '&:focus': {
            borderColor: '#1e88e5',
          },
        },
      },
    },
 
    Select: {
      defaultProps: {
        radius: 8,
        size: 'sm',
      },
      styles: {
        input: {
          borderColor: '#e5e7eb',
          '&:focus': {
            borderColor: '#1e88e5',
          },
        },
      },
    },
 
    Textarea: {
      defaultProps: {
        radius: 8,
        size: 'sm',
      },
      styles: {
        input: {
          borderColor: '#e5e7eb',
          '&:focus': {
            borderColor: '#1e88e5',
          },
        },
      },
    },
 
    AppShell: {
      styles: {
        main: {
          backgroundColor: '#f8fafc',
        },
        navbar: {
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e5e7eb',
        },
        header: {
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
        },
      },
    },
 
    Title: {
      styles: {
        root: {
          color: '#0f172a',
          fontWeight: 600,
        },
      },
    },
 
    Text: {
      styles: {
        root: {
          color: '#0f172a',
        },
      },
    },
  },
});