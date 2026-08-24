# M4 — Datenbanken und Datenschutz, Teil 1

**Entwurf für einen Lernpfad** · Themenfeld Datenkompetenz · Jahrgang 7–10

```
key      was-uebrig-bleibt
title    Was von dir übrig bleibt
summary  Wie aus einzelnen Angaben ein Bild wird — und warum Datenschutz nicht
         Daten schützt, sondern Menschen.
icon     🗃️
accent   rose
minutes  17
```

### Verbindliche Fachbegriffe

die Abfrage · die personenbezogenen Daten · die Datenbank · der Datenschutz ·
die Informationsfreiheit

### Leitgedanke des Bildungsplans

> Hierbei wird ein Fokus auf **Datenschutz als Freiheitsschutz** gelegt.

Der Plan formuliert das an mehreren Stellen ungewöhnlich deutlich:

> Datenschutz ist nicht der Schutz von Daten, sondern der Schutz von Personen
> und von Freiheit als Teil unserer Werteordnung.

Das ist die Leitlinie dieses Entwurfs. Es geht nicht um Passworthygiene,
sondern um eine politische Frage.

---

## Bildschirm 1 — Einzeln harmlos

**lead**
Deine Postleitzahl verrät nichts über dich. Dein Geburtsdatum auch nicht — den
Tag teilen Millionen. Und dein Geschlecht schon gar nicht. Drei völlig harmlose
Angaben. Zusammen reichen sie, um die meisten Menschen eindeutig zu
identifizieren.

**paragraph**
Das ist der Kern des Themas: Der Wert einer Angabe hängt davon ab, was sonst
noch bekannt ist. Deshalb ist die Frage „was ist daran schon Schlimmes?" bei
einzelnen Daten fast immer die falsche Frage.

**stats**
| | |
|---|---|
| **3** | Angaben genügen oft zur Identifizierung — Postleitzahl, Geburtsdatum, Geschlecht |
| **~500** | Datenpunkte im Schnitt, die ein Werbenetzwerk über eine Person hält |
| **0** | davon hast du bewusst weitergegeben |

*(Die mittlere Zahl ist eine Größenordnung, keine amtliche Statistik — vor der
Veröffentlichung durch eine belegbare Quelle ersetzen oder als Schätzung
kennzeichnen.)*

**paragraph**
**Personenbezogene Daten** sind alle Angaben, die sich einer bestimmten Person
zuordnen lassen. Das ist weiter, als die meisten denken: nicht nur Name und
Adresse, sondern auch die Gerätenummer deines Handys, dein Standortverlauf, die
Uhrzeiten, zu denen du online bist, und wie lange du bei einem Video hängen
bleibst.

**try-callout · 📱 · Sieh nach, was dein Handy weiß**
In den Einstellungen jedes Handys gibt es einen Standortverlauf. Öffne ihn.
Bei den meisten steht dort auf den Tag genau, wo sie in den letzten Monaten
waren. Diese Liste hat niemand angelegt — sie ist entstanden.

---

## Bildschirm 2 — Wie aus Angaben Wissen wird

**lead**
Eine **Datenbank** ist zunächst nur eine sehr ordentliche Tabelle. Interessant
wird sie durch die **Abfrage**: die Fähigkeit, aus Millionen Zeilen in
Sekundenbruchteilen genau die herauszuholen, die zusammenpassen.

**table** — *Eine erfundene Tabelle „Nutzer"*

| id | ort | geboren | letzter_login | videos_gesehen |
|---|---|---|---|---|
| 1 | 22765 | 2010 | 22:14 | 47 |
| 2 | 20355 | 2009 | 07:02 | 3 |
| 3 | 22765 | 2010 | 23:51 | 62 |

**paragraph**
Jetzt eine Abfrage: *Zeig mir alle aus 22765, geboren 2010, die nach 22 Uhr
online waren.* Zwei Zeilen bleiben übrig. Keine einzelne Spalte hat jemanden
verraten — die Verknüpfung hat es getan. Genau das ist das Werkzeug, und genau
deshalb ist es zweischneidig.

