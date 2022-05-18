module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'ng-mono': ['Space Mono', 'monospace'],
        'ng-text': ['Space Grotesk', 'monospace'],
      },
      colors: {
        'ng-dark': '#171717',
        'ng-yellow': '#FCA311'
      }
    },
  },
  plugins: [],
};
