# Contributing to DeLaVida Podcast Webpage 🇨🇺

First off, thank you for considering contributing to the DeLaVida Podcast webpage! It's people like you that make this community great.

## 🚀 How to Get Started

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/albertolicea00/delavida-podcast-webpage.git
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Environment Variables**:
   Create a `.env` file based on `.env.example` and configure the YouTube credentials if you want to test the video integration:
   ```bash
   cp .env.example .env
   ```
5. **Create a branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
6. **Develop** and ensure the project runs smoothly:
   ```bash
   npm run dev
   ```
7. **Build** the project to verify it compiles:
   ```bash
   npm run build
   ```

## 🛠️ Tech Stack

- [Astro](https://astro.build/) - Web framework.
- [Tailwind CSS](https://tailwindcss.com/) - Styling.
- [TypeScript](https://www.typescriptlang.org/) - Type safety.
- [YouTube Data API](https://developers.google.com/youtube/v3) - For video feed integration.

## 📝 Contribution Guidelines

- **Clean Code**: Ensure your code is readable and follows standard practices.
- **Responsive Design**: Any UI changes must work across all screen sizes (mobile first).
- **Internationalization (i18n)**: If you add or modify text, update both languages in `src/i18n/es.ts` and `src/i18n/en.ts`.
- **Descriptive Commits**: Use clear and concise commit messages.

## 📬 Submitting a Pull Request

1. Push your changes to your fork: `git push origin feature/your-feature-name`.
2. Open a **Pull Request** on the main repository.
3. Provide a clear description of the changes and any relevant screenshots if applicable.
4. Wait for a review (we'll get back to you as soon as possible!).

---

Made with ❤️ by the community.
