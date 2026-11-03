# Persönliche Räume auf School Bud-E

School Bud-E verwendet dieselbe persönliche Raumarchitektur wie Buddy:
`/my` bietet getrennte Reiter für Klassenräume und persönliche Räume;
`/<name>` erkennt den passenden Raumtyp. Beide Websites besitzen getrennte
Datenbanken. Ein persönlicher Raum auf bud-e.ai ist deshalb nicht automatisch
unter derselben Adresse auf school.bud-e.ai vorhanden.

## Verschlüsselte Speicherung

Passwortableitung und Objektverschlüsselung erfolgen im Browser. PBKDF2-SHA-256
(600.000 Iterationen) und HKDF trennen das Authentifizierungsgeheimnis vom
nicht exportierbaren AES-256-GCM-Speicherschlüssel. Frische Nonces und
authentifizierte Zusatzdaten binden jedes Objekt an Raum und Objekt-ID.
Das Passwort und der Speicherschlüssel werden nicht zum Server übertragen.
Die bestehende Buddy-Protokollversion bleibt unverändert; kein neues
Kryptografie- oder Authentifizierungsdesign wurde eingeführt.

Chats, Titel, Verzweigungen, Bilder, Einstellungen, Anbieter-Keys sowie
gespeicherte Korrekturberichte und Kriterien werden vor der Synchronisierung
verschlüsselt. Der Server speichert diese Inhalte ausschließlich als
Ciphertext. Sichtbar bleiben Raumname, KDF-Salz, Objekt-IDs, Größen, Revisionen
und Zeitpunkte; das Authentifizierungsgeheimnis wird nur gehasht gespeichert.

Die Tabellen `personal_rooms`, `personal_objects`, `personal_sessions` und
`personal_limits` verwenden die bestehende School-Datenbank unter
`CLASSROOM_DATA_DIR`, standardmäßig `/var/lib/school-bude-classrooms`.
Klassenraum- und persönliche Namen teilen denselben Namensraum;
SQLite-Trigger verhindern Doppelbelegung. Der globale Klassenraum-Schlüssel
entschlüsselt keine persönlichen Inhalte.

Ein Raum hat 100 MiB logische Ciphertext-Quote, ein Objekt höchstens 2 MiB,
ein Speicherpaket höchstens 8 MiB und 16 Schreibobjekte. Bilder werden im
Browser normalisiert und als JPEG komprimiert. Revisionen verhindern stilles
Überschreiben durch andere Geräte. Ein Konflikt behält die lokale Fassung
und erfordert Laden oder Export. Fünf falsche Passwortversuche sperren die
Anmeldung drei Minuten; Sitzungen verwenden sichere HttpOnly-Cookies.

## Entsperren, KI-Anbieter und Grenzen

Zum Entsperren auf einem neuen Gerät oder nach erneutem Öffnen ist das Passwort
erforderlich. „Sperren“ entfernt entschlüsselte Inhalte und Schlüssel aus dem
aktiven Zustand. Ein Server-Cookie allein entschlüsselt nichts; Passwort und
Schlüssel werden nicht in localStorage, sessionStorage oder IndexedDB abgelegt.
Es gibt keine Passwort-Wiederherstellung.

KI-Anfragen laufen nach dem Entsperren direkt vom Browser zum gewählten
Anbieter, einschließlich Chat, Bilder, Audio und Korrekturen. Der Anbieter
erhält die ausgewählten Inhalte und den API-Key zur Verarbeitung im Klartext
innerhalb der HTTPS-Verbindung; seine Datenschutz- und Kostenregeln gelten.
Es gibt keinen stillen School-Bud-E-Proxy bei fehlender CORS-Freigabe.
Die verschlüsselte Ablage schützt nicht gegen einen kompromittierten Browser
oder einen Betreiber, der manipulierten JavaScript-Code ausliefert.

## Korrekturen und bewusste Exporte

Der Einstieg zeigt zuerst „Arbeiten hochladen“, dann die Korrekturkriterien.
Standardmäßig laufen Abschrift, Zuordnung und Bewertung nacheinander;
„Prüfpause einlegen“ aktiviert die manuelle Prüfung dazwischen. Bis zu sechs
Anfragen laufen gleichzeitig. Fehlende Kriterien können auch im automatischen
Ablauf eine Rückfrage auslösen.

„Schon angefangen? Zwischenstand laden“ steht weiter unten und ist zunächst
eingeklappt. Die fünfteilige Kurzanleitung ersetzt vorübergehend den Inhalt im
selben Dialog; Eingaben und laufende Arbeit bleiben erhalten. Info-Knöpfe helfen
per Maus, Tastatur und Touch bei API-Key, Raumbudget, Anbieterguthaben, Prüfpause
und lokalen Sicherungen. Hilfe, Dateiauswahl und Sicherungsimport starten keine
Modellanfrage. Das Raumbudget ist eine zusätzliche Kostengrenze in Klassenräumen,
kein Anbieterguthaben; im persönlichen Raum gilt kein Klassenraumbudget.

„Korrekturvorschläge“ nutzt denselben Ablauf wie Buddy. Fertige Berichte und
Kriterien werden im privaten Chat verschlüsselt gespeichert und können nach
erneutem Entsperren auch auf einem anderen Gerät wieder geöffnet werden.
Originaldateien, Abschriften und unfertige Zwischenstände bleiben nur im
geöffneten Korrekturdialog; sie werden nicht automatisch auf dem Server
gespeichert. Vor Schließen oder Neuladen einen benötigten Zwischenstand
ausdrücklich herunterladen.

JSON-/Zwischenstands-, PDF-, Word- und Bilddownloads sind bewusste lokale
Exporte und unverschlüsselt. Sie enthalten keine Anbieter-Keys oder Passwörter,
können aber vertrauliche Schülerdaten enthalten und müssen geschützt
aufbewahrt werden. Ein JSON-Import erhält neue IDs und wird vor dem Speichern
wieder verschlüsselt. Korrekturen bleiben KI-Vorschläge, keine freigegebenen
Noten oder automatische Änderung der Schülerarbeit.

## Prüfungen

`tests/personal*_test.ts` prüfen Verschlüsselung, Quote, Isolation,
Namenskonflikte, Revisionen, Authentifizierung und direkte Anbieteranfragen.
`tests/personalBrowser_test.py <isolierter-Preview-Port>` verwendet zwei neue
Browserprofile, echte Browser-Kryptografie und ausschließlich simulierte
KI-Anbieter. Testserver benötigen ein separates `CLASSROOM_DATA_DIR`.
`tests/roomGradingBrowser_test.py` deckt die private Korrektur und ihre
verschlüsselte Wiederherstellung ab.
