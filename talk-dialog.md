# Your Open Source Standard Is Just Another Lock-In — Dialog draft v0.6

**Simon** = practitioner, OpenFeature maintainer, argues lock-in is real
**Thomas** = trainer, argues community standards are the way out
*Stage cues in italics. Slides in* `[SLIDE]`. *Square brackets `[...]` = placeholders to replace with real details.*
Target: ~22 min spoken. Rough word count per section noted; ~140 words/min.

---

## Opening (~3 min)

*Both already on stage, lapel mics. No title slide. Screen shows a neutral holding slide or nothing. Simon turns to Thomas as if continuing a hallway conversation.*

**SIMON:** …no, but seriously, you do this every week. You stand in front of a room and tell people how to build this stuff properly. So help me out. I've got a customer — [mid-size company, ~200 engineers, one big legacy platform] — and they want to rebuild. And this time they want to do it right. Nothing proprietary. Nothing that traps them. What do I tell them?

**THOMAS:** *(easy, fluent, slightly too fast — he has said this two hundred times)* Okay. Kubernetes underneath — conformant distribution, doesn't matter which one. OpenTelemetry for everything observability: traces, metrics, logs, one SDK, pick your backend later. Feature flags through OpenFeature so they're not writing `if (customer == "bigbank")` in the code. Everything CNCF, everything portable, and — this is the important part — they will never be locked in again.

`[SLIDE: clean reference architecture — K8s / OTel / OpenFeature / CNCF logos]`

**SIMON:** That's a great answer.

**THOMAS:** Thank you.

**SIMON:** That's exactly what I told them five years ago.

*Beat.*

**SIMON:** And last month they asked me what it would cost to leave. Not leave a vendor. Leave the stack. And I sat there with a spreadsheet and the number was… *[the number, or "roughly the same as the last time they left a proprietary platform"]*. The YAML wasn't the problem. It was [one concrete scar: the flag targeting rules that don't port / the semconv rename that touched 400 dashboards / the storage class that only exists on one cloud].

**THOMAS:** Hang on. Don't you *maintain* OpenFeature?

**SIMON:** Yes.

**THOMAS:** And you're standing here saying it's a lock-in.

**SIMON:** Which is exactly why I'm allowed to say it.

`[SLIDE: title — "Your Open Source Standard Is Just Another Lock-In"]`

**THOMAS:** *(to the audience)* Right. I'm Thomas, I teach cloud native for a living, so apparently I'm the defence. This is Simon, he's the prosecution and also, somehow, one of the accused.

**SIMON:** Let's define the crime first. Lock-in isn't a yes or no. It's a cost.

`[SLIDE: the invoice — empty. Header: "Never locked in again." Rows have an amount column, blank.]`

**SIMON:** You said "never locked in again." I'm going to keep the invoice for that sentence. Every layer of that beautiful architecture of yours — what it costs to leave, and what it costs to stay.

**THOMAS:** Fine. Start with the one I'm most sure about.

---

## Round 1 — Kubernetes (~4 min)

*Transition is invisible: Thomas simply continues.*

**THOMAS:** Kubernetes. There is an actual conformance program. Since 2017. Over a hundred certified distributions, and every one of them passes the same test suite. `kubectl apply` works on all of them. That's not marketing, that's a test you can run.

`[SLIDE: two columns — "Moved in an afternoon" (Thomas's) / "Took six weeks" (Simon's, clicks through)]`

**THOMAS:** Show me a proprietary platform with a hundred interchangeable implementations.

**SIMON:** I can't. And I'm not going to pretend the API isn't portable. It is. So here's what happened with the customer. They started on [managed cloud cluster]. Two years in, [data residency / cost / an acquisition] means they need to move on-prem. Conformant distribution to conformant distribution. Should be a weekend.

**THOMAS:** And?

**SIMON:** The left column moved in an afternoon. Deployments, Services, RBAC, the Helm charts, every kubectl command. Your conformance suite tested every one of them. *(clicks)* Then: storage classes that don't exist. Load balancer annotations nobody on the new side reads. IAM roles bound to service accounts through a mechanism that only exists on one cloud. Node autoscaling that was actually the cloud's autoscaler wearing a Kubernetes hat. The ingress class, the cert issuer, the DNS controller. And a dozen managed control-plane defaults nobody had ever written down because nobody had to. Six weeks.

`[SLIDE: the ledger — first row: "Portable API. Non-portable operations."]`

**SIMON:** Conformance certifies the floor. And nobody lives on the floor.

