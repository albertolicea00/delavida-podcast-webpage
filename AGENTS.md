# 🤖 AI Agent Manual - Project Guidelines

This document is designed specifically for AI agents (such as Antigravity, Claude, or GPTs) to understand the project architecture, follow established coding conventions, and modify or add code safely and consistently.

---

## 📂 1. Directory Structure Map

All code modifications and additions must strictly align with the project's folder conventions. Use the direct links below to navigate:

- 📁 **[src/pages/](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/pages/)** - **Astro File-based Routing**:
  - Spanish (Primary language - directly under pages):
    - [index.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/pages/index.astro): Spanish homepage.
    - [patrocinar.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/pages/patrocinar.astro): Spanish sponsorship and commercial page.
    - [personajes/index.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/pages/personajes/index.astro): Spanish crew listing index page.
    - [personajes/[character].astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/pages/personajes/[character].astro): Spanish dynamic character detail route.
  - English (Mirror routes inside the `en/` folder):
    - [en/index.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/pages/en/index.astro): English homepage.
    - [en/patrocinar.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/pages/en/patrocinar.astro): English sponsorship page.
    - [en/personajes/index.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/pages/en/personajes/index.astro): English crew listing index page.
    - [en/personajes/[character].astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/pages/en/personajes/[character].astro): English dynamic character detail route.
  - API Routes:
    - [api/instagram.ts](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/pages/api/instagram.ts): Backend integration endpoint for Instagram posts feed.

- 📁 **[src/components/](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/)** - **Modular Astro Components**:
  - [CharacterPageContent.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/CharacterPageContent.astro): Layout renderer for individual character details (bio, quotes, featured clips).
  - [CrewPageContent.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/CrewPageContent.astro): Content section rendering the list of characters on the crew index page.
  - [CrewSection.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/CrewSection.astro): Main homepage crew showcase featuring character cards.
  - [EventSection.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/EventSection.astro): Layout highlighting upcoming live events and tour locations.
  - [Footer.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/Footer.astro): Standard bottom navigation and copyright info.
  - [GuestsSection.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/GuestsSection.astro): Showcase section for special guest stars visiting the show.
  - [HeroSection.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/HeroSection.astro): Main landing section with background aesthetics, badge highlights, and principal CTAs.
  - [InstagramPostsGrid.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/InstagramPostsGrid.astro): Dynamic component rendering a list of latest Instagram reels/posts.
  - [LatestEpisodeSection.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/LatestEpisodeSection.astro): Embedded video player showing the absolute newest podcast release.
  - [Navbar.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/Navbar.astro): Responsive navigation bar with integrated language selector.
  - [QuizSection.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/QuizSection.astro): Dynamic user interactive trivia widget.
  - [ScamPopup.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/ScamPopup.astro): A humorous "scam popup" modal for easter-egg micro-interactions matching the show's style.
  - [SocialSection.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/SocialSection.astro): Social channels stats tracker and direct subscription panel.
  - [SoundboardSection.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/SoundboardSection.astro): Interactive click-to-play grid mapping viral voice clips of the crew.
  - [SponsorsSection.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/SponsorsSection.astro): Grid layout showing official business partners, contact forms, and sponsorship perks.
  - [ViralEpisodesSection.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/ViralEpisodesSection.astro): Highlight deck displaying the most popular episodes.
  - [ViralMomentsSection.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/ViralMomentsSection.astro): Section for short TikTok-style clips.
  - [YouTubeLiveSync.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/components/YouTubeLiveSync.astro): Direct dynamic widget to fetch and showcase active live streams from YouTube.

- 📁 **[src/layouts/](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/layouts/)** - **Base HTML Wrapping**:
  - [BaseLayout.astro](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/layouts/BaseLayout.astro): HTML base document wrapping pages, injecting SEO meta tags, connecting Navbar/Footer, and loading Google Fonts (Anton + Poppins) and styles.

- 📁 **[src/data/](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/data/)** - **Static Data Collection Store**:
  - [site.ts](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/data/site.ts): Local collection for characters, clips, soundboards, and dynamic text. Translated and selected using the `getSiteData(locale)` helper.
  - [social.ts](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/data/social.ts): Global media URL configuration schemas.
  - [sponsors.ts](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/data/sponsors.ts) & [sponsors.json](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/data/sponsors.json): Data arrays defining partner metadata, icons, and categories.

