# M2 — Kommunikation und Rechnernetze

**Modulentwurf** · Fach Informatik · Themenfeld Sicherheit in verteilten Systemen · Jahrgang 7–10


> **Umgesetzt.** Dieses Modul liegt fertig unter
> [`learning-paths/informatik/m2-rechnernetze/`](../learning-paths/informatik/m2-rechnernetze/)
> - 5 Lernpfade, zweisprachig, mit Aufgaben und Quellen. Der Entwurf
> bleibt als Planungsgrundlage stehen; maßgeblich sind die JSON-Dateien.

## Die Moduldefinition

```json
{
  "key": "m2-rechnernetze",
  "title": { "de": "Kommunikation und Rechnernetze", "en": "Communication and computer networks" },
  "description": {
    "de": "Was zwischen dem Tippen einer Adresse und dem Erscheinen der Seite wirklich passiert - und wie viele fremde Rechner daran beteiligt sind.",
    "en": "What really happens between typing an address and the page appearing - and how many strangers' machines are involved."
  },
  "icon": "🌐",
  "accent": "sky",
  "badge": "M2"
}
```

## Verbindliche Fachbegriffe

das Client-Server-Prinzip · das DHCP · das DNS · das Gateway · der Hostname ·
die IP-Adresse · die Kommunikation · der Ping · das Protokoll · der Router ·
der Server · das Subnetz · der Switch

| Pfad | deckt ab |
|---|---|
| 1 | Kommunikation, Protokoll |
| 2 | IP-Adresse, Subnetz, Switch, Ping |
| 3 | Router, Gateway, DHCP |
| 4 | DNS, Hostname, Server, Client-Server-Prinzip |
| 5 | — (Anwendung und Reflexion) |

## Leitgedanke des Bildungsplans

> Die Schülerinnen und Schüler lernen die konzeptionellen Grundlagen und
> Funktionsweisen von Rechnernetzen kennen und bauen dazu ein eigenes Netzwerk
> auf.

**Bezug zur Grundbildung:** Der bestehende Pfad *„Wie eine E-Mail funktioniert"*
erklärt Client, Server und Provider schon am Beispiel E-Mail. Dieses Modul setzt
ihn voraus und geht eine Ebene tiefer — auf Adressen, Wege und Pakete. Wer beides
einsetzt, nimmt E-Mail zuerst.

---

## Die fünf Lernpfade

| # | Titel | Untertitel | UE der Handreichung |
|---|---|---|---|
| 1 | Eine Nachricht, die niemand ganz gesehen hat | Protokolle, Pakete und warum das Internet keine Leitung ist | 1 |
| 2 | Jedes Gerät braucht eine Nummer | IP-Adressen, Subnetze und der einfachste Test der Welt | 2 |
| 3 | Wege nach draußen | Switch, Router, Gateway — und wer die Nummern verteilt | 3 |
| 4 | Von Namen zu Nummern | DNS, das Telefonbuch, das man erst bemerkt, wenn es ausfällt | 4 |
| 5 | Bau dir ein Netz | Aufbauen, kaputtmachen, verstehen | 5–6 |

---

### Pfad 1 — Eine Nachricht, die niemand ganz gesehen hat

**Kernbild:** Zwischen Enter und fertiger Seite vergeht weniger als eine
Sekunde. In dieser Sekunde war die Anfrage bei einer Handvoll Rechner, von denen
keiner die ganze Nachricht kannte.

**Bildschirme:**
1. *Verabredungen* — ein Protokoll ist nichts anderes als die feste Reihenfolge
   beim Telefonieren: „Hallo?", Name, Anliegen. Wer sich nicht daran hält, redet
   aneinander vorbei.
2. *Vier Daten* (Zeitleiste) — 1837 Telegraf, 1876 Telefon, 1969 ARPANET (die
   erste Nachricht sollte „LOGIN" heißen; nach „LO" stürzte das System ab),
   1989 World Wide Web — ein Dienst auf dem Internet, nicht das Internet selbst.
3. *Warum Pakete und keine Leitung* — beim Telefon war eine Leitung auch in den
   Sprechpausen reserviert; das Internet zerlegt jede Nachricht in Pakete, die
   sich die Wege teilen. Deshalb können Millionen gleichzeitig verbunden sein.
4. *Absender und Empfänger* — jedes Paket trägt beides wie ein Briefumschlag;
   Pakete kommen in falscher Reihenfolge an, und das Protokoll setzt sie wieder
   zusammen und fordert Fehlendes nach.

**Aufgaben:** Lückentext zu Kommunikation, Protokoll, Datenpaket · Vergleich:
eine feste Leitung gegen geteilte Wege — wofür ist welches besser? · Offen: Wo
im Alltag hältst du dich an ein Protokoll, ohne es so zu nennen?

---

### Pfad 2 — Jedes Gerät braucht eine Nummer

**Kernbild:** Ein Gerät ohne IP-Adresse ist im Netz das, was ein Haus ohne
Hausnummer für den Postboten wäre.

**Bildschirme:**
1. *Netzanteil und Geräteanteil* — `192.168.1.42`, und die Subnetzmaske
   `255.255.255.0` sagt, wo die Grenze verläuft (Tabelle)
2. *Um die Ecke oder weiter weg* — Geräte im selben Subnetz reden direkt
   miteinander; für alles andere braucht es jemanden, der den Weg kennt
3. *Ping* — `ping 8.8.8.8` in der Eingabeaufforderung: ein winziges Paket, eine
   gemessene Antwortzeit. Kommt keine Antwort, weiß man schon eine Menge.
4. *Wo deine eigene Adresse steht* — `ipconfig` bzw. `ip addr`, und was die
   Zeilen bedeuten

