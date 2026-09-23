# M1 — Blockbasierte Programmierung

**Modulentwurf** · Fach Informatik · Themenfeld Softwareentwicklung · Jahrgang 7–10


> **Umgesetzt.** Dieses Modul liegt fertig unter
> [`learning-paths/informatik/m1-blockbasierte-programmierung/`](../learning-paths/informatik/m1-blockbasierte-programmierung/)
> - 6 Lernpfade, zweisprachig, mit Aufgaben und Quellen. Der Entwurf
> bleibt als Planungsgrundlage stehen; maßgeblich sind die JSON-Dateien.

## Die Moduldefinition

```json
{
  "key": "m1-blockbasierte-programmierung",
  "title": { "de": "Blockbasierte Programmierung", "en": "Block-based programming" },
  "description": {
    "de": "Wie man einer Maschine etwas beibringt, die nichts von selbst versteht - mit Blöcken, die man nicht falsch schreiben kann.",
    "en": "How to teach a machine that understands nothing on its own - with blocks you cannot misspell."
  },
  "icon": "🧩",
  "accent": "emerald",
  "badge": "M1"
}
```

## Verbindliche Fachbegriffe

die bedingte Anweisung · der Datentyp · die Schleife · die Variable ·
die Verzweigung · der Wahrheitswert · die Wertzuweisung

Verteilt auf die Pfade — jeder nimmt seine im Lückentext wieder auf:

| Pfad | deckt ab |
|---|---|
| 2 | Variable, Wertzuweisung, Datentyp |
| 3 | Schleife |
| 4 | bedingte Anweisung, Verzweigung, Wahrheitswert |

## Leitgedanke des Bildungsplans

> Die Schülerinnen und Schüler erlernen, wie sie mit elementaren
> algorithmischen Strukturen einem Computer etwas beibringen können. Hierfür
> planen sie Programme/Projekte in angemessenem Umfang und setzen sie mithilfe
> einer blockbasierten Programmierumgebung um.

---

## Die sechs Lernpfade

| # | Titel | Untertitel | UE der Handreichung |
|---|---|---|---|
| 1 | Der dümmste Mitarbeiter der Welt | Warum ein Computer Genauigkeit braucht und keine Intelligenz | 1 |
| 2 | Kisten mit Namen | Wie sich ein Programm etwas merkt — und warum 3 + 3 nicht immer 6 ist | 2 |
| 3 | Zehnmal dasselbe, einmal geschrieben | Schleifen, und wie man sie wieder loswird | 3–4 |
| 4 | Wenn, dann, sonst | Entscheidungen, Wahrheitswerte und der Unterschied zwischen = und == | 5 |
| 5 | Bau dir ein Spiel | Vom Einfall zum Programm, in fünf Schritten | 6 |
| 6 | Was der Computer besser kann — und was nicht | Wo Automatisierung hilft und wo sie nichts zu suchen hat | 7–8 |

---

### Pfad 1 — Der dümmste Mitarbeiter der Welt

**Kernbild:** Eine Anleitung fürs Butterbrot schreiben für jemanden, der alles
wörtlich nimmt. Das endet zuverlässig im Chaos, und danach versteht jeder,
warum Programmieren Genauigkeit verlangt statt Intelligenz.

**Bildschirme:**
1. *Wörtlich genommen* — die Butterbrot-Übung, an der Tafel vorgeführt
2. *Warum Blöcke* — ein vergessenes Semikolon hat mehr Menschen vom
   Programmieren abgebracht als jedes schwierige Konzept; Blöcke lassen sich
   nicht falsch schreiben
3. *Was du hier lernst, gilt überall* — dieselben Bausteine heißen in Python,
   Java und JavaScript nur anders

**Aufgaben:** Lückentext zu Befehl, Reihenfolge, Programm · Vergleich: Warum ist
ein Kochrezept ein Programm, eine Wegbeschreibung aber manchmal keines? ·
Offen: Wo im Alltag hast du schon einmal etwas *zu ungenau* erklärt bekommen?

---

### Pfad 2 — Kisten mit Namen

**Kernbild:** Eine Variable ist eine Kiste mit einem Namen. Zuweisen heißt:
hineinlegen, und was vorher drin war, ist weg.

**Bildschirme:**
1. *Was sich ein Programm merken muss* — Punktestand, Name, Anzahl der Versuche
2. *Anlegen, zuweisen, ändern* — `setze punkte auf 0`, `ändere punkte um 1`
3. *Was in die Kiste passt* — Ganzzahl, Zeichenkette, Wahrheitswert
4. *Der Klassiker* — `3 + 3` ergibt `6`, `"3" + "3"` ergibt `"33"`; der Datentyp
   entscheidet, was ein Pluszeichen überhaupt bedeutet

**Aufgaben:** Lückentext mit Variable, Wertzuweisung, Datentyp · Vergleich: die
`"3" + "3"`-Aufgabe aus dem alten Entwurf, die sich bewährt · Offen: Was geht
verloren, wenn etwas überschrieben wird — und wo passiert dir das im Alltag?

---

### Pfad 3 — Zehnmal dasselbe, einmal geschrieben

**Kernbild:** Statt zehnmal denselben Block hinzuschreiben, lässt man die
Maschine zählen. Zwei Sorten Schleife, zwei verschiedene Fragen.

