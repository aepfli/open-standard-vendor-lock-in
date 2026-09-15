---
theme: default
title: Your Open Source Standard Is Just Another Lock-In
info: |
  Simon Schrottner · Thomas Schuetz — 25 min debate
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: fade
mdc: true
---

<!-- Holding slide. Nothing on screen while the hallway conversation starts. -->

<div class="opacity-20 text-sm">🎙</div>

<!--
OPENING — both on stage, lapel mics.
SIMON: "…no, but seriously, you do this every week…"
Stay on this slide until Thomas gives the textbook answer.
-->

---
layout: center
---

# "Never locked in again."

<div class="grid grid-cols-3 gap-8 mt-12 text-2xl">
  <div class="border-2 rounded-xl p-8">
    <div class="text-5xl mb-4">☸</div>Kubernetes<div class="text-sm opacity-60 mt-2">conformant distribution</div>
  </div>
  <div class="border-2 rounded-xl p-8">
    <div class="text-5xl mb-4">🔭</div>OpenTelemetry<div class="text-sm opacity-60 mt-2">traces · metrics · logs</div>
  </div>
  <div class="border-2 rounded-xl p-8">
    <div class="text-5xl mb-4">🚩</div>OpenFeature<div class="text-sm opacity-60 mt-2">vendor-neutral flags</div>
  </div>
</div>

<div class="mt-10 opacity-60">everything CNCF · everything portable</div>

<!--
THOMAS gives the textbook answer here.
SIMON: "That's exactly what I told them five years ago."
Hold through the reveal ("Don't you *maintain* OpenFeature?").
-->

---
layout: cover
class: text-center
---

# Your Open Source Standard<br>Is Just Another Lock-In

<div class="mt-8 text-xl opacity-80">Simon Schrottner · Thomas Schuetz</div>

<!--
Title appears only after "Which is exactly why I'm allowed to say it."
THOMAS to audience: "I'm the defence. This is Simon, the prosecution and also one of the accused."
-->

---
layout: center
---

# "Never locked in again."

<div class="text-lg opacity-60 -mt-2">invoice</div>

<div class="ledger">
  <div class="ghost">—</div>
</div>