**Aufgaben:** Lückentext zu IP-Adresse, Subnetz, Subnetzmaske, Ping · Vergleich:
zwei Adressen sind gegeben — liegen sie im selben Subnetz? Begründung · Offen:
Deine Adresse zu Hause beginnt bei fast allen mit `192.168`. Warum stört das
niemanden?

---

### Pfad 3 — Wege nach draußen

**Kernbild:** Drei Geräte, drei Aufgaben — und keines kann die Aufgabe des
anderen. Wer sie auseinanderhält, kann Störungen beschreiben statt sie nur zu
haben.

**Bildschirme:**
1. *Der Switch* — verteilt Pakete innerhalb eines Netzes, kennt nur, was direkt
   an ihm hängt
2. *Der Router* — verbindet zwei Netze und entscheidet, wohin ein Paket als
   Nächstes geht
3. *Das Gateway* — der Ausgang: die Adresse für alles, was nicht ins eigene
   Subnetz gehört. Zu Hause ist das der Router.
4. *DHCP* — verteilt die Adressen automatisch. Ohne diesen Dienst müsste man
   jedem neuen Gerät von Hand eine freie Nummer geben.

**Aufgaben:** Lückentext zu Switch, Router, Gateway, DHCP · Vergleich: Der
Kasten an der Wand heißt „Router" und ist in Wahrheit vier Geräte in einem —
welche, und was macht jedes? · Offen: Was passiert in einem Netz, wenn zwei
Geräte dieselbe Adresse haben — und wer merkt es zuerst?

**Hinweis:** DHCP ist im Bildungsplan als optional ausgewiesen. Es gehört
trotzdem hinein, sonst erscheint die Adressvergabe als Zauberei.

---

### Pfad 4 — Von Namen zu Nummern

**Kernbild:** Du tippst Namen, Rechner kennen Nummern. Dazwischen steht ein
Dienst, den man erst bemerkt, wenn er ausfällt.

**Bildschirme:**
1. *Das Telefonbuch* — Hostname rein, IP-Adresse raus; Antworten werden
   zwischengespeichert
2. *Die Kette* — `www.beispiel.de` → DNS-Server → wer ist für `.de` zuständig →
   wer für `beispiel.de` → Anfrage an die zurückgekommene Nummer → Antwort. Der
   letzte Schritt ist das Client-Server-Prinzip: einer fragt, einer antwortet.
3. *„Das Internet ist kaputt"* — meistens ist es das nicht. Wenn `ping 8.8.8.8`
   antwortet, aber keine Seite lädt, ist die Verbindung in Ordnung und nur die
   Namensauflösung gestört.
4. *Die Adressen sind ausgegangen* — IPv4 hat rund 4,3 Milliarden Adressen; das
   klang 1981 nach unendlich viel. IPv6 hat 128 statt 32 Bit — genug, um jedem
   Sandkorn der Erde mehrere Adressen zu geben.

**Aufgaben:** Lückentext zu DNS, Hostname, Server, Client-Server-Prinzip ·
Vergleich: die Doppelaufgabe aus dem alten Entwurf — ein Rechner pingt, lädt
aber nichts; ein anderer lädt, pingt aber nicht · Offen: Wer betreibt eigentlich
die Server, die dir sagen, welche Nummer zu einem Namen gehört?

---

### Pfad 5 — Bau dir ein Netz

**Kernbild:** Am schnellsten versteht man ein Netz, wenn man eines baut — in
einer Simulation ohne ein einziges Kabel. Und dann kaputtmacht.

**Bildschirme:**
1. *Zwei Rechner an einem Switch* — Adressen aus demselben Subnetz, pingen, es
   funktioniert
2. *Ein drittes Gerät in einem anderen Subnetz* — pingen, es funktioniert nicht.
   Nichts kaputt, sondern richtig: Es fehlt der Weg.
3. *Router dazwischen, Gateway eintragen* — wieder pingen, jetzt geht es
4. *Absichtlich kaputtmachen* — falsche Subnetzmaske, gelöschtes Gateway, zwei
   gleiche Adressen, gezogenes Kabel. Jeder Fehler erzeugt ein anderes
   Fehlerbild, und wer die Bilder kennt, erkennt sie wieder.
5. *Wem gehört das Internet* — es wurde so gebaut, dass jeder mitmachen kann,
   ohne zu fragen. Das war eine Entscheidung, keine Naturgegebenheit.

**Aufgaben:** Lückentext zur Wiederholung des Moduls · Vergleich mit
Handlungsteil: eigenes Netz aufbauen, ein Fehlerbild herbeiführen und
beschreiben · Offen: Was stünde auf dem Spiel, wenn jede Webseite vorher
genehmigt werden müsste — und wer würde entscheiden?

---

## Hinweise zur Umsetzung

- **Simulation:** Filius ist für die Mittelstufe die naheliegende Wahl —
  deutschsprachig, kostenlos, ohne Anmeldung. Cisco Packet Tracer kann mehr,
  verlangt aber ein Konto.
- **Pfad 5 braucht Rechner.** Die vier davor funktionieren gelesen; dieser
  nicht. Wer keine Simulation stellen kann, sollte ihn als Vorführung an der
  Tafel planen statt ihn zu streichen.
- **Was noch fehlt:** die englische Fassung; ein `stats`-Block mit IPv4- gegen
  IPv6-Adressraum wäre in Pfad 4 ein guter Blickfang.

## Quellen für die Ausarbeitung

- inf-schule.de: Rechnernetze — https://www.inf-schule.de/rechnernetze
- RFC 791 — Internet Protocol — https://www.rfc-editor.org/rfc/rfc791
- RFC 1034 — Domain Names — https://www.rfc-editor.org/rfc/rfc1034
