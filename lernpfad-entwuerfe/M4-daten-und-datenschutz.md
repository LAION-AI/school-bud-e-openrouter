# M4 — Datenbanken und Datenschutz, Teil 1

**Modulentwurf** · Fach Informatik · Themenfeld Datenkompetenz · Jahrgang 7–10

## Die Moduldefinition

```json
{
  "key": "m4-daten-und-datenschutz",
  "title": { "de": "Datenbanken und Datenschutz", "en": "Databases and data protection" },
  "description": {
    "de": "Wie aus einzelnen harmlosen Angaben ein Bild wird - und warum Datenschutz nicht Daten schützt, sondern Menschen.",
    "en": "How separate harmless details add up to a picture - and why data protection protects people, not data."
  },
  "icon": "🗃️",
  "accent": "rose",
  "badge": "M4"
}
```

## Verbindliche Fachbegriffe

die Abfrage · die personenbezogenen Daten · die Datenbank · der Datenschutz ·
die Informationsfreiheit

| Pfad | deckt ab |
|---|---|
| 1 | personenbezogene Daten |
| 2 | Datenbank |
| 3 | Abfrage |
| 4 | Datenschutz |
| 6 | Informationsfreiheit |

## Leitgedanke des Bildungsplans

> Hierbei wird ein Fokus auf **Datenschutz als Freiheitsschutz** gelegt.

Der Plan formuliert das an mehreren Stellen ungewöhnlich deutlich:

> Datenschutz ist nicht der Schutz von Daten, sondern der Schutz von Personen
> und von Freiheit als Teil unserer Werteordnung.

Das ist die Leitlinie des ganzen Moduls. Es geht nicht um Passworthygiene,
sondern um eine politische Frage. Die Technik (Pfade 2 und 3) steht deshalb
nicht am Anfang und nicht allein, sondern zwischen dem Problem und den Regeln.

---

## Die sechs Lernpfade

| # | Titel | Untertitel | UE der Handreichung |
|---|---|---|---|
| 1 | Einzeln harmlos | Wie drei belanglose Angaben eine Person eindeutig machen | 1 |
| 2 | Die sehr ordentliche Tabelle | Was eine Datenbank ist und wer alles eine führt | 2 |
| 3 | Fragen an die Daten | Auswählen, filtern, sortieren, gruppieren | 3–4 |
| 4 | Verboten, außer erlaubt | Vier Regeln, die der Gesetzgeber daraus gezogen hat | 5 |
| 5 | Dein Recht auf Auskunft | Artikel 15, und was zurückkommt, wenn man ihn benutzt | 6 |
| 6 | Über Menschen wenig, über Macht viel | Datenschutz und Informationsfreiheit als ein Paar | 7 |

---

### Pfad 1 — Einzeln harmlos

**Kernbild:** Postleitzahl, Geburtsdatum, Geschlecht. Drei völlig harmlose
Angaben — zusammen reichen sie, um die meisten Menschen eindeutig zu
identifizieren.

**Bildschirme:**
1. *Drei Angaben* — die Rechnung dahinter, und warum „was ist daran schon
   Schlimmes?" bei einzelnen Daten fast immer die falsche Frage ist
2. *Was alles dazugehört* — personenbezogen ist weiter, als die meisten denken:
   Gerätenummer, Standortverlauf, Uhrzeiten, wie lange man bei einem Video
   hängen bleibt
3. *Sieh nach, was dein Handy weiß* — den Standortverlauf öffnen. Bei den
   meisten steht dort auf den Tag genau, wo sie waren. Diese Liste hat niemand
   angelegt, sie ist entstanden.
4. *Spuren, die man nicht legt* — der Unterschied zwischen dem, was man angibt,
   und dem, was nebenbei anfällt

**Aufgaben:** Lückentext zu personenbezogene Daten, Identifizierbarkeit ·
Vergleich: zwei Angaben über dich — welche verrät für sich genommen mehr, und
ändert sich das, wenn eine dritte dazukommt? · Offen: Welche deiner Spuren
würdest du gern zurücknehmen, wenn du könntest?

**Hinweis:** Die Zahl „~500 Datenpunkte je Person bei Werbenetzwerken" aus dem
alten Entwurf braucht eine belegbare Quelle oder muss als Schätzung
gekennzeichnet werden.

---

### Pfad 2 — Die sehr ordentliche Tabelle

