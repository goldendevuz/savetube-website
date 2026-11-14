# SaveTube — Website

The website for [SaveTube](https://github.com/goldendevuz/savetube-android), an open-source YouTube and YouTube Music client for Windows and Android. It is a fork of the [Flow website](https://github.com/Flow-Tube/Flow-Website) by A-EDev (GPL-3.0), changed for SaveTube. There is no paid version.

Live site: https://goldendevuz.github.io/savetube-website/

- [SaveTube for Android](https://github.com/goldendevuz/savetube-android)
- [SaveTube for Windows](https://github.com/goldendevuz/flow-desktop)
- [SaveTube browser extension](https://github.com/goldendevuz/savetube-extension)

## Stack

Vite, React, TypeScript, Tailwind CSS and Framer Motion.

## Run it

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
```

The site is deployed to GitHub Pages by `.github/workflows/pages.yml` on every push to `main`. Pages serves the site from `/savetube-website/`, so the workflow builds with `SITE_BASE=/savetube-website/`. Any other host can build without it.

## Licence

GPL-3.0, like the original. See `LICENSE`.

Original work: Copyright © A-EDev, [Flow-Tube/Flow-Website](https://github.com/Flow-Tube/Flow-Website). SaveTube's changes are released under the same licence.
