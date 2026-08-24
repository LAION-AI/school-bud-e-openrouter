# M5 — Künstliche Intelligenz und Maschinelles Lernen

**Entwurf für einen Lernpfad** · Themenfeld Datenkompetenz · Jahrgang 7–10

```
key      maschinen-die-raten
title    Maschinen, die raten lernen
summary  Warum ein Programm, das niemand Regeln beigebracht hat, trotzdem
         Katzen erkennt — und was es dabei nicht weiß.
icon     🧠
accent   violet
minutes  18
```

### Verbindliche Fachbegriffe

der/das Bias · die KI · der Layer · das maschinelle Lernen · das Neuron ·
das neuronale Netz · die Gewichtung

### Leitgedanke des Bildungsplans

> Die Schülerinnen und Schüler experimentieren mit Systemen, denen künstliche
> Intelligenz zugrunde liegt, […] betrachten Möglichkeiten und Grenzen von KI
> und setzen sich mit ethischen Fragestellungen auseinander.

Der Plan verlangt hier ausdrücklich beides: die Technik *und* die Ethik. Ein
Pfad, der nur eines davon macht, erfüllt das Modul nicht.

---

## Bildschirm 1 — Die Regel, die niemand aufschreiben kann

**lead**
Schreib eine Regel auf, an der man eine Katze erkennt. Vier Beine? Der Tisch
auch. Fell? Ein Teppich auch. Schnurrhaare, spitze Ohren, Schwanz — und dann
kommt eine Katze von hinten, im Dunkeln, halb verdeckt, und jede Regel fällt um.

**paragraph**
Menschen erkennen Katzen mühelos und können nicht sagen, woran. Genau das ist
die Lücke, in die maschinelles Lernen stößt. Bei **herkömmlicher
Programmierung** schreibt ein Mensch die Regeln auf, und der Computer führt sie
aus. Beim **maschinellen Lernen** bekommt der Computer Beispiele und sucht sich
die Regeln selbst.

**table** — *Zwei Arten, ein Problem zu lösen*

| | Herkömmliches Programm | Maschinelles Lernen |
|---|---|---|
| Mensch liefert | die Regeln | die Beispiele |
| Rechner liefert | das Ergebnis | die Regeln *und* das Ergebnis |
| Gut für | alles Genaue: rechnen, sortieren, prüfen | alles Unscharfe: erkennen, einschätzen |
| Nachvollziehbar? | ja, Zeile für Zeile | oft nicht |

**fact-callout · 🪆 · KI, maschinelles Lernen, Deep Learning**
Drei Begriffe, die durcheinandergehen. **KI** ist der Oberbegriff für alles,
was klug wirkt. **Maschinelles Lernen** ist ein Weg dorthin: aus Beispielen
lernen. **Deep Learning** ist eine Sorte davon, mit vielen Schichten. Wie
Fahrzeug, Auto, Elektroauto — jedes steckt im vorigen.

**warn-callout · 🎭 · „Intelligenz" ist ein Werbewort**
Ein System, das Katzen erkennt, weiß nicht, was eine Katze ist. Es hat kein
Bild von der Welt, keine Absicht, kein Verständnis. Es hat Muster in Zahlen
gefunden. Das ist erstaunlich genug — man muss es nicht mit Denken verwechseln,
und die Werbung tut es trotzdem.

---

## Bildschirm 2 — Was in so einem Netz passiert

**lead**
Ein **neuronales Netz** klingt nach Gehirn und ist Rechnerei. Ein **Neuron**
ist eine Stelle, die Zahlen entgegennimmt, jede mit einer **Gewichtung**
multipliziert, alles addiert und weitergibt, wenn das Ergebnis groß genug ist.
Mehr nicht.

**paragraph**
Viele solcher Neuronen nebeneinander bilden einen **Layer**, eine Schicht.
Mehrere Schichten hintereinander ergeben das Netz: Vorn kommen die Zahlen des
Bildes hinein, hinten kommt eine Einschätzung heraus.

**steps**
1. **Eingabe.** Ein Bild ist eine lange Liste von Zahlen — Helligkeitswerte der
   Pixel. Nichts weiter.
2. **Gewichten.** Jede Verbindung hat eine Zahl, die sagt, wie wichtig sie ist.
   Diese Zahlen sind das eigentliche „Wissen" des Netzes.
3. **Weitergeben.** Jede Schicht fasst zusammen, was die vorige gefunden hat:
   erst Kanten, dann Formen, dann Teile, dann das Ganze.
