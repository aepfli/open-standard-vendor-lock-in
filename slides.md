---
theme: seriph
title: Your Open Source Standard Is Just Another Lock-In
info: |
  Simon Schrottner · Thomas Schuetz — 25 min debate
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: fade
mdc: true
layout: center
---

<!--
Holding slide. Nothing on screen while the hallway conversation starts.
Drawn as SVG rather than an emoji so it renders identically on any machine.
-->

<div class="flex justify-center opacity-15">
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    <rect x="9" y="2" width="6" height="11" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <path d="M12 18v3" />
  </svg>
</div>

<!--
OPENING — both on stage, lapel mics.
SIMON: "…no, but seriously, you do this every week…"
Stay on this slide until Thomas gives the textbook answer.
-->

---
layout: center
---

# "Never locked in again."

<StandardsStack active="all" class="mt-12" />

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

<StandardsStack active="kubernetes" />

<!--
Topic switch — no words needed. THOMAS just says: "Kubernetes."
-->

---
layout: center
---

<Ask active="get" />
<Tag project="kubernetes" label="Kubernetes" />

# Moved in an afternoon

<div class="gets">

Deployments · Services · ConfigMaps

RBAC · Namespaces · NetworkPolicies

Helm charts · CI pipelines

`kubectl`

</div>

<div class="mt-10 text-sm opacity-60">100+ certified distributions · one conformance suite · since 2017</div>

<!--
THOMAS owns this slide. "That's not marketing. That's a test you can run, and 100+ vendors passed it."
Deliberately few lines, deliberately large — the audience should feel this side is short and settled.
-->

---
layout: center
---

<Ask active="cost" />
<Tag project="kubernetes" label="Kubernetes" />

# Took six weeks

<div class="costs">
<v-clicks>

- StorageClasses
- LoadBalancer annotations
- IAM → ServiceAccount binding
- Cluster autoscaler
- Ingress class · cert issuer · DNS controller
- Managed control-plane defaults

</v-clicks>
</div>

<div v-click class="mt-8 text-sm opacity-60">certified by nothing</div>

<!--
SIMON clicks one per item — each is a real thing the customer hit. The editorial stays in the mouth, not on the slide:
  StorageClasses — "that don't exist on the other side"
  LoadBalancer annotations — "nobody reads"
  IAM binding — "cloud-specific, every time"
  Cluster autoscaler — "is the cloud's autoscaler in a hat"
  control-plane defaults — "you never wrote down, which is why you found them in week five"
Land it: "Conformance certifies the previous slide. Nobody lives on the previous slide."
THOMAS: "And that list is smaller than the whole compute layer used to be."
-->

---
layout: center
---

<Ask active="own" />
<Tag project="kubernetes" label="Kubernetes" />

# Who owns the roadmap?

<div class="mt-6 h-64 w-full border-2 border-dashed rounded-xl flex items-center justify-center opacity-60 text-xl">
  [ CNCF DevStats — Kubernetes contributions by company ]
</div>

<div class="mt-4 text-sm opacity-50">the mark and the conformance suite are the foundation's · the roadmap is the SIGs'</div>

<!--
TODO: screenshot from devstats.cncf.io, Kubernetes, "Companies contributing". Check the current shape before claiming anything about it on stage.
First time the third question gets asked — say it plainly so the pattern registers: "Every standard in this talk gets the same three questions. This is the third one."
THOMAS: conformance is genuinely neutral — the suite does not care who you are.
SIMON: the suite is neutral. The roadmap has a shape, and the shape is who can afford full-time maintainers.
Keep this short. Kubernetes is the warm-up for this question; OpenFeature is where it bites.
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

<StandardsStack active="opentelemetry" />

<!--
SIMON: "So then we instrumented it."
-->

---
layout: center
---

<Ask active="get" />
<Tag project="opentelemetry" label="OpenTelemetry" />

# One pipeline

<div class="gets">

One SDK · any backend

