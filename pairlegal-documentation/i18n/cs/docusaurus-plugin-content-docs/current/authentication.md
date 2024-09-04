---
sidebar_position: 3
---

# Ověření identity

Aby bylo možné plugin bezpečně používat, musí uživatel ověřit svojí identitu
v rámci pluginu. Existují dvě metody ověřování:

## Email-Heslo

Tento proces vyžaduje, aby se uživatel zaregistroval pomocí e-mailu a hesla.

### Kroky

1. Klikněte na tlačítko `Registrovat` na přihlašovací stránce pluginu.
2. Vyplňte pole pro e-mail a heslo.
3. Na e-mail uživatele bude odeslán ověřovací e-mail (pokud je to nutné, zkontrolujte složku se spamem).
4. V zaslaném e-mailu klikněte na ověřovací tlačítko.
5. Po ověření se uživatel může přihlásit.
6. Přihlaste se pomocí stejného e-mailu a hesla.

## Azure AD

Pro uživatele, kteří preferují použití Azure AD pro ověření identity.

### Kroky

1. Klikněte na tlačítko `Přihlásit` na přihlašovací stránce pluginu.
2. Klikněte na tlačítko `Microsoft Azure AD`.
3. Přihlaste se pomocí účtu Azure AD.
4. Objeví se výzva k schválení aplikace `Single Draft`.
5. Schvalte ji nebo požádejte vašeho IT administrátora o schválení - záleží na nastavení Azure AD uživatele.
6. Po schválení je přihlašovací proces dokončen.
7. Při příštím přihlášení již nebude potřeba žádné další schválení.
