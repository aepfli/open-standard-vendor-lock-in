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

`[SLIDE: the act map — Kubernetes / OpenTelemetry / OpenFeature, all three lit, each under the question its act answers]`

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

`[SLIDE: the invoice — empty. Header: "Never locked in again." Column already labelled `from: the community`, and no line items under it yet.]`

**SIMON:** You said "never locked in again." I'm going to keep the invoice for that sentence. Every layer of that beautiful architecture of yours — what it costs to leave, and what it costs to stay.

**THOMAS:** One condition. You fill that column in, line by line, and I won't interrupt the arithmetic. At the end, I fill in the column next to it.

**SIMON:** There is no column next to it.

**THOMAS:** *(to the audience)* There's always a column next to it. *(to Simon)* Start with the one I'm most sure about.

---

## Round 1 — Kubernetes (~4 min)

*Transition is invisible: Thomas simply continues.*

`[SLIDE: act map — Kubernetes lit. PORTABILITY · "what do you get?"]`

**THOMAS:** Kubernetes. There is an actual conformance program. Since 2017. Over a hundred certified distributions, and every one of them passes the same test suite. `kubectl apply` works on all of them. That's not marketing, that's a test you can run.

`[SLIDE: "Moved in an afternoon" — Thomas's. Four lines, large.]`

**THOMAS:** How many passed it?

`[SLIDE: the wall — every product certified against Kubernetes v1.34. 80 logos, then the rest by name, filling the slide.]`

**THOMAS:** This isn't a slide you read. It's a slide you look at. *(beat)* You can't name half of them. Neither can I. And every single one of them runs your manifests. Show me a proprietary platform with a hundred interchangeable implementations.

**SIMON:** I can't. And I'm not going to pretend the API isn't portable. It is. So here's what happened with the customer. They started on [managed cloud cluster]. Two years in, [data residency / cost / an acquisition] means they need to move on-prem. Conformant distribution to conformant distribution. Should be a weekend.

**THOMAS:** And?

**SIMON:** All of that moved in an afternoon. Deployments, Services, RBAC, the Helm charts, every kubectl command. Your conformance suite tested every one of them.

`[SLIDE: "Took six weeks" — Simon's. Six lines, small, all at once. One click at the end for "certified by nothing".]`

**SIMON:** Then: storage classes that don't exist. Load balancer annotations nobody on the new side reads. IAM roles bound to service accounts through a mechanism that only exists on one cloud. Node autoscaling that was actually the cloud's autoscaler wearing a Kubernetes hat. The ingress class, the cert issuer, the DNS controller. And a dozen managed control-plane defaults nobody had ever written down because nobody had to. Six weeks.

`[SLIDE: the invoice — first line item: "Migrating · the operational layer conformance didn't cover". No amount yet, and the `from:` field still blank.]`

**SIMON:** Conformance certifies the slide before that one. And nobody lives on that slide.

**THOMAS:** Okay, but think about where that floor *was* before. Five, ten years ago, the lock-in wasn't the annotations — it was the whole compute layer. The scheduler, the deployment model, the networking model, all of it was the vendor's. You just told me the entire application layer moved in an afternoon. The cost didn't disappear, agreed. But it moved up the stack and it got a lot smaller.

**SIMON:** It got smaller and it got *invisible*. Nobody puts "cloud-specific annotations" in a risk register. They put "vendor lock-in" in a risk register and then tick the box because it says Kubernetes on the tin.

**THOMAS:** That's a people problem, not a standard problem.

**SIMON:** Funny you say that. We'll come back to that. By the way — the customer's platform team, all CKA certified. Who did they get that from?

**THOMAS:** …I may have sold them the training.

**SIMON:** Noted.

---

## Round 2 — OpenTelemetry (~4 min)

`[SLIDE: act map — OpenTelemetry lit. PROGRESS · "how does it move?"]`

**SIMON:** So then we instrumented it.

**THOMAS:** OpenTelemetry. This one I'll defend even harder, because I remember what came before it. Three vendor agents on every host, each with its own format, each with its own idea of what a span is. Zipkin here, Jaeger there, and a proprietary agent nobody was allowed to remove.

`[SLIDE: "One pipeline" — one SDK any backend · traces, metrics, logs · semantic conventions everyone speaks · leave on Friday, any Friday]`

