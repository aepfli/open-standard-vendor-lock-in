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

| Promised | Where it lands | Status |
| --- | --- | --- |
| Migration costs | Act I cost (six weeks), Act II cost (leaving the agent), and the Migration line on the invoice in both columns | covered |
| Governance slowdowns | Act II cost (timeline), Act III cost ("join the working group") | covered |
| Specs shaped by committee | Act II own, Act III own (DevStats) | covered |
| Lowers barrier to entry | "Before the standard / After" | covered |
| No single vendor controls the roadmap | Act II own (OTel: no single colour) | covered |
| Diversity of implementations | "After" — the category has new names in it | thin — only a click |
| Genuine user choice | the turn: "not whether, but to whom" | covered |
| Interoperability without renegotiating integrations | the Kubernetes conformance wall — ~125 products, same manifests | covered |
| Lowest-common-denominator risk | — | **not on a slide** |
| CNCF graveyard | Archived vs Discontinued | covered |
