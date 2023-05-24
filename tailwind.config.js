/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '10': 'repeat(10, minmax(0, 1fr))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        yellow: {
          default: '#FFE600',       // Amarillo normal
          dark: '#CCB200',          // Amarillo oscuro
          light: '#FFEF66',         // Amarillo claro
          lighting: '#FFF9CC',      // Amarillo luminoso
        },
        black: {
          default: '#000000',       // Negro
        },
        gray: {
          default: '#333333',       // Gris oscuro
          dark: '#666666',          // Gris medio
          light: '#999999',         // Gris claro
          lighting: '#EEEEEE'     // Gris luminoso
        },
        white: {
          default: '#FFFFFF',       // Blanco
        },
        blue: {
          default: '#3483FA',       // Azul normal
          dark: '#0F68B4',          // Azul oscuro
          light: '#67A8F9',         // Azul claro
          lighting: '#B4D9FA',      // Azul luminoso
        },
      },
      fontSize: {
        '14px': '14px',
        '16px': '16px',
        '24px': '24px',
        '28px': '28px',
        '32px': '32px',
        '46px': '46px',
      },
      height: {
        '180px': '180px',
      },
      width: {
        '180px': '180px',
      },
      spacing: {
        '16px': '16px',
        '32px': '32px'
      },
    },
  },
  plugins: [require('daisyui')],
}
