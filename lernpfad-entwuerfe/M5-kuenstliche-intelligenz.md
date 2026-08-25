# M5 — Künstliche Intelligenz und Maschinelles Lernen

**Modulentwurf** · Fach Informatik · Themenfeld Datenkompetenz · Jahrgang 7–10

## Die Moduldefinition

```json
{
  "key": "m5-kuenstliche-intelligenz",
  "title": { "de": "Künstliche Intelligenz und Maschinelles Lernen", "en": "Artificial intelligence and machine learning" },
  "description": {
    "de": "Warum ein Programm, dem niemand Regeln beigebracht hat, trotzdem Katzen erkennt - und was es dabei nicht weiß.",
    "en": "Why a program nobody gave rules to still recognises cats - and what it does not know while doing so."
  },
  "icon": "🧠",
  "accent": "violet",
  "badge": "M5"
}
```

## Verbindliche Fachbegriffe

der/das Bias · die KI · der Layer · das maschinelle Lernen · das Neuron ·
das neuronale Netz · die Gewichtung

| Pfad | deckt ab |
|---|---|
| 1 | KI, maschinelles Lernen |
| 2 | neuronales Netz, Neuron, Layer, Gewichtung |
| 3 | — (Training in der Praxis) |
| 4 | Bias |
| 5 | — (Ethik und Verantwortung) |

## Leitgedanke des Bildungsplans

> Die Schülerinnen und Schüler experimentieren mit Systemen, denen künstliche
> Intelligenz zugrunde liegt, […] betrachten Möglichkeiten und Grenzen von KI
> und setzen sich mit ethischen Fragestellungen auseinander.

Der Plan verlangt ausdrücklich beides: die Technik *und* die Ethik. Ein Modul,
das nur eines davon macht, erfüllt die Vorgabe nicht. Die fünf Pfade teilen sich
deshalb auf: zwei Technik, einer Praxis, zwei Folgen.

---

## Die fünf Lernpfade

| # | Titel | Untertitel | UE der Handreichung |
|---|---|---|---|
| 1 | Die Regel, die niemand aufschreiben kann | Warum manche Aufgaben kein Programm im alten Sinn zulassen | 1 |
| 2 | Was in so einem Netz passiert | Neuron, Schicht, Gewichtung — und warum das Rechnerei ist | 2–3 |
| 3 | Trainier dir ein Modell | Zehn Minuten, eine Webcam, und der lehrreichste Fehler | 4 |
| 4 | Der Spiegel, nicht der Richter | Bias, Halluzinationen und andere Grenzen | 5 |
| 5 | Wer entscheidet, wenn niemand entscheidet | Verantwortung, Urheberschaft, Demokratie | 6–7 |

---

### Pfad 1 — Die Regel, die niemand aufschreiben kann

**Kernbild:** Schreib eine Regel auf, an der man eine Katze erkennt. Vier Beine?
Der Tisch auch. Fell? Ein Teppich auch. Und dann kommt eine Katze von hinten, im
Dunkeln, halb verdeckt, und jede Regel fällt um.

**Bildschirme:**
1. *Die Lücke* — Menschen erkennen Katzen mühelos und können nicht sagen, woran
2. *Zwei Arten, ein Problem zu lösen* (Tabelle) — herkömmliches Programm: Mensch
   liefert die Regeln. Maschinelles Lernen: Mensch liefert die Beispiele,
   Rechner sucht sich die Regeln.
3. *KI, maschinelles Lernen, Deep Learning* — drei Begriffe, die
   durcheinandergehen. Wie Fahrzeug, Auto, Elektroauto: jedes steckt im vorigen.
4. *„Intelligenz" ist ein Werbewort* — ein System, das Katzen erkennt, weiß
   nicht, was eine Katze ist. Kein Bild von der Welt, keine Absicht, kein
   Verständnis. Es hat Muster in Zahlen gefunden — erstaunlich genug.

**Aufgaben:** Lückentext zu KI, maschinelles Lernen, Deep Learning · Vergleich:
zwei Aufgaben — eine, für die ein herkömmliches Programm besser ist, und eine
für maschinelles Lernen; jeweils begründet · Offen: Was kannst du, ohne erklären
zu können, wie du es machst?

