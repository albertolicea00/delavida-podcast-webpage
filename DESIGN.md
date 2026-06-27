# Design Guide & Style System - Las Locuras de Miguelín (De La Vida)

This document details the visual design system, color palette, typography, and custom utility classes that define the visual identity of the podcast website. All developers and AI agents must adhere to these guidelines to maintain a premium, consistent visual aesthetic across the application.

---

## 🎨 1. Color Palette (Design Tokens)

The project utilizes a premium dark aesthetic inspired by neon lights and urban culture (cyberpunk/TikTok style). The key colors are mapped in [tailwind.config.mjs](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/tailwind.config.mjs) under the following tokens:

| Color Token | Hex Value | Primary Usage |
| :--- | :--- | :--- |
| `dark` | `#0A0A0A` | Base background color (`body`). Almost pitch-black to make neon elements stand out. |
| `secondary` | `#111111` | Background color for cards, the navigation bar, footer, and secondary container blocks. |
| `primary` | `#FF0055` | Hot Pink/Neon Red. Used for primary CTAs, neon borders, active accents, and button hover states. |
| `accent` | `#00E5FF` | Neon Cyan. Used for secondary accents, hover states on episode cards, and alternate active links. |
| `neon-yellow` | `#FFD600` | Neon Yellow. Dedicated to product cards, commercial partnership offers, and highlight badges. |
| `neon-purple` | `#E040FB` | Neon Purple. Reserved exclusively for high-importance sponsor calls-to-action (like the floating sponsor button). |

---

## ✍️ 2. Typography

The website loads Google Fonts via the [BaseLayout.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/layouts/BaseLayout.astro) layout file:

- **Display Typography (Titles):** `Anton` (sans-serif)
  - **Tailwind Class:** `font-display`
  - **Usage:** Section titles (`<h1>` - `<h4>`), character names, and massive hero headlines.
- **Body Typography (Reading & UI):** `Poppins` (sans-serif)
  - **Tailwind Class:** `font-body`
  - **Usage:** Main reading copy, descriptions, standard buttons, secondary information, and paragraph text.

---

## 💎 3. Custom CSS Component Classes (Defined in `global.css`)

To keep Astro HTML markup clean and avoid over-saturating elements with long strings of Tailwind utility classes, custom component classes are defined in [src/styles/global.css](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/styles/global.css).

### 🧭 Navigation & Layout
- `.nav-glass`: Semitransparent dark background with backdrop blur (`bg-dark/80 backdrop-blur-xl`).
- `.hero-bg`: Angular gradient starting from deep dark `#0A0A0A` transitioning to a soft magenta glow in the bottom-right corner.
- `.footer-gradient`: Vertical gradient transitioning from `dark` (`#0A0A0A`) down to `secondary` (`#111111`).

### ✨ Neon Effects & Borders
- `.neon-border`: Applies a solid `2px` border with the `primary` color and adds an external and internal glowing pink box shadow.
- `.neon-glow`: Triggers the `pulse-neon` keyframe animation to make the pink shadow breathe/pulsate.

### 🎴 Cards
The project defines three main card styles, each featuring distinct, high-quality hover states:
- `.card-crew` (Character Cards):
  - Uses `secondary` background, rounded `2xl` corners.
  - **Hover:** Translates upward by `12px` (`-translate-y-3`), scales slightly (`scale-[1.02]`), and drops a deep, blurred pink glow shadow (`box-shadow: 0 20px 60px rgba(255, 0, 85, 0.3)`).
- `.card-episode` (Episode Cards):
  - Uses `secondary` background, rounded `xl` corners.
  - **Hover:** Scales up to `105%` and drops a neon cyan glow shadow (`box-shadow: 0 10px 40px rgba(0, 229, 255, 0.2)`).
- `.card-merch` (Merchandising / Partner Cards):
  - Uses `secondary` background, rounded `xl` corners.
  - **Hover:** Translates upward by `8px` (`-translate-y-2`) and drops a neon yellow glow shadow (`box-shadow: 0 15px 40px rgba(255, 214, 0, 0.2)`).
- `.clip-card` (Vertical TikTok/Reels Clips):
  - Styled with a fixed `9:16` aspect ratio and `2xl` rounded corners.
  - **Hover:** Scales up smoothly to `105%`.

### 🎛️ Interactive UI Elements
- `.sound-btn` (Soundboard Buttons):
  - Uses `secondary` background, a solid `primary` border, and text set in `Anton`.
  - **Hover:** Switches background to `primary`, scales up to `110%`, and casts an intense pink glow.
  - **Active (Click):** Shrinks to `95%` and executes the `shake` animation.
- `.quote-card`:
  - Dark-to-pink gradient background, thick left border in `primary`.
  - **Hover:** Shifts slightly to the right (`translate-x-2`) and changes its left border color to `accent` (cyan).
- `.event-card`:
  - Glassmorphic card styling blending `secondary` with a sutil `primary/15` gradient, wrapped in a low-opacity border.

---

## 🏃‍♂️ 4. Animations & Micro-interactions

CSS-native animations add fluidity and life to user actions:

1. **Floating (`.animate-float`):** Smoothly moves an element up and down (`translateY(-10px)`) over a 3-second infinite loop. Ideal for float badges, icons, or decorative elements.
2. **Shake (`shake`):** Fast horizontal vibration and slight rotation. Triggered on active mouse clicks for soundboard buttons to simulate acoustic impact feedback.
3. **Text Glow (`.animate-glow`):** Cycles the text-shadow property to create a pulsing pink neon light effect.
4. **Arrow Flow (`.animate-arrows-1 / 2 / 3`):** Sequentially delayed opacity and translation transitions that guide the user's eye downwards.

---

## 📱 5. Responsiveness & Adaptive Rules

- **Hero Title (`.hero-title`):** Set to fluid sizing using `clamp(3rem, 10vw, 8rem)` so it scales automatically between 320px screens and desktop viewports. At `768px` (mobile viewport), a media query enforces a maximum limit to prevent clipping.
- **Section Titles (`.section-title`):** Set to fluid sizing using `clamp(2rem, 5vw, 3.5rem)`.
- **Grid Layouts:** Fluid Tailwind grids are preferred over fixed column widths (e.g. `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