**THOMAS:** Okay, but think about where that floor *was* before. Five, ten years ago, the lock-in wasn't the annotations — it was the whole compute layer. The scheduler, the deployment model, the networking model, all of it was the vendor's. You just told me the entire application layer moved in an afternoon. The cost didn't disappear, agreed. But it moved up the stack and it got a lot smaller.

**SIMON:** It got smaller and it got *invisible*. Nobody puts "cloud-specific annotations" in a risk register. They put "vendor lock-in" in a risk register and then tick the box because it says Kubernetes on the tin.

**THOMAS:** That's a people problem, not a standard problem.

**SIMON:** Funny you say that. We'll come back to that. By the way — the customer's platform team, all CKA certified. Who did they get that from?

**THOMAS:** …I may have sold them the training.

**SIMON:** Noted.

---

## Round 2 — OpenTelemetry (~4 min)

**SIMON:** So then we instrumented it.

**THOMAS:** OpenTelemetry. This one I'll defend even harder, because I remember what came before it. Three vendor agents on every host, each with its own format, each with its own idea of what a span is. Zipkin here, Jaeger there, and a proprietary agent nobody was allowed to remove.

**SIMON:** I remember too. And I remember how long it took to get out of that.

`[SLIDE: timeline — 2016 OpenTracing · 2018 OpenCensus · 2019 merge into OpenTelemetry · 2021 tracing stable · 2022 metrics stable · 2023 logs, HTTP semantic conventions stable · migration markers along the way]`

**SIMON:** And here's the thing nobody says out loud: leaving the proprietary agent has a feature list too.

`[SLIDE: two columns — "What you keep" / "What you lost leaving the agent" (Simon clicks)]`

**SIMON:** The agent did auto-discovery for free. [RUM was better. Profiling was years ahead.] Sampling and cost controls lived on the vendor's side and just worked. We rebuilt half of that ourselves before the first trace showed up. That's the migration *onto* the standard. Then came the migrations *within* it. The customer instrumented in [2021]. Early adopters, doing the right thing. Then metrics changed under them. Then the semantic conventions for HTTP stabilised — which is great — except stabilising meant *renaming*. `http.method` became `http.request.method`. Sounds trivial. It touched every dashboard, every alert, every SLO that filtered on it. They re-instrumented twice in three years, and neither time was because *they* wanted something.

`[SLIDE: the ledger — row 2: "The standard moved. Re-instrumented twice to keep up."]`

**SIMON:** And who decided those names? Look at who's in the semantic conventions working groups. Vendors. Shaping the schema that their backends ingest.

**THOMAS:** Yes. Vendors. In a public room, with public meeting notes, and a public pull request you could have commented on.

**SIMON:** The customer doesn't have a semconv engineer.

**THOMAS:** No. But here's what the customer got for those two migrations. They can point that SDK at any backend on earth today. Any. They negotiate their observability contract from a position of "we can leave on Friday." That's what the slowness bought. It took years because everyone showed up — and the alternative to everyone showing up is three SDKs that never agree.

**SIMON:** So the argument is: the pain was the price of admission.

**THOMAS:** The argument is the pain was *one-time* and the freedom is permanent. Once a signal goes stable in OTel it stays stable. That's the deal.

**SIMON:** That's a good deal. I'd take it. I'd just like the two migrations on the invoice.

---

## Round 3 — OpenFeature (~6.5 min)

**THOMAS:** Flags were supposed to be the easy part.

**SIMON:** Flags *were* the easy part. And this is the round where I stop pretending to be neutral.

**SIMON:** When we started OpenFeature, we had OpenTelemetry's whole history in front of us. We watched it. And we said: scope it small. Ship the spec fast. Don't try to standardise the world, standardise the evaluation API and let providers compete on everything else. And it worked. Spec out in months, not years. Sandbox, incubating, SDKs in every language you'd want.

`[SLIDE: two columns — "Portable" / "Not portable" (Simon clicks)]`

**SIMON:** And look at what we standardised. The evaluation API. The SDKs. The provider swap is one line. *(clicks)* And what we didn't: the flag definitions. The targeting rules. The segments. The experiment data. The audit history and the approval workflow the customer's compliance team signed off on. Every one of those is still in the vendor's format. We standardised the code and left the data exactly where it was.

**THOMAS:** You standardised the thing that touches every line of code. The rest is an export job.

**SIMON:** Show me the export.

*(beat)*

**SIMON:** And then it kept working. More vendors. More SDKs. Reputation. People built production on it. And do you know what happens to a spec once production depends on it?

**THOMAS:** It slows down.

**SIMON:** It slows down. Every change is now a multi-vendor negotiation. Every SDK has to agree. The customer wanted [a feature: e.g. evaluation context that changes at runtime / a specific hook behaviour] — and the honest answer I had to give them was: "join the working group." I'm a maintainer and I couldn't just *do* it for them.

