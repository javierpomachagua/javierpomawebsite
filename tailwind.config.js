/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  mode: 'jit',
  theme: {
    borderWidth: {
      default: '1px',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px'
    },
    extend: {
      colors: {
        'blue-jp': '#282fb3',
        'blue-100-jp': '#3f47d4',
        'black-jp': '#222A41',
        'gray-jp': '#6D7783',
        'gray-100-jp': '#D8D8D8',
        'gray-200-jp': '#AEB7C1',
        laravel: '#FF2D20',
        vue: '#41B883',
        flutter: '#1389FD',
        react: '#20232A'
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem'
      },
      fontSize: {
        'jp-xl': '3.7rem'
      }
    }
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      transitionProperty: ['hover', 'focus']
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  purge: [
    '~/components/**/*.{vue,js}',
    '~/layouts/**/*.vue',
    '~/pages/**/*.vue',
    '~/plugins/**/*.{js,ts}',
    '~/nuxt.config.{js,ts}'
  ]
}
