import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const colorsPaletteMap: Record<string, string> = {}
for (const color of ['primary', 'gray', 'green', 'red', 'warning']) {
  Array.from({ length: 10 }, (_, n) => n + 1).forEach((num) => {
    const key = `${color}-${num}`
    colorsPaletteMap[key] = `hsl(var(--${key}))`
  })
}

export default defineConfig({
  theme: {
    ringWidth: {
      DEFAULT: '3px',
    },
    fontSize: {
      'h-1': '56px',
      'h-2': ['48px', '56px'],
      'h-3': ['40px', '48px'],
      'h-4': ['32px', '40px'],

      'body-1': ['20px', '28px'],
      'body-2': ['18px', '24px'],
      'body-3': ['16px', '20px'],
      'body-4': ['14px', '20px'],

      'button-1': ['14px', '20px'],
      'button-2': ['12px', '16px'],
    },
    colors: {
      'primary': 'hsl(var(--primary))',
      'primary-inverse': 'hsl(var(--primary-inverse))',
      'primary-hover': 'hsl(var(--primary-hover))',
      'primary-active-color': 'hsl(var(--primary-active-color))',

      'primary-highlight': 'hsl(var(--primary)/var(--primary-highlight-opacity))',
      'primary-highlight-inverse': 'hsl(var(--primary-highlight-inverse))',
      'primary-highlight-hover': 'hsl(var(--primary)/var(--primary-highlight-hover-opacity))',

      'primary-50': 'hsl(var(--primary-50))',
      'primary-100': 'hsl(var(--primary-100))',
      'primary-200': 'hsl(var(--primary-200))',
      'primary-300': 'hsl(var(--primary-300))',
      'primary-400': 'hsl(var(--primary-400))',
      'primary-500': 'hsl(var(--primary-500))',
      'primary-600': 'hsl(var(--primary-600))',
      'primary-700': 'hsl(var(--primary-700))',
      'primary-800': 'hsl(var(--primary-800))',
      'primary-900': 'hsl(var(--primary-900))',
      'primary-950': 'hsl(var(--primary-950))',

      'surface-0': 'hsl(var(--surface-0))',
      'surface-50': 'hsl(var(--surface-50))',
      'surface-100': 'hsl(var(--surface-100))',
      'surface-200': 'hsl(var(--surface-200))',
      'surface-300': 'hsl(var(--surface-300))',
      'surface-400': 'hsl(var(--surface-400))',
      'surface-500': 'hsl(var(--surface-500))',
      'surface-600': 'hsl(var(--surface-600))',
      'surface-700': 'hsl(var(--surface-700))',
      'surface-800': 'hsl(var(--surface-800))',
      'surface-900': 'hsl(var(--surface-900))',
      'surface-950': 'hsl(var(--surface-950))',

      ...colorsPaletteMap,
      'primary-bg': 'hsl(var(--primary-bg))',
      'primary-bg-i': 'hsl(var(--primary-bg-i))',
      'mono': 'hsl(var(--mono))',
      'mono-i': 'hsl(var(--mono-i))',
      'mono-bg': 'hsl(var(--mono-bg))',
    },
  },
  safelist: [
    'i-tabler:moon',
    'i-tabler:sun',
  ],
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  rules: [
    // Declaring css variable with Uno :) -- $SOME_COLOR-[#00a000]
    [/^\$(.+?)\-\[(.+)\]$/, ([, name, value]) => ({
      [`--${name}`]: value,
    })],
    // Re-declare to fix priority issue with some primevue components
    ['rounded-none', { 'border-radius': '0px' }],
    // bg dimming
    [/^bg-dim-(\d+)$/, ([, v]) => ({
      'background-image': `linear-gradient(rgba(0, 0, 0, ${+v / 100}), rgba(0, 0, 0, ${+v / 100}))`,
    })],
    // bg lighten
    [/^bg-lighten-(\d+)$/, ([, v]) => ({
      'background-image': `linear-gradient(rgba(255, 255, 255, ${+v / 100}), rgba(255, 255, 255, ${+v / 100}))`,
    })],
  ],
  variants: [
    {
      // nth-[]:class
      name: ':nth-child()',
      match: (matcher) => {
        const match = matcher.match(/^nth-\[(.+?)\]:/)
        if (!match)
          return matcher
        return {
          // slice `hover:` prefix and passed to the next variants and rules
          matcher: matcher.substring(match[0].length),
          selector: s => `${s}:nth-child(${match[1]})`,
        }
      },
      multiPass: true,
    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Raleway',
        mono: 'Chivo Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup({ separators: [':'] }),
  ],
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        'assets/vendor/primevue/presets/**',
      ],
    },
  },
})
