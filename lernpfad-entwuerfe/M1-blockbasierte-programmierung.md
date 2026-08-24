# M1 — Blockbasierte Programmierung

**Entwurf für einen Lernpfad** · Themenfeld Softwareentwicklung · Jahrgang 7–10

```
key      befehle-die-wirken
title    Befehle, die wirklich etwas tun
summary  Wie man einer Maschine etwas beibringt, die nichts von selbst versteht
         und nichts vergisst.
icon     🧩
accent   emerald
minutes  16
```

### Verbindliche Fachbegriffe (kommen alle im Lückentext wieder)

die bedingte Anweisung · der Datentyp · die Schleife · die Variable ·
die Verzweigung · der Wahrheitswert · die Wertzuweisung

### Leitgedanke des Bildungsplans

> Die Schülerinnen und Schüler erlernen, wie sie mit elementaren
> algorithmischen Strukturen einem Computer etwas beibringen können.

---

## Bildschirm 1 — Der dümmste Mitarbeiter der Welt

**lead**
Stell dir vor, du sollst jemandem erklären, wie man ein Butterbrot macht. Kein
Problem — außer dass dein Gegenüber noch nie ein Brot gesehen hat, nicht weiß,
was „bestreichen" heißt, und alles wörtlich nimmt. Sagst du „nimm das Messer",
greift er es an der Klinge. Genau so ist ein Computer.

**paragraph**
Er ist nicht klug. Er ist schnell und gehorsam, und das ist etwas anderes. Was
du ihm nicht sagst, tut er nicht; was du ihm falsch sagst, tut er falsch — und
zwar dreitausendmal pro Sekunde, ohne sich zu wundern.

**try-callout · 🥪 · Probier es an der Tafel**
Einer schreibt eine Anleitung fürs Butterbrot, ein anderer führt sie wörtlich
aus. Es endet zuverlässig im Chaos, und danach versteht jeder, warum
Programmieren Genauigkeit verlangt statt Intelligenz.

**paragraph**
Damit man einer Maschine überhaupt etwas sagen kann, braucht es eine Sprache,
in der nichts mehrdeutig ist. Bei Scratch sind das Blöcke, die ineinander
einrasten — falsch zusammensetzen geht gar nicht erst. Das nimmt dir die
Tippfehler ab und lässt nur die eigentliche Frage übrig: In welcher Reihenfolge
muss was passieren?

**fact-callout · 🧱 · Warum Blöcke und nicht Text?**
Ein vergessenes Semikolon hat schon mehr Menschen vom Programmieren abgebracht
als jedes schwierige Konzept. Blöcke können nicht falsch geschrieben werden.
Was du hier lernst, gilt trotzdem eins zu eins für Python, Java oder
JavaScript — nur die Schreibweise ändert sich.

---

## Bildschirm 2 — Kisten mit Namen: Variablen

**lead**
Ein Programm muss sich Dinge merken: den Punktestand, den Namen des Spielers,
wie oft schon geraten wurde. Dafür gibt es Variablen — Kisten mit einem Namen
drauf.

**paragraph**
Eine Variable anzulegen heißt: eine Kiste hinstellen und beschriften. Etwas
hineinzulegen heißt Wertzuweisung. Und das Wichtigste daran: Was vorher drin
war, ist weg. Eine Kiste hat immer genau einen Inhalt.

**steps**
1. **Anlegen** — `punkte` heißt die Kiste. Der Name sollte sagen, was drin ist:
   `punkte` ja, `x` eher nicht.
2. **Zuweisen** — `setze punkte auf 0`. Jetzt liegt eine Null darin.
3. **Ändern** — `ändere punkte um 1`. Der alte Wert wird gelesen, um eins
   erhöht, und das Ergebnis kommt zurück in dieselbe Kiste.

**table** — *Datentypen: was in die Kiste passt*

| Datentyp | Beispiel | Wofür |
|---|---|---|
| Ganzzahl | `7`, `-3`, `0` | zählen, rechnen |
| Zeichenkette | `"Mia"`, `"Game Over"` | alles, was gelesen wird |
| Wahrheitswert | `wahr`, `falsch` | Entscheidungen |

**warn-callout · ➕ · Der Klassiker: 3 + 3 ist nicht immer 6**
`3 + 3` ergibt `6`. `"3" + "3"` ergibt `"33"` — zwei Zeichenketten werden
aneinandergehängt, nicht addiert. Der Datentyp entscheidet, was ein Pluszeichen
überhaupt bedeutet. Das ist einer der häufigsten Fehler überhaupt, und du wirst
ihn selbst machen.

---

## Bildschirm 3 — Wiederholen und entscheiden

**lead**
Zwei Bausteine reichen aus, um fast jedes Programm zu bauen: etwas mehrfach
tun, und etwas nur unter einer Bedingung tun. Alles andere sind Verfeinerungen.

**paragraph**
Statt zehnmal denselben Block hinzuschreiben, sagst du der Maschine, sie soll
zählen. Das ist eine **Schleife**. Es gibt zwei Sorten, und der Unterschied ist
wichtig: Die Zählschleife weiß vorher, wie oft — zehnmal, hundertmal. Die
vorprüfende Schleife weiß es nicht: Sie läuft, *solange* etwas gilt.

**table** — *Zwei Schleifen, zwei Fragen*

| | Frage | Beispiel |
|---|---|---|
| Zählschleife | Wie oft? | zehn Schritte gehen |
| Vorprüfende Schleife | Solange was? | laufen, solange die Taste gedrückt ist |

