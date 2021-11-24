const themes = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'support-top': `url('/assets/svg/support-top.svg')`,
        'support-bottom': `url('/assets/svg/support-bottom.svg')`,
        'banner-pattern': `url('~assets/svg/home/banner.svg')`,
        'statistic-price-pattern': `url('~assets/svg/home/statistic-price.svg')`,
        'statistic-stake-pattern': `url('~assets/svg/home/statistic-stake.svg')`,
        'statistic-transaction-pattern': `url('~assets/svg/home/statistic-transaction.svg')`,
        'statistic-supply-pattern': `url('~assets/svg/home/statistic-supply.svg')`,
        footer: `url('/assets/svg/footer.svg')`,
        hero: `url('/assets/svg/hero.svg')`,
      },
      boxShadow: {
        'project-card': '0px 2px 16px 4px rgba(33, 47, 96, 0.12)',
      },
      container: {
        padding: '1rem',
      },
      colors: {
        neutral: {
          white: '#FFFFFF',
          lightest: '#F1F6FF',
          lighter: '#CCD2D9',
          grey: '#808EA0',
          normal: '#717591',
          mid: '#213960',
          darker: '#434C88',
          darkest: '#050C72',
        },
        primary: {
          DEFAULT: '#2C3ACF',
          background: '#E9EBFA',
          darker: '#27319B',
        },
        accent: {
          green: '#00B159',
          yellow: '#FBAF1D',
          red: '#EB5757',
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
      height: {
        '(screen-108)': `calc(100vh - ${88 / 16}rem)`,
        '(screen-92)': `calc(100vh - ${72 / 16}rem)`,
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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-large-title': {
          fontSize: '3.5rem',
          lineHeight: '3rem',
        },
        '.text-medium-title': {
          fontSize: '3rem',
          lineHeight: '3rem',
        },
        '.text-title-1': {
          fontSize: '2.25rem',
          lineHeight: '2.5rem',
        },
        '.text-title-2': {
          fontSize: '1.875rem',
          lineHeight: '2rem',
        },
        '.text-heading-1': {
          fontSize: '1.5rem',
          lineHeight: '1.875rem',
        },
        '.text-heading-2': {
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
        },
        '.text-body-1': {
          fontSize: '1rem',
          lineHeight: '1.375rem',
        },
        '.text-body-2': {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
        '.text-caption': {
          fontSize: '0.75rem',
          lineHeight: '1.125rem',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
