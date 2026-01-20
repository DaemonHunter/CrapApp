export const COLORS = {
  // Dark casino backgrounds
  background: '#0D1117',
  backgroundSecondary: '#161B22',
  backgroundCard: '#1C2128',

  // Casino felt green
  feltGreen: '#1B4D3E',
  feltGreenLight: '#2D6A4F',

  // Gold accents
  gold: '#D4AF37',
  goldLight: '#F4D03F',
  goldDark: '#B8860B',

  // Status colors
  success: '#2ECC71',
  successDark: '#27AE60',
  danger: '#E74C3C',
  dangerDark: '#C0392B',

  // Text
  text: '#E6EDF3',
  textSecondary: '#8B949E',
  textMuted: '#6E7681',

  // Utility
  white: '#FFFFFF',
  border: '#30363D',
  disabled: '#484F58',

  // Legacy compatibility
  primary: '#D4AF37',
  gray: '#6E7681',
  green: '#2ECC71',
  red: '#E74C3C',
} as const;

export const SHADOWS = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  button: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  glow: {
    shadowColor: '#D4AF37',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
} as const;

export const GRADIENTS = {
  goldButton: ['#D4AF37', '#B8860B'] as const,
  greenButton: ['#2ECC71', '#27AE60'] as const,
  redButton: ['#E74C3C', '#C0392B'] as const,
  card: ['#1C2128', '#161B22'] as const,
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 30,
} as const;

export const TYPOGRAPHY = {
  heading: {
    fontFamily: 'Oswald_700Bold',
    fontSize: 32,
    letterSpacing: 1,
  },
  label: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 18,
  },
  body: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
  },
  button: {
    fontFamily: 'Oswald_500Medium',
    fontSize: 18,
    letterSpacing: 1,
  },
  input: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 28,
  },
  payout: {
    fontFamily: 'Oswald_700Bold',
    fontSize: 36,
    letterSpacing: 2,
  },
} as const;

export const SIZES = {
  logo: {
    width: 300,
    height: 100,
  },
  header: {
    height: 120,
  },
  pointButton: {
    width: 50,
    height: 50,
  },
  betButton: {
    width: 125,
    height: 50,
  },
  borderRadius: 12,
  borderRadiusLarge: 16,
} as const;
