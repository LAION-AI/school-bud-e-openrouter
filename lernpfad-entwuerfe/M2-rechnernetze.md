# M2 — Kommunikation und Rechnernetze

**Entwurf für einen Lernpfad** · Themenfeld Sicherheit in verteilten Systemen ·
Jahrgang 7–10

```
key      wie-daten-reisen
title    Wie Daten den Weg zu dir finden
summary  Was zwischen dem Tippen einer Adresse und dem Erscheinen der Seite
         wirklich passiert — und wie viele fremde Rechner daran beteiligt sind.
icon     🌐
accent   sky
minutes  16
```

### Verbindliche Fachbegriffe

das Client-Server-Prinzip · das DHCP · das DNS · das Gateway · der Hostname ·
die IP-Adresse · die Kommunikation · der Ping · das Protokoll · der Router ·
der Server · das Subnetz · der Switch

### Leitgedanke des Bildungsplans

> Die Schülerinnen und Schüler lernen die konzeptionellen Grundlagen und
> Funktionsweisen von Rechnernetzen kennen und bauen dazu ein eigenes Netzwerk
> auf.

> **Bezug:** Der bestehende Pfad *„Wie eine E-Mail funktioniert"* erklärt
> Client, Server und Provider bereits am Beispiel E-Mail. Dieser Entwurf setzt
> das voraus und geht eine Ebene tiefer — auf Adressen, Wege und Pakete. Wer
> beide einsetzt, sollte E-Mail zuerst nehmen.

---

## Bildschirm 1 — Eine Nachricht, die niemand ganz gesehen hat

**lead**
Du tippst eine Adresse ein und drückst Enter. Bis die Seite da ist, vergeht
weniger als eine Sekunde. In dieser Sekunde war deine Anfrage bei einer
Handvoll Rechner, von denen keiner die ganze Nachricht kannte — und trotzdem
kam alles vollständig an.

**paragraph**
Damit das klappt, muss vorher etwas verabredet worden sein. Solche Verabredungen
heißen **Protokolle**: feste Regeln, wer wann was sagt und in welcher Form.
Nicht anders als beim Telefonieren — erst „Hallo?", dann der Name, dann das
Anliegen. Wenn zwei sich nicht an dieselbe Reihenfolge halten, redet man
aneinander vorbei.

**timeline**
- **1837** — Der Telegraf. Erstmals ist eine Nachricht schneller als der Bote,
  der sie trägt.
- **1876** — Das Telefon. Eine feste Leitung, exklusiv für zwei Gesprächspartner.
- **1969** — Das ARPANET. Vier Rechner. Die erste Nachricht sollte „LOGIN"
  heißen; nach „LO" stürzte das System ab.
- **1989** — Das World Wide Web. Nicht das Internet selbst, sondern ein Dienst
  darauf.

**fact-callout · 📦 · Warum Pakete und keine Leitung?**
Beim Telefon war eine Leitung während des Gesprächs für zwei Leute reserviert —
auch in den Sprechpausen. Das Internet macht es anders: Es zerlegt jede
Nachricht in **Datenpakete**, die einzeln reisen und sich die Wege mit allen
anderen teilen. Deshalb können Millionen gleichzeitig verbunden sein, ohne dass
für jeden eine eigene Leitung gebaut werden muss.

**paragraph**
Jedes Paket trägt Absender und Empfänger — wie ein Briefumschlag. Und wie bei
der Post kann es passieren, dass Pakete auf verschiedenen Wegen laufen und in
falscher Reihenfolge ankommen. Dass am Ende trotzdem die richtige Seite auf dem
Bildschirm steht, ist die Leistung des Protokolls, das die Teile wieder
zusammensetzt und Fehlendes noch einmal anfordert.

---

## Bildschirm 2 — Jedes Gerät braucht eine Nummer

**lead**
In einem Netz muss jedes Gerät ansprechbar sein. Dafür bekommt es eine Nummer:
die **IP-Adresse**. Ohne sie ist ein Gerät im Netz das, was ein Haus ohne
Hausnummer für den Postboten wäre.

