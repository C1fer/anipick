# AniPick — Your 30-Second Anime Decider

A mobile-first React app that helps anime fans cut through the endless scrolling and pick something to watch *right now*.

---

## Visual Design
- **Dark theme** with vibrant anime-inspired gradients and glows
- Neon accent colors (purples, pinks, cyans) for buttons and highlights
- Smooth card animations with satisfying swipe physics
- Clean, minimal UI so filters don't overwhelm

---

## Core Features

### 1. Smart Filter Bar
A compact, collapsible filter section:
- **Type**: Any / TV / Movie
- **Status**: Airing (default) / Finished
- **Episodes**: Any / <13 / 13–26 / 26+
- **Genre**: Multi-select dropdown (pulled from Jikan API)
- **Demographic**: Single-select dropdown (pulled from Jikan API)

Big "**Find My Anime**" button to trigger the search.

---

### 2. Swipeable Card Stack (Tinder-style)
- Draws **5 anime cards** that match the filters
- Each card shows:
  - Anime cover image (large, visually dominant)
  - Title (English or Romaji)
  - Type badge (TV / Movie)
  - Episode count
  - MAL Score
  - Up to 3 genre chips
- **Swipe right** = "Sounds good" → selects this anime
- **Swipe left** = "Skip" → moves to next card
- Works with **touch gestures AND mouse drag**

---

### 3. Selection Flow

**When user swipes right:**
- Remaining cards are discarded
- Expanded view of the chosen anime appears with:
  - Full synopsis
  - Studios, year, rating
  - Larger cover image
  - Link to MyAnimeList
- "**Redraw**" button to start fresh with 5 new picks

**When user swipes left on all 5:**
- Friendly "No luck?" message
- "**Try Again**" button to redraw

---

### 4. Smart Rules Engine
- **Excludes sequels and spin-offs** automatically (filters by "related" data from Jikan)
- **Auto-relaxes filters** if results are less than 5 (e.g., removes episode limit first, then status)
- **Session memory**: Keeps track of shown anime so you won't see the same ones again during your session

---

## Pages & Navigation

1. **Home / Filter Page** — Enter preferences, hit search
2. **Swipe Page** — Card stack with swipe interactions
3. **Result Page** — Expanded anime detail after selection

Simple, linear flow optimized for speed.

---

## Technical Notes
- **Jikan API** (free, no auth required) for anime data, genres, and demographics
- No backend required — all client-side with session storage
- Mobile-first responsive design
- Smooth CSS animations for card swipes and transitions