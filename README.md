# Slides — Your Open Source Standard Is Just Another Lock-In

A 25-minute two-hander: Simon bills an "open standards" architecture for everything it
actually cost to adopt; Thomas defends. Neither wins — the question turns out to be the
wrong one.

## Outline

Three acts. Each act puts the **same three questions** to one standard, so the audience
learns the pattern in act I, expects it in act II, and knows what is coming in act III —
which is where the third question finally bites. Each act closes with a row added to a
running invoice.

> **1. What do you get?**  **2. What does it cost?**  **3. Who owns it?**

Each act's third question is the one it is really about — but all three get asked every
time, and the on-screen rail shows which one is live.

**Act I — Portability · Kubernetes**
1. *Get* — Deployments, Services, RBAC, Helm, CI, `kubectl`. 100+ certified distributions,
   one conformance suite. Moved in an afternoon
2. *Cost* — StorageClasses, LoadBalancer annotations, IAM bindings, autoscaler, ingress and
   cert controllers, managed control-plane defaults. Six weeks, certified by nothing
3. *Own* — the mark and the suite are the foundation's; the roadmap is the SIGs'
- *Invoice: portable API, non-portable operations*

**Act II — Time and effort · OpenTelemetry**
1. *Get* — one SDK, any backend; traces, metrics and logs in one pipeline; semantic
   conventions everyone speaks. Leave on Friday, any Friday
2. *Cost* — seven years from OpenTracing to a stable spec; `http.method` →
   `http.request.method` touching every dashboard, alert and SLO; everything the vendor
   agent did for free
3. *Own* — no single colour on the contribution chart, which is exactly why the timeline
   looks like that
- *Invoice: the standard moved, and you moved with it*

**Act III — Ownership · OpenFeature**
1. *Get* — the evaluation API, every SDK, the one-line provider swap. Scoped small on
   purpose, having watched OpenTelemetry
2. *Cost* — flag definitions, targeting rules, segments, experiment data, approval
   workflow. The code was standardised; the data stayed put. And the feature you wanted is
   now "join the working group"
3. *Own* — CNCF DevStats: open on paper, one company's roadmap in practice — and what it
   took to stop being that
- Counter-argument: the standard is what makes the *second* vendor affordable, which is the
  only reason the door is worth anything — and the moat moved up
- *Invoice: success slows the spec · one door, one company behind it*

**The exit test**
- Archived vs discontinued — which corpse is easier to exhume
- The invoice has no currency column. The currency is knowledge
- Convertible (what a span is, how a flag evaluates) vs non-convertible (the console, the
  query language) — and a proprietary stack bills the same amount, all of it
  non-convertible
- Not *whether* you are locked in. *To whom*

**Takeaways**
- Evaluate the governance, not just the spec
- Contribution is self-interest
- A standard nobody maintains is just slower lock-in
- Homework: pick one standard you depend on and find out who controls its roadmap — not
  the logo, the chart

`cfp.md` holds the submitted abstract and a table tracking which promised argument lands
where. `talk-dialog.md` is the full script; `slides.md` carries the same beats as presenter
notes.

**Timing:** 28 slides for a 25-minute two-hander. Many are near-wordless (the three topic
stack slides, the fact slides, the invoice) but it is tight — rehearse before cutting, and
see the cut candidates at the bottom of `talk-dialog.md`.

## Running it

```bash
npm install
npm run dev      # live preview with presenter notes (press `o` / open ?presenter)
npm run export   # PDF (needs `npm i -D playwright-chromium` once)
```

Project logos in `public/logos/` come from [cncf/artwork](https://github.com/cncf/artwork).
Kubernetes and OpenTelemetry ship colour marks. The OpenFeature mark is monochrome, so
`ProjectLogo.vue` uses the white SVG as a CSS mask filled with `currentColor` — it picks up
the slide's ink colour and needs no separate black/white file per theme.

Speaker notes (the dialog cues) are in the HTML comments under each slide and show up in Slidev's presenter view.
Search for `TODO` in `slides.md` for the exhibits that still need real material.

## Hosting

Pushes to `main` build the deck and publish it to GitHub Pages via
`.github/workflows/deploy.yml` → https://aepfli.github.io/open-standard-vendor-lock-in/

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