**Kernbild:** Eine Datenbank ist zunächst nichts Aufregendes — eine Tabelle mit
festen Spalten. Aufregend wird, wer sie führt und was darin zusammenkommt.

**Bildschirme:**
1. *Zeilen, Spalten, Datensatz* — an einer erfundenen Tabelle „Nutzer"
2. *Warum feste Spalten* — was eine Datenbank von einer Sammlung Zettel
   unterscheidet: man kann verlässlich danach suchen
3. *Wer alles Datenbanken führt* — Schule (Anwesenheit, Noten, Adressen,
   Fehlzeiten), Arzt, Verkehrsbetrieb, Onlineshop, Handynetz
4. *Zwei Tabellen, ein Mensch* — dieselbe Person in zwei getrennten Beständen;
   die Idee des Verknüpfens, noch ohne Fachbegriff

**Aufgaben:** Lückentext zu Datenbank, Datensatz, Spalte · Vergleich: dieselbe
Information einmal als Zettelkasten und einmal als Tabelle — was geht jeweils
leicht, was schwer? · Offen: Welche Datenbank über dich würdest du am ehesten
einmal sehen wollen?

---

### Pfad 3 — Fragen an die Daten

**Kernbild:** *Zeig mir alle aus 22765, geboren 2010, die nach 22 Uhr online
waren.* Zwei Zeilen bleiben übrig. Keine einzelne Spalte hat jemanden verraten —
die Verknüpfung hat es getan.

**Bildschirme:**
1. *Auswählen und filtern* — welche Spalten, welche Bedingung
2. *Sortieren, zählen, gruppieren* — wie viele je Ort? Wer ist am häufigsten da?
3. *Die Abfrage von eben, Schritt für Schritt* — und der Moment, in dem aus
   Zeilen eine Person wird
4. *Wer darf welche Abfrage stellen* — ein Lehrer die Noten seiner Klasse, ja.
   Die Noten aller Klassen? Die Fehlzeiten zusammen mit den Adressen? Die Frage
   ist nicht, ob die Daten da sind, sondern wer welche Verknüpfung machen darf.

**Aufgaben:** Lückentext zu Abfrage, Filter, Gruppierung · Vergleich mit
Handlungsteil: zwei Abfragen auf der Übungstabelle formulieren, eine harmlose
und eine, die eine Person identifiziert — und den Unterschied benennen · Offen:
Ab wann wird aus Statistik ein Steckbrief?

**Hinweis:** Der Plan verlangt Abfragen auf einer *vorgegebenen* Datenbank —
nicht das Entwerfen einer eigenen. Das kommt erst in Teil 2 (Jahrgang 10,
relationale Datenbanken).

---

### Pfad 4 — Verboten, außer erlaubt

**Kernbild:** Weil Verknüpfen so mächtig ist, gilt in der Europäischen Union
nicht „erlaubt, solange nichts verboten ist", sondern der umgekehrte Grundsatz.

**Bildschirme:**
1. *Verbot mit Erlaubnisvorbehalt* — jede Verarbeitung ist grundsätzlich
   verboten, außer ein Gesetz erlaubt sie oder die Person hat eingewilligt
2. *Zweckbindung* — deine Adresse für die Lieferung ist nicht deine Adresse für
   Werbung
3. *Datensparsamkeit* — ein Taschenrechner braucht keinen Standort
4. *Transparenz* — du darfst erfahren, was über dich gespeichert ist. Von jeder
   Stelle, kostenlos, in verständlicher Form.
5. *„Datenschutzeinstellungen" — der Name lohnt eine Prüfung* — schützt der
   Schalter deine Daten *vor dem Anbieter*, oder nur davor, dass andere Nutzer
   sie sehen? Meistens das Zweite.

**Aufgaben:** Lückentext zu Datenschutz, Erlaubnisvorbehalt, Zweckbindung,
Datensparsamkeit · Vergleich mit Handlungsteil: drei Schalter in den
Einstellungen eines Dienstes notieren und je einer der beiden Sorten zuordnen;
dann begründen, ob die Bezeichnung zutreffend oder irreführend ist · Offen: Ein
Dienst ist kostenlos. Was bezahlst du stattdessen, und an wen?

---

### Pfad 5 — Dein Recht auf Auskunft

