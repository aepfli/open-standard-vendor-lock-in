<script setup>
// The running bill, and the argument of the talk in one object: the line items
// are the same whoever issues them. Only the FROM field changes, which is why
// the closing question is "to whom" rather than "whether".
//
// The community column fills one row per act. The vendor column is Thomas's
// reveal at the exit test — the comparison nobody prices.
defineProps({
  // Line items billed so far, 0–3. The last one shown is lit.
  rows: { type: Number, default: 0 },
  // Act III resolves the letterhead.
  from: { type: Boolean, default: false },
  // The second column. Until this is set the bill looks like a bill; after it,
  // it looks like a choice.
  vendor: { type: Boolean, default: false },
  currency: { type: Boolean, default: false },
  // Amounts are held back until the exit test. During the acts each close
  // should carry exactly one new idea — the line item — not a line item and a
  // price and a letterhead all at once.
  amounts: { type: Boolean, default: false },
})

const LINES = [
  {
    item: 'Migration',
    vendor: 'exit fees · data export · rewrite',
    community: "the operational layer conformance didn't cover",
    amount: '6 weeks · the platform team',
  },
  {
    item: 'Keeping up',
    vendor: 'forced upgrades · deprecations · repricing',
    community: 're-instrumenting when the spec moves',
    amount: '2 migrations · everyone with a dashboard',
  },
  {
    item: 'Influence',
    vendor: 'enterprise tier · escalation · waiting',
    // The one line the vendor genuinely wins, stated plainly so the comparison
    // is not a strawman.
    vendorNote: 'fast — if it is already on their roadmap',
    community: 'contribution — and it is optional',
    communityNote: 'nobody can refuse you',
    amount: '1 working group · 1 engineer, indefinitely',
  },
]

const CURRENCY = {
  vendor: 'money + tool knowledge',
  vendorNote: 'non-convertible',
  community: 'engineering time + domain knowledge',
  communityNote: 'convertible',
}
</script>

<template>
  <div class="invoice" :class="{ compare: vendor }">
    <div class="head">
      <span class="claim">"Never locked in again."</span>
      <span class="doc">invoice</span>
    </div>

    <!-- Column headers only exist once there is something to compare. -->
    <div class="grid heads">
      <div />
      <div v-if="vendor" class="col-head">from: a vendor</div>
      <div class="col-head">
        <template v-if="vendor || from">from: the community</template>
        <span v-else class="unknown">from: <span class="blank" /></span>
      </div>
    </div>

    <div
      v-for="(l, i) in LINES.slice(0, rows)"
      :key="l.item"
      class="grid line"
      :class="{ on: vendor || i === rows - 1 }"
    >
      <div class="item">{{ l.item }}</div>
      <div v-if="vendor" class="cell">
        {{ l.vendor }}
        <div v-if="l.vendorNote" class="note">{{ l.vendorNote }}</div>
      </div>
      <div class="cell">
        {{ l.community }}
        <div v-if="l.communityNote" class="note">{{ l.communityNote }}</div>
        <div v-if="amounts" class="amt">{{ l.amount }}</div>
      </div>
    </div>

    <div v-if="currency" class="grid line total">
      <div class="item">Currency</div>
      <div v-if="vendor" class="cell">
        {{ CURRENCY.vendor }}
        <div class="verdict">{{ CURRENCY.vendorNote }}</div>
      </div>
      <div class="cell">
        {{ CURRENCY.community }}
        <div class="verdict">{{ CURRENCY.communityNote }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.invoice {
  width: 100%;
  max-width: 40rem;
  margin: 1rem auto 0;
  text-align: left;
  transition: max-width .5s;
}

.invoice.compare { max-width: 52rem; }

.head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: .4rem;
}

.head .claim { font-size: 1.45rem; }

.head .doc {
  font-size: .72rem;
  letter-spacing: .14em;
  text-transform: uppercase;
  opacity: .5;
}

/* One label column plus one cell column; the vendor column is inserted in
   front of the community one when the comparison appears. */
.grid {
  display: grid;
  grid-template-columns: 7rem 1fr;
  gap: 0 1.6rem;
  align-items: start;
}

.invoice.compare .grid { grid-template-columns: 7rem 1fr 1fr; }

.heads {
  border-top: 3px solid currentColor;
  padding-top: .5rem;
  padding-bottom: .5rem;
}

.col-head {
  font-size: .72rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  opacity: .75;
  font-weight: 600;
}

/* Blank for most of the talk. Act III fills it in, which is the answer the
   closing line asks for out loud. */
.unknown { opacity: .5; }

.unknown .blank {
  display: inline-block;
  width: 7rem;
  border-bottom: 1px solid currentColor;
}

.line {
  border-top: 1px solid rgba(128, 128, 128, .4);
  padding: .55rem 0;
  opacity: .45;
  transition: opacity .4s;
}

/* Only the newest charge is lit while the bill is being built; once the
   comparison is up, the whole document is live. */
.line.on { opacity: 1; }

.item {
  font-size: .95rem;
  font-weight: 600;
}

.cell {
  font-size: .95rem;
  line-height: 1.4;
}

.cell .note {
  font-size: .82rem;
  opacity: .65;
  font-style: italic;
}

.cell .amt {
  margin-top: .2rem;
  font-size: .8rem;
  font-variant-numeric: tabular-nums;
  opacity: .6;
}

.total {
  border-top: 3px solid currentColor;
  margin-top: .3rem;
  padding-top: .6rem;
  opacity: 1;
}

.total .item,
.total .cell { font-size: 1.05rem; }

.total .verdict {
  margin-top: .15rem;
  font-size: .78rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  font-weight: 700;
}
</style>
