import { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        pageBackground: "#161414",
        lemonYellow: "#E2AE48",
        potatoYellow: "#E9D7AF",
        carrotOrange: "#CE753B",
      },
      fontFamily: {
        spaceGrotesk: ['"Space Grotesk"', 'sans-serif'],
        jetBrainsMono: ['"JetBrains Mono"', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      blur: {
        '4xl': '200px',
      },
    },
  },
  plugins: [typography, aspectRatio],
} as Config;
