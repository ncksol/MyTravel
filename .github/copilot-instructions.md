# Copilot Instructions — Japan Travel Planning

## Purpose

This repository is a **travel itinerary planning website** for a trip to Japan, built with **Astro** as a static site with Japanese-inspired styling.

## Project Structure

- `src/content/pages/` — Markdown content files (itinerary, restaurants, bookings, budget, practical-info)
- `src/pages/` — Astro page components that render the markdown content
- `src/layouts/BaseLayout.astro` — Shared layout with navigation and Japanese-themed design
- `src/styles/global.css` — Design system (Japanese color palette, typography, components)

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at localhost:4321
npm run build      # Build static site to dist/
npm run preview    # Preview built site
```

## How Copilot Should Behave

- **Be a collaborative planner**, not just an information source. Proactively surface trade-offs (e.g., "this adds 2 hours of transit but lets you see X").
- **Use web search** to verify current information — opening hours, seasonal closures, transit schedules, and prices change frequently. Do not rely on training data alone for these details.
- **Think in logistics**: when suggesting activities, consider travel time between locations, realistic pacing, and opening/closing hours.
- **Default to public transit** (trains, subway, buses) for intercity and local travel unless asked otherwise. Japan's rail network is the primary way to get around.
- **Use Japanese place names** alongside English where helpful (e.g., "Fushimi Inari Taisha (伏見稲荷大社)").
- **Flag JR Pass relevance** when discussing intercity rail — note which routes are covered and whether a pass makes financial sense for the planned itinerary.

## Itinerary Conventions

When building or updating itineraries, follow this structure:

- Organize by **day**, with a clear date or "Day N" label
- For each day, list activities in chronological order with:
  - **Time** (approximate)
  - **Activity/location**
  - **Transit** between locations (line name, duration, cost if known)
  - **Notes** (reservations needed, tips, alternatives)
- Keep a running section for **accommodation** per city/region
- Track **budget estimates** in JPY with a summary

## Key Planning Considerations

- **Seasonal factors**: Cherry blossom (late March–mid April), autumn foliage (mid Nov–early Dec), rainy season (June), typhoon season (Aug–Oct), and major holidays (Golden Week, Obon, New Year) all significantly affect the experience.
- **Reservations**: Some restaurants (especially high-end sushi/kaiseki), ryokans, and experiences (teamLab, robot restaurant, etc.) require booking weeks or months ahead.
- **IC cards**: Suggest Suica/PASMO or mobile equivalents for local transit convenience.
- **Cash**: Many smaller establishments, temples, and rural areas are cash-only. Note when this is relevant.

## File Organization

- Content lives in `src/content/pages/` as markdown files
- Each markdown file is rendered by a corresponding `.astro` page in `src/pages/`
- Styling is in `src/styles/global.css` — uses CSS custom properties with a Japanese design system
- When adding new content pages: create the `.md` in `src/content/pages/` and a matching `.astro` page in `src/pages/`
- Add new pages to the navigation in `src/layouts/BaseLayout.astro`
