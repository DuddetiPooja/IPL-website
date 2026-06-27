# Sunrisers Hyderabad — Official Digital Platform (Frontend Demo)

A complete **frontend-only** React website for a fictional/demo "Sunrisers Hyderabad Official Digital Platform" — built with React, Vite, React Router, and plain CSS. No backend, no database, no real APIs. All content is mock/dummy data for UI/UX demonstration purposes only.

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/   Reusable UI components (Navbar, Footer, Hero, MatchCard, PlayerCard,
                 NewsCard, VideoCard, GalleryCard, ProductCard, SponsorCard, StatCard,
                 CTABanner, CountdownTimer, FanPollWidget, QuizWidget, Reveal, etc.)
  pages/         One file per route (Home, Team, PlayerProfile, Fixtures, MatchCenter,
                 News, NewsArticle, Videos, Gallery, FanZone, Merchandise, Tickets,
                 Sponsors, Community, Contact, PointsTable)
  data/          mockData.js — all dummy content (players, fixtures, news, products, etc.)
  styles/        global.css (design tokens/utilities) + components.css (component styles)
  App.jsx        Route definitions
  main.jsx       App entry point
```

## Pages & Routes

| Route              | Page                         |
|---------------------|------------------------------|
| `/`                 | Home                         |
| `/squad`            | Team / Squad listing         |
| `/squad/:id`        | Player Profile               |
| `/fixtures`         | Fixtures & Results           |
| `/match-center`     | Live Match Center            |
| `/news`             | News listing                 |
| `/news/:id`         | News article detail          |
| `/videos`           | Videos                       |
| `/gallery`          | Gallery (masonry + lightbox) |
| `/fanzone`          | Fan Zone (polls/quiz/rewards)|
| `/merchandise`      | Merchandise / e-commerce UI  |
| `/tickets`          | Ticket booking UI            |
| `/sponsors`         | Sponsors                     |
| `/community`        | Community / CSR              |
| `/contact`          | Contact + FAQ                |
| `/points-table`     | IPL points table              |

## Design System

- **Colors**: Orange `#FF6B00`, Black `#111111`, Gold `#FFC857`, White `#FFFFFF`, Light Gray `#F7F7F7`
- **Typography**: "Anton" for bold display headlines, "Inter" for body/UI text
- **Theme**: Dark, premium sports-media aesthetic with card-based layouts, scroll-reveal animations, hover micro-interactions, and a sticky navbar with live ticker.

## Notes

- All data (players, fixtures, news, products, etc.) lives in `src/data/mockData.js` — edit this file to change site content.
- Cart, wishlist, polls and quizzes are all client-side only (no persistence) — refreshing the page resets them.
- This is a demo/educational project and is **not affiliated with or endorsed by** Sunrisers Hyderabad, the BCCI, or the IPL.