<style>
.ledger { width: 100%; max-width: 44rem; margin: 2rem auto 0; font-size: 1.6rem; text-align: left; }
.ledger > div { padding: .55rem 1.2rem; border-bottom: 1px solid rgba(128,128,128,.4); font-size: 1.05rem; opacity: .55; }
.ledger > div.now { padding: 1rem 1.2rem; font-size: 1.8rem; opacity: 1; }
.ledger > div.ghost { font-size: 1.6rem; }
.ledger > div { display: flex; justify-content: space-between; align-items: center; gap: 2rem; }
.ledger .amt { font-variant-numeric: tabular-nums; opacity: .35; white-space: nowrap; text-align: right; }
.ledger > div:first-child { border-top: 3px solid currentColor; }
.ledger .sub { opacity: .6; }
.ledger .ghost { opacity: .25; }
.ledger .knowledge { border-top: 3px solid currentColor; margin-top: 1rem; font-size: 2rem; }
.ledger .split { font-size: 1.05rem; margin-top: .8rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.ledger .split > div { border-left: 3px solid currentColor; padding-left: .8rem; }
.ledger .split .lbl { font-size: .75rem; text-transform: uppercase; letter-spacing: .08em; opacity: .6; }
</style>

<!--
SIMON: "You said 'never locked in again'. Let's keep the bill for that. Every layer of that architecture — what it costs to leave, and what it costs to stay."
THOMAS: "Fine. Start with the one I'm most sure about."
-->

---
layout: center
---

<div class="grid grid-cols-3 gap-8 text-2xl stack">
  <div class="box on"><div class="text-5xl mb-4">☸</div>Kubernetes<div class="text-sm opacity-60 mt-2">conformant distribution</div></div>
  <div class="box"><div class="text-5xl mb-4">🔭</div>OpenTelemetry<div class="text-sm opacity-60 mt-2">traces · metrics · logs</div></div>
  <div class="box"><div class="text-5xl mb-4">🚩</div>OpenFeature<div class="text-sm opacity-60 mt-2">vendor-neutral flags</div></div>
</div>

<style>
.stack .box { border: 2px solid currentColor; border-radius: .75rem; padding: 2rem; opacity: .25; transition: opacity .4s; }
.stack .box.on { opacity: 1; }
</style>

<!--
Topic switch — no words needed. THOMAS just says: "Kubernetes."
TODO: replace emoji with real logos (drop SVGs in public/logos/ and use <img>).
-->

---
layout: two-cols
---

<div class="tag">☸ Kubernetes</div>

# Moved in an afternoon

<div class="mt-4 text-lg">

- Deployments, Services, ConfigMaps
- RBAC, Namespaces, NetworkPolicies
- Helm charts, CI pipelines
- `kubectl` — every single command

</div>

<div class="mt-6 text-sm opacity-60">100+ certified distributions · one conformance suite · since 2017</div>

::right::

# Took six weeks

<div class="mt-4 text-lg">

<v-clicks>

- StorageClasses that don't exist
- LoadBalancer annotations nobody reads
- IAM → ServiceAccount binding (cloud-specific)
- Cluster autoscaler = the cloud's autoscaler in a hat
- Ingress class, cert issuer, DNS controller
- Managed control-plane defaults you never wrote down

</v-clicks>

</div>

<!--
THOMAS opens on the LEFT column: "That's not marketing, that's a test you can run."
SIMON clicks through the RIGHT column, one per item. Each is a real thing the customer hit.
"Conformance certifies the left column. Nobody lives in the left column."
THOMAS: the right column is smaller than the whole compute layer used to be.
-->

---
layout: center
---

# "Never locked in again."

<div class="text-lg opacity-60 -mt-2">invoice</div>

<div class="ledger">
  <div class="now" v-click><span class="body"><span class="sub">Portable API.</span><br><b>Non-portable operations.</b></span><span class="amt">—</span></div>
</div>

<style>
.ledger { width: 100%; max-width: 44rem; margin: 2rem auto 0; font-size: 1.6rem; text-align: left; }
.ledger > div { padding: .55rem 1.2rem; border-bottom: 1px solid rgba(128,128,128,.4); font-size: 1.05rem; opacity: .55; }
.ledger > div.now { padding: 1rem 1.2rem; font-size: 1.8rem; opacity: 1; }
.ledger > div.ghost { font-size: 1.6rem; }
.ledger > div { display: flex; justify-content: space-between; align-items: center; gap: 2rem; }
.ledger .amt { font-variant-numeric: tabular-nums; opacity: .35; white-space: nowrap; text-align: right; }
.ledger > div:first-child { border-top: 3px solid currentColor; }
.ledger .sub { opacity: .6; }
.ledger .ghost { opacity: .25; }
.ledger .knowledge { border-top: 3px solid currentColor; margin-top: 1rem; font-size: 2rem; }
.ledger .split { font-size: 1.05rem; margin-top: .8rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.ledger .split > div { border-left: 3px solid currentColor; padding-left: .8rem; }
.ledger .split .lbl { font-size: .75rem; text-transform: uppercase; letter-spacing: .08em; opacity: .6; }
</style>

<!--
SIMON: "Conformance certifies the left column. Nobody lives in the left column."
THOMAS: the floor is where lock-in *used* to be. Cost moved up and got smaller.
SIMON: "…all CKA certified. Who did they get that from?" — THOMAS: "I may have sold them the training."
-->

---
layout: center
---

<div class="grid grid-cols-3 gap-8 text-2xl stack">
  <div class="box"><div class="text-5xl mb-4">☸</div>Kubernetes<div class="text-sm opacity-60 mt-2">conformant distribution</div></div>
  <div class="box on"><div class="text-5xl mb-4">🔭</div>OpenTelemetry<div class="text-sm opacity-60 mt-2">traces · metrics · logs</div></div>
  <div class="box"><div class="text-5xl mb-4">🚩</div>OpenFeature<div class="text-sm opacity-60 mt-2">vendor-neutral flags</div></div>
</div>

<style>
.stack .box { border: 2px solid currentColor; border-radius: .75rem; padding: 2rem; opacity: .25; transition: opacity .4s; }
.stack .box.on { opacity: 1; }
</style>

<!--
SIMON: "So then we instrumented it."
TODO: replace emoji with real logos (drop SVGs in public/logos/ and use <img>).
-->

---
layout: center
---

<div class="tag">🔭 OpenTelemetry</div>

# How long consensus takes

```mermaid {scale: 0.7}
timeline
    2016 : OpenTracing
    2018 : OpenCensus
    2019 : merge → OpenTelemetry
    2021 : tracing stable
    2022 : metrics stable
    2023 : logs stable
         : HTTP semconv stable
         : http.method → http.request.method
```

<!--
TODO: verify dates against OTel spec release history before final.
SIMON: "So then we instrumented it." Customer instrumented 2021, re-instrumented twice, neither time because they wanted to.
-->

---
layout: fact
---

`http.method`
<div class="text-3xl my-4 opacity-50">↓</div>
`http.request.method`

<div class="mt-10 text-xl opacity-70">every dashboard · every alert · every SLO</div>

<!--
SIMON: "Sounds trivial. It touched everything that filtered on it."
"And who decided those names?"
THOMAS: "Vendors. In a public room, with public notes, and a PR you could have commented on."
-->

---
layout: two-cols
---

<div class="tag">🔭 OpenTelemetry</div>

# What you keep

<div class="mt-4 text-lg">

- One SDK, any backend
- Traces, metrics, logs — one pipeline
- Semantic conventions everyone speaks
- Leave on Friday. Any Friday.

</div>

::right::

# What you lost leaving the agent

<div class="mt-4 text-lg">

<v-clicks>

- Auto-discovery the vendor agent did for free
- [RUM / browser / mobile — thinner in OTel]
- [Profiling — years behind the vendor's]
- Vendor-side sampling & cost controls
- Two forced re-instrumentations in three years
- Dashboards rebuilt twice for a rename

</v-clicks>

</div>

<!--
TODO: check the bracketed items against the customer's actual vendor before final — keep only what is true.
SIMON clicks the RIGHT column. "Nobody tells you the migration *off* the proprietary agent has a feature list too."
THOMAS: the left column is permanent, the right column is one-time. "That's the deal."
-->

---
layout: center
---

# "Never locked in again."

<div class="text-lg opacity-60 -mt-2">invoice</div>

<div class="ledger">
  <div class="prev"><span class="body"><span class="sub">Portable API.</span><br><b>Non-portable operations.</b></span><span class="amt">—</span></div>
  <div class="now" v-click><span class="body"><span class="sub">The standard moved.</span><br><b>Re-instrumented twice to keep up.</b></span><span class="amt">—</span></div>
</div>

<style>
.ledger { width: 100%; max-width: 44rem; margin: 2rem auto 0; font-size: 1.6rem; text-align: left; }
.ledger > div { padding: .55rem 1.2rem; border-bottom: 1px solid rgba(128,128,128,.4); font-size: 1.05rem; opacity: .55; }
.ledger > div.now { padding: 1rem 1.2rem; font-size: 1.8rem; opacity: 1; }
.ledger > div.ghost { font-size: 1.6rem; }
.ledger > div { display: flex; justify-content: space-between; align-items: center; gap: 2rem; }
.ledger .amt { font-variant-numeric: tabular-nums; opacity: .35; white-space: nowrap; text-align: right; }
.ledger > div:first-child { border-top: 3px solid currentColor; }
.ledger .sub { opacity: .6; }
.ledger .ghost { opacity: .25; }
.ledger .knowledge { border-top: 3px solid currentColor; margin-top: 1rem; font-size: 2rem; }
.ledger .split { font-size: 1.05rem; margin-top: .8rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.ledger .split > div { border-left: 3px solid currentColor; padding-left: .8rem; }
.ledger .split .lbl { font-size: .75rem; text-transform: uppercase; letter-spacing: .08em; opacity: .6; }
</style>

<!--
THOMAS: "The pain was one-time and the freedom is permanent. Once stable, stays stable."
SIMON: "Good deal. I'd take it. I'd just like the two migrations on the bill."
-->

---
layout: center
---

<div class="grid grid-cols-3 gap-8 text-2xl stack">
  <div class="box"><div class="text-5xl mb-4">☸</div>Kubernetes<div class="text-sm opacity-60 mt-2">conformant distribution</div></div>
  <div class="box"><div class="text-5xl mb-4">🔭</div>OpenTelemetry<div class="text-sm opacity-60 mt-2">traces · metrics · logs</div></div>
  <div class="box on"><div class="text-5xl mb-4">🚩</div>OpenFeature<div class="text-sm opacity-60 mt-2">vendor-neutral flags</div></div>
</div>

<style>
.stack .box { border: 2px solid currentColor; border-radius: .75rem; padding: 2rem; opacity: .25; transition: opacity .4s; }
.stack .box.on { opacity: 1; }
</style>

<!--
THOMAS: "Flags were supposed to be the easy part."
TODO: replace emoji with real logos (drop SVGs in public/logos/ and use <img>).
-->

---
layout: two-cols
---

<div class="tag">🚩 OpenFeature</div>

# Portable

<div class="mt-4 text-lg">

- The evaluation API
- Every SDK, every language
- Swap the provider: one line
- Hooks, context, the mental model

</div>

<div class="mt-6 text-sm opacity-60">scoped small · shipped in months · learned from OTel</div>

::right::

# Not portable

<div class="mt-4 text-lg">

<v-clicks>

- The flag definitions themselves
- Targeting rules and segments
- Experiment & analytics data
- Audit history, approvals, workflows
- Provider-specific hooks you got used to
- The feature the customer wanted → "join the working group"

</v-clicks>

</div>

<!--
SIMON: "This is the round where I stop pretending to be neutral."
"We standardised the API. We did not standardise the *data*. Every flag, every rule, every segment is still in the vendor's format."
THOMAS: "You standardised the thing that touches every line of code. The rest is an export job." SIMON: "Show me the export."
-->

---
layout: center
---

# "Never locked in again."

<div class="text-lg opacity-60 -mt-2">invoice</div>

<div class="ledger">
  <div class="prev"><span class="body"><span class="sub">Portable API.</span><br><b>Non-portable operations.</b></span><span class="amt">—</span></div>
  <div class="prev"><span class="body"><span class="sub">The standard moved.</span><br><b>Re-instrumented twice to keep up.</b></span><span class="amt">—</span></div>
  <div class="now" v-click><span class="body"><b>Success slows the spec.</b></span><span class="amt">—</span></div>
</div>

<style>
.ledger { width: 100%; max-width: 44rem; margin: 2rem auto 0; font-size: 1.6rem; text-align: left; }
.ledger > div { padding: .55rem 1.2rem; border-bottom: 1px solid rgba(128,128,128,.4); font-size: 1.05rem; opacity: .55; }
.ledger > div.now { padding: 1rem 1.2rem; font-size: 1.8rem; opacity: 1; }
.ledger > div.ghost { font-size: 1.6rem; }
.ledger > div { display: flex; justify-content: space-between; align-items: center; gap: 2rem; }
.ledger .amt { font-variant-numeric: tabular-nums; opacity: .35; white-space: nowrap; text-align: right; }
.ledger > div:first-child { border-top: 3px solid currentColor; }
.ledger .sub { opacity: .6; }
.ledger .ghost { opacity: .25; }
.ledger .knowledge { border-top: 3px solid currentColor; margin-top: 1rem; font-size: 2rem; }
.ledger .split { font-size: 1.05rem; margin-top: .8rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.ledger .split > div { border-left: 3px solid currentColor; padding-left: .8rem; }
.ledger .split .lbl { font-size: .75rem; text-transform: uppercase; letter-spacing: .08em; opacity: .6; }
</style>

<!--
SIMON: "Join the working group." I'm a maintainer and I couldn't just *do* it for them.
THOMAS: "That's not failure. That's the thing becoming load-bearing."
SIMON: "I know. I'm the one who slowed it down. The complaint is what it *looked like* while it was fast."
-->

---
layout: center
---

<div class="tag">🚩 OpenFeature</div>

# Who paid the engineers?

<div class="mt-6 h-72 w-full border-2 border-dashed rounded-xl flex items-center justify-center opacity-60 text-xl">
  [ CNCF DevStats — OpenFeature contributions by company, over time ]
</div>

<div class="mt-4 text-sm opacity-50">devstats.cncf.io · companies contributing · one colour dominates the early years</div>

<!--
TODO: screenshot from devstats.cncf.io, OpenFeature, "Companies contributing" stacked chart.
SIMON: "Open on paper, one company's roadmap in practice. Not a conspiracy — just who paid the engineers. The bus factor was a parking factor."
"There are standards that never made that transition. Proprietary with extra steps."
THOMAS: "The door was real. Nobody can padlock it." SIMON: "If someone walks through." — "Hold that thought."
-->

---
layout: center
---

# "Never locked in again."

<div class="text-lg opacity-60 -mt-2">invoice</div>

<div class="ledger">
  <div class="prev"><span class="body"><span class="sub">Portable API.</span><br><b>Non-portable operations.</b></span><span class="amt">—</span></div>
  <div class="prev"><span class="body"><span class="sub">The standard moved.</span><br><b>Re-instrumented twice to keep up.</b></span><span class="amt">—</span></div>
  <div class="now"><span class="body"><b>Success slows the spec.</b><br><span v-click><span class="sub">One door.</span> <b>One company behind it.</b></span></span><span class="amt">—</span></div>
</div>

<style>
.ledger { width: 100%; max-width: 44rem; margin: 2rem auto 0; font-size: 1.6rem; text-align: left; }
.ledger > div { padding: .55rem 1.2rem; border-bottom: 1px solid rgba(128,128,128,.4); font-size: 1.05rem; opacity: .55; }
.ledger > div.now { padding: 1rem 1.2rem; font-size: 1.8rem; opacity: 1; }
.ledger > div.ghost { font-size: 1.6rem; }
.ledger > div { display: flex; justify-content: space-between; align-items: center; gap: 2rem; }
.ledger .amt { font-variant-numeric: tabular-nums; opacity: .35; white-space: nowrap; text-align: right; }
.ledger > div:first-child { border-top: 3px solid currentColor; }
.ledger .sub { opacity: .6; }
.ledger .ghost { opacity: .25; }
.ledger .knowledge { border-top: 3px solid currentColor; margin-top: 1rem; font-size: 2rem; }
.ledger .split { font-size: 1.05rem; margin-top: .8rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.ledger .split > div { border-left: 3px solid currentColor; padding-left: .8rem; }
.ledger .split .lbl { font-size: .75rem; text-transform: uppercase; letter-spacing: .08em; opacity: .6; }
</style>

<!--
ROUND 4 starts here.
SIMON: "So the customer asked what it would cost to leave. All of it."
"Real, not zero, and anyone who told them it was zero was selling something."
THOMAS: "Now do the graveyard."
SIMON: hands-up moment — "who's migrated off something in the last year? Keep them up if it was an open standard."
-->

---
layout: two-cols
---

# Archived

<div class="mt-6 text-lg opacity-80">

- spec: still there
- code: still there
- data: readable by someone else

</div>

<div class="mt-8 opacity-50 text-sm">[ CNCF archived projects list ]</div>

::right::

# Discontinued

<div class="mt-6 text-lg opacity-80">

- spec: never existed
- code: gone with the contract
- data export: <b>no</b>

</div>

<div class="mt-8 opacity-50 text-sm">[ discontinued proprietary products ]</div>

<!--
TODO: fill both columns with real, safe examples.
THOMAS: "Which corpse is easier to exhume?"
SIMON: "The open one. Every time. But there's a row I haven't added yet."
-->

---
layout: center
---

# "Never locked in again."

<div class="text-lg opacity-60 -mt-2">invoice</div>

<div class="ledger">
  <div class="prev"><span class="body"><span class="sub">Portable API.</span><br><b>Non-portable operations.</b></span><span class="amt"><span v-click="1">6 weeks · the platform team</span></span></div>
  <div class="prev"><span class="body"><span class="sub">The standard moved.</span><br><b>Re-instrumented twice to keep up.</b></span><span class="amt"><span v-click="1">2 migrations · everyone with a dashboard</span></span></div>
  <div class="prev"><span class="body"><b>Success slows the spec.</b><br><span class="sub">One door.</span> <b>One company behind it.</b></span><span class="amt"><span v-click="1">1 working group · 1 engineer, indefinitely</span></span></div>
  <div class="total" v-click="2"><span class="body"><b>Currency</b></span><span class="amt cur">knowledge</span></div>
  <div v-click="3" class="split">
    <div><span class="lbl">convertible</span><br>what a span is · how a flag evaluates · what a Deployment does<br><b>spends at the next vendor, the next job</b></div>
    <div><span class="lbl">non-convertible</span><br>the console · the query language · the vendor's workflow<br><b>worthless the day the contract ends</b></div>
  </div>
</div>

<style>
.ledger { width: 100%; max-width: 44rem; margin: 2rem auto 0; font-size: 1.6rem; text-align: left; }
.ledger > div { padding: .55rem 1.2rem; border-bottom: 1px solid rgba(128,128,128,.4); font-size: 1.05rem; opacity: .55; }
.ledger > div.now { padding: 1rem 1.2rem; font-size: 1.8rem; opacity: 1; }
.ledger > div.ghost { font-size: 1.6rem; }
.ledger > div { display: flex; justify-content: space-between; align-items: center; gap: 2rem; }
.ledger .amt { font-variant-numeric: tabular-nums; opacity: .35; white-space: nowrap; text-align: right; }
.ledger > div:first-child { border-top: 3px solid currentColor; }
.ledger .sub { opacity: .6; }
.ledger .ghost { opacity: .25; }
.ledger .knowledge { border-top: 3px solid currentColor; margin-top: 1rem; font-size: 2rem; }
.ledger .split { font-size: 1.05rem; margin-top: .8rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.ledger .split > div { border-left: 3px solid currentColor; padding-left: .8rem; }
.ledger .split .lbl { font-size: .75rem; text-transform: uppercase; letter-spacing: .08em; opacity: .6; }
.ledger { font-size: 1.15rem; margin-top: 1rem; }
.ledger > div.total { font-size: 1.8rem; opacity: 1; border-top: 3px solid currentColor; margin-top: .4rem; }
.ledger .total .amt.cur { opacity: 1; font-weight: 700; }
.ledger .amt span { opacity: 1; color: inherit; }
.ledger > div.prev .amt { opacity: .9; }
.ledger > div.split { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; font-size: 1rem; opacity: 1; border: 0; padding: .8rem 1.2rem 0; }
</style>

<!--
Click 1 — amounts appear. SIMON: "You've been reading this invoice without a currency column. Six weeks of the platform team. Two migrations for everyone who owns a dashboard. One engineer in a working group, indefinitely. Nothing on here is in euros."
Click 2 — currency stamp. SIMON: "The currency is knowledge. What your people had to learn, and would have to learn again. Nobody budgets for it. And somebody in this room sells it."
THOMAS: "Guilty. And I'll take that currency, because it's the best thing on the invoice."
Click 3 — split. THOMAS: "Two kinds. Convertible — what a span is, how a flag evaluates. That spends at the next vendor, the next job. Non-convertible — the console, the query language. Worthless the day the contract ends. Now price your proprietary stack. Same currency. All of it non-convertible."
-->

---
layout: center
---

<div class="border rounded-xl p-8 max-w-2xl mx-auto text-left font-mono text-lg leading-relaxed shadow">
<div class="opacity-50 text-sm mb-2">Senior Platform Engineer — [Company]</div>
<div class="font-bold mb-3">Requirements</div>
<div>✓ Kubernetes</div>
<div>✓ OpenTelemetry</div>
<div>✓ Feature flag platforms (OpenFeature)</div>
<div class="opacity-40 line-through">✗ [Vendor Product™]</div>
</div>

<!--
TODO: use a real, anonymised job ad screenshot if possible.
THOMAS: "Knowledge locked into a vendor console dies the day the contract ends. Knowledge locked into a standard goes with the person."
"If you have to be locked into something — and you do — be locked into what your people can carry."
-->

---
layout: statement
---

Not *whether* you're locked in.

<div v-click class="mt-6">*To whom.*</div>

<!--
THE TURN. Tone drops. Both step to centre.
SIMON concedes: the knowledge travels — bigger difference than the API.
THOMAS concedes: the cost never goes to zero, it moves somewhere nobody's looking. "I should say it in trainings."
-->

---
layout: center
---

<div class="text-3xl leading-loose text-left max-w-3xl mx-auto">
<v-clicks>

**1.** Evaluate the governance, not just the spec.

**2.** Contribution is self-interest.

**3.** A standard nobody maintains is just slower lock-in.

</v-clicks>
</div>

<div v-click class="mt-12 text-xl opacity-70 text-left max-w-3xl mx-auto">
Homework: pick one standard you depend on. Find out who controls its roadmap. <b>Not the logo. The chart.</b>
</div>

<!--
SIMON: 1 — "Pull up that DevStats chart before you adopt anything."
THOMAS: 2 — "That 'join the working group' answer Simon hated giving? It was the right answer."
SIMON: 3.
THOMAS: homework.
-->

---
layout: cover
class: text-center
---

# Your Open Source Standard<br>Is Just Another Lock-In

<div class="mt-8 text-xl">Simon Schrottner · schrottner.at/talks</div>
<div class="text-xl">Thomas Schuetz · [link]</div>

<!--
SIMON: "And if you don't like the answer —"
THOMAS: "— the door's open."
-->