**THOMAS:** And this is what replaced it. One SDK, any backend. Leave on Friday. Any Friday.

**SIMON:** Agreed. Every word of it. So here's my question for this round, and it isn't "what did it cost." It's: *how does this thing move?* How fast, in which direction, and who does it drag along. Starting with the clock on the wall while you say that.

`[SLIDE: timeline — 2016 OpenTracing · 2018 OpenCensus · 2019 merge into OpenTelemetry · 2021 tracing stable · 2022 metrics stable · 2023 logs, HTTP semantic conventions stable · migration markers along the way]`

**SIMON:** And slow isn't the only price. A spec doesn't hold the best idea in the room. It holds the one nobody objected to.

`[SLIDE: "The intersection, not the union" — four lines. The last is the signal this customer actually wanted. One click at the end for "paid in capability, not in weeks".]`

**SIMON:** What everyone could agree to. Not what any one of them does best. What a vendor calls a differentiator, a committee calls out of scope. *(land on the last line — name the real one)* *(click)* And that's paid in capability, not in weeks. Nobody puts that on a slide.

**THOMAS:** The intersection *is* the portable part. That's not a side effect, that's the product. A spec that tried to cover the union would still be in draft — and you know that better than anyone, because your own project scoped small on purpose. You'll tell them so yourself in about four minutes.

**SIMON:** I will. It's still a cost, and it's going on the same invoice.

**SIMON:** And here's the thing nobody says out loud: leaving the proprietary agent has a feature list too.

`[SLIDE: "What it cost to leave the agent" — six lines, all at once]`

**SIMON:** Go down that list. The agent did auto-discovery for free. [RUM was better. Profiling was years ahead.] Sampling and cost controls lived on the vendor's side and just worked. We rebuilt half of that ourselves before the first trace showed up. That's the migration *onto* the standard. Then came the migrations *within* it. The customer instrumented in [2021]. Early adopters, doing the right thing. Then metrics changed under them. Then the semantic conventions for HTTP stabilised — which is great — except stabilising meant *renaming*. `http.method` became `http.request.method`.

`[SLIDE: the rename, full screen — `http.method` → `http.request.method`]`

**SIMON:** Sounds trivial. It touched every dashboard, every alert, every SLO that filtered on it. They re-instrumented twice in three years, and neither time was because *they* wanted something.

`[SLIDE: the invoice — second line item: "Keeping up · re-instrumenting when the spec moves"]`

**SIMON:** And who decided those names? Look at who's in the semantic conventions working groups. Vendors. Shaping the schema that their backends ingest.

**THOMAS:** Yes. Vendors. In a public room, with public meeting notes, and a public pull request you could have commented on.

**SIMON:** The customer doesn't have a semconv engineer.

**THOMAS:** No. But here's what the customer got for those two migrations. They can point that SDK at any backend on earth today. Any. They negotiate their observability contract from a position of "we can leave on Friday." That's what the slowness bought. It took years because everyone showed up — and the alternative to everyone showing up is three SDKs that never agree.

**SIMON:** So the argument is: the pain was the price of admission.

**THOMAS:** The argument is the pain was *one-time* and the freedom is permanent. Once a signal goes stable in OTel it stays stable. That's the deal.

**SIMON:** That's a good deal. I'd take it. I'd just like the two migrations on the invoice.

---

## Round 3 — OpenFeature (~5 min)

`[SLIDE: act map — OpenFeature lit. OWNERSHIP · "who owns it?"]`

**THOMAS:** Flags were supposed to be the easy part.

**SIMON:** Flags *were* the easy part. And this is the round where I stop pretending to be neutral.

**SIMON:** When we started OpenFeature, we had OpenTelemetry's whole history in front of us. We watched it. And we said: scope it small. Ship the spec fast. Don't try to standardise the world, standardise the evaluation API and let providers compete on everything else. And it worked. Spec out in months, not years. Sandbox, incubating, SDKs in every language you'd want.

`[SLIDE: "One line to swap" — the evaluation API · every SDK, every language · hooks, context, the mental model]`

**SIMON:** And look at what we standardised. The evaluation API. The SDKs. The provider swap is one line.

`[SLIDE: "Everything that isn't code" — six lines, all at once. One click at the end for "we standardised the code and left the data where it was".]`

