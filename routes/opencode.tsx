import { Head } from "$fresh/runtime.ts";
import OpenCodeSetup from "../islands/OpenCodeSetup.tsx";

export default function OpenCodePage() {
  return (
    <>
      <Head>
        <title>OpenCode auf dem Mac · School Bud-E</title>
      </Head>
      <main lang="de" class="min-h-screen bg-slate-50 px-4 py-10 sm:py-16">
        <div class="mx-auto max-w-3xl">
          <p class="mb-2 text-sm font-semibold text-indigo-700">School Bud-E</p>
          <h1 class="mb-5 text-3xl font-bold text-slate-900">
            OpenCode auf dem Mac
          </h1>
          <p class="mb-3 leading-relaxed text-slate-700">
            Drücke <strong>⌘ + Leertaste</strong>, suche nach{" "}
            <strong>Terminal</strong> und drücke{" "}
            <strong>Enter</strong>. Das Terminal ist das Fenster, in dem du
            Befehle für deinen Mac eingeben kannst.
          </p>
          <p class="mb-6 leading-relaxed text-slate-700">
            Klicke unten auf{" "}
            <strong>Kopieren</strong>. Füge den ganzen Block im Terminal mit
            {" "}
            <strong>⌘ + V</strong> ein und drücke{" "}
            <strong>Enter</strong>. Warte, bis die Installation fertig ist und
            OpenCode startet.
          </p>
          <OpenCodeSetup />
        </div>
      </main>
    </>
  );
}
