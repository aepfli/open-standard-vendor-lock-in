# Your Open Source Standard Is Just Another Lock-In

The submitted session proposal. Kept in the repo so the talk can be checked against
what was actually promised to the programme committee.

## Speakers

**Simon Schrottner** — Sessionize: simon.schrottner@gmail.com · <https://schrottner.at/talks/>

**Thomas Schuetz** — Sessionize: _[TODO]_ · talks: _[TODO]_

## Abstract

> Open source standards promise freedom, vendor neutrality, interoperability and no single
> company pulling the strings.
>
> But swap one proprietary API for OpenTelemetry, OpenFeature, or Kubernetes — and ask
> yourself honestly: how easy is it to leave?
>
> In this session, two independent practitioners take the stage on opposite sides of that
> question. One argues the lock-in is real — migration costs, governance slowdowns, specs
> shaped by committee rather than conviction. The other argues the opposite: that
> community-owned consensus is exactly what makes innovation possible, ecosystems diverse,
> and startups viable without building their own moat.
>
> No vendor slides. No easy answers. Just the argument your architecture deserves.

## Benefits to the ecosystem

Open source standards lower the barrier for new entrants. A startup doesn't need to
convince enterprises to adopt their proprietary API — they build to a shared language the
ecosystem already understands. That changes who gets to participate.

Community-owned governance distributes the roadmap. No single vendor controls direction,
which means implementations can diverge, experiment, and compete — diversity that
proprietary standards structurally prevent.

The result is an ecosystem where innovation happens at the edges, adoption friction drops,
and users have genuine choice rather than the illusion of it.

## The two sides

| Pro | Con |
| --- | --- |
| Lowers barrier to entry — startups adopt a shared language instead of building their own moat | Consensus is slow — standards can ossify before they ship |
| No single vendor controls the roadmap | Governance conflicts between competing vendors shape the spec as much as user needs do |
| Diversity of implementations drives innovation at the edges | Migration costs exist even between compliant implementations |
| Genuine user choice, not the illusion of it | Lowest-common-denominator risk — specs converge on what everyone can agree on, not what's best |
| Interoperability across tools and vendors without renegotiating every integration | CNCF graveyard — not every standard survives long enough to matter |

## Three takeaways

1. **Evaluate governance, not just the spec.** Who owns the roadmap matters as much as
   what's in it.
2. **Contribution is self-interest.** If you're not in the room, someone else's priorities
   shape the standard you depend on.
3. **Open standards are only as good as the community behind them.** A standard nobody
   maintains is just slower lock-in.

## Coverage check

Where each promised argument currently lands in the deck. See `README.md` for the full
outline and `talk-dialog.md` for the script.

| Promised | Act | Where it lands | Status |
| --- | --- | --- | --- |
| **Pro** — Lowers barrier to entry | IV | "Before / the standard / After" | covered |
| **Pro** — No single vendor controls the roadmap | III | "and the spec still isn't theirs"; and the NATS slide, where a donor tried to take a project back and the foundation stopped it | covered |
| **Pro** — Diversity of implementations | I, IV | the conformance wall (131 products, real logos); "the category has new names in it" | covered |
| **Pro** — Genuine user choice | turn | "not *whether* you're locked in. *To whom.*" | covered |
| **Pro** — Interoperability without renegotiating | I | the conformance wall — same manifests on all of them | covered |
| **Con** — Consensus is slow | II, III | the timeline; "join the working group" | covered |
| **Con** — Governance conflicts shape the spec | II, III | "who decided those names? vendors"; DevStats | covered |
| **Con** — Migration costs between compliant implementations | I, II | "Took six weeks"; "What it cost to leave the agent", the rename | covered |
| **Con** — Lowest-common-denominator risk | II | "The intersection, not the union" | covered |
| **Con** — CNCF graveyard | IV | Archived vs Discontinued | covered |

## Claim density

How the ten promised claims distribute across the acts. The count is claims *landed on a
slide*, so a claim landing twice is counted in both acts.

| Act | Pro | Con | Total | Note |
| --- | --- | --- | --- | --- |
| I — Portability · Kubernetes | 2 | 1 | **3** | balanced |
| II — Progress · OpenTelemetry | 0 | 4 | **4** | densest, and entirely prosecution |
| III — Ownership · OpenFeature | 1 | 2 | **3** | balanced by the NATS slide |
| IV — Market | 3 | 1 | **4** | densest, and almost entirely defence |

Two things fall out of this.

**The Pro and Con claims are segregated by act, not mixed.** Acts II and III carry no Pro
claim on any slide — they are pure prosecution, and every promised benefit lands in acts I
and IV. That is the deliberate shape of the talk (the invoice is one-sided until round 4),
but it means a listener who leaves at the break has heard only the case against. Thomas's
spoken defence in rounds 1–3 is doing all of the balancing work, and none of it is on a
slide. See the note in `talk-dialog.md` about not cutting his promise of the second column.

**Act III used to be the thinnest.** The NATS slide fixes that: it is the only place in the
talk where the failure mode is documented rather than hypothetical, and it lands the one Pro
claim that previously had no slide. It is still the longest round, so it remains the first
place to look if the talk overruns — but cut the OpenFeature contribution nuance before the
NATS case, not the other way round.
