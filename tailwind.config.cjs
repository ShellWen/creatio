module.exports = {
  content: [
    './public/*.html',
    './*.html',
    './src/**/*.{html,js,ts,svelte}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sevenseg: ['DSEG7 Classic'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
  experimental: {
    optimizeUniversalDefaults: true,
  },
}
