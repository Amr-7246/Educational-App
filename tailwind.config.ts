import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", "class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sketch: ['"Cabin Sketch"', 'cursive'],
        hindMysuru: [
          'Hind Mysuru',
          'sans-serif'
        ],
        orbitron: [
          'Orbitron',
          'sans-serif'
        ],
        yujiMai: [
          'Yuji Mai',
          'serif'
        ],
        poppins: [
          'Poppins',
          'sans-serif'
        ]
      },
      colors: {
        // shadcn/ui compatibility colors (mapped to your system)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          hover: 'rgb(var(--color-primary-hover) / <alpha-value>)',
          light: 'rgb(var(--color-primary-light) / <alpha-value>)',
          lighter: 'rgb(var(--color-primary-lighter) / <alpha-value>)'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          hover: 'rgb(var(--color-secondary-hover) / <alpha-value>)',
          light: 'rgb(var(--color-secondary-light) / <alpha-value>)',
          lighter: 'rgb(var(--color-secondary-lighter) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          hover: 'rgb(var(--color-accent-hover) / <alpha-value>)',
          light: 'rgb(var(--color-accent-light) / <alpha-value>)'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
          light: 'rgb(var(--color-error-light) / <alpha-value>)'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
          hover: 'rgb(var(--color-card-hover) / <alpha-value>)'
        },

        // Your custom color system
        'color-primary': 'rgb(var(--color-primary) / <alpha-value>)',
        'color-primary-foreground': 'rgb(var(--color-primary-foreground) / <alpha-value>)',
        'color-primary-hover': 'rgb(var(--color-primary-hover) / <alpha-value>)',
        'color-primary-light': 'rgb(var(--color-primary-light) / <alpha-value>)',
        'color-primary-lighter': 'rgb(var(--color-primary-lighter) / <alpha-value>)',
        
        'color-secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
        'color-secondary-foreground': 'rgb(var(--color-secondary-foreground) / <alpha-value>)',
        'color-secondary-hover': 'rgb(var(--color-secondary-hover) / <alpha-value>)',
        'color-secondary-light': 'rgb(var(--color-secondary-light) / <alpha-value>)',
        'color-secondary-lighter': 'rgb(var(--color-secondary-lighter) / <alpha-value>)',
        
        'color-accent': 'rgb(var(--color-accent) / <alpha-value>)',
        'color-accent-foreground': 'rgb(var(--color-accent-foreground) / <alpha-value>)',
        'color-accent-hover': 'rgb(var(--color-accent-hover) / <alpha-value>)',
        'color-accent-light': 'rgb(var(--color-accent-light) / <alpha-value>)',
        
        'color-background': 'rgb(var(--color-background) / <alpha-value>)',
        'color-background-secondary': 'rgb(var(--color-background-secondary) / <alpha-value>)',
        'color-background-tertiary': 'rgb(var(--color-background-tertiary) / <alpha-value>)',
        
        'color-foreground': 'rgb(var(--color-foreground) / <alpha-value>)',
        'color-foreground-secondary': 'rgb(var(--color-foreground-secondary) / <alpha-value>)',
        'color-foreground-muted': 'rgb(var(--color-foreground-muted) / <alpha-value>)',
        'color-foreground-subtle': 'rgb(var(--color-foreground-subtle) / <alpha-value>)',
        
        'color-border': 'rgb(var(--color-border) / <alpha-value>)',
        'color-border-secondary': 'rgb(var(--color-border-secondary) / <alpha-value>)',
        
        'color-input': 'rgb(var(--color-input) / <alpha-value>)',
        'color-input-border': 'rgb(var(--color-input-border) / <alpha-value>)',
        'color-input-focus': 'rgb(var(--color-input-focus) / <alpha-value>)',
        
        'color-card': 'rgb(var(--color-card) / <alpha-value>)',
        'color-card-hover': 'rgb(var(--color-card-hover) / <alpha-value>)',

        success: {
          DEFAULT: 'rgb(var(--color-success) / <alpha-value>)',
          foreground: 'rgb(var(--color-success-foreground) / <alpha-value>)',
          light: 'rgb(var(--color-success-light) / <alpha-value>)'
        },
        warning: {
          DEFAULT: 'rgb(var(--color-warning) / <alpha-value>)',
          foreground: 'rgb(var(--color-warning-foreground) / <alpha-value>)',
          light: 'rgb(var(--color-warning-light) / <alpha-value>)'
        },
        error: {
          DEFAULT: 'rgb(var(--color-error) / <alpha-value>)',
          foreground: 'rgb(var(--color-error-foreground) / <alpha-value>)',
          light: 'rgb(var(--color-error-light) / <alpha-value>)'
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      // borderRadius: {
      //   lg: 'var(--radius)',
      //   md: 'calc(var(--radius) - 2px)',
      //   sm: 'calc(var(--radius) - 4px)'
      // },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(135deg, var(--tw-gradient-stops))'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [
    require("tailwind-scrollbar-hide"),
    require('@tailwindcss/aspect-ratio'), 
    require("tailwind-scrollbar"), 
    require("tailwindcss-animate")
  ],
} satisfies Config;