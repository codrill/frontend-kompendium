---
question: let, const, var
category: JavaScript
---

`let`, `const` i `var` są rodzajami zmiennych w JavaScript. Przypisujemy do nich różne wartości, w celu ich późniejszego wykorzystywania.
Zmiennej `let` używamy, gdy wiemy, że zapisane w niej początkowo dane ulegną zmianie.

```javascript
let example = 'Hello'
console.log(example) // Hello
example = 1
console.log(example) // 1
```

Zmiennej `const` używamy, gdy wartość przypisana nie ulegnie zmianie. Dlatego ten typ jest czasem nazywany 'stałą'.
Wyjątek stanowią:
- tablice — zawartość da się modyfikować wbudowanymi metodami tablicy (np. push, pop, shift).
- obiekty — elementy wewnątrz obiektu są otwarte na modyfikacje.

```javascript
const example = 'Hello'
console.log(example) // Hello
example = 1 // Uncaught TypeError: Assignment to constant variable.
```

`let` i `const` działają w zakresie blokowym. Oznacza to, że ich dostępność ograniczona jest przez klamry `{ const zmienna = 1 }`, poza którymi są niewidoczna.

`var` działa podobnie jak `let` z tą różnicą, że jej zasięg jest ograniczony przez funkcje, a nie przez blok. Co więcej, `var`
zadeklarowana poza funkcją, zyskuje zakres globalny. Innymi słowy, mamy do niej dostęp z każdego miejsca w aplikacji.
Z powodów złożoności zakresu, jak i bezpieczeństwa, zmienne `var` nie są rekomendowane i w ich miejsce powinny być używane odpowiednio `const` lub `let`