**table** — *Die Adresse in deinem WLAN*

| Teil | Beispiel | Bedeutung |
|---|---|---|
| Netzanteil | `192.168.1.` | in welchem Netz — bei allen Geräten zu Hause gleich |
| Geräteanteil | `.42` | welches Gerät in diesem Netz |
| **Subnetzmaske** | `255.255.255.0` | wo die Grenze zwischen beiden verläuft |

**paragraph**
Das **Subnetz** ist die Antwort auf die Frage „bist du bei mir um die Ecke oder
weiter weg?". Geräte im selben Subnetz reden direkt miteinander. Für alles
andere braucht es jemanden, der den Weg nach draußen kennt.

**try-callout · 🏓 · Ping: der einfachste Test der Welt**
Öffne die Eingabeaufforderung und tippe `ping 8.8.8.8`. Dein Rechner schickt
ein winziges Paket los und misst, wie lange die Antwort braucht. Kommt eine
Antwort, ist der Weg frei. Kommt keine, weißt du schon eine Menge — nämlich
dass es nicht an der Webseite liegt.

**steps**
1. **Der Switch** verteilt Pakete innerhalb eines Netzes. Er kennt nur die
   Geräte, die direkt an ihm hängen.
2. **Der Router** verbindet zwei Netze miteinander und entscheidet, wohin ein
   Paket als Nächstes geht.
3. **Das Gateway** ist der Ausgang: die Adresse, an die alles geht, was nicht
   ins eigene Subnetz gehört. Zu Hause ist das dein Router.
4. **DHCP** verteilt die Adressen automatisch. Ohne diesen Dienst müsstest du
   jedem neuen Gerät von Hand eine Nummer geben, die noch frei ist.

---

## Bildschirm 3 — Von Namen zu Nummern

**lead**
Du tippst keine Nummern ein, sondern Namen. Rechner kennen aber nur Nummern.
Zwischen beidem steht ein Dienst, der so selbstverständlich funktioniert, dass
man ihn erst bemerkt, wenn er ausfällt: das **DNS**.

**paragraph**
Das Domain Name System ist ein Telefonbuch für das Internet. Du fragst nach
einem **Hostnamen**, es antwortet mit einer IP-Adresse. Die Antwort wird
zwischengespeichert, damit nicht bei jedem Klick neu gefragt werden muss.

**steps**
1. Du tippst `www.beispiel.de` ein.
2. Dein Rechner fragt einen DNS-Server: Welche Nummer gehört dazu?
3. Der antwortet, oder er fragt selbst weiter — von hinten nach vorn: erst wer
   für `.de` zuständig ist, dann wer für `beispiel.de`.
4. Dein Rechner schickt seine Anfrage an die Nummer, die zurückkam.
5. Der **Server** dort antwortet. Das ist das **Client-Server-Prinzip**: einer
   fragt, einer antwortet.

**warn-callout · 📵 · „Das Internet ist kaputt"**
Meistens ist es das nicht. Wenn `ping 8.8.8.8` antwortet, aber keine Seite
lädt, ist die Verbindung in Ordnung und nur die Namensauflösung gestört — DNS.
Wer den Unterschied kennt, kann ein Problem beschreiben statt es nur zu haben.

**fact-callout · 🔢 · Die Adressen sind ausgegangen**
IPv4 hat rund 4,3 Milliarden Adressen. Das klang 1981 nach unendlich viel und
reicht heute nicht mehr für die Geräte auf der Welt. Deshalb gibt es IPv6 mit
128 statt 32 Bit — genug, um jedem Sandkorn der Erde mehrere Adressen zu geben.

---

## Bildschirm 4 — Bauen und hineinsehen

**lead**
Am schnellsten versteht man ein Netz, wenn man eines baut. In einer Simulation
geht das ohne ein einziges Kabel.

**steps**
1. **Zwei Rechner an einen Switch.** Adressen aus demselben Subnetz vergeben,
   pingen — es funktioniert.
