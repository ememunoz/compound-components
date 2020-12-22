module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#2c7a7b',
          reg: '#319795',
          light: '#38b2ac'
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      gridTemplateColumns: {
        'h-stepper': 'min-content 1fr',
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    cursor: ['responsive', 'disabled'],
    opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'disabled'],
  },
  plugins: [],
}