**SIMON:** And what we didn't: the flag definitions. The targeting rules. The segments. The experiment data. The audit history and the approval workflow the customer's compliance team signed off on. Every one of those is still in the vendor's format. We standardised the code and left the data exactly where it was.

**THOMAS:** You standardised the thing that touches every line of code. The rest is an export job.

**SIMON:** Show me the export.

*(beat)*

**SIMON:** And then it kept working. More vendors. More SDKs. Reputation. People built production on it. And do you know what happens to a spec once production depends on it?

**THOMAS:** It slows down.

**SIMON:** It slows down. Every change is now a multi-vendor negotiation. Every SDK has to agree. The customer wanted [a feature: e.g. evaluation context that changes at runtime / a specific hook behaviour] — and the honest answer I had to give them was: "join the working group." I'm a maintainer and I couldn't just *do* it for them.

*(the "join the working group" line is the last one on that slide — stay on it)*

**THOMAS:** Simon. That's not a failure. That's the thing becoming load-bearing. You *want* the spec to be slow once there are a thousand production systems on it. The alternative is a fast spec that breaks a thousand systems.

**SIMON:** I know. I'm the one who slowed it down.

**THOMAS:** So the complaint is…?

**SIMON:** The complaint is what it *looked like* while it was fast. *(shifts — this is the spike, ~90 s)* Because here's the part I don't usually put on a slide. Look at who writes the code.

`[SLIDE: CNCF DevStats — contributions by company over time for OpenFeature. One contributor carries most of the commits.]`

**SIMON:** One company has carried most of OpenFeature's commits since the beginning. Now — I want to be precise, because this is a real project and a real company, and the easy version of this sentence is wrong. That is not capture. The spec is written by a multi-vendor group and always has been. Nobody in that room can merge what the others won't take.

`[SLIDE: click — "and the spec still isn't theirs"]`

**SIMON:** The spec still isn't theirs. *(beat)* But capacity is not neutral. When one company pays most of the engineers, the things that get built first are the things that company needed first. Not maliciously. Naturally. The bus factor was a *parking* factor.

**THOMAS:** So the spec was never theirs.

**SIMON:** The spec was never theirs. The roadmap's *pace* was. *(beat)* And if you want the version where it actually goes wrong, I don't have to make one up.

`[SLIDE: NATS — 2018 donated to the CNCF · 2025 the donor announces BUSL for future releases and asks for the trademark back · the CNCF petitions the USPTO · settled in weeks, trademarks to the Linux Foundation]`

**SIMON:** NATS. Donated to the CNCF in 2018. Last year the company that donated it announced future releases would be Business Source Licence — and asked for the trademark back. Not a fork. The name. The domain. The repositories.

**THOMAS:** And?

**SIMON:** And the CNCF filed a petition with the US trademark office against the company that gave them the project.

**THOMAS:** *(carefully)* How did it end?

**SIMON:** Settled in weeks. Both NATS trademarks assigned to the Linux Foundation. The relicence never landed — the project stays Apache-2.0, in the foundation. And they stayed free to sell whatever they like on top of it.

*(beat)*

**THOMAS:** You just made my argument for me.

**SIMON:** I made half of it. Somebody *did* try. That's the half nobody puts on a slide — it isn't a thought experiment, it happened, last year, to a CNCF project, and if you had built on NATS you found out from a mailing list.

**THOMAS:** And it took *weeks* to fail. Because the trademark sat with a foundation instead of with a vendor. That's not paperwork, Simon, that's the whole product. You keep saying "the door was real" like it's a slogan — that is the door, and somebody leaned on it, in public, and it held.

**SIMON:** If someone walks through.

**THOMAS:** Somebody does. Hold that thought — I'll come back for it once you've finished adding up.

`[SLIDE: the invoice — third line item lands: "Steering · contribution, and it is optional"]`

**SIMON:** And that's the third line. Migrating — the operational layer conformance never covered. Keeping up — re-instrumenting every time the spec moves. Steering — contribution, and there is no other door. That's the invoice for "never locked in again." It's real, it's not zero, and anyone who told them it was zero was selling something.

**THOMAS:** And every line on it is from us. The community. Your own project is on that list.

**SIMON:** Every line. That's the honest version of everything I've said today, and I'm not going to soften it: open standards send invoices.

**THOMAS:** Now do the graveyard.