4. **Ausgabe.** Am Ende steht kein Ja oder Nein, sondern eine Wahrscheinlichkeit:
   „zu 94 % Katze".
5. **Korrigieren.** War es falsch, werden alle Gewichtungen ein winziges Stück
   verschoben. Millionenfach wiederholt heißt das: trainieren.

**try-callout · 🎨 · Selbst ein Modell trainieren, in zehn Minuten**
Mit Teachable Machine (Google, ohne Anmeldung) kann eine Klasse in einer
Unterrichtsstunde ein eigenes Bilderkennungsmodell trainieren — Webcam an,
zwei Kategorien, dreißig Bilder je Kategorie. Der lehrreichste Moment kommt
danach: wenn jemand ein Bild zeigt, das zu keiner Kategorie gehört, und das
Modell sich trotzdem sicher ist.

**fact-callout · 🏷️ · Mit und ohne Etiketten**
Beim **überwachten Lernen** steht bei jedem Beispiel dabei, was es ist —
„das ist eine Katze". Beim **unüberwachten Lernen** nicht: Das System sucht
selbst nach Gruppen, die sich ähneln, und weiß nicht, wie sie heißen.

---

## Bildschirm 3 — Wo es schiefgeht, und warum

**lead**
Ein Modell kann nur lernen, was in seinen Beispielen steckt. Das klingt
harmlos und ist die Ursache fast aller Probleme mit KI.

**paragraph**
Wenn die Trainingsbilder überwiegend helle Gesichter zeigen, wird das Modell
bei dunklen schlechter. Wenn in den Bewerbungen der letzten zehn Jahre
überwiegend Männer eingestellt wurden, lernt ein Modell, Männer zu bevorzugen —
nicht weil jemand das so wollte, sondern weil es genau das ist, was in den
Daten steht. Diese eingebaute Schieflage heißt **Bias**.

**warn-callout · 🪞 · Der Spiegel, nicht der Richter**
Ein Modell ist kein neutrales Urteil, sondern ein sehr genauer Spiegel seiner
Trainingsdaten — samt aller Verzerrungen darin. Wer sagt „die KI hat
entschieden", verschiebt die Verantwortung auf etwas, das keine tragen kann.
Entschieden haben die, die die Daten ausgewählt und das System eingesetzt haben.

**list**
- **Falsche Trainingsdaten** — was fehlt, kann nicht gelernt werden
- **Deepfakes** — Bilder, Stimmen und Videos, die es nie gab
- **Empfehlungssysteme** — sie zeigen, was lange fesselt, nicht was stimmt
- **Rückkopplung** — das Modell beeinflusst die Welt, aus der es lernt, und
  verstärkt sich selbst
- **Zweckentfremdung** — ein Modell für Gesichtserkennung am Flughafen lässt
  sich auch auf einer Demonstration einsetzen

**paragraph**
Und die Grenze, die im Alltag am meisten zählt: Ein Sprachmodell antwortet
flüssig auf jede Frage — auch auf die, deren Antwort es nicht kennt. Es
formuliert dann genauso überzeugend etwas Falsches. Sicher klingen und richtig
liegen sind zwei verschiedene Dinge, und man sieht ihnen den Unterschied nicht
an.

---

## Bildschirm 4 — Wer entscheidet, wenn niemand entscheidet

**lead**
Die technischen Fragen sind die leichteren. Schwieriger wird es, sobald ein
System etwas tut, das Folgen für Menschen hat.

**paragraph**
Ein selbstfahrendes Auto muss ausweichen und hat zwei schlechte Möglichkeiten.
Wer legt vorher fest, welche es wählt? Der Programmierer? Die Herstellerfirma?
Der Gesetzgeber? Der Käufer? Anders als beim menschlichen Fahrer wird hier
Monate vorher am Schreibtisch entschieden — und für alle Fälle gleichzeitig.

**list**
- **Wem gehört das Ergebnis?** Ein Bild im Stil einer lebenden Künstlerin,
  erzeugt von einem Modell, das mit ihren Werken trainiert wurde.
- **Wer haftet?** Wenn eine medizinische Software etwas übersieht.
- **Wer prüft?** Wenn eine Bewerbung aussortiert wird und niemand die Regel
  benennen kann.
- **Was heißt Demokratie**, wenn sich Stimmen, Videos und Zeugen fälschen
  lassen?

**tip-callout · 🤖 · Rede ich gerade mit einem Menschen?**
Alan Turing hat 1950 vorgeschlagen, genau das zum Maßstab zu machen: Wenn ein
Mensch im Gespräch nicht mehr unterscheiden kann, ob am anderen Ende eine
Maschine sitzt — reicht das? Die Frage ist heute keine Gedankenspielerei mehr.
Überlegt in der Klasse, welche Fragen ihr stellen würdet, um es herauszufinden.

