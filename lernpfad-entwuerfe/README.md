# Fach Informatik: fünf Module, 29 Lernpfade

Seit dem Schuljahr 2025/26 ist Informatik in Hamburg **Pflichtfach in den
Jahrgangsstufen 7 bis 10**, mit insgesamt vier Wochenstunden. Verbindlich ist
ein Kerncurriculum aus fünf Pflichtmodulen.

Dieser Ordner plant, wie daraus Inhalte für Bud-E werden — ein Fach, fünf
Module, und darin jeweils fünf bis sieben Lernpfade.

> **Alle fünf Module sind inzwischen umgesetzt.** Sie liegen ausgeschrieben
> unter [`../learning-paths/informatik/`](../learning-paths/informatik/) und
> erscheinen in der Anwendung unter Informatik. Die Entwürfe hier bleiben als
> Planungsgrundlage stehen — wer etwas ändern will, ändert die JSON-Dateien.

---

## Die Hierarchie

Bud-E ordnet Inhalte dreistufig, und diese Entwürfe folgen dem:

```
Fach          Informatik
  Modul       M1  Blockbasierte Programmierung
    Lernpfad  Der dümmste Mitarbeiter der Welt
    Lernpfad  Kisten mit Namen
    Lernpfad  Wiederholen und entscheiden
    …
```

Ein Modul entspricht einem Pflichtmodul des Bildungsplans. Ein Lernpfad ist
eine Sitzung von zwölf bis achtzehn Minuten Lesezeit — ungefähr das, was in
einer Doppelstunde als Grundlage taugt.

Das mitgelieferte Modul **Informatische Grundbildung** bleibt daneben bestehen.
Es folgt keinem Pflichtmodul, sondern legt die Voraussetzungen: was ein Computer
ist, was Bits sind, wie exponentielles Wachstum funktioniert.

---

## Die fünf Pflichtmodule

| Modul | Titel laut Bildungsplan | Themenfeld | Pfade | Entwurf |
|---|---|---|---|---|
| M1 | Blockbasierte Programmierung | Softwareentwicklung | 6 | [M1](M1-blockbasierte-programmierung.md) |
| M2 | Kommunikation und Rechnernetze | Sicherheit in verteilten Systemen | 5 | [M2](M2-rechnernetze.md) |
| M3 | Textbasierte Programmierung | Softwareentwicklung | 7 | [M3](M3-textbasierte-programmierung.md) |
| M4 | Datenbanken und Datenschutz, Teil 1 | Datenkompetenz | 6 | [M4](M4-daten-und-datenschutz.md) |
| M5 | Künstliche Intelligenz und Maschinelles Lernen | Datenkompetenz | 5 | [M5](M5-kuenstliche-intelligenz.md) |

Alle Module sind für die Jahrgangsstufen 7–10 ausgewiesen; die Reihenfolge
innerhalb dieser Spanne legt die einzelne Schule fest.

---

## Wie ein Entwurf aufgebaut ist

Jede Datei enthält:

1. **Die Moduldefinition** — genau die Felder, die in `_module.json` gehören.
2. **Die verbindlichen Fachbegriffe** aus dem Bildungsplan. Sie sind auf die
   Lernpfade verteilt, und jeder Pfad nimmt seine im Lückentext wieder auf.
3. **Eine Übersicht der Lernpfade** mit Titel, Untertitel und Zuordnung zu den
   Unterrichtseinheiten der Handreichung.
4. **Je Lernpfad** eine Skizze: Bildschirme, Kernaussagen, Aufgabenideen.
5. **Hinweise zur Umsetzung** — was noch fehlt, wo Vorsicht geboten ist.

Ein Entwurf ist **kein fertiger Pfad**: ausformuliert genug, um ihn zu
beurteilen und zu verteilen, aber noch nicht als JSON abgelegt. Das Dateiformat
steht in [`../LERNPFADE.md`](../LERNPFADE.md); ein vollständig ausgeschriebenes
Beispiel liegt unter `../learning-paths/physik/`.

---

## Was jetzt zu tun bleibt

Die 29 Pfade sind geschrieben, zweisprachig, mit Aufgaben und Quellen. Was noch
fehlt, ist die Arbeit, die nur im Unterricht entstehen kann:

- **Ausprobieren.** Jeder Pfad ist auf zwölf bis achtzehn Minuten Lesezeit
  angelegt. Ob das für eine bestimmte Klasse stimmt, zeigt erst die Stunde.
- **Werkzeuge bereitstellen.** M1 braucht Scratch, M2 braucht Filius, M5 braucht
  Teachable Machine. Alle drei laufen im Browser ohne Konto — aber sie müssen
  im Schulnetz erreichbar sein.
- **Zahlen prüfen.** In M4 steht eine Größenordnung („~500 Datenpunkte je
  Person“), die eine belegbare Quelle braucht oder als Schätzung gekennzeichnet
  werden muss.
- **Aktuell halten.** M5 veraltet am schnellsten; seine Beispiele gehören
  einmal im Schuljahr durchgesehen.

---

## Quellen

- [Bildungsplan Gymnasium Sekundarstufe I, Informatik](https://www.hamburg.de/resource/blob/798514/ad3c2fdfb3a32b9545a271dfceae5772/informatik-data.pdf)
  (Behörde für Schule und Berufsbildung) — daraus stammen Modulnamen,
  Inhaltsbereiche und alle Fachbegriffe.
- Die im Repository liegende Handreichung `Informatik Sek 1 (1).pdf` mit
  Vorschlägen für Unterrichtssequenzen. Ihre Gliederung deckt sich mit den fünf
  Modulen; die Zuordnung der Lernpfade zu ihren Unterrichtseinheiten steht in
  jedem Entwurf.

## Anmerkung zu M1 und M3

Beide Module gehören zum Themenfeld Softwareentwicklung und überschneiden sich
inhaltlich stark — Variablen, Schleifen, Verzweigungen kommen zweimal vor,
einmal blockbasiert und einmal in Text. Das ist im Bildungsplan so angelegt und
kein Fehler: M3 nennt M1 ausdrücklich als fachinternen Bezug. Die Entwürfe gehen
unterschiedlich damit um — M1 erklärt die Konzepte, M3 setzt sie voraus und
macht die Wiederholung selbst zum Thema.
