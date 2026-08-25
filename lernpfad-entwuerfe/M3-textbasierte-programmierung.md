# M3 — Textbasierte Programmierung

**Modulentwurf** · Fach Informatik · Themenfeld Softwareentwicklung · Jahrgang 7–10


> **Umgesetzt.** Dieses Modul liegt fertig unter
> [`learning-paths/informatik/m3-textbasierte-programmierung/`](../learning-paths/informatik/m3-textbasierte-programmierung/)
> - 7 Lernpfade, zweisprachig, mit Aufgaben und Quellen. Der Entwurf
> bleibt als Planungsgrundlage stehen; maßgeblich sind die JSON-Dateien.

## Die Moduldefinition

```json
{
  "key": "m3-textbasierte-programmierung",
  "title": { "de": "Textbasierte Programmierung", "en": "Text-based programming" },
  "description": {
    "de": "Dieselben Bausteine noch einmal - diesmal getippt. Und dann angewendet auf Aufgaben, die ohne Programm mühsam wären.",
    "en": "The same building blocks again - typed this time. And then applied to tasks that would be tedious without a program."
  },
  "icon": "🐍",
  "accent": "indigo",
  "badge": "M3"
}
```

## Verbindliche Fachbegriffe

die bedingte Anweisung · der Datentyp · die Funktion · die Schleife ·
die Variable · die Verzweigung · die Wertzuweisung · die Wiederholung

| Pfad | deckt ab |
|---|---|
| 2 | Variable, Wertzuweisung, Datentyp |
| 3 | Schleife, Wiederholung |
| 4 | bedingte Anweisung, Verzweigung |
| 5 | Funktion |

## Leitgedanke des Bildungsplans

> Die Schülerinnen und Schüler lernen die elementaren Grundlagen einer aktuellen
> Programmiersprache, beispielsweise von Python. […] Bei der Vermittlung wird
> eine starke Orientierung an konkreten Anwendungskontexten angestrebt — **und
> kein reiner Programmierkurs.**

Der letzte Halbsatz steht so im Plan und ist die eigentliche Vorgabe. Deshalb
sind von sieben Pfaden zwei reine Anwendungspfade (6 und 7) — und Pfad 1 stellt
die Frage, warum man das alles überhaupt noch einmal lernt.

**Verhältnis zu M1:** Variablen, Schleifen und Verzweigungen kommen hier zum
zweiten Mal vor. Das ist im Bildungsplan so angelegt; M3 nennt M1 ausdrücklich
als fachinternen Bezug. M1 erklärt die Konzepte, M3 setzt sie voraus und macht
die Wiederholung selbst zum Thema.

---

## Die sieben Lernpfade

| # | Titel | Untertitel | UE der Handreichung |
|---|---|---|---|
| 1 | Dasselbe noch einmal, und warum | Was Text kann, was Blöcke nicht können | 1 |
| 2 | Werte, Namen und Typen | Warum `input()` immer Text liefert | 2 |
| 3 | Wiederholen in Text | `for`, `while` und die Einrückung | 3 |
| 4 | Entscheiden in Text | `if`, `elif`, `else` und der Unterschied zwischen = und == | 4 |
| 5 | Eigene Bausteine | Funktionen, Parameter und fertige Bibliotheken | 5 |
| 6 | Erst denken, dann tippen | Algorithmen, Sonderfälle und Fehlermeldungen lesen | 6 |
| 7 | Wofür man es dann benutzt | Ein Programm als Werkzeug in Physik, Mathe, Alltag | 7–8 |

---

### Pfad 1 — Dasselbe noch einmal, und warum

**Kernbild:** Du kannst Variablen, Schleifen und Verzweigungen schon. Und jetzt
soll das alles noch einmal kommen, diesmal getippt. Die Frage liegt auf der
Hand: Wozu?

**Bildschirme:**
1. *Wenn Blöcke im Weg sind* — dreißig Zeilen sind in Scratch ein Turm zum
   Scrollen; als Text passen sie auf einen Bildschirm
2. *Was man mit Text machen kann* — durchsuchen, vergleichen, kopieren,
   verschicken, nachschlagen. Und: Alles, was Software auf der Welt antreibt,
   ist Text.
3. *Dasselbe Programm, zwei Schreibweisen* (Tabelle) — `setze punkte auf 0` /
   `punkte = 0`, `wiederhole 10 mal` / `for i in range(10):`, und so weiter
