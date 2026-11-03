import { useRef, useState } from "preact/hooks";

export const OPENCODE_SETUP = String.raw`setopt interactivecomments

# OpenCode herunterladen und installieren
curl -fsSL https://opencode.ai/v2/install | bash

# OpenCode zum PATH hinzufügen
echo 'export PATH="$HOME/.opencode/bin:$PATH"' >> ~/.zshrc

# Terminal-Konfiguration neu laden
source ~/.zshrc

# Prüfen, ob OpenCode korrekt installiert wurde
opencode --version

# Projektordner auf dem Desktop erstellen
mkdir -p ~/Desktop/opencode-projekt

# In den Projektordner wechseln
cd ~/Desktop/opencode-projekt

# OpenCode starten
opencode`;

export default function OpenCodeSetup() {
  const codeRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"idle" | "copied" | "manual">("idle");

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(OPENCODE_SETUP);
      setStatus("copied");
      return;
    } catch {
      const code = codeRef.current;
      if (code) {
        const selection = globalThis.getSelection();
        const range = document.createRange();
        range.selectNodeContents(code);
        selection?.removeAllRanges();
        selection?.addRange(range);
        try {
          if (document.execCommand("copy")) {
            setStatus("copied");
            return;
          }
        } catch {
          // Leave the complete code selected for the keyboard shortcut.
        }
      }
      setStatus("manual");
    }
  };

  return (
    <figure class="overflow-hidden rounded-xl border border-slate-700 bg-slate-900 text-slate-100 shadow-lg">
      <figcaption class="flex items-center justify-between gap-3 border-b border-slate-700 px-4 py-3">
        <span class="text-sm font-semibold text-slate-300">
          Im Mac-Terminal einfügen
        </span>
        <button
          type="button"
          onClick={copyCode}
          aria-label="Gesamten Code kopieren"
          class="inline-flex shrink-0 items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <rect x="9" y="9" width="12" height="12" rx="2" />
            <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
          </svg>
          {status === "copied" ? "Kopiert ✓" : "Kopieren"}
        </button>
      </figcaption>
      <pre class="overflow-x-auto p-4 text-sm leading-relaxed sm:p-5"><code ref={codeRef}>{OPENCODE_SETUP}</code></pre>
      <p
        role="status"
        aria-live="polite"
        class="px-4 pb-3 text-sm text-slate-300"
      >
        {status === "copied"
          ? "Jetzt im Terminal mit ⌘ + V einfügen."
          : status === "manual"
          ? "Der Code ist markiert. Drücke ⌘ + C, dann im Terminal ⌘ + V."
          : "Der Kopierknopf übernimmt den gesamten Block."}
      </p>
    </figure>
  );
}
