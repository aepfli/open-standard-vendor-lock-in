# Slides — Your Open Source Standard Is Just Another Lock-In

A 25-minute two-hander: Simon bills an "open standards" architecture for everything it
actually cost to adopt; Thomas defends. Neither wins — the question turns out to be the
wrong one.

## Outline

Three acts. Each act takes **one theme, one question, one standard** — and spends its
slides both answering the question and showing what is wrong with it. The act map opens
each act with that row lit; a rail across the top of every slide shows which question is
live. Each act closes with a row added to a running invoice.

| | Theme | Question | Standard |
| --- | --- | --- | --- |
| **Act I** | Portability | what do you get? | Kubernetes |
| **Act II** | Time | what does it cost? | OpenTelemetry |
| **Act III** | Ownership | who owns it? | OpenFeature |

**Act I — Portability · what do you get? · Kubernetes**
- *The answer:* Deployments, Services, RBAC, Helm, CI, `kubectl`. 100+ certified
  distributions, one conformance suite, since 2017. Moved in an afternoon
- *The problem with the question:* StorageClasses, LoadBalancer annotations, IAM bindings,
  autoscaler, ingress and cert controllers, managed control-plane defaults. Six weeks, and
  certified by nothing. Conformance certifies a floor nobody lives on
- *Invoice: portable API, non-portable operations*

**Act II — Time · what does it cost? · OpenTelemetry**
- *What you are paying for:* one SDK any backend; traces, metrics and logs in one pipeline;
  semantic conventions everyone speaks. Leave on Friday, any Friday
- *The answer:* seven years from OpenTracing to a stable spec; everything the vendor agent
  did for free; `http.method` → `http.request.method` touching every dashboard, alert and
  SLO. Two re-instrumentations, neither by choice
- *The problem with the question:* the price bought consensus, and consensus is the product
- *Invoice: the standard moved, and you moved with it*

**Act III — Ownership · who owns it? · OpenFeature**
- *Setting up the question:* the evaluation API, every SDK, the one-line provider swap —
  scoped small on purpose. And everything that isn't code: flag definitions, targeting
  rules, segments, experiment data, approvals. The code was standardised; the data stayed
  put, and the feature you wanted is now "join the working group"
- *The answer:* CNCF DevStats — open on paper, one company's roadmap in practice, and what
  it took to stop being that
- *The problem with the question:* the standard is what makes the *second* vendor
  affordable, which is the only reason the door is worth anything — and the moat moved up
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
where. `talk-dialog.md` is the full script; its `[SLIDE: …]` cues are kept in one-to-one
order with `slides.md`, which carries the same beats as presenter notes.

**Timing:** 26 slides for a 25-minute two-hander. Several are near-wordless (the three act
maps, the rename, the invoice) but it is tight — rehearse before cutting, and see the cut
candidates at the bottom of `talk-dialog.md`.

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
