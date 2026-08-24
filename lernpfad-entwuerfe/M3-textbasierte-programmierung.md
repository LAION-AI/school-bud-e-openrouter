# M3 — Textbasierte Programmierung

**Entwurf für einen Lernpfad** · Themenfeld Softwareentwicklung · Jahrgang 7–10

```
key      vom-block-zum-text
title    Vom Block zum Text
summary  Warum man dieselben Bausteine noch einmal lernt — diesmal getippt,
         und warum sich das lohnt.
icon     🐍
accent   indigo
minutes  18
```

### Verbindliche Fachbegriffe

die bedingte Anweisung · der Datentyp · die Funktion · die Schleife ·
die Variable · die Verzweigung · die Wertzuweisung · die Wiederholung

### Leitgedanke des Bildungsplans

> Die Schülerinnen und Schüler lernen die elementaren Grundlagen einer
> aktuellen Programmiersprache, beispielsweise von Python. […] Bei der
> Vermittlung wird eine starke Orientierung an konkreten Anwendungskontexten
> angestrebt — **und kein reiner Programmierkurs.**

Der letzte Halbsatz steht so im Plan und ist die eigentliche Vorgabe: Dieser
Pfad darf keine Syntaxsammlung werden. Jeder Bildschirm braucht ein Problem,
das ohne Programm mühsam wäre.

---

## Bildschirm 1 — Dasselbe noch einmal, und warum

**lead**
Du kannst Variablen, Schleifen und Verzweigungen schon — aus Scratch. Und jetzt
soll das alles noch einmal kommen, diesmal getippt. Die Frage liegt auf der
Hand: Wozu?

**paragraph**
Weil Blöcke irgendwann im Weg sind. Ein Programm mit dreißig Zeilen ist in
Scratch ein Turm, den man scrollen muss; als Text passt es auf einen
Bildschirm. Man kann Text durchsuchen, vergleichen, kopieren, per Mail
verschicken und in einer Suchmaschine nachschlagen. Vor allem aber: Alles, was
Software auf der Welt antreibt, ist Text.

**table** — *Dasselbe Programm, zwei Schreibweisen*

| Was passieren soll | Scratch | Python |
|---|---|---|
| merken | `setze punkte auf 0` | `punkte = 0` |
| wiederholen | `wiederhole 10 mal` | `for i in range(10):` |
| entscheiden | `falls punkte > 5 dann` | `if punkte > 5:` |
| ausgeben | `sage "Hallo"` | `print("Hallo")` |

**fact-callout · 🎯 · Du lernst nichts Neues, nur eine neue Schreibweise**
Das ist die gute Nachricht: Die Konzepte sind dieselben. Was neu dazukommt, ist
die Genauigkeit — ein fehlender Doppelpunkt, und nichts läuft. Dafür bekommst
du eine Fehlermeldung, die meistens die Zeile nennt.

**warn-callout · 📏 · Einrückung ist keine Kosmetik**
In Python bestimmen Leerzeichen am Zeilenanfang, was noch zur Schleife gehört
und was nicht. In anderen Sprachen machen das Klammern. Was in Scratch
sichtbar ineinandersteckt, wird hier durch Einrücken ausgedrückt — und ist
genauso verbindlich.

---

## Bildschirm 2 — Erst denken, dann tippen

**lead**
Bevor man ein Programm schreibt, beschreibt man, was es tun soll — in normalen
Sätzen. Das klingt nach unnötigem Umweg und spart die meiste Zeit.

**paragraph**
Ein **Algorithmus** ist eine Folge von Schritten, die zu einem Ergebnis führt.
Kochrezepte sind Algorithmen, Wegbeschreibungen auch. Was einen guten Algorithmus
ausmacht: Jeder Schritt ist eindeutig, es ist klar, wann er fertig ist, und er
funktioniert für alle Fälle — nicht nur den, an den man zuerst gedacht hat.

**steps**
1. **In Sätzen aufschreiben**, was passieren soll. Umgangssprachlich.
2. **Die Reihenfolge prüfen.** Was muss vorher da sein?
3. **Die Sonderfälle suchen.** Was, wenn nichts eingegeben wird? Wenn die Zahl
   null ist? Wenn es negativ wird?
4. **Als Struktogramm oder Ablaufplan zeichnen**, wenn es verzweigt.
5. **Erst dann tippen.**

**try-callout · 🎲 · Das Zahlenratespiel als Beispiel**
„Der Computer denkt sich eine Zahl zwischen 1 und 100, du rätst, er sagt höher
oder tiefer." Schreib den Ablauf erst in Sätzen auf. Du wirst merken: Die
schwierige Stelle ist nicht das Raten, sondern die Frage, wann das Programm
aufhört — und was passiert, wenn jemand statt einer Zahl seinen Namen eintippt.

---

## Bildschirm 3 — Die Bausteine in Python

**lead**
Fünf Dinge reichen für erstaunlich viel: Werte merken, wiederholen,
entscheiden, ein- und ausgeben, und eigene Bausteine bauen.

**table** — *Datentypen und was schiefgeht*

| Typ | Beispiel | Häufiger Fehler |
|---|---|---|
| `int` | `42` | `input()` liefert Text, keine Zahl — `int(...)` fehlt |
| `str` | `"Mia"` | `"3" + "3"` ergibt `"33"`, nicht `6` |
| `bool` | `True` | `=` zuweisen gegen `==` vergleichen |

**paragraph**
Die **Funktion** ist das Einzige, was in Scratch oft fehlt und hier wirklich
neu ist: ein eigener Baustein mit Namen, den man beliebig oft benutzen kann.
Wer dreimal dasselbe schreibt, sollte eine Funktion daraus machen — dann steht
die Sache an *einer* Stelle, und Ändern heißt einmal ändern.

