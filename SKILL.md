---
name: browser-game-spa
description: Build and iterate fun browser-based mini-games in this repository using a single-page React app with shadcn/ui components and no backend services. Use when creating new games, adding game mechanics, designing UI flows, improving responsiveness, or refactoring frontend-only game architecture.
---

# Browser Game SPA Skill

Follow these constraints on every task:

- Keep the app as a SPA; route in-client only.
- Use `react-router` (React Router 7 declarative mode) for browser routing primitives (`BrowserRouter`, `Routes`, `Route`, `Link`, `useNavigate`, `useParams`).
- Use frontend-only state and browser APIs; do not add backend code, server routes, or database dependencies.
- Use shadcn/ui components for UI structure, controls, overlays, dialogs, forms, and layout primitives.
- Prioritize fast, playful game loops with clear feedback (score, timer, win/lose states, restart flow).
- Optimize for desktop and mobile browsers.

## Tech Baseline

- Use React + Vite + TypeScript patterns already present in this repo.
- Keep UI components in reusable units; keep game logic isolated from presentation.
- Prefer deterministic state transitions (reducers/state machines) for game flow over scattered local flags.

## Build Pattern For New Mini-Games

1. Define a small, testable game loop:
- `idle -> playing -> paused|won|lost -> restart`.
2. Implement core mechanics first:
- Input handling, tick/update logic, collision or rules, score conditions.
3. Add shadcn UI shell:
- Start screen, HUD, end-state modal/sheet, restart action.
4. Add responsiveness and accessibility:
- Keyboard support where relevant, visible focus states, touch-friendly controls.
5. Add polish:
- Lightweight animations, sound hooks (optional), clear microcopy.

## UI Conventions

- Use shadcn components for consistent spacing, typography, and interactions.
- Keep copy concise and game-like.
- Surface game state persistently (score, lives, timer, level).
- Provide a one-click replay path from all terminal states.
- Keep a shared game-page nav header with a consistent back action (`navigate(-1)` with fallback link to `/` when needed) and a visible `Aheli` brand lockup/logo linking to home.

## React Router Conventions

- Define routes in one place (`App.tsx`) under `BrowserRouter`.
- Use dynamic game routes as `/games/:slug`.
- Keep game metadata and component mappings in `src/games/index.ts` as the single source of truth.
- Resolve page title and rendered component by `slug` from the shared games map, with a graceful unknown-game fallback UI.
- Use `Link` for declarative navigation from lists/cards and `useNavigate` for button-driven back actions.

## Code Quality Rules

- Keep components small; split rendering from logic hooks when complexity grows.
- Avoid hidden magic values; promote gameplay constants to named config.
- Add unit tests for pure game logic where practical.
- Run lint/build checks after significant changes.

## Avoid

- Any backend/API coupling for core gameplay.
- Overly complex architecture for a simple mini-game.
- Blocking modals or heavy effects that interrupt input responsiveness.
