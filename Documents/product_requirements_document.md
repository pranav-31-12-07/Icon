# Product Requirements Document (PRD) — Icon English School Website Modernization

## 1. Executive Summary & Vision
**Project Name:** Icon English School Digital Platform Modernization  
**Target Client:** Icon English School (Jyotinagar, Osmanpura Parisar, Chhatrapati Sambhajinagar / Aurangabad, Maharashtra)  
**Primary Contact:** Shivkumar Niyogi  
**Objective:** Replace the legacy PHP-based website (`https://iconenglishschool.in/`) with a fast, mobile-first, multi-page modern web application featuring a switchable **Dark and Light Mode UI**, rich academic branding, smooth micro-interactions, and streamlined parent admission workflows.

---

## 2. Problem Statement
The existing Icon English School website suffers from:
1. **Outdated Visual Identity:** Legacy table/block layouts, low visual hierarchy, and non-responsive design that degrades on smartphones.
2. **Broken Navigation & Missing Content:** Several internal routes fail to load or display incomplete information.
3. **High-Friction Parent Communication:** Relies on a basic contact form and a personal Gmail address (`niyogi.kumar@gmail.com`) without instant WhatsApp integration, interactive campus map, or structured digital admission inquiry.
4. **Outdated Location Metadata:** Still references "Aurangabad" exclusively rather than supporting both "Chhatrapati Sambhajinagar (Aurangabad)" for modern local SEO.

---

## 3. Target Audience & User Personas
1. **Prospective Parents (Primary):** Looking for school credibility, campus facilities, admission eligibility, fee/inquiry details, and direct contact options on mobile devices.
2. **Current Students & Parents (Secondary):** Checking school announcements, photo galleries of events, and management updates.
3. **School Administration (Client Stakeholder):** Needs an easy-to-maintain, prestigious digital presence that builds trust with families in Osmanpura / Jyotinagar and converts website visits into campus visits.

---

## 4. Scope & Multi-Page Architecture (7 Core Pages)
Every section from the legacy navigation will be built as a dedicated, fast-loading route/page with shared persistent navigation, theme switcher, and footer:

| Page Route | Page Title | Core Functional Requirements |
| :--- | :--- | :--- |
| `/` (`index.html` / `/home`) | **Home** | Hero banner with campus value proposition, quick stats (legacy, faculty, holistic learning), featured facilities preview, parent testimonials, quick Admission CTA, and floating WhatsApp/Call actions. |
| `/about` | **About Us** | School history, vision & mission cards, educational philosophy, core values, and academic milestones in Chhatrapati Sambhajinagar. |
| `/admission` | **Admission** | Step-by-step admission process timeline, age/grade eligibility criteria, required documents checklist, downloadable prospectus placeholder, and an interactive **Online Admission Inquiry Form**. |
| `/facilities` | **Facilities** | Categorized grid of campus infrastructure (Smart Classrooms, Science & Computer Labs, Library, Sports & Playground, Safe Transport, Security/CCTV) with detailed modal/drawer views. |
| `/gallery` | **Gallery** | Filterable photo & event showcase (`All`, `Campus`, `Annual Day`, `Sports`, `Classroom Activities`) with an interactive full-screen lightbox viewer. |
| `/management` | **Management** | Leadership profiles featuring **Shivkumar Niyogi** and the school's managing committee/principal message with structured bio cards. |
| `/contact` | **Contact Us** | Full campus address (`Plot No. 37, Jyotinagar, Osmanpura Parisar, Chhatrapati Sambhajinagar - 431005`), landmark (`Behind Raka's Life Style Club`), one-click Call (`9527749595` / `0240-2344693`), Email (`niyogi.kumar@gmail.com`), WhatsApp direct chat button, interactive Google Map embed, and validated **Query Submission Form**. |

---

## 5. Key Product Features
- **Switchable Dark & Light Mode:** Instant theme toggle in the top header that persists user preference in `localStorage` and respects OS `prefers-color-scheme`.
- **Rich Academic Color Palette & Animations:** High-contrast emerald green, royal gold, and deep slate tones paired with scroll-reveal entrances, smooth page transitions, and interactive hover states (respecting `prefers-reduced-motion`).
- **One-Tap Parent Actions:** Sticky mobile action bar / floating buttons for direct phone call (`tel:+919527749595`) and pre-filled WhatsApp admission inquiry.
- **WCAG 2.2 AA Accessibility:** Keyboard-navigable menus, visible focus rings, semantic HTML5 landmarks, and verified contrast ratios in both Light and Dark modes.

---

## 6. Success Metrics (Proposal KPIs)
- **Performance:** Google Lighthouse Performance & Accessibility score `>= 95/100`.
- **Responsiveness:** Zero horizontal overflow across viewports from `320px` (mobile) to `1920px` (desktop).
- **Lead Conversion:** Reduce parent inquiry completion time to `< 45 seconds` with real-time validation and instant confirmation feedback.