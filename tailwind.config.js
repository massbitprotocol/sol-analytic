import themes from 'tailwindcss/defaultTheme';

export default {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        menu: 'inset 0px -2px 0 #42BED2',
      },
      colors: {},
      backgroundColor: {},
      backgroundImage: {},
      backgroundSize: {
        full: '100% 100%',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
      },
      fontFamily: {
        sans: [...themes.fontFamily.sans],
        robot: ['Pirulen', 'sans-serif'],
      },
      fontSize: {
        xxs: [`${10 / 16}rem`, `${10 / 16}rem`], // Caption 2
        xs: [`${12 / 16}rem`, `${12 / 16}rem`], // Caption 1
        sm: [`${14 / 16}rem`, `${14 / 16}rem`], // Body Text 2
        base: [`${16 / 16}rem`, `${16 / 16}rem`], // Body Text 1
        lg: [`${18 / 16}rem`, `${19 / 16}rem`], // Heading 3
        xl: [`${20 / 16}rem`, `${21 / 16}rem`], // Heading 2
        '2xl': [`${24 / 16}rem`, `${25 / 16}rem`], // Heading 1
        '3xl': [`${30 / 16}rem`, `${31 / 16}rem`], // Title 2
        '4xl': [`${36 / 16}rem`, `${37 / 16}rem`], // Title 1
        '5xl': [`${48 / 16}rem`, `${50 / 16}rem`], // Large Title
      },
      height: {
        '(screen-60)': `calc(100vh - ${60 / 16}rem)`,
        '(screen-138)': `calc(100vh - ${138 / 16}rem)`,
      },
      screens: {
        '3xl': '1900px',
      },
      spacing: {
        0.75: `${3 / 16}rem`,
        1.25: `${5 / 16}rem`,
        1.75: `${7 / 16}rem`,
        2.25: `${9 / 16}rem`,
        2.75: `${11 / 16}rem`,
        3.25: `${13 / 16}rem`,
        3.75: `${15 / 16}rem`,
        4.25: `${17 / 16}rem`,
        4.5: `${18 / 16}rem`,
        4.75: `${19 / 16}rem`,
        5.25: `${21 / 16}rem`,
        5.5: `${22 / 16}rem`,
        5.75: `${23 / 16}rem`,
        6.25: `${25 / 16}rem`,
        6.5: `${26 / 16}rem`,
        6.75: `${27 / 16}rem`,
        7.5: `${30 / 16}rem`,
        8.25: `${33 / 16}rem`,
        8.75: `${35 / 16}rem`,
        10.5: `${42 / 16}rem`,
        11.25: `${45 / 16}rem`,
        11.5: `${46 / 16}rem`,
        13: `${52 / 16}rem`,
        13.5: `${54 / 16}rem`,
        13.25: `${53 / 16}rem`,
        14.5: `${58 / 16}rem`,
        15: `${60 / 16}rem`,
        16.25: `${65 / 16}rem`,
        19.75: `${79 / 16}rem`,
        22: `${88 / 16}rem`,
        24.5: `${98 / 16}rem`,
        25: `${100 / 16}rem`,
        26: `${104 / 16}rem`,
      },
      width: {
        sidebar: `${345 / 16}rem`,
        navbar: `${300 / 16}rem`,
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
      },
    },
  },
  variants: {
    extend: {},
  },
};