4. *Einrückung ist keine Kosmetik* — was in Scratch sichtbar ineinandersteckt,
   drückt Python durch Leerzeichen am Zeilenanfang aus, und zwar verbindlich

**Aufgaben:** Lückentext zur Gegenüberstellung · Vergleich: eine Aufgabe, für
die Blöcke besser sind, und eine, bei der Text überlegen ist — begründet mit
einer Eigenschaft der Darstellung, nicht mit Gewohnheit · Offen: Was hat dich
beim ersten getippten Programm am meisten geärgert?

---

### Pfad 2 — Werte, Namen und Typen

**Kernbild:** `input()` liefert immer Text. Auch dann, wenn eine Zahl eingetippt
wurde. Dieser eine Satz erklärt die Hälfte aller Fehler am Anfang.

**Bildschirme:**
1. *Zuweisen* — `punkte = 0`, und warum das kein Gleichheitszeichen im
   mathematischen Sinn ist
2. *Drei Typen* — `int`, `str`, `bool` (Tabelle mit je einem typischen Fehler)
3. *Der Klassiker* — `"3" + "3"` ergibt `"33"`; `int(input(...))` als Lösung
4. *Ausgeben* — `print()` mit mehreren Werten, f-Strings als bequemere Form

**Aufgaben:** Lückentext zu Variable, Wertzuweisung, Datentyp · Vergleich: Zwei
Programme unterscheiden sich in einer einzigen Zeile und liefern völlig
verschiedene Ergebnisse — welche, und warum? · Offen: Warum ist es sinnvoll,
dass der Computer Text und Zahlen nicht selbst auseinanderhält?

---

### Pfad 3 — Wiederholen in Text

**Kernbild:** Zwei Schleifen, zwei Fragen: „wie oft?" und „solange was?" —
dieselbe Unterscheidung wie in M1, aber jetzt sichtbar an der Einrückung.

**Bildschirme:**
1. *`for i in range(10)`* — die Zählschleife, und was `i` eigentlich ist
2. *`while`* — solange eine Bedingung gilt; die Endlosschleife und wie man sie
   abbricht
3. *Was noch dazugehört* — der eingerückte Block, und was passiert, wenn eine
   Zeile aus Versehen nicht eingerückt ist
4. *Schleifen mit Sinn* — die ersten zwanzig Quadratzahlen, eine Zeitmessung,
   ein Countdown

**Aufgaben:** Lückentext zu Schleife, Wiederholung, Bedingung · Vergleich:
Dasselbe Ergebnis einmal mit `for` und einmal mit `while` — welche Fassung ist
klarer, und woran liegt das? · Offen: Wo im Alltag zählst du mit, ohne es zu
merken?

---

### Pfad 4 — Entscheiden in Text

**Kernbild:** `=` legt hinein, `==` vergleicht. Der berühmteste Tippfehler der
Informatik, und in Python bekommt man dafür sogar eine gute Fehlermeldung.

**Bildschirme:**
1. *`if` allein* — die bedingte Anweisung
2. *`if … else`* — die Verzweigung: genau ein Weg wird gegangen
3. *`elif`* — mehr als zwei Fälle, und warum die Reihenfolge zählt
4. *Verknüpfen* — `and`, `or`, `not`, und wann Klammern helfen

**Aufgaben:** Lückentext zu bedingte Anweisung, Verzweigung · Vergleich: eine
`elif`-Kette, bei der zwei Fälle vertauscht sind — was ändert sich am Ergebnis?
· Offen: Eine Regel, die sich schlecht in `if` fassen lässt — welche, und warum?

---

### Pfad 5 — Eigene Bausteine

**Kernbild:** Wer dreimal dasselbe schreibt, sollte eine Funktion daraus machen.
Dann steht die Sache an *einer* Stelle, und Ändern heißt einmal ändern.

**Bildschirme:**
1. *`def` und der Aufruf* — ein eigener Baustein mit Namen
2. *Parameter und Rückgabewert* — was hineingeht, was herauskommt
3. *Fertige Bausteine* — `random` für Zufall, `math` für Wurzeln, `time` für
   Zeitmessung. Eine Bibliothek zu benutzen heißt nicht, weniger zu können; es
   heißt, nicht neu zu erfinden, was es schon gibt.
4. *Ein Programm aus Funktionen* — dasselbe Zahlenratespiel, einmal als
   Textwüste und einmal in drei Funktionen zerlegt

**Aufgaben:** Lückentext zu Funktion, Parameter, Rückgabewert · Vergleich: die
beiden Fassungen des Ratespiels — welche würdest du in einem halben Jahr noch
verstehen? · Offen: Wo im Alltag benutzt du etwas, ohne wissen zu wollen, wie es
innen funktioniert?

