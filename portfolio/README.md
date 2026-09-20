# Maryam Zaman — Portfolio

React + Vite single-page portfolio.

## Run it

```bash
npm install
npm run dev
```

Open the localhost URL it prints (usually http://localhost:5173).

To make a production build:

```bash
npm run build      # output goes to dist/
npm run preview    # preview that build locally
```

## Adding your own photo

1. Put your image file in the `public` folder — for example `public/maryam.jpg`.
2. Open `src/components/Hero.jsx` and change this line near the top:

   ```js
   const PHOTO_SRC = null
   ```

   to:

   ```js
   const PHOTO_SRC = '/maryam.jpg'
   ```

   The leading slash matters: anything in `public` is served from the site root.
3. Save. The dev server reloads and your photo fills the card in place of the
   "MZ" monogram.

Notes:
- A portrait-shaped image works best — the card is roughly 4:4.6. The image is
  cropped with `object-fit: cover`, so it fills the card without stretching.
- Keep it under ~500 KB. Resize to about 800px wide before adding it.
- `.jpg`, `.png`, and `.webp` all work.
- Set `PHOTO_SRC` back to `null` at any time to return to the monogram.

## Where things live

```
src/
  main.jsx            entry point
  index.css           colour + font tokens, page background
  App.jsx             section order
  App.css             .wrap container, .tag pill, .torn panel
  components/
    Nav.jsx           sticky header + mobile menu
    Hero.jsx          headline, portrait card, stats   <- photo goes here
    About.jsx         pull quote + bio
    Experience.jsx    work history
    Skills.jsx        expertise grid
    Projects.jsx      selected work + "also shipped"
    CaseStudy.jsx     Virtual Vogue write-up
    Approach.jsx      working principles
    Education.jsx     degree, certs, languages
    Contact.jsx       contact links
    Footer.jsx
    Doodles.jsx       the hand-drawn SVG marks (stars, scribble, brackets)
```

## Changing colours

Every colour is a CSS variable at the top of `src/index.css`. Change
`--magenta` or `--burgundy` there and the whole site follows.

## Editing content

Each section keeps its content in a plain array at the top of its file
(`ROLES`, `SKILLS`, `PROJECTS`, `ALSO_SHIPPED`, `ITEMS`, `CHANNELS`). Edit the
array, not the JSX below it.

The GitHub and LinkedIn URLs in `src/components/Contact.jsx` are placeholders —
swap in your real profile links.
"# maryam-portfolio-" 
