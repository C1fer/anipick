<h1>
    <img src="public/pikku-icon-small.svg" alt="Pikku" width="33.6" height="33.6" style="vertical-align: middle;" /> 
    <span style="vertical-align: middle;">Pikku</span>
</h1>

> **Animanga Discovery** — Find your next binge in seconds.

Pikku is a web application that helps you break out of the "what should I watch/read?" spiral and jump straight into an anime or manga you will actually enjoy.

## Features

- **Smart filters That Actually Help** — Narrow anime and manga by genre, release type, status, length, and more.
- **Random Picks, Tailored to You** — Get instant recommendations based on your active filters.
- **Swipe-First Experience** — Browse picks with smooth, Tinder-style swipe interactions.
- **Built-In Streaming Discovery** — See where your selected anime is available to watch.
- **Responsive by Default** — Enjoy the same polished experience on desktop and mobile.

## Usage

1. **Select Media Type** — Choose Watch or Read.
2. **Dial In Your Filters** — Refine results based on what you are in the mood for:
    - Release type (TV, Movie, ONA, etc.) / (Manga, Manwha, Light Novel, etc.)
    - Status
    - Episode or chapter length
    - Genres
    - Demographics (Shounen, Shoujo, etc.)
    - NSFW content
3. **Swipe Through Picks** — Browse recommendations and keep what clicks.
4. **Check Streaming Availability** — See where anime picks are available to watch.

## Tech Stack

- **React 19** with TypeScript, Vite, Tailwind CSS 4
- **UI**: shadcn/ui components (Radix UI primitives)
- **Routing**: React Router 7
- **State**: Context API
- **API**: Jikan API (MyAnimeList data)
- **Additional**: Motion (animations), Sonner (notifications), Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js (v20+) or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/C1fer/pikku.git
cd pikku

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Navigate to http://localhost:5173
```

## Project Structure

```
src/
├── api/                  # API integrations (Jikan API)
├── components/           # Reusable components
│   ├── ui/               # Radix UI components
│   ├── MediaFilterView/  # Filter controls
│   ├── SwipeableCard/    # Card swiping interface
│   └── ...
├── context/              # React Context (Filters, Picks)
├── hooks/                # Custom React hooks
├── pages/                # Page components
├── services/             # Business logic (Anime, Manga, Media)
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
└── main.tsx              # Entry point
```

## Configuration

### Filter Thresholds/Whitelists

Filter options are configured in:
- `src/services/Anime/AnimeConfig.ts` — Anime-specific settings
- `src/services/Manga/MangaConfig.ts` — Manga-specific settings

### API Timeout

API requests timeout after 10 seconds by default. Adjust in `src/api/JikanAPI/JikanAPI.ts`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- [Jikan API](https://jikan.moe/) — MyAnimeList API
- [shadcn/ui](https://ui.shadcn.com/) — High-quality React component library
- [Radix UI](https://www.radix-ui.com/) — Accessible component primitives
- [Motion](https://motion.dev/) — JavaScript animation library
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
