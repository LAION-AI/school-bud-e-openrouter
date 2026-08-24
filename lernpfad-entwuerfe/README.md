# Entwürfe: Lernpfade zum Hamburger Pflichtfach Informatik

Seit dem Schuljahr 2025/26 ist Informatik in Hamburg **Pflichtfach in den
Jahrgangsstufen 7 bis 10**, mit insgesamt vier Wochenstunden. Verbindlich ist
ein Kerncurriculum aus fünf Pflichtmodulen. Dieser Ordner enthält für jedes
davon einen Lernpfad-Entwurf.

Es sind **Entwürfe**, keine fertigen Pfade: ausformuliert genug, um sie zu
beurteilen, aber noch nicht als JSON abgelegt. Wer einen davon umsetzen will,
findet das Format in [`../LERNPFADE.md`](../LERNPFADE.md) beschrieben.

## Die fünf Pflichtmodule

| Modul | Titel laut Bildungsplan | Themenfeld | Entwurf |
|---|---|---|---|
| M1 | Blockbasierte Programmierung | Softwareentwicklung | [M1](M1-blockbasierte-programmierung.md) |
| M2 | Kommunikation und Rechnernetze | Sicherheit in verteilten Systemen | [M2](M2-rechnernetze.md) |
| M3 | Textbasierte Programmierung | Softwareentwicklung | [M3](M3-textbasierte-programmierung.md) |
| M4 | Datenbanken und Datenschutz, Teil 1 | Datenkompetenz | [M4](M4-daten-und-datenschutz.md) |
| M5 | Künstliche Intelligenz und Maschinelles Lernen | Datenkompetenz | [M5](M5-kuenstliche-intelligenz.md) |

Alle Module sind für die Jahrgangsstufen 7–10 ausgewiesen; die Reihenfolge
innerhalb dieser Spanne legt die einzelne Schule fest.

## Was die Entwürfe von den bestehenden Pfaden übernehmen

Vier bis fünf Bildschirme, ein Einstieg über etwas, das die Schülerin schon
kennt, nachrechenbare Zahlen statt Behauptungen, Quellenangaben am Ende — und
die drei Abschlussaufgaben in steigender Schwierigkeit: Lückentext, Vergleich
(Anforderungsbereich II), offene Frage.

## Was hier zusätzlich dazukommt

Jeder Entwurf nennt oben die **Fachbegriffe, die der Bildungsplan wörtlich
verlangt**. Das ist der Unterschied zwischen einem schönen Text und einem, der
den Plan erfüllt: Die Begriffe müssen vorkommen, und sie kommen im Lückentext
wieder.

## Quellen

- [Bildungsplan Gymnasium Sekundarstufe I, Informatik](https://www.hamburg.de/resource/blob/798514/ad3c2fdfb3a32b9545a271dfceae5772/informatik-data.pdf)
  (Behörde für Schule und Berufsbildung) — daraus stammen Modulnamen,
  Inhaltsbereiche und alle Fachbegriffe.
- Die im Repository liegende Handreichung `Informatik Sek 1 (1).pdf` mit
  Vorschlägen für Unterrichtssequenzen. Ihre Gliederung deckt sich mit den
  fünf Modulen; einzelne Anregungen daraus sind eingeflossen.

## Anmerkung zu M1 und M3

Beide Module gehören zum Themenfeld Softwareentwicklung und überschneiden
sich inhaltlich stark — Variablen, Schleifen, Verzweigungen kommen zweimal
vor, einmal blockbasiert und einmal in Text. Das ist im Bildungsplan so
angelegt und kein Fehler: M3 nennt M1 ausdrücklich als fachinternen Bezug.
Die Entwürfe gehen unterschiedlich damit um — M1 erklärt die Konzepte, M3
setzt sie voraus und stellt die Frage, warum man dasselbe noch einmal anders
schreibt.
