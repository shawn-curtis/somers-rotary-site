# Rotary Club of Somers, CT — Website

A complete, responsive marketing website for the Rotary Club of Somers, Connecticut. Built with plain **HTML5, CSS3, and vanilla JavaScript** — no framework, no build step. A non-technical volunteer can host it anywhere (Netlify, GitHub Pages, or paste it into most site builders) and edit it in any text editor.

---

## Folder structure

```
somers-rotary-site/
├── index.html            Home (hero + news feed + sidebar)
├── about.html            History, mission, Four-Way Test, community work
├── events.html           Events list, signature fundraiser, calendar area
├── scholarships.html     Program info, Download Application button, deadlines
├── projects.html         Community + international service project grid
├── news.html             Full archive of story/bulletin cards
├── contact.html          Contact form, mailing address, map area
├── css/
│   └── styles.css        All styles (mobile-first, Rotary brand colors)
├── js/
│   └── main.js           Hamburger menu, footer year, contact-form handling
├── images/               Placeholder images (replace with real photos)
│   ├── logo-placeholder.png
│   ├── hero.jpg
│   ├── story-1.jpg … story-6.jpg
│   ├── project-1.jpg … project-6.jpg
│   ├── about-community.jpg
│   └── map-placeholder.png
└── files/                (create this) put scholarship-application.pdf here
```

To preview the site, just **double-click `index.html`** — it opens in any browser with no setup.

---

## How to replace the placeholder TEXT

All the information the club still needs to fill in is written in **square brackets**, like `[Meeting Day]` or `[President Name]`. These are easy to find:

1. Open a page in any text editor (Notepad, TextEdit, VS Code, etc.).
2. Use **Find** (Ctrl+F / Cmd+F) and search for `[` to jump between placeholders.
3. Replace the bracketed text — including the brackets — with the real information.
4. Each page starts with an **HTML comment listing every placeholder on that page**, so you can see at a glance what needs changing.

Tip: some placeholders (like `[Facebook URL]`, `[Club Email]`, `[Year Chartered]`) appear in the footer of **every** page. Update them on all seven pages. A "Find in all files" feature (in editors like VS Code) makes this a one-shot change.

---

## How to replace the IMAGES

The `images/` folder holds simple placeholder graphics. Swap them for real photos by **keeping the same file name** — that way you don't have to touch any HTML.

