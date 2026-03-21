# Michail Karnas Portfolio

Portfolio site for Michail Karnas, built with Next.js 14, Tailwind CSS, and Framer Motion.

## Stack

- Next.js 14 App Router
- Tailwind CSS
- Framer Motion
- MDX case studies
- React Hook Form

## Local development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Environment variables

Create `.env.local` and set:

```env
NEXT_PUBLIC_SITE_URL=https://michailkarnas.com
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

## Notes

- The contact form requires a valid Formspree endpoint.
- Case studies live in `content/projects/*.mdx`.
- The hero uses the real portrait in `public/michail-karnas-photo.png`.
