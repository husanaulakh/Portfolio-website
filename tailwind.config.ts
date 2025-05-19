
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"], // Keep this for potential future use or if some components rely on it
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      fontFamily: {
        sans: ['var(--font-inter)'], // Changed from --font-geist-sans
        // mono: ['var(--font-geist-mono)'], // Geist Mono is not currently used in layout.tsx
        serif: ['var(--font-playfair-display)'],
      },
  		colors: {
        'earth-bg': '#F5F0E1',
        'earth-text': '#3E3A39',
        'earth-primary': '#C98474',
        'earth-secondary': '#6A8E7F',
        'earth-card': '#FFFDF8',

  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: { // These might need adjustment based on new theme if charts are used extensively
  				'1': 'hsl(var(--primary))', // Terracotta
  				'2': 'hsl(var(--secondary))', // Sage
  				'3': 'hsl(var(--accent) / 0.7)', // Lighter Terracotta
  				'4': 'hsl(var(--primary) / 0.5)', // Even Lighter Terracotta
  				'5': 'hsl(var(--secondary) / 0.5)' // Lighter Sage
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      boxShadow: { // Adding subtle earth-tone shadows
        'sm': '0 1px 2px 0 hsla(13, 20%, 30%, 0.07)', // Subtle terracotta/brown shadow
        'DEFAULT': '0 1px 3px 0 hsla(13, 20%, 30%, 0.1), 0 1px 2px -1px hsla(13, 20%, 30%, 0.1)',
        'md': '0 4px 6px -1px hsla(13, 20%, 30%, 0.1), 0 2px 4px -2px hsla(13, 20%, 30%, 0.1)',
        'lg': '0 10px 15px -3px hsla(13, 20%, 30%, 0.1), 0 4px 6px -4px hsla(13, 20%, 30%, 0.1)',
        'xl': '0 20px 25px -5px hsla(13, 20%, 30%, 0.1), 0 8px 10px -6px hsla(13, 20%, 30%, 0.1)',
        '2xl': '0 25px 50px -12px hsla(13, 20%, 30%, 0.2)',
        'inner': 'inset 0 2px 4px 0 hsla(13, 20%, 30%, 0.05)',
      },
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
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