**warn-callout · ♾️ · Die Endlosschleife**
`solange 1 kleiner als 2` — das ist immer wahr, und das Programm hört nie auf.
Jeder baut die irgendwann. Beim ersten Mal ist es ein Schreck, danach ein
Achselzucken: Man muss dafür sorgen, dass sich innerhalb der Schleife etwas
ändert, was die Bedingung irgendwann falsch macht.

**paragraph**
Der zweite Baustein ist die **bedingte Anweisung**: `falls ... dann`. Kommt ein
`sonst` dazu, wird daraus eine **Verzweigung** — der Ablauf teilt sich, und
genau ein Weg wird gegangen. Was in der Bedingung steht, ist immer ein
**Wahrheitswert**: wahr oder falsch, dazwischen gibt es nichts.

**list**
- Vergleichen: `=`, `<`, `>` — ergibt wahr oder falsch
- Verknüpfen: `und`, `oder`, `nicht`
- `punkte > 100 und leben > 0` — beides muss stimmen
- `taste = links oder taste = a` — eines genügt

---

## Bildschirm 4 — Ein eigenes Spiel

**lead**
Mit Variable, Schleife und Verzweigung hast du alles beisammen, was ein
richtiges Spiel braucht. Der Rest ist Ausprobieren.

**steps**
1. **Was soll passieren?** In einem Satz, bevor du einen Block anfasst.
2. **Was muss sich das Programm merken?** Das werden deine Variablen.
3. **Was wiederholt sich?** Das wird deine Schleife.
4. **Wo muss entschieden werden?** Das werden deine Verzweigungen.
5. **Bauen, ausprobieren, ändern.** In dieser Reihenfolge, immer wieder.

**tip-callout · 🐛 · Wenn es nicht tut, was es soll**
Nicht alles auf einmal umbauen. Ändere eine Sache, probier sie aus, und lass
dir Variablen anzeigen — Scratch kann jede Variable auf der Bühne einblenden.
Meistens sieht man dann sofort, an welcher Stelle ein Wert etwas anderes ist,
als man dachte.

**paragraph**
Und dann die Frage, die über das Fach hinausgeht: Ein Computer erledigt manches
schneller und zuverlässiger als jeder Mensch. Welche Aufgaben sollte man ihm
geben — und bei welchen wäre es besser, wenn ein Mensch sie behält?

**sources**
- inf-schule.de: Scratch — https://www.inf-schule.de/kids/kategorie:scratch
- Scratch (MIT Media Lab) — https://scratch.mit.edu
- Bildungsplan Informatik Sek I, Hamburg —
  https://www.hamburg.de/resource/blob/798514/ad3c2fdfb3a32b9545a271dfceae5772/informatik-data.pdf

---

## Die drei Aufgaben

### 1. Lückentext

> Ein Computer versteht nichts von selbst — er führt genau das aus, was man ihm
> sagt. Damit sich ein Programm etwas merken kann, braucht es eine ___, also
> eine Kiste mit einem Namen. Etwas hineinzulegen nennt man ___; der alte
> Inhalt ist dabei verloren. Welche Art von Inhalt eine Kiste aufnimmt, sagt
> der ___: eine Ganzzahl zum Rechnen, eine Zeichenkette für Text. Soll etwas
> mehrfach passieren, nimmt man eine ___ — sie zählt entweder mit oder läuft,
> solange eine Bedingung gilt. Soll etwas nur unter einer Bedingung passieren,
> nimmt man eine ___. Kommt ein „sonst" hinzu, teilt sich der Ablauf, und man
> spricht von einer ___. Was in einer Bedingung geprüft wird, ist immer ein
> ___: wahr oder falsch, dazwischen nichts.
>
> *(7 Lücken — für den fertigen Pfad auf 9 bis 11 erweitern und die englische
> Fassung mit gleicher Lückenzahl schreiben.)*

### 2. Vergleiche *(Anforderungsbereich II)*

> `3 + 3` ergibt `6`, aber `"3" + "3"` ergibt `"33"`. In beiden Fällen steht
> dasselbe Pluszeichen zwischen denselben Ziffern. Erkläre, warum trotzdem
> etwas anderes herauskommt, und was daraus folgt für die Frage, warum ein
> Programm überhaupt Datentypen unterscheiden muss.
>
> *Hinweis: Überlege, was das Pluszeichen bei Text bedeuten könnte.*

### 3. Zum Nachdenken

> Computer erledigen manche Aufgaben schneller und zuverlässiger als jeder
> Mensch — sie werden nicht müde, nicht unaufmerksam und nicht schlecht
> gelaunt. Trotzdem gibt es Entscheidungen, bei denen die meisten Menschen
> nicht möchten, dass eine Maschine sie trifft. Suche zwei Beispiele: eine
> Aufgabe, die du gern abgeben würdest, und eine, bei der du darauf bestehen
> würdest, dass ein Mensch sie behält. Woran liegt der Unterschied?

---

## Hinweise zur Umsetzung

- **Länge:** Bildschirm 2 und 3 sind die eigentlichen Lerninhalte; 1 und 4
  rahmen. Falls es zu lang wird, lieber Bildschirm 4 kürzen als 3.
- **Optional laut Plan:** Funktionen und Prozeduren als Konzept, sowie
  Operationen auf Zeichenketten. Beides passt als fünfter Bildschirm, wenn die
  Klasse schnell ist — nicht in Bildschirm 3 hineinquetschen.
- **Was noch fehlt:** die englische Fassung jedes Textes, die Lückenzahl
  angleichen, und ein `stats`-Block wäre auf Bildschirm 1 denkbar (etwa:
  Befehle pro Sekunde), ist aber nicht nötig.
