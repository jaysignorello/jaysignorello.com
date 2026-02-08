/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_pages/**/*.md',
    './_posts/**/*.md',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        beige:  { DEFAULT: '#F6F5F1', dark: '#EFEDE5' },
        brown:  { DEFAULT: '#3E3028', light: '#7A6D63' },
        accent: { DEFAULT: '#2691E6', dark: '#1F7DC8' },
        border: '#DDD7CC',
        card:   '#FDFCF9',
      },
      fontFamily: {
        serif: ['Libre Baskerville', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        handwritten: ['Ms Madi', 'cursive'],
      },
      maxWidth: {
        prose: '768px',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#3E3028',
            '--tw-prose-headings': '#3E3028',
            '--tw-prose-links': '#3D5A6B',
            '--tw-prose-bold': '#3E3028',
            '--tw-prose-counters': '#7A6D63',
            '--tw-prose-bullets': '#7A6D63',
            '--tw-prose-hr': '#DDD7CC',
            '--tw-prose-quotes': '#3E3028',
            '--tw-prose-quote-borders': '#DDD7CC',
            '--tw-prose-code': '#3E3028',
            '--tw-prose-pre-bg': '#EDE8DC',
            '--tw-prose-pre-code': '#3E3028',
            '--tw-prose-th-borders': '#DDD7CC',
            '--tw-prose-td-borders': '#DDD7CC',
            maxWidth: 'none',
            a: {
              textDecoration: 'underline',
              textDecorationColor: '#5B7B8F',
              textUnderlineOffset: '3px',
              '&:hover': {
                color: '#3D5A6B',
              },
            },
            h1: { fontFamily: 'Libre Baskerville, Georgia, serif' },
            h2: { fontFamily: 'Libre Baskerville, Georgia, serif' },
            h3: { fontFamily: 'Libre Baskerville, Georgia, serif' },
            h4: { fontFamily: 'Libre Baskerville, Georgia, serif' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