---

### Pfad 6 — Erst denken, dann tippen

**Kernbild:** Bevor man ein Programm schreibt, beschreibt man in normalen
Sätzen, was es tun soll. Das klingt nach Umweg und spart die meiste Zeit.

**Bildschirme:**
1. *Was ein Algorithmus ist* — eine Folge eindeutiger Schritte; jeder Schritt
   klar, das Ende klar, und er funktioniert für alle Fälle
2. *Fünf Schritte vor dem Tippen* — in Sätzen aufschreiben, Reihenfolge prüfen,
   Sonderfälle suchen, bei Verzweigungen zeichnen, dann erst tippen
3. *Das Zahlenratespiel* — die schwierige Stelle ist nicht das Raten, sondern
   wann das Programm aufhört und was passiert, wenn jemand seinen Namen eintippt
4. *Fehlermeldungen lesen* — `NameError` heißt „diesen Namen kenne ich nicht",
   meistens ein Tippfehler; `TypeError` heißt „diese beiden passen nicht
   zusammen", meistens Text gegen Zahl. Zwei erkannte Meldungen sparen Stunden.

**Aufgaben:** Lückentext zu Algorithmus, Sonderfall, Fehlermeldung · Vergleich:
zwei Fehlermeldungen zu demselben Programm — welche nennt die Ursache, welche
nur die Stelle? · Offen: Wann hast du zuletzt eine Fehlermeldung weggeklickt,
ohne sie zu lesen?

---

### Pfad 7 — Wofür man es dann benutzt

**Kernbild:** Hier entscheidet sich, ob es ein Programmierkurs war oder
Informatikunterricht. Ein Werkzeug zeigt seinen Wert an einer echten Aufgabe.

**Bildschirme:**
1. *Physik* — eine Messreihe auswerten: fünfzig Werte mitteln, Maximum finden,
   Abweichung ausrechnen. Von Hand eine Stunde, als Programm drei Zeilen und für
   jede weitere Messreihe wiederverwendbar.
2. *Mathematik und Sprache* — eine Vermutung für alle Zahlen bis 10 000 prüfen
   (ein Beweis ist das nicht, aber man sieht, ob sich einer lohnt); zählen,
   welche Wörter in einem Text am häufigsten vorkommen
3. *Alltag* — aus hundert Dateien die umbenennen, die ein bestimmtes Datum
   tragen
4. *Wer die Bedingungen aufgeschrieben hat* — Software steckt in fast allem. Wer
   versteht, wie Programme entscheiden, kann fragen, warum eine App etwas
   anzeigt oder eine Bewerbung aussortiert.

**Aufgaben:** Lückentext zur Wiederholung des Moduls · Vergleich mit
Handlungsteil: eine eigene kleine Auswertung schreiben und begründen, warum sich
das Programm gegenüber Handarbeit lohnt (oder eben nicht) · Offen: Ändert es
etwas daran, wem gegenüber man sich beschweren kann, wenn hinter jeder
automatischen Entscheidung ein Mensch steht, der sie so aufgeschrieben hat?

---

## Hinweise zur Umsetzung

- **Der wichtigste Satz des Moduls** steht im Plan: „kein reiner
  Programmierkurs". Pfad 7 ist deshalb kein Anhängsel, sondern der Grund für die
  sechs davor. Wer streichen muss, streicht nicht ihn.
- **Optional laut Plan:** Listen, Dictionaries, Arrays sowie Mock-ups. Passt als
  achter Pfad zwischen 5 und 6, wenn Zeit ist.
- **Umgebung:** Das mitgelieferte Notebook in Bud-E führt Python im Browser aus
  — ohne Installation, ohne Konto. Für den Unterricht heißt das: keine
  Einrichtungsstunde.
- **Was noch fehlt:** die englische Fassung; und in den Pfaden 2 bis 5 sollte je
  ein vollständiges kurzes Programm als Codeblock stehen, nicht nur Fragmente.

## Quellen für die Ausarbeitung

- Python-Dokumentation, Einstieg — https://docs.python.org/3/tutorial/
- inf-schule.de: Imperative Programmierung (Python) —
  https://www.inf-schule.de/imperative-programmierung
- Bildungsplan Informatik Sek I, Hamburg —
  https://www.hamburg.de/resource/blob/798514/ad3c2fdfb3a32b9545a271dfceae5772/informatik-data.pdf
