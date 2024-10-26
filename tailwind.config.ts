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
      },
    },
  },
  plugins: [typography, aspectRatio],
} as Config;