**paragraph**
Zum Schluss die Seite, die auch dazugehört: Modelle finden Tumore auf
Aufnahmen, die Menschen übersehen. Sie übersetzen zwischen Sprachen, für die es
kaum Dolmetscher gibt. Sie übernehmen eintönige Arbeit. Die Frage ist nicht, ob
man das will, sondern wer entscheidet, wofür es eingesetzt wird — und wer
nachsehen darf, ob es funktioniert.

**sources**
- Teachable Machine (Google) — https://teachablemachine.withgoogle.com
- Alan Turing, *Computing Machinery and Intelligence* (1950) —
  https://academic.oup.com/mind/article/LIX/236/433/986238
- Bildungsplan Informatik Sek I, Hamburg —
  https://www.hamburg.de/resource/blob/798514/ad3c2fdfb3a32b9545a271dfceae5772/informatik-data.pdf

---

## Die drei Aufgaben

### 1. Lückentext

> Bei herkömmlicher Programmierung schreibt ein Mensch die Regeln auf. Beim
> ___ bekommt der Rechner stattdessen Beispiele und sucht sich die Regeln
> selbst. Der Oberbegriff für all das ist ___. Aufgebaut ist ein solches System
> als ___: Die kleinste Einheit heißt ___, viele davon nebeneinander bilden
> eine Schicht, auch ___ genannt. Wie stark eine Verbindung zählt, sagt ihre
> ___; beim Trainieren werden genau diese Zahlen immer wieder ein wenig
> verschoben. Steht bei jedem Beispiel dabei, was es zeigt, spricht man von
> ___ Lernen, sonst von ___ Lernen. Sind die Trainingsdaten einseitig, lernt
> das Modell diese Einseitigkeit mit — diese Schieflage heißt ___.
>
> *(9 Lücken)*

### 2. Vergleiche *(Anforderungsbereich II)*

> Ein Taschenrechner ist bei `7 × 8` zuverlässiger als jeder Mensch. Ein
> Sprachmodell ist bei der Frage, wie viele Buchstaben in einem Wort stehen,
> unzuverlässiger als jedes Kind. Beides sind Computer. Erkläre, woran dieser
> Unterschied liegt, und leite daraus eine Regel ab, bei welcher Art von
> Aufgaben man dem Ergebnis einer KI trauen kann und bei welcher man
> nachrechnen sollte.
>
> *Hinweis: Denk daran, wer die Regeln aufgestellt hat — und ob am Ende ein
> berechnetes Ergebnis steht oder eine Wahrscheinlichkeit.*

### 3. Zum Nachdenken

> Ein Modell lernt aus dem, was war. Wenn in den Daten der letzten zwanzig
> Jahre bestimmte Menschen seltener eingestellt, seltener befördert oder
> häufiger kontrolliert wurden, dann steht genau das in den Beispielen — und
> ein Modell, das daraus lernt, macht aus der Vergangenheit eine Vorhersage für
> die Zukunft. Überlege, was das für jemanden bedeutet, der von so einer
> Vorhersage betroffen ist, obwohl er persönlich nie etwas getan hat. Und
> zweitens: Wen würdest du fragen wollen, warum die Entscheidung so ausgefallen
> ist — wenn niemand die Regel benennen kann?

---

## Hinweise zur Umsetzung

- **Beide Hälften sind Pflicht.** Der Plan verlangt Technik *und* Ethik. Wenn
  gekürzt werden muss, dann innerhalb beider Teile, nicht einer davon.
- **Optional laut Plan:** verstärkendes Lernen. Passt gut als Ausblick am Ende
  von Bildschirm 2, ist aber nicht nötig.
- **Praktischer Teil:** Der Plan verlangt ausdrücklich, Modelle zu *trainieren*
  und trainierte Modelle *anzuwenden* — nicht nur darüber zu reden. Teachable
  Machine erfüllt beides in einer Doppelstunde.
- **Aktualität:** Bildschirm 3 und 4 veralten schneller als der Rest. Die
  Beispiele sollten mindestens einmal im Schuljahr durchgesehen werden.
- **Was noch fehlt:** englische Fassung; und auf Bildschirm 2 wäre eine
  Rechnung mit echten Zahlen gut — etwa ein Neuron mit drei Eingaben von Hand
  durchgerechnet, damit „Gewichtung" nicht abstrakt bleibt.