**Bildschirme:**
1. *Der Turm aus Blöcken* — was passiert, wenn man es ohne Schleife versucht
2. *Zählschleife: wie oft?* — `wiederhole 10 mal`
3. *Vorprüfende Schleife: solange was?* — `wiederhole bis …`
4. *Die Endlosschleife* — jeder baut sie einmal; wie man dafür sorgt, dass sich
   innerhalb der Schleife etwas ändert

**Aufgaben:** Lückentext zu Schleife, Zählschleife, Bedingung · Vergleich:
Wann nimmt man welche Schleife? Zwei Beispiele, begründet · Offen: Was wäre,
wenn Menschen so zuverlässig wiederholen könnten wie Maschinen?

**Hinweis:** Die Endlosschleife gehört unbedingt hinein — nicht als Warnung,
sondern als normale Erfahrung. Wer sie einmal absichtlich gebaut hat,
erschrickt beim nächsten Mal nicht.

---

### Pfad 4 — Wenn, dann, sonst

**Kernbild:** Der Ablauf teilt sich, und genau ein Weg wird gegangen. Was in der
Bedingung steht, ist immer wahr oder falsch — dazwischen gibt es nichts.

**Bildschirme:**
1. *Die Gabelung* — bedingte Anweisung, dann Verzweigung mit `sonst`
2. *Wahrheitswerte* — Vergleichen mit `=`, `<`, `>`; verknüpfen mit `und`,
   `oder`, `nicht`
3. *Zwei Bedingungen zugleich* — `punkte > 100 und leben > 0`
4. *Verschachteln* — wann eine zweite Ebene hilft und wann sie nur verwirrt

**Aufgaben:** Lückentext zu bedingte Anweisung, Verzweigung, Wahrheitswert ·
Vergleich: `und` gegen `oder` an einem konkreten Spielbeispiel · Offen: Regeln,
die sich nicht in wahr und falsch pressen lassen — wo begegnen sie dir?

---

### Pfad 5 — Bau dir ein Spiel

**Kernbild:** Mit Variable, Schleife und Verzweigung ist alles beisammen. Der
Rest ist Ausprobieren — und ein Ablauf, der beim Planen hilft.

**Bildschirme:**
1. *Fünf Schritte* — Was soll passieren? Was muss sich das Programm merken? Was
   wiederholt sich? Wo wird entschieden? Bauen, probieren, ändern.
2. *Ein Beispiel bis zum Ende* — ein Fangspiel oder ein Zahlenraten, vollständig
   durchgeplant
3. *Wenn es nicht tut, was es soll* — Variablen auf der Bühne einblenden lassen;
   eine Sache ändern, dann probieren
4. *Zeigen und erklären* — was ein anderer verstehen muss, um dein Programm zu
   lesen

**Aufgaben:** Lückentext zum Ablauf · Vergleich mit Handlungsteil: eigenes
Programm bauen und beschreiben, welche der drei Bausteine wo stecken · Offen:
Was hat dich am meisten überrascht, als es nicht funktionierte?

---

### Pfad 6 — Was der Computer besser kann, und was nicht

**Kernbild:** Der Bildungsplan verlangt diese Reflexion ausdrücklich — sie ist
kein Anhängsel, sondern die Leitperspektive des Moduls.

> Computer können einige Aufgaben schneller und zuverlässiger als Menschen
> erledigen. Dadurch verändert sich die Rolle des Individuums in der Lebens-
> und Arbeitswelt.

**Bildschirme:**
1. *Was Maschinen mühelos können* — zählen, wiederholen, nicht müde werden
2. *Woran sie scheitern* — alles, wofür es keine klare Regel gibt
3. *Wo Programme längst entscheiden* — Ampelschaltung, Preisanzeige,
   Reihenfolge im Feed
4. *Wer die Regeln aufgeschrieben hat* — hinter jeder automatischen
   Entscheidung steht ein Mensch, der sie so und nicht anders formuliert hat

**Aufgaben:** Lückentext zur Wiederholung des ganzen Moduls · Vergleich: eine
Aufgabe, die du gern abgeben würdest, und eine, bei der du auf einem Menschen
bestehst · Offen: Was ändert sich daran, wem gegenüber man sich beschweren kann?

**Hinweis:** Auch die zweite Leitperspektive des Plans gehört hierher — dass
Informatik als männerdominiert gilt und der Unterricht dem entgegenwirken soll.
Das ist im Text schwer unterzubringen, ohne belehrend zu klingen; am ehesten
über die Auswahl der Beispiele und Namen, nicht über einen Absatz darüber.

---

## Hinweise zur Umsetzung

- **Umgebung:** Scratch (scratch.mit.edu) läuft im Browser ohne Konto.
  Alternativ inf-schule.de mit deutschsprachigen Aufgaben.
- **Optional laut Plan:** Funktionen und Prozeduren als Konzept, sowie
  Operationen auf Zeichenketten. Beides passt als siebter Pfad, wenn die Klasse
  schnell ist — nicht in Pfad 4 hineinquetschen.
- **Bezug zu W1:** Der Plan nennt Mikrocontroller-Projekte als Umsetzung.
  Wer Calliope oder micro:bit hat, kann Pfad 5 darauf aufbauen.
- **Was noch fehlt:** die englische Fassung jedes Textes, und für Pfad 5 ein
  vollständiges Beispielprogramm als Bild oder Blockliste.