Traces · metrics · logs

Semantic conventions everyone speaks

Leave on Friday. Any Friday.

</div>

<!--
THOMAS owns this slide, and he should sound like he means it — this is the single biggest thing open standards bought the customer.
"Leave on Friday, any Friday" is the line. Pause after it.
SIMON does not fight it. He says "agreed" and turns the page — which is the timeline.
-->

---
layout: center
---

<Ask active="cost" />
<Tag project="opentelemetry" label="OpenTelemetry" />

# How long consensus takes

<div class="timeline text-lg mt-8">
  <div class="year">2016</div><div class="event">OpenTracing</div>
  <div class="year">2018</div><div class="event">OpenCensus</div>
  <div class="year">2019</div><div class="event">merge → OpenTelemetry</div>
  <div class="year">2021</div><div class="event">tracing stable</div>
  <div class="year">2022</div><div class="event">metrics stable</div>
  <div class="year">2023</div><div class="event">logs stable</div>
  <div class="year"></div><div class="event cont">HTTP semconv stable<div class="note"><code>http.method</code> → <code>http.request.method</code></div></div>
</div>

<!--
TODO: verify dates against OTel spec release history before final.
SIMON: "So then we instrumented it." Customer instrumented 2021, re-instrumented twice, neither time because they wanted to.
-->

---
layout: fact
---

<Ask active="cost" />

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
layout: center
---

<Ask active="cost" />
<Tag project="opentelemetry" label="OpenTelemetry" />

# What it cost to leave the agent

<div class="costs">
<v-clicks>

- Auto-discovery
- [ RUM / browser / mobile ]
- [ Profiling ]
- Vendor-side sampling & cost controls
- Two forced re-instrumentations
- Dashboards rebuilt twice

</v-clicks>
</div>

<!--
TODO: check the bracketed items against the customer's actual vendor before final — keep only what is true, cut the rest.
SIMON clicks one per item. "Nobody tells you the migration *off* the proprietary agent has a feature list too."
  Auto-discovery — "the vendor agent did it for free"
  RUM / profiling — "thinner, or years behind"
  sampling — "their cost controls were the reason the bill was survivable"
THOMAS: the last slide is permanent, this one is one-time. "That's the deal."
-->

---
layout: center
---

<Ask active="own" />
<Tag project="opentelemetry" label="OpenTelemetry" />

# Who owns OpenTelemetry?

<div class="mt-6 h-64 w-full border-2 border-dashed rounded-xl flex items-center justify-center opacity-60 text-xl">
  [ CNCF DevStats — OpenTelemetry contributions by company ]
</div>

<div class="mt-4 text-sm opacity-50">no single colour · which is exactly why the timeline looked like that</div>

<!--
TODO: screenshot from devstats.cncf.io, OpenTelemetry, "Companies contributing".
THOMAS gets this one, and it is his best slide in the act: nobody owns it. That chart is the answer to Simon's timeline — seven years is what genuinely multi-vendor costs.
SIMON concedes the governance and keeps the bill: "I'm not saying it's captured. I'm saying I paid for it not being captured, twice, in re-instrumentation."
THOMAS: "Yes. That's the price of the thing you actually wanted."
Sets up act III, where the chart looks nothing like this.
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

<StandardsStack active="openfeature" />

<!--
THOMAS: "Flags were supposed to be the easy part."
-->

---
layout: center
---

<Ask active="get" />
<Tag project="openfeature" label="OpenFeature" />

# One line to swap

<div class="gets">

The evaluation API

Every SDK · every language

Hooks · context · the mental model

</div>

<div class="mt-10 text-sm opacity-60">scoped small · shipped in months · learned from OTel</div>

<!--
SIMON owns this one and should sound proud of it — he built it. "We had OpenTelemetry's whole history in front of us, and we scoped it small on purpose."
The provider swap being one line is the strongest single claim in the talk. Let it sit.
-->

