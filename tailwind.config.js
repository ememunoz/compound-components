module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: 'hsl(73, 37%, 51%)',
          reg: 'hsl(73, 70%, 61%)',
          light: 'hsl(73, 80%, 61%)',
        },
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      gridTemplateColumns: {
        'h-stepper': 'min-content 1fr',
        'h-code-edit': '2fr 1fr',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    cursor: ['responsive', 'disabled'],
    opacity: [
      'responsive',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
      'disabled',
    ],
    outline: ['responsive', 'focus-within', 'focus', 'active'],
  },
  plugins: [],
}
