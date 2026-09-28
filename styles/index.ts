// Slidev loads this one entry. The stylesheets are imported here rather than
// with a CSS `@import` because Vite inlines an @import into the importing
// module: edits to the imported file then never reach a running dev server,
// which serves the copy it inlined at startup. Imported from TS they stay
// separate modules and hot-reload on their own.
//
// Order is the cascade: the conference template's layer first, the deck's own
// styling second.
import './kcd.css'
import './deck.css'