---
layout: center
---

<Ask active="cost" />
<Tag project="openfeature" label="OpenFeature" />

# Everything that isn't code

<div class="costs">
<v-clicks>

- Flag definitions
- Targeting rules · segments
- Experiment & analytics data
- Audit history · approvals · workflows
- Provider-specific hooks
- The feature you wanted → "join the working group"

</v-clicks>
</div>

<div v-click class="mt-8 text-sm opacity-60">we standardised the code and left the data where it was</div>

<!--
SIMON clicks one per item — this is his own project, so he gets to be the one listing what it does not cover.
Last click is the sting: the customer wanted a feature and the honest answer was "join the working group". "I'm a maintainer and I couldn't just *do* it for them."
THOMAS: "That's not a failure. That's the thing becoming load-bearing. You *want* a slow spec once a thousand production systems depend on it."
SIMON: "I know. I'm the one who slowed it down. The complaint is what it *looked like* while it was fast."
-->

<!--
SIMON: "This is the round where I stop pretending to be neutral."
"We standardised the API. We did not standardise the *data*. Every flag, every rule, every segment is still in the vendor's format."
THOMAS: "You standardised the thing that touches every line of code. The rest is an export job." SIMON: "Show me the export."
-->


---
layout: center
---

<Ask active="own" />
<Tag project="openfeature" label="OpenFeature" />

# Who paid the engineers?

<div class="mt-6 h-72 w-full border-2 border-dashed rounded-xl flex items-center justify-center opacity-60 text-xl">
  [ CNCF DevStats — OpenFeature contributions by company, over time ]
</div>

<div class="mt-4 text-sm opacity-50">devstats.cncf.io · companies contributing · one colour dominates the early years</div>

<!--
TODO: screenshot from devstats.cncf.io, OpenFeature, "Companies contributing" stacked chart.
SIMON: "Open on paper, one company's roadmap in practice. Not a conspiracy — just who paid the engineers. The bus factor was a parking factor."
"There are standards that never made that transition. Proprietary with extra steps."
THOMAS: "The door was real. Nobody can padlock it." SIMON: "If someone walks through."
-->

---
layout: two-cols
---

# Before the standard

<div class="mt-4 text-lg">

- an agent per language
- maintained forever
- table stakes to enter at all

</div>

<div class="mt-6 text-sm opacity-60">the moat <b>was</b> the instrumentation</div>

::right::

# After

<div class="mt-4 text-lg">

<v-clicks>

- one wire format
- a startup ships a backend, not twelve agents
- the category has new names in it

</v-clicks>

</div>

<div v-click class="mt-6 text-sm opacity-60">the moat moved <b>up</b></div>

<!--
Pays off "if someone walks through" — the held thought from the DevStats slide.
THOMAS takes the LEFT column: the door matters because somebody can afford to build on the other side of it. Before OTel, shipping an observability product meant writing and maintaining an agent for every language. That moat is what kept the category to a handful of incumbents.
Clicks the RIGHT column one at a time. Name real ones on the third click — the point is that the names are new.
SIMON gets the last line: the entry cost fell, and the moat moved up. Everyone differentiates ABOVE the standard now. That is where the next invoice comes from — and it sets up convertible vs non-convertible two slides later.
-->

---
layout: center
---

# "Never locked in again."

<div class="text-lg opacity-60 -mt-2">invoice</div>

<div class="ledger">
  <div class="prev"><span class="body"><span class="sub">Portable API.</span><br><b>Non-portable operations.</b></span><span class="amt">—</span></div>
  <div class="prev"><span class="body"><span class="sub">The standard moved.</span><br><b>Re-instrumented twice to keep up.</b></span><span class="amt">—</span></div>
  <div class="now"><span class="body"><span v-click="1"><b>Success slows the spec.</b></span><br><span v-click="2"><span class="sub">One door.</span> <b>One company behind it.</b></span></span><span class="amt">—</span></div>
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
