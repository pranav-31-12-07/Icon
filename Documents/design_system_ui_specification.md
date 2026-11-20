# Design System & UI Specification (`design.md`) — Icon English School

## 1. Visual Direction & Theme Philosophy
The design system blends **academic heritage and modern warmth**. Inspired by trusted Indian educational institutions, it pairs **Deep Forest Emerald** (growth, trust, discipline) with **Warm Marigold Gold** (excellence, energy) over crisp daylight surfaces in **Light Mode** and rich obsidian-slate surfaces in **Dark Mode**.

---

## 2. Color Tokens (Light & Dark Mode Switchable)
All components must reference semantic CSS custom properties (`--token-name`) rather than raw hex values.

### 2.1 Semantic Color Matrix

| Semantic Token | Light Mode Value | Dark Mode Value | Usage & Contrast Compliance (WCAG AA) |
| :--- | :--- | :--- | :--- |
| `--bg-canvas` | `#FAFBF9` (Warm Ivory) | `#0B1110` (Deep Obsidian Slate) | Primary page background. |
| `--bg-surface` | `#FFFFFF` (Pure White) | `#131D1B` (Elevated Pine Slate) | Cards, form containers, modals. |
| `--bg-surface-alt` | `#F0F5F2` (Soft Sage Tint) | `#192623` (Muted Forest Slate) | Alternating section bands, table headers. |
| `--bg-header` | `rgba(255, 255, 255, 0.88)` | `rgba(11, 17, 16, 0.88)` | Frosted glass sticky navbar (`backdrop-filter: blur(12px)`). |
| `--text-primary` | `#0F1715` (Charcoal Ink) | `#F2F7F5` (Crisp Mist White) | Headings and primary body copy (`> 14:1` contrast). |
| `--text-secondary` | `#475551` (Muted Slate) | `#A3B5AF` (Soft Sage Gray) | Subtitles, metadata, card excerpts (`> 5.2:1` contrast). |
| `--brand-primary` | `#00612E` (Icon Emerald) | `#2ECC71` (Luminous Emerald) | Primary CTAs, active nav links, key highlights. |
| `--brand-primary-hover` | `#004922` (Deep Forest) | `#27AE60` (Rich Emerald) | Hover state for primary interactive elements. |
| `--brand-on-primary` | `#FFFFFF` (White) | `#061A10` (Dark Pine Ink) | Text/icons inside `--brand-primary` buttons (`> 7:1` contrast). |
| `--brand-accent` | `#E6BE1E` (Academic Gold) | `#F1C40F` (Radiant Gold) | Badges, announcement ribbons, star accents, active borders. |
| `--brand-on-accent` | `#0A0A0A` (Rich Black) | `#0A0A0A` (Rich Black) | Text inside gold badges (`10.6:1` contrast). |
| `--action-whatsapp` | `#25D366` (WhatsApp Green) | `#25D366` (WhatsApp Green) | Floating/CTA WhatsApp button (`#0A0A0A` foreground text). |
| `--border-subtle` | `#DCE5E1` | `#243531` | Card outlines, dividers, default input borders. |
| `--status-error` | `#C0392B` | `#FF6B6B` | Form validation errors and required field alerts. |
| `--focus-ring` | `#00612E` | `#F1C40F` | `2px` solid keyboard `:focus-visible` outline (`3px` offset). |

---

## 3. Typography System
- **Primary Font Stack:** `'Plus Jakarta Sans', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif` (Display/Headings)
- **Body Font Stack:** `'Roboto', -apple-system, BlinkMacSystemFont, sans-serif` (High-readability body & forms)

| Token | Size | Line Height | Weight | Role |
| :--- | :--- | :--- | :--- | :--- |
| `--text-xs` | `12px` | `18px` | `500` | Badges, helper text, legal footer notes |
| `--text-sm` | `13px` | `20px` | `500` | Breadcrumbs, secondary nav, metadata |
| `--text-md` | `14px` | `22px` | `400` / `500` | Form labels, list items, compact cards |
| `--text-base` | `15px` | `24px` | `400` | Default body copy |
| `--text-lg` | `16px` | `26px` | `500` | Lead paragraphs, button labels |
| `--text-xl` | `18px` | `26px` | `600` | Card titles (`H4`), accordion headers |
| `--text-2xl` | `24px` | `32px` | `700` | Section sub-headings (`H3`) |
| `--text-3xl` | `32px` | `40px` | `700` | Section titles (`H2`) |
| `--text-4xl` | `44px` | `52px` | `800` | Hero headlines (`H1`, scales down to `30px` on mobile) |

---

## 4. Spacing, Elevation & Radius Tokens
- **Spacing Scale:** `--space-1: 4px`, `--space-2: 8px`, `--space-3: 12px`, `--space-4: 16px`, `--space-5: 20px`, `--space-6: 24px`, `--space-8: 32px`, `--space-12: 48px`, `--space-16: 64px`
- **Border Radius:**
  - `--radius-sm`: `8px` (badges, small tags)
  - `--radius-md`: `12px` (form inputs, gallery thumbnails, content cards)
  - `--radius-lg`: `20px` (hero feature containers, management profile cards)
  - `--radius-pill`: `9999px` (primary CTA buttons, theme toggle pill, filter chips)
- **Shadows:**
  - **Light Mode `--shadow-card`:** `0 4px 20px -2px rgba(15, 23, 21, 0.06)`
  - **Light Mode `--shadow-hover`:** `0 12px 28px -4px rgba(0, 97, 46, 0.14)`
  - **Dark Mode `--shadow-card`:** `0 4px 20px -2px rgba(0, 0, 0, 0.45)`
  - **Dark Mode `--shadow-hover`:** `0 12px 28px -4px rgba(46, 204, 113, 0.16)`

---

## 5. Animation & Motion Language
All animations enhance spatial orientation without delaying interaction:
1. **Theme Switch Transition:** Smooth `250ms cubic-bezier(0.4, 0, 0.2, 1)` cross-fade on `background-color`, `color`, and `border-color`, plus a `360deg` rotational morph between the Sun and Moon SVG icons.
2. **Scroll-Reveal Stagger (`IntersectionObserver`):** Cards and section headers enter with `opacity: 0 -> 1` and `translateY(18px -> 0)` over `450ms ease-out` with `60ms` stagger per sibling item.
3. **Interactive Card Lift:** Hovering over Facility or Management cards elevates them by `translateY(-4px)` over `200ms` with subtle `--brand-accent` border glow.
4. **Page Entry Fade:** Smooth `200ms` fade-in on route load so navigating across the 7 separate pages feels seamless.
5. **Accessibility Safeguard:** Wrapped inside `@media (prefers-reduced-motion: reduce)` to disable transforms and reduce durations to `0ms`.