// WeCooked design tokens
// Derived directly from the "Sage & Stone" mockup set.
// Two moods coexist by design in the source screens:
//  - "Culinary warmth": cream surfaces, sage accents, serif display type
//    (Landing, Login, Dashboard, Discovery, Ingredient Studio, Shopping List,
//     Assistant, Saved, Swap Detail, Profile, Settings, Insights)
// The molecular/ingredient-science screens (Ingredient Studio, Swap Detail)
// lean harder into the serif "editorial lab notebook" feel with data tables,
// pH/moisture readouts and confidence badges — that's preserved as a variant,
// not a separate theme.

export const colors = {
  // Core neutrals
  cream: '#FAF9F6',       // primary app background
  creamDeep: '#F4F1EA',   // secondary/inset surfaces
  paper: '#FFFFFF',       // cards, inputs, sheets
  ink: '#232620',          // primary text (warm near-black, not pure black)
  inkSoft: '#5B6058',      // secondary text
  inkFaint: '#9B9F96',     // tertiary / placeholder text
  hairline: '#E7E4DC',    // borders, dividers

  // Sage system (brand primary)
  sagePale: '#DCE7DD',    // pale sage fills (pills, chip backgrounds)
  sageLight: '#C0D5C2',   // login panel, soft blocks
  sage: '#8FA88F',        // mid sage — badges, secondary buttons
  sageDeep: '#4A5D4E',    // primary buttons, active nav, headlines accent
  sageDeeper: '#3A4A3E',  // pressed states

  // Stone / clay accent (used sparingly: swap ratios, warm highlights)
  stone: '#B08968',
  stoneLight: '#E8DCC8',

  // Semantic
  success: '#4A5D4E',
  successBg: '#E4EDE4',
  warning: '#B08968',
  warningBg: '#F4E9DA',
  error: '#B1503F',
  errorBg: '#F4E1DC',
  info: '#5B7C9E',
  infoBg: '#E4EBF2',

  // Confidence / score tiers (molecular precision screens)
  scoreHigh: '#4A5D4E',
  scoreMid: '#B08968',

  overlay: 'rgba(35, 38, 32, 0.55)',
  shadow: 'rgba(35, 38, 32, 0.12)',
};

export const typography = {
  // Display/serif: used for hero headlines, screen titles like
  // "Molecular Precision.", "Good Morning, Chef Ninong ry.", recipe titles.
  display: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontFamilyItalic: 'PlayfairDisplay_600SemiBold_Italic',
  },
  // Body/sans: UI chrome, labels, buttons, inputs, nav.
  body: {
    fontFamily: 'Inter_400Regular',
    medium: 'Inter_500Medium',
    semibold: 'Inter_600SemiBold',
    bold: 'Inter_700Bold',
  },
  sizes: {
    xs: 11,
    sm: 12,
    base: 14,
    md: 15,
    lg: 17,
    xl: 20,
    xxl: 26,
    display: 32,
    displayLg: 36,
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
  xxxl: 36,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 18,
  xl: 24,
  pill: 999,
};

export const shadow = {
  card: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 3,
  },
  soft: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 2,
  },
};

export default { colors, typography, spacing, radius, shadow };
