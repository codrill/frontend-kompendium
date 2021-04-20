---
question: Różnica pomiędzy splice() i slice()
category: JavaScript
---

`Splice` wycina kawałek tablicy, modyfikując ją. Następnie zwraca wycięty kawałek, który możemy np przypisać do nowej zmiennej.

```javascript
const array = [1, 2, 3, 4]
console.log(array.splice(2)) // [3, 4]
console.log(array) // [1, 2]
```

- Pierwszy log zwróci wynik `[3,4]`, ponieważ wywołując `slice(2)` ucięliśmy tablice zaczynając od drugiego indeksu tabeli (*przypomnijmy, że indeks tablicy liczymy od 0*).
- Drugie wywołanie zwróci nam `[1,2]` - czyli elementy, które pozostały w oryginalnej tablicy.
---

`Slice` kopiuje kawałek tablicy, NIE wpływając na jej początkową zawartość.

```javascript
const array = [1, 2, 3, 4]
console.log(array.slice(2)) // [3, 4]
console.log(array) // [1, 2, 3, 4]
```

- Pierwszy log zwróci skopiowane elementy z tablicy `[3, 4]`,
- Drugie wywołanie wyświetli niezmienioną tablice wejściową czyli `[1, 2, 3, 4]`.

**Podsumowując:**

Obie metody wywołujemy na tablicach i obie zwracają wycięte lub skopiowane elementy w formie nowej tablicy. 

Różnica polega na tym, że `splice` wycina elementy z oryginalnej kolekcji, a `slice` je kopiuje. 