---

### Pfad 2 — Was in so einem Netz passiert

**Kernbild:** Ein neuronales Netz klingt nach Gehirn und ist Rechnerei. Ein
Neuron nimmt Zahlen entgegen, multipliziert jede mit einer Gewichtung, addiert
alles und gibt weiter, wenn das Ergebnis groß genug ist. Mehr nicht.

**Bildschirme:**
1. *Ein Neuron, von Hand gerechnet* — drei Eingaben, drei Gewichtungen, eine
   Schwelle. Mit echten Zahlen, damit „Gewichtung" nicht abstrakt bleibt.
2. *Schichten* — viele Neuronen nebeneinander bilden einen Layer; vorn kommen
   die Zahlen des Bildes hinein, hinten eine Einschätzung heraus
3. *Was die Schichten finden* — erst Kanten, dann Formen, dann Teile, dann das
   Ganze
4. *Trainieren* — am Ende steht kein Ja oder Nein, sondern „zu 94 % Katze". War
   es falsch, werden alle Gewichtungen ein winziges Stück verschoben.
   Millionenfach wiederholt heißt das: trainieren.
5. *Mit und ohne Etiketten* — überwachtes Lernen („das ist eine Katze") gegen
   unüberwachtes, das selbst nach Gruppen sucht und nicht weiß, wie sie heißen

**Aufgaben:** Lückentext zu neuronales Netz, Neuron, Layer, Gewichtung ·
Vergleich: ein Neuron mit veränderten Gewichtungen durchrechnen — welche
Eingabe entscheidet? · Offen: Die Gewichtungen sind das ganze „Wissen" des
Netzes. Was heißt das für die Frage, ob man ein Modell besitzen kann?

---

### Pfad 3 — Trainier dir ein Modell

**Kernbild:** Webcam an, zwei Kategorien, dreißig Bilder je Kategorie. Der
lehrreichste Moment kommt danach: wenn jemand ein Bild zeigt, das zu keiner
Kategorie gehört, und das Modell sich trotzdem sicher ist.

**Bildschirme:**
1. *In zehn Minuten zum eigenen Modell* — Teachable Machine, ohne Anmeldung
2. *Was gute Beispiele ausmacht* — Hintergrund, Licht, Winkel; und was passiert,
   wenn alle Bilder einer Klasse vor derselben Wand aufgenommen wurden
3. *Der Test, der wehtut* — etwas zeigen, das in keine Kategorie passt
4. *Was das Modell gelernt hat, und was du gelernt hast* — meistens nicht
   dasselbe

**Aufgaben:** Lückentext zu Trainingsdaten, Kategorie, Sicherheit · Vergleich
mit Handlungsteil: dasselbe Modell zweimal trainieren, einmal mit einseitigen
und einmal mit vielfältigen Bildern; die Unterschiede beschreiben · Offen: Wie
viele Beispiele braucht ein Mensch, um eine neue Sache zu erkennen?

**Hinweis:** Der Plan verlangt ausdrücklich, Modelle zu *trainieren* und
trainierte Modelle *anzuwenden* — nicht nur darüber zu reden. Dieser Pfad ist
die Erfüllung dieser Vorgabe und sollte nicht gestrichen werden.

---

### Pfad 4 — Der Spiegel, nicht der Richter

**Kernbild:** Ein Modell kann nur lernen, was in seinen Beispielen steckt. Das
klingt harmlos und ist die Ursache fast aller Probleme mit KI.

**Bildschirme:**
1. *Wie Bias entsteht* — sind die Trainingsbilder überwiegend hell, wird das
   Modell bei dunklen Gesichtern schlechter. Wurden in zehn Jahren Bewerbungen
   überwiegend Männer eingestellt, lernt ein Modell, Männer zu bevorzugen — nicht
   weil jemand das wollte, sondern weil genau das in den Daten steht.
2. *Wer entschieden hat* — wer sagt „die KI hat entschieden", verschiebt die
   Verantwortung auf etwas, das keine tragen kann
3. *Fünf Arten, wie es schiefgeht* — fehlende Trainingsdaten, Deepfakes,
   Empfehlungssysteme (sie zeigen, was lange fesselt, nicht was stimmt),
   Rückkopplung, Zweckentfremdung
4. *Sicher klingen und richtig liegen* — ein Sprachmodell antwortet flüssig auch
   auf Fragen, deren Antwort es nicht kennt. Man sieht dem Text den Unterschied
   nicht an.

**Aufgaben:** Lückentext zu Bias, Trainingsdaten, Rückkopplung · Vergleich: ein
Taschenrechner ist bei `7 × 8` zuverlässiger als jeder Mensch; ein Sprachmodell
ist bei der Frage, wie viele Buchstaben in einem Wort stehen, unzuverlässiger
als jedes Kind. Woran liegt der Unterschied — und welche Regel folgt daraus? ·
Offen: Wann hast du zuletzt etwas geglaubt, weil es überzeugend formuliert war?

---

### Pfad 5 — Wer entscheidet, wenn niemand entscheidet

**Kernbild:** Die technischen Fragen sind die leichteren. Schwieriger wird es,
sobald ein System etwas tut, das Folgen für Menschen hat.

**Bildschirme:**
1. *Monate vorher am Schreibtisch* — ein selbstfahrendes Auto muss ausweichen
   und hat zwei schlechte Möglichkeiten. Wer legt vorher fest, welche es wählt —
   und für alle Fälle gleichzeitig?
2. *Vier offene Fragen* — Wem gehört ein Bild im Stil einer lebenden Künstlerin?
   Wer haftet, wenn medizinische Software etwas übersieht? Wer prüft, wenn eine
   Bewerbung aussortiert wird und niemand die Regel benennen kann? Was heißt
   Demokratie, wenn sich Stimmen und Videos fälschen lassen?
3. *Rede ich gerade mit einem Menschen?* — Turings Vorschlag von 1950, heute
   keine Gedankenspielerei mehr. Welche Fragen würdet ihr stellen?
4. *Die andere Seite* — Modelle finden Tumore, die Menschen übersehen; sie
   übersetzen zwischen Sprachen, für die es kaum Dolmetscher gibt; sie übernehmen
   eintönige Arbeit. Die Frage ist nicht, ob man das will, sondern wer
   entscheidet, wofür es eingesetzt wird — und wer nachsehen darf, ob es
   funktioniert.

**Aufgaben:** Lückentext zur Wiederholung des Moduls · Vergleich: zwei Einsätze
desselben Modells, einer den du befürwortest und einer den du ablehnst — was
genau macht den Unterschied? · Offen: Ein Modell lernt aus dem, was war. Wurden
bestimmte Menschen seltener eingestellt oder häufiger kontrolliert, macht ein
Modell daraus eine Vorhersage für die Zukunft. Was bedeutet das für jemanden,
der davon betroffen ist, obwohl er persönlich nie etwas getan hat? Und wen
würdest du fragen wollen, warum die Entscheidung so ausfiel — wenn niemand die
Regel benennen kann?

---

## Hinweise zur Umsetzung

- **Beide Hälften sind Pflicht.** Der Plan verlangt Technik *und* Ethik. Wenn
  gekürzt werden muss, dann innerhalb beider Teile, nicht einer davon.
- **Optional laut Plan:** verstärkendes Lernen. Passt als Ausblick am Ende von
  Pfad 2, ist aber nicht nötig.
- **Aktualität:** Die Pfade 4 und 5 veralten schneller als der Rest. Ihre
  Beispiele sollten mindestens einmal im Schuljahr durchgesehen werden — das ist
  auch der Grund, dieses Modul zuletzt umzusetzen.
- **Was noch fehlt:** die englische Fassung; und für Pfad 2 die
  Handrechnung eines Neurons mit konkreten Zahlen, damit die Gewichtung nicht
  abstrakt bleibt.

## Quellen für die Ausarbeitung

- Teachable Machine (Google) — https://teachablemachine.withgoogle.com
- Alan Turing, *Computing Machinery and Intelligence* (1950) —
  https://academic.oup.com/mind/article/LIX/236/433/986238
- Bildungsplan Informatik Sek I, Hamburg —
  https://www.hamburg.de/resource/blob/798514/ad3c2fdfb3a32b9545a271dfceae5772/informatik-data.pdf