`[SLIDE: the ledger — row 3: "Success slows the spec."]`

**THOMAS:** Simon. That's not a failure. That's the thing becoming load-bearing. You *want* the spec to be slow once there are a thousand production systems on it. The alternative is a fast spec that breaks a thousand systems.

**SIMON:** I know. I'm the one who slowed it down.

**THOMAS:** So the complaint is…?

**SIMON:** The complaint is what it *looked like* while it was fast. *(shifts — this is the spike, ~90 s)* Because here's the part I don't usually put on a slide. For the longest time, OpenFeature was open on paper and one company's roadmap in practice.

`[SLIDE: CNCF DevStats — contributions by company over time for OpenFeature. One colour dominates the early years.]`

**SIMON:** Look at that chart. That's not a conspiracy, that's just who paid the engineers. And when one company pays the engineers, the spec grows in the direction that company's product needs. Not maliciously. Naturally. The bus factor was a *parking* factor.

**THOMAS:** Is it still like that?

**SIMON:** No. It took real work and real time and it's genuinely a multi-vendor project now. But there are standards out there that never made that transition. They have the licence, they have the foundation logo, they have the door — and nobody ever walked through it, so they fossilised around one company's use case. That is a proprietary standard with extra steps.

`[SLIDE: the ledger — row 3 gets a second line: "One door. One company behind it."]`

**THOMAS:** Here's what I'll say to that. The difference between what you just described and an actual proprietary standard is that *you could have changed it*. You did change it. The door was real. Nobody can padlock it — not the founder, not the foundation.

**SIMON:** If someone walks through.

**THOMAS:** Somebody does. And the reason they can afford to is the standard.

`[SLIDE: before / after the standard — left column: an agent per language, maintained forever, table stakes to enter at all]`

**THOMAS:** Before OpenTelemetry, if you wanted to sell observability you didn't start by building a product. You started by writing an agent. Java. Then Python, Go, Node, Ruby, .NET — and then you maintained all of them, forever, every time one of those languages shipped a new version. That wasn't a feature anybody bought. That was the moat. And it's exactly why that category was the same four companies for a decade.

`[SLIDE: right column, clicks — one wire format / a startup ships a backend, not twelve agents / the category has new names in it]`

**THOMAS:** Now there's one wire format. *(clicks)* A four-person company ships a backend instead of twelve agents. *(clicks)* And look at who's selling observability today — names that did not exist when you were writing your first agent. Same shape with OpenFeature: a provider is an adapter, not a platform. That's a week of work, not a company-year.

**THOMAS:** So — yes. One company behind the door. But the standard is what makes the *second* company affordable. That's not a nice side effect, that's the whole mechanism. Your ability to leave was never a property of the spec. It's a property of there being somewhere to go.

*(beat)*

**SIMON:** That's the best argument you've made today.

**THOMAS:** I'll take it.

**SIMON:** And it costs you something. The entry cost fell — and the moat moved *up*. Nobody competes on collecting the data any more, so everybody competes above the standard. The pipeline. The storage. The query language. The AI feature they announced last quarter. Which is exactly where the next invoice comes from.

**SIMON:** Hold that thought.

---

## Round 4 — The exit test (~3.5 min)

**SIMON:** So the customer asked what it would cost to leave. All of it. Let's add it up.

`[SLIDE: the invoice — three rows, complete, amounts still blank]`

**SIMON:** Non-portable operations. Two re-instrumentations they didn't ask for. A spec they can't move without a working group. That's the invoice for "never locked in again." And it's real, and it's not zero, and anyone who told them it was zero was selling something.

**THOMAS:** Now do the graveyard.

**SIMON:** Fair. *(audience moment)* Hands up — who's migrated off something in the last year? Keep them up if the thing you left was an open standard. *(reacts to the room)*

`[SLIDE: split — left: archived CNCF projects; right: [discontinued proprietary products] with "data export: no"]`

**THOMAS:** Standards die. Projects get archived. But when an open standard dies, the spec is still there, the code is still there, the data is in a format someone else can read. When a proprietary product dies, it takes your data and three years of dashboards with it. Which corpse is easier to exhume?

**SIMON:** The open one. Every time. I'll give you that. But you've all been reading this invoice wrong. There's no currency on it.

`[SLIDE: the invoice — click 1, amounts appear: "6 weeks · the platform team" / "2 migrations · everyone with a dashboard" / "1 working group · 1 engineer, indefinitely"]`