**SIMON:** Fair. *(audience moment)* Hands up — who's migrated off something in the last year? Keep them up if the thing you left was an open standard. *(reacts to the room)*

`[SLIDE: split — left: six archived CNCF projects with their lifespans, OpenTracing last; right: Docker Cloud / Heroku free dynos / Google Cloud IoT Core, each with the notice period]`

**THOMAS:** Standards die. Projects get archived. CNI-Genie, Krustlet, Keptn, Pravega, Xline — all CNCF projects, all archived. And nothing on that list was taken away from anybody. The spec is still there, the repo is still public, the data is in a format someone else can read. Archiving a project is a statement about who is maintaining it. It is not an eviction.

**THOMAS:** Now the other column, and I want you to look at one number. Docker Cloud: sixty days. Heroku's free plans: three months, and they deleted the databases. Google Cloud IoT Core: twelve months, and the advice was to go talk to their partners.

**SIMON:** You're going to say "data export".

**THOMAS:** I'm not, because it wouldn't be true — Google published a migration path. I'm saying something worse. There was nowhere to take it. No second implementation. *(beat)* You showed them a hundred and thirty-one places to take a Kubernetes cluster. How many places could you take an IoT Core deployment?

*(beat)*

**THOMAS:** Which corpse is easier to exhume?

**SIMON:** The open one. Every time. I'll give you that. *(points at the last row on the left)* And I'll take the one that's got my name on it. OpenTracing. That's the first line on my own timeline, from the round before last — and when it died, it cost me a re-instrumentation. It's row two on the invoice. *(beat)* The corpse was easy to exhume. The funeral still had a bill. But that invoice is still sitting there and nobody has paid it.

**THOMAS:** Then let's finish it properly. You've been showing them one column.

`[SLIDE: the invoice — every row live. Three clicks, one amount at a time: 6 weeks · the platform team / 2 migrations · everyone with a dashboard / 1 working group · 1 engineer, indefinitely]`

**SIMON:** And here is what those three lines actually cost. *(click)* Six weeks of the platform team. *(click)* Two migrations for every developer who owns a dashboard. *(click)* One engineer sitting in a working group, indefinitely.

`[SLIDE: click 4 — the "from: a vendor" column appears beside it. Same three line items.]`

**THOMAS:** Same bill. Different letterhead. Migrating: exit fees, data export, and a rewrite — because there is no conformance suite to tell you what carries over. Keeping up: forced upgrades, deprecations, and repricing, on their schedule, not yours. Steering: enterprise tier, escalation, and waiting.

**SIMON:** You've made my argument. Both columns have numbers in them.

**THOMAS:** Both columns *always* had numbers in them. That's the whole point — there was never a column marked zero. And I'll give you the one row I lose: escalation is fast. If what you need is already on their roadmap, a vendor ships it next quarter and no working group can match that. If it *isn't* on their roadmap, you wait forever, and there's no door to walk through.

**SIMON:** Fine. Then there's one line still missing, and it's the one that decides it.

`[SLIDE: click 5 — the Currency row appears across both columns.]`

**SIMON:** Nothing on this invoice is in euros. The currency is what your people had to learn, and would have to learn again. Two hundred engineers who *think* in this stack. Nobody budgets for it. And somebody in this room — *(looks at Thomas)* — sells it.

**THOMAS:** Guilty. And I'll take it, because look at what each column is paid in. Theirs: money, and tool knowledge. The console, the query language, their approval workflow. Non-convertible — worthless the day the contract ends. Yours: engineering time, and domain knowledge. What a span is. How a flag evaluates. What a Deployment does. Convertible — it spends at the next vendor, the next job, the next company that acquires you.

**SIMON:** So the invoice is the same size either way.

**THOMAS:** The invoice is the same size. The currency is not.

---

## Act IV — What did you get for it? (~3 min)

*Both turn back to the screen. The three boxes from the opening are up again.*

`[SLIDE: act map — all three lit. "What did you get for it?"]`

**THOMAS:** That's the bill. Now I want the other half of the page, because nobody ever writes it down. *(to Simon)* You held a thought for me.

**SIMON:** I did. Somebody walks through the door.

**THOMAS:** Somebody walks through the door. And the reason they can afford to is the standard.

`[SLIDE: Before | the standard | After — left column: your own implementation per language, maintained forever, before you could sell anything]`

