---
question: Różnica pomiędzy splice() i slice()
---

Są to funkcje wywoływane na tablicach. Na pierwszy rzut oka wyglądają i robią to samo. `Splice` swoim działaniem wpływa na oryginalną tablice, na której ją wywołujemy, zmieniając ją zgodnie z tym co przekazaliśmy jako parametr.

```javascript
const array = [1, 2, 3, 4]
console.log(array.splice(2)) // [3, 4]
console.log(array) // [1, 2]
```

W tym przypadku pierwszego wywołania loga w konsoli otrzymamy wynik `[3, 4]`. Dlaczego? Ponieważ wprowadzonym parametrem `2` powiedzieliśmy funkcji, że chcemy uciąć tablice
zaczynając od drugiego indeksu tabeli. Przypominam, że indeks tablicy iterujemy od 0!!! Natomiast drugie wywołanie zwróci nam wynik `[1, 2]`. To jest ta reszta,
która została. Podsumowując, funkcja `splice` robi dwie rzeczy. Pierwsza to zwraca ucięty kawałek tablicy, który możemy na przykład podpiąć pod nową zmienną,
a druga, modyfikuje oryginalnie przekazaną tablice.
  
`Slice` różni się tym, że swoim działaniem NIE wpływa na oryginalną tablice.

```javascript
const array = [1, 2, 3, 4]
console.log(array.slice(2)) // [3, 4]
console.log(array) // [1, 2, 3, 4]
```

Pierwszy `console.log` zwróci wynik `[3, 4]`, natomiast na drugim wywołaniu loga na oryginalnej tablicy dostaniemy niezmienioną tablice wejściową czyli
`[1, 2, 3, 4]`.