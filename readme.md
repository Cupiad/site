# Personal website

A plain static site (HTML, CSS and a bit of JavaScript) listing my machine and software projects. There's no build step and nothing to install.

```
index.html          project overview (grid of pictures + titles)
project.html        project page (description, spec sheet, gallery)
legal.html          imprint (Offenlegung) + privacy policy
js/projects.js      ← all project content lives here
js/main.js          builds the pages from projects.js
css/style.css       all styling (colors and fonts at the top)
fonts/              self-hosted web fonts (no Google requests)
img/                favicon + placeholder images
img/projects/<id>/  your project photos
netlify.toml        tells Netlify to publish the folder as is
```

## Add a project

1. Make a folder `img/projects/<id>/` and put the photos in it. Resize them to about 1600 px wide (JPG or WebP) so the page loads fast, and remove the metadata, because phone photos contain the GPS location where they were taken. This does both:
   `ffmpeg -i IMG_1234.jpg -vf "scale='min(1600,iw)':-2" -map_metadata -1 -q:v 3 cover.jpg`
   Optionally make a small version of the cover for the overview page, so it loads fast:
   `ffmpeg -i cover.jpg -vf "scale=800:-2" -q:v 4 thumb.jpg`
   The originals in `webseite projekt fotos/` still contain GPS data. That folder is in `.gitignore` so it never gets published.
2. Open `js/projects.js`, copy one `{ ... }` block, paste it at the top of the list and fill it in:

```js
{
  id: "my-new-machine",            // unique, used in the URL
  title: "My New Machine",
  type: "machine",                 // "machine", "software" or "carpentry"
  year: 2026,
  tags: ["Steel", "Arduino"],
  cover: "img/projects/my-new-machine/cover.jpg",
  thumb: "img/projects/my-new-machine/thumb.jpg",   // optional
  images: [
    "img/projects/my-new-machine/1.jpg",
    { src: "img/projects/my-new-machine/2.jpg", caption: "Wiring" },
  ],
  description: `
    <p>What it is, why I built it, how it works…</p>
  `,
  links: [{ label: "GitHub", url: "https://github.com/..." }],
},
```

Projects without photos use one of the placeholder images in `img/`. Once you have a picture, change the `cover` path.

## Preview locally

Double-click `index.html`. It works straight from the file system, so you don't need a server.

## Deploy on Netlify

Push the repo to GitHub, then in Netlify go to **Add new site → Import an existing project**, pick the repo and leave the build command empty. The publish directory comes from `netlify.toml`. Every push to `master` deploys again.

You can also drag the whole folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

## Customize

- **Name, intro text, contact links:** `index.html`, `project.html` and `legal.html` (topbar + footer)
- **Imprint & privacy policy:** `legal.html`. Update it if you ever add something that loads from another site (YouTube embeds, analytics, a contact form…)
- **Colors and fonts:** the `:root` block at the top of `css/style.css`
- **Filter categories:** the buttons in `index.html` plus `TYPE_LABELS` in `js/main.js`
