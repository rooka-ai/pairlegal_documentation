---
sidebar_position: 3
---

# Authentifizierung

Um das Plugin sicher zu nutzen, müssen sich Benutzer im Plugin authentifizieren.
Es gibt zwei Methoden zur Authentifizierung:

## E-Mail-Passwort

Dieser Authentifizierungsablauf erfordert, dass der Benutzer sich mit einer E-Mail und
einem Passwort registriert.

### Schritte

1. Klicken Sie auf die Schaltfläche `Registrieren` auf der Anmeldeseite des Plugins.
2. Füllen Sie die Felder für E-Mail und Passwort aus.
3. Eine Bestätigungs-E-Mail wird an die E-Mail des Benutzers gesendet (prüfen Sie ggf.
   den Spam-Ordner).
4. Klicken Sie in der Bestätigungs-E-Mail auf den Bestätigungs-Button.
5. Nach der Bestätigung kann der Benutzer sich einloggen.
6. Verwenden Sie dieselbe E-Mail und dasselbe Passwort, um sich anzumelden.

## Azure AD

Für Benutzer, die lieber die Enterprise Azure AD Authentifizierung nutzen möchten.

### Schritte

1. Klicken Sie auf die Schaltfläche `Login` auf der Anmeldeseite des Plugins.
2. Klicken Sie auf die Schaltfläche `Microsoft Azure AD`.
3. Melden Sie sich mit dem Azure AD Konto an.
4. Es erscheint eine Aufforderung zur Genehmigung der Anwendung `Single Draft`.
5. Genehmigen Sie diese, oder bitten Sie Ihren IT-Administrator um Genehmigung,
   je nach Azure AD Einstellungen.
6. Nach der Genehmigung ist der Anmeldevorgang abgeschlossen.
7. Für zukünftige Anmeldungen ist keine weitere Genehmigung erforderlich.
