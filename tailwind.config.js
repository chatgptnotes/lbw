/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  safelist: [
    // Dynamic color classes for brain, wellness, calm variants
    'bg-brain-50', 'bg-brain-100', 'bg-brain-200', 'bg-brain-500', 'bg-brain-600', 'bg-brain-700',
    'bg-wellness-50', 'bg-wellness-100', 'bg-wellness-200', 'bg-wellness-500', 'bg-wellness-600', 'bg-wellness-700',
    'bg-calm-50', 'bg-calm-100', 'bg-calm-200', 'bg-calm-500', 'bg-calm-600', 'bg-calm-700',
    'text-brain-50', 'text-brain-100', 'text-brain-200', 'text-brain-500', 'text-brain-600', 'text-brain-700', 'text-brain-800', 'text-brain-900',
    'text-wellness-50', 'text-wellness-100', 'text-wellness-200', 'text-wellness-500', 'text-wellness-600', 'text-wellness-700', 'text-wellness-800', 'text-wellness-900',
    'text-calm-50', 'text-calm-100', 'text-calm-200', 'text-calm-500', 'text-calm-600', 'text-calm-700', 'text-calm-800', 'text-calm-900',
    'border-brain-100', 'border-brain-200', 'border-brain-300', 'border-brain-500',
    'border-wellness-100', 'border-wellness-200', 'border-wellness-300', 'border-wellness-500',
    'border-calm-100', 'border-calm-200', 'border-calm-300', 'border-calm-500',
    'hover:bg-brain-700', 'hover:bg-wellness-700', 'hover:bg-calm-700',
    'from-brain-500', 'from-brain-600', 'from-brain-700',
    'to-wellness-500', 'to-wellness-600', 'to-wellness-700',
    'ring-brain-200', 'ring-brain-500', 'ring-wellness-200', 'ring-wellness-500', 'ring-calm-200', 'ring-calm-500',
    // Difficulty badges
    'bg-green-100', 'text-green-700', 'bg-yellow-100', 'text-yellow-700', 'bg-red-100', 'text-red-700'
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // LBW Brain Wellness Brand Colors
        brain: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        wellness: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        calm: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(100%)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(100%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "slide-up": "slide-up 0.4s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}