- **`logo-placeholder.png`** — the club/Rotary wheel logo (shown in the header and footer). Use an official Rotary logo per [Rotary's brand guidelines](https://www.rotary.org/en/brand-center). A square PNG with a transparent background works best.
- **`hero.jpg`** — the large banner image behind the homepage headline. Use a wide (~1600×700) photo; the site darkens it automatically so white text stays readable.
- **`story-1.jpg` … `story-6.jpg`** — news/story thumbnails.
- **`project-1.jpg` … `project-6.jpg`** — project photos.
- **`about-community.jpg`** — photo on the About page.
- **`map-placeholder.png`** — replace this with a real Google Map (see below).

Every image has descriptive **alt text** in the HTML for accessibility — when you change what a photo shows, update its `alt="..."` text too.

### Adding a real Google Map
On `index.html` (sidebar) and `contact.html`, find the comment that says `MAP EMBED`. In Google Maps, search your venue → **Share** → **Embed a map** → copy the `<iframe>` code and paste it in place of the `<div class="map-embed">…</div>` block.

### Adding a real calendar
On `events.html`, find the `CALENDAR EMBED` comment. In Google Calendar → **Settings → Integrate calendar → Embed code**, copy the `<iframe>` and paste it in place of the `<div class="calendar-frame">…</div>` block.

### Making the contact form actually send email
The form is front-end only by default (it shows a confirmation but doesn't deliver mail). To receive messages, open `js/main.js` and follow the commented instructions, or use **Netlify Forms** (see hosting option 1). The quickest route is **Formspree**: create a free form at [formspree.io](https://formspree.io), then set the form's `action` in `contact.html` to your Formspree URL.

---

## Free hosting options

You only need to upload the **contents of the `somers-rotary-site` folder**. Pick whichever is easiest.

### Option 1 — Netlify (easiest, drag-and-drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the entire `somers-rotary-site` folder onto the page.
3. Netlify instantly publishes it and gives you a live URL (e.g. `somers-rotary.netlify.app`).
4. **Bonus:** Netlify Forms works automatically — add `data-netlify="true"` to the `<form>` tag in `contact.html` and submissions appear in your Netlify dashboard. No coding required.
5. To use your own domain later, go to **Domain settings** and follow the prompts.

### Option 2 — GitHub Pages (free, good for version history)
1. Create a free account at [github.com](https://github.com) and make a new repository (e.g. `somers-rotary-site`).
2. Upload all the files (drag them into the repo's **Add file → Upload files** page).
3. Go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to *Deploy from a branch*, choose the `main` branch and `/ (root)` folder, then **Save**.
5. Wait about a minute — your site goes live at `https://YOUR-USERNAME.github.io/somers-rotary-site/`.
6. Make sure `index.html` stays in the top level of the repo (it's the homepage).

### Option 3 — Cloudflare Pages (free, fast globally)
1. Create a free account at [pages.cloudflare.com](https://pages.cloudflare.com).
2. Choose **Upload assets** (direct upload) — no coding needed — and drop in the site folder, **or** connect a GitHub repo.
3. Leave the build settings empty (there is no build step) and deploy.
4. You'll get a live `*.pages.dev` URL, and can add a custom domain under **Custom domains**.

> **A note on the logo:** the included wheel is a generic placeholder. Rotary International owns the Rotary name and wheel mark; use the official club logo and follow Rotary's brand guidelines before publishing.

---

## ✅ Pre-launch placeholder checklist

Replace every item below before going live. (Search each page for `[` to find them in context.)

**Club basics (appear in headers/footers on most pages)**
- [ ] `[Year Chartered]` — year the club was founded
- [ ] `[Facebook URL]` — link to the club's Facebook page
- [ ] `[Instagram URL]` — link to Instagram (or remove the icon)
- [ ] `[Club Email]` — main contact email
- [ ] `[Club Phone]` — main contact phone (contact page)

**Meeting details (Home, About, Events, Contact)**
- [ ] `[Meeting Day]` — e.g. "every Tuesday"
- [ ] `[Meeting Time]` — e.g. "12:00 PM"
- [ ] `[Venue Name]` — where the club meets
- [ ] `[Street Address]` — venue street address
- [ ] Google Maps embed (Home sidebar + Contact page)

**Officers (Home sidebar)**
- [ ] `[President Name]`
- [ ] `[Vice President Name]`
- [ ] `[Secretary Name]`
- [ ] `[Treasurer Name]`
- [ ] `[Sergeant-at-Arms Name]`

**About page**
- [ ] `[Number]` — approximate member count

**Events page**
- [ ] `[Annual Fundraiser Name]` — signature fundraiser name
- [ ] `[Month Day, Year]`, `[Start Time]`, `[End Time]` — for each event
- [ ] `[Event Location]`, `[Meeting Point]` — locations
- [ ] `[Mon]` / `[00]` — the little month/day chips on event listings
- [ ] Google Calendar embed

**Scholarships page**
- [ ] `[Scholarship Award Amount]` and `[Number]` of awards
- [ ] `[Application Deadline]`, `[Award Notification Date]`
- [ ] `[High School Name(s)]`, `[Contact Name]`
- [ ] Real application PDF at `files/scholarship-application.pdf`

**News page**
- [ ] `[Month Day, Year]` on each post; edit headlines/excerpts as needed

**Contact page**
- [ ] `[PO Box Number]` — mailing address
- [ ] Wire up the contact form (Formspree or Netlify Forms)

**Images**
- [ ] Replace `logo-placeholder.png` with the official club logo
- [ ] Replace `hero.jpg`, all `story-*.jpg`, `project-*.jpg`, and `about-community.jpg` with real photos
- [ ] Update each image's `alt` text to describe the real photo

**Final checks**
- [ ] Open every page and click through the navigation on desktop and phone
- [ ] Confirm all external links (Rotary International, District 7890, social) work
- [ ] Test the contact form after connecting it to a real service
