---
sidebar_position: 6
---

# Upozornění

Plugin zobrazuje řadu specifických upozornění pro právní psaní. Mezi tato upozornění
patří níže uvedené typy výstrah.

### Výstrahy týkající se definic

V případě duplicitních definic (tj. jeden pojem definovaný více než jednou), definic,
které jsou napsány nestandardním způsobem, nebo definic, které nejsou následně v
dokumentu použity, se pak na kartě definic zobrazí příslušné upozornění.
V záložce 'Zmínky' také ověřujeme, zda jsou všechny zmínky o definovaném termínu
důsledně psány velkými písmeny (jako definice samotná) a zda je definovaný termín
používán před všemi ostatními výskyty.

### Kontrola určení čísla

Toto upozornění ověřuje, zda číslo určené číslovkami a textem je vzájemně v souladu
(př. "1.000 (slovy: dva tisíce korun)".

### Upozornění na dny volna

Upozornění na svátky kontroluje data uvedená v dokumentu oproti databázi státních
svátků a víkendů. Upozornění se zobrazí, pokud se (budoucí) datum v textu shoduje se
dnem volna ve kterékoliv ze zemí, která je uvedena v dokumentu.

### Upozornění na doplnění šablony

Výstraha se spustí, pokud dokument obsahuje ustanovení, které je třeba vyplnit,
např. větu "Strany se dohodly, že [vložte datum] je datem, ...".

### Nevyvážená závorka

Toto upozornění detekuje případné (nesouhlasné závorky)), tedy případy, kdy se
v odstavci neshoduje počet levých a pravých závorek.

### Kontrola standardních čísel

Kontrola standardních čísel ověřuje formát a strukturu čísel uvedených v dokumentu.
Kontrolujeme validitu rodných čísel, čísel bankovních účtů (vč. formátu IBAN) a dalších.

### Kontrola názvu a IČ společnosti

Pro každou společnost uvedenou v dokumentu plugin kontroluje, zda je v okolí IČ přesně
uveden i příslušný název společnosti.

Podporováno pro 🇨🇭,🇨🇿, 🇸🇰, 🇭🇷.

### Kontrola existence a typu parcely

Pokud je v dokumentu uvedena parcela, plugin ověří, zda je parcela v katastru nemovitostí
a zda je uveden správný typ parcely.

Podporováno pro 🇨🇿.

### Kontrola křížových odkazů

Vůči interním odkazům na určité části dokumentu plugin kontroluje, zda je tento odkaz
psán s využitím funkce Wordu "Cross-reference". Bez využití této funkce může dojít, při
změně číslování dokumentu, k nesouladu mezi odkazem a cílovým místem.

### Kontrola účinného znění zákonných ustanovení

SingleDraft kontroluje, zda zmínka o zákonném ustanovení odpovídá účinnému znění zákona. Pokud již zákon není účinný, zobrazí se příslušné upozornění.

Podporováno pro 🇨🇿
