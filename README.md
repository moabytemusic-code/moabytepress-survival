# Survival Division - Moabyte Press

This is the Next.js application for `survival.moabytepress.com`, a tactical authority site for food resilience and survival systems.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Deployment:** Vercel
- **Email:** Brevo API

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Set Environment Variables:**
   Create a `.env.local` file in the root:
   ```env
   BREVO_API_KEY=xkeysib-...
   BREVO_LIST_ID=123 (Optional: ID of the list to add contacts to)
   LEADMAGNET_DOWNLOAD_URL=https://... (Direct link to PDF)
   # GA4_ID=G-XXXX (Optional)
   ```

3. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/app`: App Router pages and API routes.
  - `books/`: Book library and details.
  - `systems/`: Core pillars (Production, Stability, Independence).
  - `blog/`: Field notes index and dynamic posts.
  - `api/subscribe/`: Brevo integration endpoint.
- `src/components`: Reusable UI components (`Header`, `Footer`, `CTAForm`, `BookCard`).
- `src/lib`: Data utilities (`blog.ts`, `data.ts` for books).
- `src/content/posts`: Markdown files for blog posts.
- `public/images`: Static assets (generated via AI).

## Content Management

### Adding a New Book
Edit `src/lib/data.ts` and add a new object to the `books` array. ensure you add the cover image to `public/images`.

### Adding a New Blog Post
Create a new `.md` file in `src/content/posts/`.
Format:
```markdown
---
title: "Your Title"
date: "YYYY-MM-DD"
category: "category-slug"
excerpt: "Short description."
---

## Heading
Content...
```

## Deployment

Connect this repository to Vercel.
Root directory: `survival` (if monorepo) or root.
Add the Environment Variables in Vercel project settings.

## Design System
Colors are defined in `src/app/globals.css`.
- Primary Green: `#3F5234`
- Background: `#FDFBF7`
- Text: `#1A1A1A`
