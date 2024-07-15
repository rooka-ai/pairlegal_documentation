---
sidebar_position: 6
---

# Alerts

## Overview

The plugin displays a number of specific alerts for legal writing. These alerts include
include the types of alerts listed below.

### Definition-related alerts

In case of conflicting definitions (i.e., a single concept defined more than once),
definitions that are drafted in a non-standard manner, or definitions that are not used
in the document, the corresponding alert is then displayed in the definition card.

### Double number check

This alert verifies numerical consistency throughout the document. It activates when
there are discrepancies between figures in numerical and written form, or if the same
number is repeated in a manner that suggests a potential error.

### Holiday alert

The Holiday Alert checks the dates mentioned in the document against a database of
public holidays and weekends . It notifies the user if a date coincides with a (future)
holiday, which could affect deadlines or the execution of the contract.

### Template alert

The alert is triggered when the document contains a clause to be filled in, e.g., "The
parties agree that the [insert date] is the date of the agreement."

### Unbalanced bracket

Unbalanced brackets can lead to confusion in interpreting the document's provisions.
This alert detects any (mismatched parentheses)), braces, or square brackets to prevent
potential misreadings of the contract's terms.

### Standard numbers

The standard number check verifies the format and structure of the numbers in the document.
We check the validity of birth numbers, bank account numbers (including IBAN format) and others.

### Correctness of company names

For each company listed in the document, the plugin checks whether the company name is
mentioned close to the ID number.

### Checking the existence and type of the parcel

If a parcel is listed in the document, the plugin checks if the parcel is in the
(Czech) land register and whether the correct parcel type is specified.

### Cross-reference checking

With respect to internal links to a certain part of the document, the plugin checks whether this link is created using Word's "Cross-reference" feature. Without using this feature, it may occur when if the document is edited and renumbered, a mismatch between the reference and the target location takes place.
