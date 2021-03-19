---
question: Funkcje pure i impure
---

Odróżnienie „czystych” i „nieczystych” funkcji czasami może być bardzo ciężkie. W prostych żołnierskich słowach, czysta funkcja to funkcja, która
przyjmując za każdym razem te same argumenty wypluwa ZAWSZE ten sam wynik. Dodatkowo, czysta funkcja nie produkuje żadnych efektów ubocznych (side effects).

Przykład czystej funkcji
```javascript
export function pureFunction(a: number, b: number) {
  return a + b
}
```

Funkcja `pureFunction` zwraca nic innego jak sumę dwóch liczb podanych jako argumenty tej funkcji. Nic nie zmieniamy w innych scopach, nic nie usuwamy, nic nie kombinujemy, po
prostu dodajemy dwie cyfry do siebie. Jest to idealny przykład czystej funkcji. Dużą zaletą czystych funkcji jest to, że łatwo się je testuje oraz przyjemniej
czyta.

Prostym przykładem brudnej funkcji, z która nie raz się spotkacie, jest na przykład `Math.random()`. Za każdym razem gdy wywołamy funkcje zwraca ona randomowo liczbę
w zakresie od 0 do 1. Nie mamy wpływu jaka liczba zostanie zwrócona i nie możemy w łatwy sposób wpłynąć na ten wyniki.

```javascript
Math.random() => 0.7660832116056935
Math.random() => 0.9947782934931475
Math.random() => 0.6818396543291918
```

Aby bardziej zwizualizować sobie jak wygląda brudna funkcja, spójrzcie na przykład poniżej:
```javascript
class ImpureClass {
  let value = 0 // zmienna globalna

  export function putAnyNumber(a: number) {
    this.value++
    return a + this.iterator
  }
}
```

Wyobraźmy sobie prostą klasę `ImpureClass` która ma globalną zmienną `value` z zainicjalizowaną
wartością równą 0 oraz (jak się zaraz okaże, brudną) funkcje putAnyNumber. Zobaczcie co się dzieje w momencie gdy zaczniemy wywoływać funkcje `putAnyNumber`
wrzucając jej jako argument liczbę 1. 
```javascript
putAnyNumber(1) //pierwsze wywołanie zwraca 2
putAnyNumber(1) //drugie wywołanie zwraca 3
putAnyNumber(1) //trzecie wywołanie zwraca 4
```

Jest to prosty przykład brudnej funkcji, która ma efekt uboczny. Efektem ubocznym tej funkcji jest inkrementowanie zmiennej globalnej `value`. Mimo, że
za każdym razem podajemy, jako argument liczbę 1 to wynik zwracany NIE JEST zawsze taki sam, ponieważ wartość (defakto po za naszym blokiem funkcji - `function scope`) 
do której dodajemy naszą liczbę 1, rośnie za każdym razem gdy funkcja jest wywoływana.