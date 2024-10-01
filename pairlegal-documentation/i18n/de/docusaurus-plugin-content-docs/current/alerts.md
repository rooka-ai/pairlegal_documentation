---
sidebar_position: 6
---

# Warnhinweise

## Überblick

Das Plugin zeigt eine Reihe spezifischer Warnungen für juristische Texte an. Zu diesen
Warnungen gehören die unten aufgeführten Typen.

### Warnungen zu Definitionen

Bei widersprüchlichen Definitionen (d.h. ein Begriff wird mehrmals definiert), Definitionen,
die nicht standardgemäß formuliert sind, oder Definitionen, die im Dokument nicht
verwendet werden, wird der entsprechende Warnhinweis in der Definitionskarte angezeigt.
Im Reiter 'Erwähnungen' prüfen wir zudem, ob alle Erwähnungen des definierten Begriffs
konsistent großgeschrieben sind und ob der Begriff vor anderen Erwähnungen verwendet wird.

### Doppelte Nummernkontrolle

Diese Warnung überprüft die numerische Konsistenz im gesamten Dokument. Sie wird
aktiv, wenn es Unstimmigkeiten zwischen Zahlen in numerischer und ausgeschriebener
Form gibt.

### Feiertagswarnung

Der Feiertagswarnhinweis überprüft die im Dokument genannten Daten gegen eine Datenbank
von Feiertagen und Wochenenden. Wenn ein Datum mit einem (zukünftigen) Feiertag
zusammenfällt, wird der Benutzer benachrichtigt, da dies rechtliche und praktische
Auswirkungen haben könnte.

### Warnhinweis bei Vorlagen

Die Warnung wird ausgelöst, wenn das Dokument eine auszufüllende Klausel enthält,
z. B. "Die Parteien stimmen zu, dass der [Datum einfügen] das Datum des Vertrags ist."
Wir prüfen auf gängige Platzhalter, hervorgehobenen Text und andere Hinweise auf Vorlagen.

### Unausgeglichene Klammerung

Unausgeglichene Klammern können zu Verwirrung bei der Interpretation der Bestimmungen
führen. Dieser Warnhinweis erkennt jegliche (nicht passende Klammern)), geschweifte
oder eckige Klammern, um mögliche Missverständnisse der Vertragsbedingungen zu vermeiden.

### Standardnummern

Die Standardnummernkontrolle prüft Format und Struktur der im Dokument enthaltenen
Nummern. Wir überprüfen die Gültigkeit von Geburtsnummern, Bankkontonummern
(einschließlich IBAN-Format) und anderen.

### Korrektheit von Firmennamen und Existenz von Firmen-IDs

Für jede im Dokument aufgeführte Firma prüft das Plugin, ob der Firmenname in der Nähe
der ID-Nummer genannt wird. Zusätzlich wird eine Warnung angezeigt, wenn die Firmen-ID
nicht im entsprechenden öffentlichen Register gefunden wird.

Unterstützt für 🇨🇭,🇨🇿, 🇸🇰, 🇭🇷.

### Prüfung der Existenz und des Typs eines Grundstücks

Wenn ein Grundstück im Dokument aufgeführt ist, prüft das Plugin, ob das Grundstück im
(tschechischen) Kataster eingetragen ist und ob der richtige Grundstückstyp angegeben
ist.

Unterstützt für 🇨🇿.

### Querverweiskontrolle

Das Plugin überprüft interne Verlinkungen auf einen bestimmten Teil des Dokuments
darauf, ob der Link mit der "Querverweis"-Funktion von Word erstellt wurde. Ohne
diese Funktion kann es bei einer Bearbeitung oder Neunummerierung des Dokuments zu
einem Missverhältnis zwischen dem Verweis und der Zielstelle kommen.

### Gesetzesverweiskontrolle

Das Plugin überprüft, ob die im Dokument genannten Gesetze in der angegebenen
Jurisdiktion gültig sind. Wenn das Gesetz nicht gültig ist, wird eine Warnung angezeigt.

Unterstützt für 🇨🇿.
