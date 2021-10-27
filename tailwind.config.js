const themes = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {},
      boxShadow: {},
      container: {
        padding: '1rem',
      },
      colors: {
        primary: {
          DEFAULT: '#2196F3',
        },
      },
      fontFamily: {
        sans: ['Airbnb Cereal App', ...themes.fontFamily.sans],
      },
      fontSize: {
        '4xl': ['3.5rem', '3rem'], // 'large-title'
        '3xl': ['2.25rem', '2.5rem'], // 'title-1'
        '2xl': ['1.875rem', '2rem'], // 'title-2'
        xl: ['1.5rem', '1.875rem'], // 'heading-1'
        lg: ['1.25rem', '1.75rem'], // 'heading-2'
        base: ['1rem', '1.375rem'], // 'body-text-1'
        sm: ['0.875rem', '1.25rem'], // 'body-text-2'
        xs: ['0.75rem', '1.125rem'], // 'caption'
      },
      lineHeight: {
        15.5: '3.875rem',
      },
      spacing: {
        7.5: '1.875rem',
        4.5: '1.125rem',
        15: '3.75rem',
        22.5: '5.625rem',
        30: '7.5rem',
        175: '43.75rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
