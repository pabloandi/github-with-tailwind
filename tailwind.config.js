module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  purge: [],
  theme: {
    // extend: {
    //   typography: (theme) => ({
    //     DEFAULT: {
    //       css: {
    //         a: {
    //           color: theme('color.blue.600')
    //         },
    //         img: {
    //           display: 'inline-block'
    //         }
    //       },
    //     },
    //   }),
    // },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
}
