# Sarah's Alley Cake Co. — Website

A modern, mobile-first, SEO/AEO/GEO-optimized website for **Sarah's Alley Cake Co.**
(412 22nd Ave, Northport, AL 35476), built as a fast, dependency-free static site.
Brand palette and styling are drawn directly from the bakery's logo: blush pink,
mint green, cream lace, orchid script and retro black lettering.

## 🚀 Get the preview hosted on GitHub Pages (5 minutes)

1. Create a new repository on GitHub (e.g. `alley-cake-co`). Public repos get free Pages hosting.
2. Upload **all files in this folder** to the repository (drag-and-drop works on github.com → *Add file → Upload files*). Keep the folder structure (`assets/...`) intact.
3. In the repo, go to **Settings → Pages**.
4. Under *Build and deployment*, set **Source: Deploy from a branch**, choose branch **main** and folder **/ (root)**, then Save.
5. Wait ~1 minute. Your preview will be live at:
   `https://YOUR-USERNAME.github.io/alley-cake-co/`

That URL is the "preview link" to share with the owner.

## 📁 What's inside

| File | Purpose |
|---|---|
| `index.html` | Homepage — hero, occasions, featured cakes, menu preview, story, FAQ, hours |
| `menu.html` | Full menu & pricing (with Menu structured data) |
| `gallery.html` | Cake gallery + Instagram call-to-action |
| `about.html` | Sarah's story (25+ yrs, Food Network) |
| `contact.html` | Order request form, hours, map, contact info |
| `404.html` | Branded "page not found" page |
| `sitemap.xml`, `robots.txt` | Search & AI crawler configuration |
| `assets/css/style.css` | All styling (brand variables at the top for easy re-tinting) |
| `assets/js/main.js` | Mobile nav, scroll animations, form fallback |

## 🔍 SEO / AEO / GEO — what's built in

- **SEO (search engines):** unique titles & meta descriptions per page, canonical URLs,
  semantic HTML5, breadcrumb + LocalBusiness (`Bakery`) + `Menu` structured data with
  real prices, geo meta tags, Open Graph/Twitter cards, XML sitemap, fast no-framework
  code, lazy-loaded images with descriptive alt text.
- **AEO (answer engines — featured snippets, voice search):** an FAQ section with
  `FAQPage` schema that directly answers the questions customers actually ask
  (location, lead time, pricing, hours, how to order).
- **GEO (generative engines — ChatGPT, Claude, Perplexity, Google AI Overviews):**
  clear entity information (who/what/where in plain sentences), consistent
  name-address-phone on every page, robots.txt that explicitly welcomes AI crawlers,
  and structured data that makes the business machine-readable.
- **Local SEO:** Northport + Tuscaloosa keywords, embedded Google Map, `areaServed`,
  opening hours schema, and a "Get Directions" link.

## ✅ Before going live on the real domain (checklist)

1. **Order form:** create a free form at [formspree.io](https://formspree.io), then in
   `contact.html` replace `FORM_ID` in the form's `action` attribute. (Until then the
   form falls back to opening the visitor's email app — nothing breaks.)
2. **Photos:** images are currently loaded from the existing site's Squarespace CDN so
   the preview looks real. Before Squarespace is cancelled, download the photos and put
   them in `assets/img/`, then update the `<img src>` paths. Adding gallery photos is
   copy-paste — see the comment in `gallery.html`.
3. **Custom domain:** in repo *Settings → Pages → Custom domain*, enter
   `www.alleycakecompany.com` and update the domain's DNS (GitHub shows the records).
   The canonical URLs, sitemap and robots.txt already point at the final domain.
4. **Google Business Profile:** make sure the listing uses the exact same
   name/address/phone as the site (412 22nd Ave · (205) 345-8610) — consistency is a
   big local-ranking factor.
5. **Verify coordinates:** the geo coordinates (33.2290, -87.5768) are close
   approximations of 412 22nd Ave — grab the exact pin from Google Maps if you want
   them perfect.
6. **Search Console:** submit `sitemap.xml` in Google Search Console after launch.

## 🎨 Changing colors, fonts or text

All brand colors live at the top of `assets/css/style.css` as CSS variables
(`--blush`, `--mint`, `--orchid-deep`, …) — change once, updates everywhere.
All text is plain HTML — edit directly in each page.