- 📁 **[src/services/](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/services/)** - **Platform API Handlers**:
  - [youtube.ts](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/services/youtube.ts) & [youtube-client.ts](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/services/youtube-client.ts): Service definitions to retrieve live streaming status and episode content.
  - [instagram.ts](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/services/instagram.ts) & [instagram-client.ts](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/services/instagram-client.ts): Services integrating media streams, posts, and views caching.

- 📁 **[src/styles/](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/styles/)** - **Stylesheets**:
  - [global.css](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/styles/global.css): Core Tailwind imports and custom classes definition.

- 📁 **[src/i18n/](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/i18n/)** - **Internationalization Config**:
  - [es.ts](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/i18n/es.ts): Translation terms in Spanish.
  - [en.ts](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/i18n/en.ts): Translation terms in English.
  - [utils.ts](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/i18n/utils.ts): Helper logic for language parameters, routing alternate structures, and translations retrieval hooks.

---

## 🛠️ 2. Development Rules & Best Practices

### 🌐 A. Internationalization (i18n)
The project is 100% bilingual. Any component or page displaying text to the user must use the i18n translation system:
1. **Do not hardcode text strings** directly in HTML elements.
2. Add translation entries in [es.ts](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/i18n/es.ts) and [en.ts](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/i18n/en.ts).
3. In the Astro frontmatter of the file, retrieve translations using:
   ```typescript
   import { useTranslations } from "../i18n/utils";
   const { lang } = Astro.props; // Or retrieve it from Astro.url
   const t = useTranslations(lang);
   ```
4. Render strings using `{t.meta.title}`, `{t.hero.subtitle}`, etc.
5. Always generate localized links using the `getLocalizedPath(path, lang)` utility from [utils.ts](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/i18n/utils.ts).

### 🎨 B. Design System & Style Usage
1. **Tailwind Usage:** Rely on Tailwind utility classes (`flex`, `grid`, `text-*`, `bg-*`, etc.) where possible.
2. **Color Tokens:** Strictly reference the theme colors: `primary`, `secondary`, `accent`, `dark`, `neon-yellow`, `neon-purple`. Do not use arbitrary colors like `bg-red-500` or `text-blue-400` unless strictly necessary.
3. **Custom Component Classes:** For specialized cards, neon glow boxes, and animations, check [DESIGN.md](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/DESIGN.md) before writing extra custom CSS.
4. **Typography Rules:**
   - Use `font-display` for main section titles and header headlines.
   - Use `font-body` for body paragraphs, description copy, and common UI elements.

### 🧩 C. Interactive Client Elements (Astro Islands)
Because Astro generates static HTML by default, if a component requires client-side JavaScript execution (for example, playing sound clips in `SoundboardSection.astro`, tracking state in `QuizSection.astro`, or opening the `ScamPopup.astro` modal):
- Ensure script tags `<script>` are injected properly inside the Astro file, or if using reactive framework components, specify the correct hydration directive (e.g., `client:load` or `client:visible`).

### 📦 D. Modifying Website Content
- If you need to update sound clips, add a new crew character, adjust a live event, or change viral videos, modify [site.ts](file:///Users/albertolicea00/Develop/cuban_influencer_projects/delavida_podcast/src/data/site.ts) in the `DATA_ES` and `DATA_EN` collections. **Do not edit the visual markup files to change static data.**

---

## 🤖 3. Operational Rules for AI Agents

When working inside this repository, keep in mind these environment and workflow constraints:
1. **Do not make direct Git commits (`git commit`)** unless the user explicitly requests you to do so. The user prefers to review changes before committing.
2. **Code Integrity:** Maintain existing comments and docstrings that are unrelated to your current changes.
3. **Validation:** After making significant updates, propose running `npm run build` to verify that there are no TypeScript compiler errors or routing issues.
4. **Premium UI Quality:** The user expects highly polished, stunning interfaces. When adding new components, make sure to integrate the micro-interactions, hovers, and shadows documented in the design system.