**SIMON:** Six weeks of the platform team. Two migrations for every developer who owns a dashboard. One engineer sitting in a working group, indefinitely. Nothing on this invoice is in euros.

`[SLIDE: click 2 — currency stamp: "Currency: knowledge"]`

**SIMON:** The currency is knowledge. What your people had to learn, and would have to learn again. Two hundred engineers who *think* in this stack. Nobody budgets for it. And somebody in this room — *(looks at Thomas)* — sells it.

**THOMAS:** Guilty. And I'll take that currency, because it's the best thing on the invoice. But there are two kinds.

`[SLIDE: click 3 — split: "convertible" / "non-convertible"]`

**THOMAS:** Convertible: what a span is. How a flag evaluates. What a Deployment does. That knowledge spends at the next vendor, the next job, the next company that acquires you. Non-convertible: the console. The query language. The vendor's approval workflow. Worthless the day the contract ends — and yes, you pay that one in every migration, standard or not. I won't pretend otherwise.

**SIMON:** So the invoice is the same size either way.

**THOMAS:** Now price your proprietary stack. Same currency. Same amounts. All of it non-convertible. Because the mental model *was* the console.

`[SLIDE: a real job ad — requirements list: Kubernetes, OpenTelemetry. No vendor product named.]`

**THOMAS:** If you have to be paid in something — and you do — be paid in a currency you can exchange.

---

## The turn + takeaways (~2.5 min)

*Both step slightly toward centre. Tone drops; no more scoring points.*

**SIMON:** Okay. Your best point is the one I can't answer: the currency converts. That's the real difference, and it's a bigger difference than the API.

**THOMAS:** And yours is the one I don't say in trainings: the cost never goes to zero, it just moves somewhere nobody's looking. I should say it in trainings.

**SIMON:** So the question was never "are we locked in." We always are.

**THOMAS:** The question is *to whom*. A company, or a community. And whether you've got a seat in the room.

`[SLIDE: three lines, appear one at a time]`

**SIMON:** One. Evaluate the governance, not just the spec. Who owns the roadmap matters as much as what's in it. Pull up that DevStats chart before you adopt anything.

**THOMAS:** Two. Contribution is self-interest. If you're not in the room, someone else's priorities shape the standard you depend on. That "join the working group" answer Simon hated giving? It was the right answer.

**SIMON:** Three. A standard is only as good as the community behind it. A standard nobody maintains is just slower lock-in.

**THOMAS:** Homework. Pick one standard you depend on. This week, find out who actually controls its roadmap. Not the logo. The chart.

**SIMON:** And if you don't like the answer —

**THOMAS:** — the door's open.

`[SLIDE: title + both names + links]`

---

## Notes for revision

- **Structure:** every act now asks the same three questions — what do you get, what does
  it cost, who owns it — and the slides carry an on-screen rail showing which is live. Say
  the three out loud once in act I so the audience has the frame; after that let the rail
  do it.
- Acts I and II previously never asked "who owns it"; both now have a DevStats slide and
  both need a real screenshot before the talk. Kubernetes and OpenTelemetry are the
  warm-ups for that question — keep them short, because OpenFeature is where it bites.
- Act III used to bill twice. It now bills once, at the end, revealing "success slows the
  spec" and "one door, one company" as two clicks on the round-4 invoice.

- Replace every `[...]` with the real customer detail. The talk lives or dies on the scars being specific.
- Round 2 timeline dates: verify against OTel spec release history before the slide is built.
- Thomas needs one first-person migration story of his own somewhere in rounds 1–2 so it isn't only Simon's scars — a training-room anecdote works ("every cohort asks me the same question about annotations").
- Lines to test for laughs: "I may have sold them the training" / "parking factor" / "which corpse is easier to exhume" / "nothing on this invoice is in euros".
- Amounts on the final invoice are placeholders — replace with the customer's real numbers; the currency reveal only works if the amounts are specific. Cut any that don't land in rehearsal.
- Word count is now over the limit after the side-by-side additions; rehearse first, then cut. Candidates: Thomas's second counter in round 1, the "show me the export" beat.
- The market-structure beat at the end of round 3 (the "before / after the standard" slide) adds ~90 s to the longest round. It is Thomas's strongest card and it pays off "if someone walks through", which used to dangle — but if the talk runs long, the cheapest cut in that beat is Thomas's OpenFeature aside ("a provider is an adapter"), not the OTel agent story, which is the evidence.
- Name real vendors on the third click of that slide, or cut the click. "The category has new names in it" only lands if the names are said out loud.
- Balance check: each round now has Simon's losses on screen and Thomas's gains on screen. Neither should get the last word every round — swap who closes round 2 if it still feels one-sided.
