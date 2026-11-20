# System & Frontend Architecture (`architecture.md`) — Icon English School

## 1. Architectural Strategy
To ensure **fast delivery, zero server-side fragility, effortless hosting, and clean multi-page SEO**, the application is architected as a **Modular Multi-Page Static Web Application (MPA)** powered by semantic HTML5, modern CSS Custom Properties, and modular Vanilla ES6+ JavaScript (with a shared component/layout injector for the Navbar, Theme Switcher, and Footer).

### Why Multi-Page Architecture (7 Distinct HTML Pages)?
- **Direct URLs & SEO:** Each page (`/index.html`, `/about.html`, `/admission.html`, `/facilities.html`, `/gallery.html`, `/management.html`, `/contact.html`) is independently indexable by Google for queries like *"Icon English School Osmanpura admission"* or *"English school in Jyotinagar Aurangabad"*.
- **Zero Build-Step Friction:** Runs directly on any static host (GitHub Pages, Netlify, Vercel, or existing cPanel shared hosting replacing the old `.php` files) with instant load times (`< 0.8s` First Contentful Paint).
- **Consistent Layout Shell:** A shared `app.js` layout controller hydrates the active navigation highlight, dark/light mode state, mobile drawer, and floating WhatsApp/Call widgets across all 7 pages without code duplication.

---

## 2. Directory & File Structure

```text
icon-english-school/
├── index.html              # Page 1: Home (Hero, Highlights, Campus Preview, CTA)
├── about.html              # Page 2: About Us (Legacy, Vision, Mission, Philosophy)
├── admission.html          # Page 3: Admission (Process, Criteria, Documents, Inquiry Form)
├── facilities.html         # Page 4: Facilities (Labs, Library, Sports, Transport, Safety)
├── gallery.html            # Page 5: Gallery (Category Filters + Interactive Lightbox)
├── management.html         # Page 6: Management (Shivkumar Niyogi & Leadership Profiles)
├── contact.html            # Page 7: Contact Us (Address, Phones, Map, Query Form)
├── css/
│   ├── tokens.css          # Light & Dark mode CSS variables, typography, spacing
│   ├── base.css            # Reset, accessibility utilities, skip-link, animations
│   └── components.css      # Navbar, theme-toggle, cards, forms, modals, footer
├── js/
│   ├── theme.js            # Early-executing theme initializer (prevents white flash)
│   ├── data.js             # Structured school content, facilities, gallery & FAQ data
│   ├── components.js       # Shared Header, Mobile Nav Drawer, Footer & Floating CTAs
│   ├── animations.js       # IntersectionObserver scroll-reveal & counter animations
│   └── forms.js            # Client-side validation, WhatsApp deep-link & mailto/API handler
└── assets/
    └── images/             # Optimized WebP campus photos & school emblem
```

---

## 3. Core Architectural Flows

### 3.1 Zero-Flash Theme Switching Flow
1. `js/theme.js` executes synchronously inside `<head>` before `<body>` renders.
2. Reads `localStorage.getItem('ies-theme')`; if absent, checks `window.matchMedia('(prefers-color-scheme: dark)')`.
3. Applies `data-theme="dark"` or `data-theme="light"` directly to `<html>`, preventing any flash of unstyled or wrong-theme content (FOUC).
4. Clicking the header theme toggle updates `data-theme`, saves to `localStorage`, updates `aria-pressed`, and triggers the icon animation.

### 3.2 Form Submission & Parent Lead Routing Flow
Because the client currently operates without a custom backend database, forms on `admission.html` and `contact.html` use a **Dual-Channel Progressive Submission Pattern**:
1. **Client Validation:** Real-time field validation checks required Name, valid Email, 10-digit Indian Mobile Number, and Enquiry/Grade details.
2. **Primary Channel (Instant WhatsApp / Email Dispatch):** Formats a clean, structured inquiry message routed directly to **Shivkumar Niyogi** (`+91 9527749595` via WhatsApp Web/App API or `niyogi.kumar@gmail.com` via FormSubmit/EmailJS webhook) so zero parent leads are lost.
3. **Interactive Confirmation UI:** Displays an accessible confirmation card with a generated inquiry reference ID and direct click-to-call fallback (`0240-2344693`).