2. **Ein drittes Gerät in ein anderes Subnetz.** Pingen — es funktioniert
   nicht. Nichts kaputt, sondern richtig: Es fehlt der Weg.
3. **Einen Router dazwischen, Gateway eintragen.** Wieder pingen. Jetzt geht es.
4. **Ein Kabel ziehen und beobachten**, wo genau die Antwort ausbleibt.

**tip-callout · 🧪 · Absichtlich kaputtmachen**
Trag eine falsche Subnetzmaske ein. Lösch das Gateway. Gib zwei Geräten
dieselbe Adresse. Jeder dieser Fehler erzeugt ein anderes Fehlerbild — und wer
die Bilder einmal gesehen hat, erkennt sie später wieder.

**paragraph**
Und die größere Frage: Das Internet wurde so gebaut, dass jeder mitmachen kann
— Inhalte anbieten, abrufen, diskutieren, ohne jemanden um Erlaubnis zu fragen.
Das war eine Entscheidung, keine Naturgegebenheit. Wem nützt sie, und was
stünde auf dem Spiel, wenn sie zurückgenommen würde?

**sources**
- inf-schule.de: Rechnernetze — https://www.inf-schule.de/rechnernetze
- RFC 791 — Internet Protocol — https://www.rfc-editor.org/rfc/rfc791
- RFC 1034 — Domain Names, Concepts and Facilities —
  https://www.rfc-editor.org/rfc/rfc1034

---

## Die drei Aufgaben

### 1. Lückentext

> Damit zwei Rechner sich verstehen, müssen sie sich an dieselben Regeln
> halten; solche Regeln nennt man ___. Eine Nachricht wird dafür in einzelne
> ___ zerlegt, die getrennt reisen. Jedes Gerät im Netz braucht eine eindeutige
> Nummer, die ___. Ob zwei Geräte direkt miteinander reden können, entscheidet
> das ___. Geräte innerhalb eines Netzes verbindet ein ___; zwei Netze
> miteinander verbindet ein ___. Die Adresse, an die alles geht, was nach
> draußen soll, heißt ___. Damit man Adressen nicht von Hand vergeben muss,
> gibt es ___. Und damit man sich Namen statt Nummern merken kann, übersetzt
> das ___ zwischen beiden. Wer fragt, ist der Client, wer antwortet, ist der
> ___ — dieses Muster heißt ___.
>
> *(10 Lücken)*

### 2. Vergleiche *(Anforderungsbereich II)*

> Ein Rechner antwortet auf `ping 8.8.8.8` innerhalb weniger Millisekunden,
> kann aber keine einzige Webseite laden. Ein anderer Rechner lädt Seiten,
> antwortet auf denselben Ping aber gar nicht. Erkläre für beide Fälle, welcher
> Teil der Kette funktioniert und welcher nicht — und was du daraus über den
> Unterschied zwischen einer Adresse und einem Namen lernst.
>
> *Hinweis: Überlege bei jedem Fall, welcher Schritt aus Bildschirm 3
> übersprungen wird.*

### 3. Zum Nachdenken

> Das Internet ist so gebaut, dass grundsätzlich jeder Informationen anbieten
> und abrufen kann, ohne jemanden um Erlaubnis zu fragen. Das ist keine
> technische Notwendigkeit, sondern eine Entscheidung, die man auch anders
> hätte treffen können. Überlege, was sich für dich ändern würde, wenn jede
> Webseite vorher genehmigt werden müsste — und wer wohl entscheiden würde, was
> genehmigt wird.

---

## Hinweise zur Umsetzung

- **Simulation:** Filius ist für die Mittelstufe die naheliegende Wahl —
  deutschsprachig, kostenlos, ohne Anmeldung. Cisco Packet Tracer kann mehr,
  verlangt aber ein Konto.
- **Optional laut Plan:** DHCP-Server ist als optional ausgewiesen; hier steht
  er bewusst drin, weil er sonst als Zauberei erscheint.
- **Was noch fehlt:** englische Fassung; ein `stats`-Block mit IPv4- gegen
  IPv6-Adressraum wäre auf Bildschirm 3 ein guter Blickfang.
