---
question: Funkcje pure i impure
---

Czysta funkcja to taka, która przyjmując te same argumenty wypluwa ZAWSZE ten sam wynik i nie produkuje żadnych efektów ubocznych (side effects).

Idealny przykład czystej funkcji:
```javascript
function pureFunctionAdd(firstNumber, secondNumber) {
  return firstNumber + secondNumber
}
```

Funkcja `pureFunctionAdd` zwraca nic innego jak sumę dwóch liczb podanych jako argumenty. Na zewnątrz funkcji nic nie zmieniamy, nie usuwamy, nie kombinujemy, po
prostu dodajemy dwie otrzymane liczby do siebie. Dużą zaletą takich funkcji jest czytelność i łatwość testowania.

---

Przykładem brudnej funkcji, z która pewnie nie raz się spotkacie, jest `Math.random()`. Za każdym razem gdy wywołamy funkcje zwraca ona losowo liczbę
w zakresie od 0 do 1. Nie mamy wpływu jaka liczba zostanie zwrócona.

```javascript
Math.random() // 0.7660832116056935
Math.random() // 0.9947782934931475
Math.random() // 0.6818396543291918
```

Aby bardziej uplastycznić sobie brudną funkcje, spójrzcie na przykład poniżej:

```javascript
let value = 0

function putAnyNumber(number) {
  value = value + 1
  return number + value
}
```

Mamy globalną zmienną `value` z przypisaną wartością `0` oraz funkcje `putAnyNumber`. 
Zobaczcie co się stanie, gdy wywołamy tą funkcje kilkukrotnie, z takim samym argumentem `1`. 

```javascript
putAnyNumber(1) //pierwsze wywołanie zwraca 2
putAnyNumber(1) //drugie wywołanie zwraca 3
putAnyNumber(1) //trzecie wywołanie zwraca 4
```

`putAnyNumber` jest przykładem brudnej funkcji, ponieważ ma efekt uboczny. Efektem ubocznym jest inkrementowanie (zwiększanie) zmiennej `value`. 
Mimo, że za każdym razem podajemy, jako argument, tą samą liczbę, to zwracany wynik NIE JEST taki sam - ze względu na zmieniającą się wartość `value`.