**Kernbild:** Artikel 15 DSGVO ist kein theoretisches Recht. Ein formloser Satz
per Mail genügt, und in der Regel kommt innerhalb eines Monats eine Antwort. Wer
das einmal gemacht hat, redet danach anders über das Thema.

**Bildschirme:**
1. *Was drinstehen muss* — welche Daten, woher sie stammen, an wen sie
   weitergegeben wurden, wie lange sie gespeichert bleiben
2. *Die Mustermail* — vier Sätze, mehr braucht es nicht
3. *Was zurückkommt* — von einer knappen Tabelle bis zu hundert Seiten
   Protokoll; und was es bedeutet, wenn eine Firma behauptet, nichts zu haben
4. *Die weiteren Rechte* — Berichtigung, Löschung, Widerspruch. Und die Grenzen:
   was aus gutem Grund nicht gelöscht werden muss.

**Aufgaben:** Lückentext zu Auskunftsrecht, Berichtigung, Löschung · Vergleich:
Auskunft und Löschung — welches Recht nützt dir wann mehr? · Offen mit
Handlungsteil: eine Auskunft tatsächlich anfordern (Freiwilligkeit
vorausgesetzt) und aufschreiben, was du erwartest, bevor die Antwort kommt

**Hinweis:** Dieser Pfad ist der einzige des Moduls, bei dem Schülerinnen und
Schüler mit echten eigenen Daten hantieren. Das ist gewollt — aber die Anfrage
sollte freiwillig bleiben und die Antwort nicht in der Klasse herumgereicht
werden.

---

### Pfad 6 — Über Menschen wenig, über Macht viel

**Kernbild:** Zum Datenschutz gehört ein Gegenstück, das seltener genannt wird.
Beide schützen dieselbe Sache aus zwei Richtungen.

**Bildschirme:**
1. *Zwei Richtungen, ein Ziel* (Tabelle) — Datenschutz: verboten, außer erlaubt;
   Informationsfreiheit: zugänglich, außer begründet geheim
2. *Was öffentlich sein muss* — Verträge, Gutachten, Entscheidungen der
   Verwaltung; das Hamburger Transparenzportal als Beispiel
3. *Der häufigste Denkfehler* — wer beides verwechselt, kommt zu dem Schluss,
   Datenschutz verhindere Transparenz. Es ist umgekehrt: Er verhindert, dass
   Wissen über Menschen zu Macht über Menschen wird.
4. *„Ich habe nichts zu verbergen"* — den Satz ernst nehmen und prüfen

**Aufgaben:** Lückentext zur Wiederholung des Moduls · Vergleich: ein Fall, in
dem Datenschutz und Informationsfreiheit in dieselbe Richtung ziehen, und einer,
in dem sie sich widersprechen · Offen: Würdest du einem Fremden dein
entsperrtes Handy für zehn Minuten überlassen? Wenn nein — was genau hättest du
zu verbergen, und vor wem? Und wenn Datenschutz vor allem Menschen schützt, die
unbequeme Fragen stellen, Kranke, Verschuldete oder Verliebte: Was folgt daraus
für jemanden, der gerade nichts zu verbergen hat?

---

## Hinweise zur Umsetzung

- **Übungsdatenbank:** Eine erfundene Tabelle nach dem Vorbild eines sozialen
  Netzwerks ist die naheliegende Wahl, weil daran das Verknüpfen unmittelbar
  einleuchtet. Sie trägt die Pfade 2 und 3 gemeinsam.
- **Keine echten Daten von Mitschülern**, auch nicht als Übung. Erfundene
  Datensätze reichen vollkommen — die einzige Ausnahme ist Pfad 5, wo jeder nur
  mit den eigenen hantiert.
- **Zu prüfen vor der Veröffentlichung:** die Zahl „~500 Datenpunkte" braucht
  eine Quelle oder muss weg.
- **Was noch fehlt:** die englische Fassung; und für Pfad 5 eine Mustermail im
  Wortlaut, die man kopieren kann.

## Quellen für die Ausarbeitung

- Datenschutz-Grundverordnung, amtlicher Text —
  https://eur-lex.europa.eu/eli/reg/2016/679/oj
- Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit —
  https://datenschutz-hamburg.de
- Bildungsplan Informatik Sek I, Hamburg —
  https://www.hamburg.de/resource/blob/798514/ad3c2fdfb3a32b9545a271dfceae5772/informatik-data.pdf
