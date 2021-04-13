---
question: let, const, var
---

Deklarując zmienne typu `let` można zmienić jej raz przypisaną wartość. Występuję w zakresie blokowym.

```javascript
let example = 'Hello'
console.log(example) // Hello
example = 1
console.log(example) // 1
```

Gdy raz zainicjalizujemy zmienną typu `const` to nie możemy jej już później zmienić ani nadpisać, chyba że jest to obiekt, albo tablica. 
Tworząc naszego `consta` jako `string` to w innym miejscu aplikacji nie możemy zrobić z niej `numbera` ani nawet nadpisać jej innym stringiem.
`Consty` występują w zakresie blokowym.

```javascript
const example = 'Hello'
console.log(example) // Hello
example = 1 // Uncaught TypeError: Assignment to constant variable.
```

Zmiennych typu `var` już nie używamy, ponieważ są przestarzałe i ciężko się takimi zmiennymi zarządza. `Var` posiada funkcyjny zakres, czyli jest dostępna w ramach funkcji.
Wyjątkiem jest sytuacją w której została zadeklarowana po za funkcją wtedy jej zakres staję się zakresem globalnym. Innymi słowy z każdego miejsca mamy dostęp do tej zmiennej.