**paragraph**
Dazu kommen fertige Bausteine, die andere geschrieben haben: `random` für
Zufall, `math` für Wurzeln, `time` für Zeitmessung. Eine Bibliothek zu benutzen
heißt nicht, dass man weniger kann — es heißt, dass man nicht neu erfindet, was
es schon gibt.

**warn-callout · 🔍 · Der wichtigste Satz zum Fehlersuchen**
Lies die Fehlermeldung. Wirklich lesen, nicht wegklicken. Sie nennt die Zeile
und die Art des Fehlers. `NameError` heißt: Diesen Namen kenne ich nicht —
meistens ein Tippfehler. `TypeError` heißt: Diese beiden Dinge passen nicht
zusammen — meistens Text gegen Zahl. Zwei Meldungen, die man erkennt, sparen
Stunden.

---

## Bildschirm 4 — Wofür man es dann benutzt

**lead**
Hier entscheidet sich, ob es ein Programmierkurs war oder Informatikunterricht.
Ein Programm ist ein Werkzeug — und ein Werkzeug zeigt seinen Wert an einer
echten Aufgabe.

**list**
- **Physik:** Eine Messreihe auswerten. Fünfzig Werte mitteln, das Maximum
  finden, die Abweichung ausrechnen — von Hand eine Stunde, als Programm drei
  Zeilen und für jede weitere Messreihe wiederverwendbar.
- **Mathematik:** Eine Vermutung prüfen. Gilt das für alle Zahlen bis 10 000?
  Ein Beweis ist das nicht, aber man sieht schnell, ob es sich lohnt, einen zu
  suchen.
- **Sprachen:** Zählen, welche Wörter in einem Text am häufigsten vorkommen.
- **Alltag:** Aus hundert Dateien die umbenennen, die ein bestimmtes Datum
  tragen.

**tip-callout · ♻️ · Zwei Regeln, die immer helfen**
Erstens: kleine Schritte. Schreib fünf Zeilen, lass sie laufen, dann die
nächsten fünf. Zweitens: Wenn du dreimal dasselbe tippst, mach eine Funktion
daraus.

**paragraph**
Und der Gedanke, der über das Fach hinausgeht: Software steckt inzwischen in
fast allem. Wer ungefähr versteht, wie Programme entscheiden, kann fragen,
warum eine App etwas anzeigt oder eine Bewerbung aussortiert wird. Wer es nicht
versteht, muss glauben, was die Maschine sagt.

**sources**
- Python-Dokumentation, Einstieg — https://docs.python.org/3/tutorial/
- inf-schule.de: Imperative Programmierung (Python) — https://www.inf-schule.de/imperative-programmierung
- Bildungsplan Informatik Sek I, Hamburg —
  https://www.hamburg.de/resource/blob/798514/ad3c2fdfb3a32b9545a271dfceae5772/informatik-data.pdf

---

## Die drei Aufgaben

### 1. Lückentext

> Eine Folge eindeutiger Schritte, die zu einem Ergebnis führt, heißt ___.
> Bevor man tippt, beschreibt man ihn in Sätzen oder zeichnet ihn als
> Struktogramm. Beim Programmieren merkt sich eine ___ einen Wert; ihn
> hineinzuschreiben ist eine ___. Welche Art von Wert es ist, sagt der ___ —
> `int` für Ganzzahlen, `str` für Text. Soll etwas mehrfach ausgeführt werden,
> nimmt man eine ___. Soll es nur unter einer Bedingung geschehen, nimmt man
> eine ___; kommt ein `else` hinzu, wird daraus eine ___. Einen eigenen
> Baustein, den man mehrfach aufrufen kann, nennt man ___. In Python bestimmt
> die ___ am Zeilenanfang, was zu einem Block gehört.
>
> *(9 Lücken)*

### 2. Vergleiche *(Anforderungsbereich II)*

> Du hast dieselben Konzepte zweimal gelernt: als Blöcke und als Text. Nenne
> eine Aufgabe, für die Blöcke die bessere Wahl sind, und eine, bei der Text
> deutlich überlegen ist — und begründe beides mit einer Eigenschaft der
> jeweiligen Darstellung, nicht mit Gewohnheit.
>
> *Hinweis: Denk an ein Programm mit dreihundert Zeilen, und daran, dass man
> Text durchsuchen kann.*

### 3. Zum Nachdenken

> Programme entscheiden inzwischen mit: welche Videos dir vorgeschlagen werden,
> welche Bewerbung zuerst gelesen wird, wie ein Auto in einer Gefahrensituation
> lenkt. Geschrieben hat diese Programme jemand, der Bedingungen formuliert hat
> — genau solche `if`-Zeilen, wie du sie jetzt schreiben kannst. Überlege, was
> es bedeutet, dass hinter jeder automatischen Entscheidung ein Mensch steht,
> der sie so und nicht anders aufgeschrieben hat. Ändert das etwas daran, wem
> gegenüber man sich beschweren kann?

---

## Hinweise zur Umsetzung

- **Der wichtigste Satz des Moduls** steht im Plan: „kein reiner
  Programmierkurs". Bildschirm 4 ist deshalb kein Anhängsel, sondern der
  Grund für die drei davor.
- **Optional laut Plan:** Listen, Dictionaries, Arrays sowie Mock-ups. Passt
  als fünfter Bildschirm, wenn Zeit ist.
- **Umgebung:** Das mitgelieferte Notebook in Bud-E kann Python im Browser
  ausführen — ohne Installation, ohne Konto. Für den Unterricht heißt das:
  keine Einrichtungsstunde.
- **Was noch fehlt:** englische Fassung; und für Bildschirm 3 sollte je ein
  vollständiges kurzes Programm als Codeblock dazu, nicht nur Fragmente.
