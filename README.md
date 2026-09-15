# Slides — Your Open Source Standard Is Just Another Lock-In

A 25-minute two-hander: Simon bills an "open standards" architecture for everything it
actually cost to adopt; Thomas defends. Neither wins — the question turns out to be the
wrong one.

## Outline

Three acts, one standard each. Each act ends with a row added to a running invoice.

**Act I — Portability · Kubernetes**
- Conformance is real: 100+ certified distributions, one suite, one `kubectl`
- Deployments, Services, RBAC, Helm, CI pipelines all moved in an afternoon
- What conformance does not certify: StorageClasses, LoadBalancer annotations, IAM
  bindings, ingress and cert controllers, managed control-plane defaults
- Six weeks in the column nobody lives in
- *Invoice: portable API, non-portable operations*

**Act II — Time and effort · OpenTelemetry**
- Seven years from OpenTracing to a stable spec, via a merge and three stability
  milestones
- Consensus is slow because consensus is the product
- `http.method` → `http.request.method`: a rename that touched every dashboard, alert
  and SLO that filtered on it
- The customer instrumented once and re-instrumented twice, neither time by choice
- *Invoice: the standard moved, and you moved with it*

**Act III — Ownership · OpenFeature**
- Scoped small and shipped fast, deliberately, having watched OpenTelemetry
- Portable: the evaluation API, the SDKs, the one-line provider swap
- Not portable: flag definitions, targeting rules, segments, experiment data, approval
  workflow — the code was standardised, the data stayed put
- Success slows the spec: once production depends on it, every change is a multi-vendor
  negotiation ("join the working group")
- CNCF DevStats: open on paper, one company's roadmap in practice — and what it took to
  stop being that
- The counter-argument: the standard is what makes the *second* vendor affordable, which
  is the only reason the door is worth anything
- *Invoice: one door, one company behind it*

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

`talk-dialog.md` is the full script; `slides.md` carries the same beats as presenter notes.

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
