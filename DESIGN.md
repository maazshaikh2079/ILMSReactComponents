---
name: Maritime Tactical Intelligence System (Dual Theme)

# LIGHT THEME (DEFAULT - DAYTIME BRIDGE OPERATIONS)
light_colors:
  surface: '#faf8ff'
  surface-dim: '#d4d9ef'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7fd'
  surface-container-highest: '#dde2f8'
  on-surface: '#151b2b'
  on-surface-variant: '#424754'
  inverse-surface: '#2a3040'
  inverse-on-surface: '#eef0ff'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#005ac2'
  primary: '#0058be'
  on-primary: '#ffffff'
  primary-container: '#2170e4'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#006591'
  on-secondary: '#ffffff'
  secondary-container: '#39b8fd'
  on-secondary-container: '#004666'
  tertiary: '#006947'
  on-tertiary: '#ffffff'
  tertiary-container: '#00855b'
  on-tertiary-container: '#f5fff6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#faf8ff'
  on-background: '#151b2b'
  surface-variant: '#dde2f8'

# DARK THEME (NIGHT BRIDGE & STEALTH OPS)
dark_colors:
  surface: '#0d1322'
  surface-dim: '#0d1322'
  surface-bright: '#33394a'
  surface-container-lowest: '#080e1d'
  surface-container-low: '#151b2b'
  surface-container: '#191f2f'
  surface-container-high: '#242a3a'
  surface-container-highest: '#2f3445'
  on-surface: '#dde2f8'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dde2f8'
  inverse-on-surface: '#2a3040'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#89ceff'
  on-secondary: '#00344d'
  secondary-container: '#00a2e6'
  on-secondary-container: '#00344e'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#00a572'
  on-tertiary-container: '#00311f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0d1322'
  on-background: '#dde2f8'
  surface-variant: '#2f3445'

typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em

rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px

spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 12px
  margin: 16px
---

## Brand & Style
This design system is engineered for high-stakes naval logistics and integrated lifecycle management (ILMS). The brand personality is authoritative, precise, and mission-critical. It prioritizes rapid information retrieval and cognitive clarity under operational pressure.

The aesthetic blends **Corporate Modern** efficiency with **Glassmorphism** to maintain depth in a high-density environment across both **Light Mode** (default daytime bridge operations) and **Dark Mode** (night bridge & low-light tactical hubs).

**Core Principles:**
- **Density over Decoration:** Every pixel must serve a functional purpose.
- **Pure CSS Variable Theming:** The entire UI is driven by `:root` (light) and `.dark` variables in CSS, eliminating manual `dark:` variant clutter in components.
- **Visual Hierarchy through Luminance:** Use tonal shifts and color intensity to signal priority against the clean light or dark midnight backdrop.
- **Technical Precision:** Use rigid alignment and structured data modules to evoke a sense of military-grade security.

## Colors
The palette is optimized for clarity and professional rigor across daytime and nighttime operational centers.

- **Light Mode Surface:** The foundation is a clean slate (`#FAF8FF`) with `#FFFFFF` cards and `#C2C6D6` outlines.
- **Dark Mode Surface:** Deep midnight slate foundation (`#0D1322`) with `#151B2B` cards, `#191F2F` containers, and `#424754` outlines.
- **Action Gradients:** Primary interactive elements utilize a linear gradient from `#3B82F6` (Blue) to `#0EA5E9` (Light Blue) to signify active "power" states.
- **Semantic Accents:** 
    - **Emerald Green (#10B981 / #4EDEA3):** Confirms secure status, optimal logistics flow, and successful transmissions.
    - **Amber (#F59E0B / #FBBF24):** Signals supply chain bottlenecks or maintenance warnings.
    - **Rose Red (#BA1A1A / #FFB4AB):** Reserved exclusively for urgent tactical alerts or system failures.

## Typography
Typography is split between functional communication and technical data display.

- **Inter:** The primary workhorse for navigation, headers, and descriptive text. High x-height ensures legibility at small sizes.
- **JetBrains Mono:** Used for all "technical" data, including serial numbers, GPS coordinates, timestamps, and cargo quantities.
- **Scaling:** For mobile or tablet views, `display-lg` scales down to 24px. Body text remains at 14px across all devices.

## Layout & Spacing
The layout follows a **Modular Apex Grid**. This is a high-density approach designed to maximize visible data on a single screen without overcrowding.

- **Grid System:** 12-column fluid grid for desktop, 4-column layout for mobile.
- **Density:** Tight 4px baseline. Tables and list items use compact vertical padding (8px).
- **Margins:** Standard outer margins set to 16px to conserve horizontal real estate.
- **Modular Panels:** Information grouped into logical cards separated by 12px gutters.

## Elevation & Depth
- **Light Mode:** Layer 0 (`#FAF8FF`), Layer 1 Panels (`#FFFFFF` with `#C2C6D6` ghost borders), Layer 2 Modals (`#FFFFFF` with soft ambient shadow).
- **Dark Mode:** Layer 0 (`#0D1322`), Layer 1 Panels (`#151B2B` with `#424754` ghost borders), Layer 2 Modals (`#191F2F` with inner glow).

## Components
- **Buttons:** Primary buttons use the Blue-to-Light-Blue action gradient. Secondary buttons use ghost styling with a 1px border.
- **Data Tables:** Semantic tables with zebra striping, subtle row borders, and monospace font for numeric/time columns.
- **Status Badges:** Small rectangular badges with subtle background tint and high-contrast text (`SECURE`, `WARNING`, `IMMEDIATE`).
- **Input Fields:** Ghost border inputs focusing to 1px primary border with subtle ambient glow.
- **Tactical Cards:** Modular containers with optional status top-accent borders.
- **Iconography:** 20px functional icons with consistent 2px stroke weights.