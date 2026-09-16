# Slides — Your Open Source Standard Is Just Another Lock-In

A 25-minute two-hander: Simon bills an "open standards" architecture for everything it
actually cost to adopt; Thomas defends. Neither wins — the question turns out to be the
wrong one.

## Outline

Three acts, then a fourth that zooms out. Each of the first three takes **one theme, one
question, one standard** — and spends its
slides both answering the question and showing what is wrong with it. The act map opens
each act with that row lit; a rail across the top of every slide shows which question is
live. Each act closes by adding one line item to a running invoice — no amounts yet, so
each close carries a single idea.

| | Theme | Question | Standard |
| --- | --- | --- | --- |
| **Act I** | Portability | what do you get? | Kubernetes |
| **Act II** | Progress | how does it move? | OpenTelemetry |
| **Act III** | Ownership | who owns it? | OpenFeature |
| **Act IV** | Return | what does it buy a vendor? | *all three* |

**Act I — Portability · what do you get? · Kubernetes**
- *The answer:* Deployments, Services, RBAC, Helm, CI, `kubectl` — moved in an afternoon.
  Then the wall: every product certified against Kubernetes v1.34 — 80 logos plus the rest
  by name, generated from `cncf/k8s-conformance` into `components/Distributions.vue` and
  `public/logos/distros/`
- *The problem with the question:* StorageClasses, LoadBalancer annotations, IAM bindings,
  autoscaler, ingress and cert controllers, managed control-plane defaults. Six weeks, and
  certified by nothing. Conformance certifies a floor nobody lives on
- *And the one that hit everybody at once:* ingress-nginx. Announced for retirement in 2025;
  from March 2026 no releases, no bugfixes, and no patches for security vulnerabilities. The
  recommended path is Gateway API — a different object, so a migration, not a swap. It
  landed on all 131 certified distributions identically, because conformance certified the
  Ingress object and not the thing implementing it. Thomas's answer is real: the API held,
  and you had a dozen implementations to choose from *because* the interface was standard
- *Invoice — **Migrating**: the operational layer conformance didn't cover · 6 weeks, the platform team*

**Act II — Progress · how does it move? · OpenTelemetry**
- *It moved the whole industry:* one SDK any backend; traces, metrics and logs in one
  pipeline; semantic conventions everyone speaks. Leave on Friday, any Friday
- *Slowly:* seven years from OpenTracing to a stable spec
- *And only where everyone agreed:* a spec holds what everyone could agree to, not what any
  one of them does best — what a vendor calls a differentiator, a committee calls out of
  scope. Paid in capability, not in weeks
- *More slowly than the vendor did:* auto-discovery, RUM, profiling and sampling all worked
  before you left the agent
- *And sometimes under your feet:* `http.method` → `http.request.method`, touching every
  dashboard, alert and SLO. Two re-instrumentations, neither by choice
- *The problem with the question:* slow and narrow is what consensus costs, and consensus
  is the product
- *Invoice — **Keeping up**: re-instrumenting when the spec moves, and waiting for what
  consensus hasn't reached · 2 migrations, everyone with a dashboard*

**Act III — Ownership · who owns it? · OpenFeature**
- *Setting up the question:* the evaluation API, every SDK, the one-line provider swap —
  scoped small on purpose. And everything that isn't code: flag definitions, targeting
  rules, segments, experiment data, approvals. The code was standardised; the data stayed
  put, and the feature you wanted is now "join the working group"
- *The answer:* CNCF DevStats — one contributor carries most of the commits, **and the spec
  still isn't theirs**. Concentration of work is not concentration of control; what capacity
  buys is priority, not veto
- *When it actually goes wrong:* NATS. Donated to the CNCF in 2018; in 2025 the donor announced
  future releases would be Business Source Licence and asked for the trademark back. The CNCF
  petitioned the US trademark office and it settled in weeks, with both trademarks assigned
  to the Linux Foundation and the relicence never landing. Simon raises it and loses it — somebody did try, and the
  governance held
- *The problem with the question:* the door is real and nobody can padlock it — not the
  founder, not the foundation. Whether that matters is act IV's question
- *Invoice — **Steering**: contribution, and it is optional · 1 working group, 1 engineer indefinitely. The bill is headed **from: the community** from the opening slide — the provocation is not who sent it, but that the community sends one at all*

**The reckoning** — after act III, before act IV

The bill has been accumulating one line per act; completing it is the payoff of the
three-act structure, so it lands here rather than later.

- *Archived vs discontinued* — the last cost consideration, and the only one that is not
  about you leaving but about it leaving you. Six archived CNCF projects against three
  proprietary shutdowns, and the argument is the notice period: 60 days (Docker Cloud),
  3 months (Heroku free dynos), 12 months (Google Cloud IoT Core), against a left column
  where notice is a meaningless idea because nothing was withdrawn. The claim is
  deliberately *not* "no data export" — it is that there was nowhere to take it
- *The bill, complete.* Amounts first: 6 weeks, 2 migrations, 1 engineer indefinitely —
  and nothing on it in euros. Then Thomas's reveal, the `from: a vendor` column against the
  same three line items: exit fees, forced upgrades, enterprise tier. There was never a
  column marked zero. The one row the vendor genuinely wins is said plainly — escalation is
  fast, *if what you need is already on their roadmap*
- *The Currency row.* The three charges grey out as it lands — the amounts are no longer
  the point. Theirs first: money + tool knowledge, **non-convertible**. Then yours:
  engineering time + domain knowledge, **convertible**. Same size invoice, different currency
- *The job ad* — the proof of that claim, so it sits beside it. Kubernetes and
  OpenTelemetry named as requirements; no vendor product named at all

**Act IV — Return · what does it buy a vendor? · all three**

Opens on the same three boxes as the opening claim slide, lit again twenty minutes later
and now framed as a question. It has no standard of its own — the rail shows all three.
The bill is already on the table; this act is the other half of the page, and it is the
only act that is not a prosecution. Thomas owns it.

- *Before / the standard / After* — the entry cost fell, so a second vendor became
  affordable, and that is the only reason the door is worth anything. Deliberately generic:
  the pattern is on the slide, the OpenTelemetry and OpenFeature specifics are in Thomas's
  mouth. Simon takes the last word — the moat did not vanish, it moved up

**The turn**

- Not *whether* you are locked in. *To whom*

**Takeaways**
- Evaluate the governance, not just the spec
- Contribution is self-interest
- The answer you don't want is *nobody* — an unmaintained standard keeps every constraint and loses the counterparty
- Homework: pick one standard you depend on and find out who controls its roadmap — not
  the logo, the chart

The conformance wall is generated. Regenerate it before the talk — the certified set moves
every release, and a stale number is the one thing an audience will fact-check live:

```bash
node tools/build-distributions.mjs v1.34   # pick a version that has finished filling up
```

It rewrites `components/Distributions.vue` and `public/logos/distros/`, then prints the
product count to put in the slide footer. Logos come from whatever URL each vendor listed
in `cncf/k8s-conformance`, so the logo/name split shifts a little run to run as vendor
links come and go.

`cfp.md` holds the submitted abstract and a table tracking which promised argument lands
where. `talk-dialog.md` is the full script; its `[SLIDE: …]` cues are kept in one-to-one
order with `slides.md`, which carries the same beats as presenter notes.

**Timing:** 31 slides for a 25-minute two-hander. Several are near-wordless (the three act maps, the
rename, the distribution wall, the invoice) but it is tight — rehearse before cutting, and see the cut
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
