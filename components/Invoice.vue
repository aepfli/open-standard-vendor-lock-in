<script setup>
// The running bill, and the argument of the talk in one object: the line items
// are the same whoever issues them. Only the FROM field changes, which is why
// the closing question is "to whom" rather than "whether".
//
// The community column is labelled from the first slide on purpose. The
// provocation is not who sent the bill — the cells say that plainly — it is
// that the community sends one at all. The vendor column is the reveal, and it
// is Thomas's, at the exit test.
defineProps({
  // Line items billed so far, 0–3. The last one shown is lit.
  rows: { type: Number, default: 0 },
  // The second column. Until this is set the bill looks like a bill; after it,
  // it looks like a choice.
  vendor: { type: Boolean, default: false },
  // Reading the currency: 0 hidden, 1 the vendor's, 2 both. The charges above
  // grey out while it lands, because the amounts are no longer the point.
  currency: { type: Number, default: 0 },
  // Amounts are held back until the exit test. During the acts each close
  // should carry exactly one new idea — the line item — not a line item and a
  // price and a letterhead all at once.
  // The reckoning: every row is live, because Simon is reading the whole
  // document rather than adding a line to it.
  bill: { type: Boolean, default: false },
  // How many amounts have been read out. He goes down them one at a time.
  amounts: { type: Number, default: 0 },
})

// Only the Steering row carries qualifiers, and it carries one on each side —
// the vendor's honest advantage and the community's. The other two rows stay a
// single line per column so the comparison reads evenly.
const LINES = [
  {
    item: 'Migrating',
    vendor: 'exit fees · data export · rewrite',
    community: "conformance didn't cover the operational and cloud provider layer",
    amount: '6 weeks · the platform team',
  },
  {
    item: 'Keeping up',
    vendor: 'forced upgrades · deprecations · repricing',
    community: 're-instrumenting when the spec moves',
    amount: '2 migrations · everyone with a dashboard',
  },
  {
    item: 'Steering',
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
  <div class="invoice" :class="{ compare: vendor, settling: currency > 0 }">
    <div class="head">
      <span class="claim">"Never locked in again."</span>
      <span class="doc">invoice</span>
    </div>

    <!-- Column headers only exist once there is something to compare. -->
    <div class="grid heads">
      <div />
      <div v-if="vendor" class="col-head">from: a vendor</div>
      <div class="col-head">from: the community</div>
    </div>

    <div
      v-for="(l, i) in LINES.slice(0, rows)"
      :key="l.item"
      class="grid line"
      :class="{ on: bill || vendor || i === rows - 1 }"
    >
      <div class="item">{{ l.item }}</div>
      <div v-if="vendor" class="cell">
        {{ l.vendor }}
        <div v-if="vendor && l.vendorNote" class="note">{{ l.vendorNote }}</div>
      </div>
      <div class="cell">
        {{ l.community }}
        <div v-if="vendor && l.communityNote" class="note">{{ l.communityNote }}</div>
        <div v-if="i < amounts" class="amt">{{ l.amount }}</div>
      </div>
    </div>

    <div v-if="currency > 0" class="grid line total">
      <div class="item">Currency</div>
      <div v-if="vendor" class="cell">
        <template v-if="currency >= 1">
          {{ CURRENCY.vendor }}
          <div class="verdict">{{ CURRENCY.vendorNote }}</div>
        </template>
      </div>
      <div class="cell">
        <template v-if="currency >= 2">
          {{ CURRENCY.community }}
          <div class="verdict">{{ CURRENCY.communityNote }}</div>
        </template>
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

.line {
  border-top: 1px solid rgba(128, 128, 128, .4);
  padding: .55rem 0;
  opacity: .45;
  transition: opacity .4s;
}

/* Dimming the older rows only means something while the bill is being built
   one act at a time — it marks the line that just landed. From the reckoning
   onward Simon is reading the whole document, so every row is live. */
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

/* Once the currency lands, the amounts are no longer the point. */
.invoice.settling .line:not(.total) { opacity: .35; }

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