**steps**
1. **Auswählen** — welche Spalten sollen erscheinen?
2. **Filtern** — welche Bedingung müssen die Zeilen erfüllen?
3. **Sortieren** — wonach, auf- oder absteigend?
4. **Zählen und gruppieren** — wie viele je Ort? Wer ist am häufigsten da?

**fact-callout · 🏫 · Auch die Schule führt Datenbanken**
Anwesenheit, Noten, Adressen, Fehlzeiten. Wer darf welche Abfrage stellen? Ein
Lehrer die Noten seiner Klasse, ja. Die Noten aller Klassen? Die Fehlzeiten
zusammen mit den Adressen? Die Frage ist nicht, ob die Daten da sind, sondern
wer welche Verknüpfung machen darf.

---

## Bildschirm 3 — Vier Regeln, die der Gesetzgeber daraus gezogen hat

**lead**
Weil Verknüpfen so mächtig ist, gilt in der Europäischen Union nicht „erlaubt,
solange nichts verboten ist", sondern der umgekehrte Grundsatz.

**steps**
1. **Verbot mit Erlaubnisvorbehalt.** Jede Verarbeitung personenbezogener
   Daten ist grundsätzlich verboten — es sei denn, ein Gesetz erlaubt sie oder
   die betroffene Person hat eingewilligt. Erst die Erlaubnis macht es zulässig,
   nicht umgekehrt.
2. **Zweckbindung.** Daten, die für einen Zweck erhoben wurden, dürfen nicht
   einfach für einen anderen benutzt werden. Deine Adresse für die Lieferung
   ist nicht deine Adresse für Werbung.
3. **Datensparsamkeit.** Erhoben werden darf nur, was für den Zweck nötig ist.
   Ein Taschenrechner braucht keinen Standort.
4. **Transparenz.** Du hast das Recht zu erfahren, was über dich gespeichert
   ist — und zwar von jeder Stelle, kostenlos, in verständlicher Form.

**tip-callout · ✉️ · Das Auskunftsrecht ist echt und funktioniert**
Artikel 15 DSGVO: Jede Firma muss dir auf Anfrage mitteilen, welche Daten sie
über dich hat, woher sie stammen und an wen sie weitergegeben wurden. In der
Regel innerhalb eines Monats. Ein formloser Satz per Mail genügt. Wer das
einmal gemacht hat, redet danach anders über das Thema.

**warn-callout · ⚙️ · „Datenschutzeinstellungen" — der Name lohnt eine Prüfung**
Sieh dir die sogenannten Datenschutzeinstellungen eines sozialen Netzwerks an
und frage bei jedem Schalter: Schützt er meine Daten *vor dem Anbieter* — oder
nur davor, dass andere Nutzer sie sehen? Meistens ist es das Zweite. Der Name
verspricht dann mehr, als er hält.

---

## Bildschirm 4 — Der andere Teil des Wortpaars

**lead**
Zum Datenschutz gehört ein Gegenstück, das seltener genannt wird: die
**Informationsfreiheit**. Beide schützen dieselbe Sache aus zwei Richtungen.

**paragraph**
Datenschutz schützt Angaben über *Personen* vor dem Zugriff des Staates und der
Unternehmen. Informationsfreiheit sorgt dafür, dass Angaben über den *Staat*
den Bürgern zugänglich sind — Verträge, Gutachten, Entscheidungen. Kurz: Über
Menschen soll man wenig wissen dürfen, über Macht viel.

**table** — *Zwei Richtungen, ein Ziel*

| | Datenschutz | Informationsfreiheit |
|---|---|---|
| schützt | Angaben über Personen | den Zugang zu Angaben über den Staat |
| Grundregel | verboten, außer erlaubt | zugänglich, außer begründet geheim |
| Ziel | keine Macht über den Einzelnen | keine unkontrollierte Macht |

**paragraph**
Deshalb steht Datenschutz nicht gegen Offenheit. Wer beides verwechselt, kommt
zu dem Schluss, Datenschutz verhindere Transparenz — dabei ist es genau
umgekehrt: Er verhindert, dass Wissen über Menschen zu Macht über Menschen wird.