**THOMAS:** Before OpenTelemetry, if you wanted to sell observability you didn't start by building a product. You started by writing an agent. Java. Then Python, Go, Node, Ruby, .NET — and then you maintained all of them, forever, every time one of those languages shipped a new version. That wasn't a feature anybody bought. That was the moat. And it's exactly why that category was the same four companies for a decade.

`[SLIDE: click — the whole "After" column arrives: one interface many implementations / ship the product, not the plumbing / the category has new names in it]`

**THOMAS:** *(click)* Now there's one wire format, and a four-person company ships a backend instead of twelve agents. And look at who's selling observability today — names that did not exist when you were writing your first agent. Same shape with OpenFeature: a provider is an adapter, not a platform. That's a week of work, not a company-year.

**THOMAS:** So — yes. One company behind the door. But the standard is what makes the *second* company affordable. That's not a nice side effect, that's the whole mechanism.

*(beat)*

**SIMON:** That's the best argument you've made today.

**THOMAS:** I'll take it.

**SIMON:** And it costs you something — which is the line I'd have put on the invoice if you'd let me finish it first. The entry cost fell, and the moat moved *up*. Nobody competes on collecting the data any more, so everybody competes above the standard. The pipeline. The storage. The query language. The AI feature they announced last quarter. You didn't escape the moat. You moved house.

`[SLIDE: a real job ad — requirements list: Kubernetes, OpenTelemetry. No vendor product named.]`

**THOMAS:** If you have to be paid in something — and you do — be paid in a currency you can exchange.

---

## The turn + takeaways (~2.5 min)

*Both step slightly toward centre. Tone drops; no more scoring points.*

**SIMON:** Okay. Your best point is the one I can't answer: the currency converts. That's the real difference, and it's a bigger difference than the API.

**THOMAS:** And yours is the one I don't say in trainings: the cost never goes to zero, it just moves somewhere nobody's looking. I should say it in trainings.

**SIMON:** So the question was never "are we locked in." We always are.

`[SLIDE: "Not *whether* you're locked in." — click reveals "*To whom.*"]`

**THOMAS:** The question is *to whom*. A company, or a community. And whether you've got a seat in the room.

`[SLIDE: three takeaways, appear one at a time]`

**SIMON:** One. Evaluate the governance, not just the spec. Who owns the roadmap matters as much as what's in it. Pull up that DevStats chart before you adopt anything.

**THOMAS:** Two. Contribution is self-interest. If you're not in the room, someone else's priorities shape the standard you depend on. That "join the working group" answer Simon hated giving? It was the right answer.

**SIMON:** Three. A standard is only as good as the community behind it. A standard nobody maintains is just slower lock-in.

**THOMAS:** Homework. Pick one standard you depend on. This week, find out who actually controls its roadmap. Not the logo. The chart.

**SIMON:** And if you don't like the answer —

**THOMAS:** — the door's open.

`[SLIDE: title + both names + links]`

---

## Notes for revision

- **The invoice is deliberately one-sided until round 4.** For twenty minutes the only
  column on screen is `from: the community`, which means the visual artifact reads as a
  prosecution of open standards — by the maintainer of one of them. That is the engine of
  the talk, but it is also the thing most likely to be screenshotted out of context at
  minute twelve. Two safeguards, both already in the script: Thomas argues back in every
  round, and he promises the second column in the opening. Do not cut that promise.
- **Act IV** ("is there anywhere to go?") is the old exit test, named. It opens on the same
  three boxes as the opening claim slide — lit again, twenty minutes later, now as a
  question. It has no standard of its own, which is why all three are lit and the rail shows
  all three questions: the act is about the market, not about any one project.
- The market-structure beat moved out of round 3 into act IV, where it is the first
  argument rather than a coda. Round 3 now ends on its own invoice line.
- **The bill is the one slide that steps deliberately.** Five clicks: three amounts read
  out one at a time, then the vendor column, then the Currency row. Everything else on that
  slide is up from the start. Do not rush the three amounts — they are the only numbers in
  the talk and Simon says each one out loud.
- **Clicks are structural only.** Bullet lists land whole — the per-line stepping was
  making the presenter click through lines the room reads in a second. What still clicks:
  the punchline under a list, the "After" column arriving after "Before", "To whom.", and
  the three takeaways, which step because Simon and Thomas take one each.
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
