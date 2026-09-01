# Maritime Tactical Intelligence System (ILMS React Components)
## Project Context & Technical Briefing for AI Assistants

This document provides complete architectural and state context for any AI assistant or developer working on this codebase.

---

### 1. Project Overview
- **Project Name:** ILMSReactComponents (Naval Logistics Command Ops)
- **Design System:** Maritime Tactical Intelligence System (MTIS) Dual-Theme Architecture
- **Tech Stack:**
  - React 19 + TypeScript + Vite
  - Tailwind CSS v4
  - shadcn/ui primitives (powered by `@radix-ui` and `class-variance-authority`)
  - React Hook Form + Zod validation
  - Lucide React icons
  - React Router v7

---

### 2. Design Tokens & Pure CSS Variable Theming
All theming is strictly controlled via **CSS variables** defined in [`src/index.css`](src/index.css). **Do not hardcode `dark:...` variant classes in JSX components.**

- **Light Mode (Default / Daytime Bridge Ops):**
  - Background: `#FAF8FF` | Cards/Panels: `#FFFFFF` | Border: `#C2C6D6`
  - Primary: `#0058BE` | Secondary: `#006591` | Tertiary (Emerald): `#006947`
  - Action Gradient: `linear-gradient(135deg, #3B82F6, #0EA5E9)`
- **Dark Mode (Night Bridge Ops / Stealth Command Center):**
  - Background: `#0D1322` | Cards/Panels: `#151B2B` | Containers: `#191F2F` | Border: `#424754`
  - Primary: `#ADC6FF` | Secondary: `#89CEFF` | Tertiary (Emerald): `#4EDEA3`
- **Theme Switcher:**
  - Stored in `localStorage` under key `mtis-theme`.
  - Toggles the `.dark` class on `document.documentElement`.
  - Sun/Moon icon button located in [`src/components/Header.tsx`](src/components/Header.tsx) immediately before the Notifications (`Bell`) icon.

---

### 3. Component Inventory & Locations
- **Layout:**
  - [`src/components/AppLayout.tsx`](src/components/AppLayout.tsx): Manages sidebar toggle and view viewport.
  - [`src/components/Header.tsx`](src/components/Header.tsx): Top header bar with sidebar toggle, Sun/Moon theme toggle, notifications, settings, and profile.
  - [`src/components/Sidebar.tsx`](src/components/Sidebar.tsx): Collapsible nav menu with icons and active routes.
- **shadcn UI Primitives:**
  - [`src/components/ui/button.tsx`](src/components/ui/button.tsx): CVA button with variants `default`, `actionGradient`, `outline`, `secondary`, `ghost`, `link`, `inverted`, `secure`, `warning`, `destructive`.
  - [`src/components/ui/card.tsx`](src/components/ui/card.tsx): Card container with accent borders (`accent="primary" | "secondary" | "tertiary" | "destructive" | "warning"`).
  - [`src/components/ui/badge.tsx`](src/components/ui/badge.tsx): Monospace chips with status variants (`secure`, `warning`, `immediate`, `tactical`, `outline`) and status indicator dots.
  - [`src/components/ui/table.tsx`](src/components/ui/table.tsx): High-density semantic table components.
  - [`src/components/ui/input.tsx`](src/components/ui/input.tsx) & [`src/components/ui/select.tsx`](src/components/ui/select.tsx): Ghost border inputs with tactical focus rings.
  - [`src/components/ui/dialog.tsx`](src/components/ui/dialog.tsx): Radix modal popovers.
  - [`src/components/ui/form.tsx`](src/components/ui/form.tsx) & [`src/components/ui/label.tsx`](src/components/ui/label.tsx): Full React Hook Form integration wrappers.
  - [`src/components/ui/progress.tsx`](src/components/ui/progress.tsx) & [`src/components/ui/tabs.tsx`](src/components/ui/tabs.tsx): Accessible UI primitives.
- **Forms & Dialogs:**
  - [`src/components/VetteDemandDialog.tsx`](src/components/VetteDemandDialog.tsx): Validated modal for vetting and submitting logistics demands for fleet assets.
- **Pages:**
  - [`src/pages/Dashboard/DashboardPage.tsx`](src/pages/Dashboard/DashboardPage.tsx): Tactical Overview dashboard with 4 metric KPI cards, Supply Demand Trends bar chart, Recent Activity table, and Quick Actions.
  - [`src/pages/ComponentLab.tsx`](src/pages/ComponentLab.tsx): Interactive showcase of all MTIS tokens, palettes, typography, and shadcn components.

---

### 4. Git Repository & Remote
- **GitHub Remote:** `https://github.com/maazshaikh2079/ILMSReactComponents.git`
- **Default Branch:** `main`

---

### 5. Running the Project
```bash
npm install
npm run dev
npm run build
```
