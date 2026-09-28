import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    watch: {
      // This repo lives on a Windows drive mounted into WSL (/mnt/c...), and
      // that mount does not deliver inotify events. Without polling, Vite's
      // watcher sees no edits at all: the dev server goes on serving the
      // modules it loaded at startup, so a change to slides.md or to anything
      // under styles/ only shows up after a restart — and looks, from the
      // browser, exactly like a caching problem that clearing the cache does
      // not fix. Polling costs a little idle CPU and is the only thing that
      // works across that mount.
      usePolling: true,
      interval: 300,
    },
  },
})