**quote**
> Datenschutz ist nicht der Schutz von Daten, sondern der Schutz von Personen
> und von Freiheit als Teil unserer Werteordnung.
> — *Bildungsplan Informatik, Sekundarstufe I, Hamburg*

**sources**
- Datenschutz-Grundverordnung, amtlicher Text —
  https://eur-lex.europa.eu/eli/reg/2016/679/oj
- Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit —
  https://datenschutz-hamburg.de
- Bildungsplan Informatik Sek I, Hamburg —
  https://www.hamburg.de/resource/blob/798514/ad3c2fdfb3a32b9545a271dfceae5772/informatik-data.pdf

---

## Die drei Aufgaben

### 1. Lückentext

> Alle Angaben, die sich einer bestimmten Person zuordnen lassen, heißen ___.
> Werden sie geordnet gespeichert, spricht man von einer ___. Aus ihr holt man
> gezielt Zeilen heraus, die zusammenpassen; das nennt man eine ___. Gerade
> die Verknüpfung mehrerer für sich harmloser Angaben macht Menschen
> identifizierbar. In der Europäischen Union gilt deshalb das Prinzip des
> Verbots mit ___: Jede Verarbeitung ist verboten, außer ein Gesetz erlaubt sie
> oder die Person hat ___. Daten dürfen nur für den Zweck genutzt werden, für
> den sie erhoben wurden — das Prinzip der ___. Erhoben werden darf nur das
> Nötige — das Prinzip der ___. Und jeder darf erfahren, was über ihn
> gespeichert ist; dieses Recht heißt ___. Das Gegenstück zum Datenschutz, das
> den Zugang zu staatlichen Unterlagen sichert, ist die ___.
>
> *(9 Lücken)*

### 2. Vergleiche und handeln *(Anforderungsbereich II)*

> **Praktischer Teil:** Sieh dir bei einem Dienst, den du benutzt, die
> Datenschutzeinstellungen an. Notiere drei Schalter und ordne jeden einer der
> beiden Sorten zu: Schützt er deine Daten vor anderen Nutzern, oder vor dem
> Anbieter selbst?
>
> **Denkteil:** Erkläre anhand deiner Liste, warum die Bezeichnung
> „Datenschutzeinstellungen" für diese Seite zutreffend oder irreführend ist.
> Setze dein Ergebnis dabei in Beziehung zum Prinzip der Zweckbindung.
>
> *Hinweis: Frage bei jedem Schalter, wer nach dem Umlegen weniger sieht.*

### 3. Zum Nachdenken

> „Ich habe doch nichts zu verbergen" ist der häufigste Satz zu diesem Thema.
> Nimm ihn ernst und prüfe ihn: Würdest du einem Fremden dein entsperrtes Handy
> für zehn Minuten überlassen? Wenn nein — was genau hättest du zu verbergen,
> und vor wem eigentlich? Und wenn Datenschutz vor allem Menschen schützt, die
> unbequeme Fragen stellen, Kranke, Verschuldete oder Verliebte: Was folgt
> daraus für jemanden, der selbst gerade nichts zu verbergen hat?

---

## Hinweise zur Umsetzung

- **Übungsdatenbank:** Der Plan verlangt Abfragen auf einer *vorgegebenen*
  Datenbank — nicht das Entwerfen einer eigenen; das kommt erst in Teil 2
  (Jahrgang 10, relationale Datenbanken). Eine erfundene Tabelle nach dem
  Vorbild eines sozialen Netzwerks ist die naheliegende Wahl, weil daran das
  Verknüpfen unmittelbar einleuchtet.
- **Vorsicht bei der Aufgabe:** Keine echten Daten von Mitschülern verwenden,
  auch nicht als Übung. Erfundene Datensätze reichen vollkommen.
- **Zu prüfen vor der Veröffentlichung:** die Zahl „~500 Datenpunkte" braucht
  eine Quelle oder muss weg.
- **Was noch fehlt:** englische Fassung; ein `steps`-Block zum Auskunftsrecht
  mit einer Mustermail wäre eine sinnvolle Ergänzung auf Bildschirm 3.
