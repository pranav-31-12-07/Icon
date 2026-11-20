# Technical Implementation Specification (`technical.md`) — Icon English School

## 1. HTML5 & Semantic Standards
- **Document Structure:** Every page (`index.html` through `contact.html`) must declare `<!DOCTYPE html>`, `<html lang="en" data-theme="light">`, responsive viewport meta (`width=device-width, initial-scale=1.0`), and unique `<title>` + `<meta name="description">` tags referencing both **Chhatrapati Sambhajinagar** and **Aurangabad** for local search visibility.
- **Landmarks:**
  - `<a href="#main-content" class="skip-link">Skip to main content</a>` as the first focusable element.
  - `<header>` containing brand identity, primary `<nav aria-label="Main Navigation">`, Theme Toggle button, and mobile menu trigger.
  - `<main id="main-content">` wrapping page-specific sections.
  - `<footer>` containing quick links to all 7 pages, verified school address, phone numbers, and updated copyright.

---

## 2. CSS & Theme Switcher Specification
- **Token Architecture (`css/tokens.css`):**
  ```css
  :root,
  [data-theme="light"] {
    --bg-canvas: #FAFBF9;
    --bg-surface: #FFFFFF;
    --text-primary: #0F1715;
    --brand-primary: #00612E;
    --brand-accent: #E6BE1E;
    /* ...all semantic tokens */
  }

  [data-theme="dark"] {
    --bg-canvas: #0B1110;
    --bg-surface: #131D1B;
    --text-primary: #F2F7F5;
    --brand-primary: #2ECC71;
    --brand-accent: #F1C40F;
    /* ...all semantic tokens */
  }
  ```
- **Responsive Breakpoints:**
  - `sm`: `480px` (Small mobile adjustments, full-width stacked buttons)
  - `md`: `768px` (Tablet layout, mobile hamburger drawer switches to horizontal desktop navbar)
  - `lg`: `1024px` (Multi-column grids for Facilities, Gallery, and Contact split layout)
  - `xl`: `1280px` (Max container width `1200px` centered with `20px` horizontal gutters)

---

## 3. Interactive Component Specifications

### 3.1 Theme Switcher Button
- **Markup:** `<button type="button" id="theme-toggle" aria-label="Switch to dark mode" aria-pressed="false">`
- **Behavior:** Toggles `light` / `dark` theme, updates `aria-label` dynamically (`"Switch to light mode"` when dark is active), and persists selection in `localStorage`.

### 3.2 Mobile Navigation Drawer (`< 768px`)
- **Behavior:** Clicking hamburger button sets `aria-expanded="true"`, slides drawer in from right over `300ms`, traps `Tab` focus inside the drawer while open, and closes on `Escape` key or backdrop click.

### 3.3 Gallery Filter & Lightbox (`gallery.html`)
- **Category Filter:** Filter buttons (`role="tablist"` or `aria-pressed` filter pills) dynamically filter gallery cards with smooth scale/fade transitions.
- **Lightbox Modal:** Clicking any gallery image opens a `<dialog>` modal with `Next`, `Previous`, and `Close` controls, supporting `ArrowLeft`, `ArrowRight`, and `Escape` keyboard navigation.

### 3.4 Validated Forms (`admission.html` & `contact.html`)
- **Fields (`contact.html`):**
  - `Full Name` (`required`, min 2 chars)
  - `Email Address` (`required`, RFC-5322 pattern)
  - `Phone Number` (`optional` on general contact, `required` 10-digit Indian mobile on Admission inquiry)
  - `Enquiry / Message` (`required`, min 10 chars)
- **Error Handling:** Inline error spans linked via `aria-describedby`, `aria-invalid="true"` on invalid inputs, and automatic focus on the first invalid field upon submit.

---

## 4. Performance, SEO & Migration Checklist
1. **Legacy URL Redirects:** Include `.htaccess` or client-side fallback redirects so old links like `/contact.php` or `/about.php` seamlessly resolve to `/contact.html` and `/about.html` without 404 errors.
2. **Image Optimization:** All campus/gallery images use `loading="lazy"`, explicit `width`/`height` attributes (preventing Cumulative Layout Shift), and descriptive `alt` text.
3. **Accessibility Verification:** Zero contrast violations in both Light and Dark themes; all interactive controls meet `44px × 44px` minimum touch target size.