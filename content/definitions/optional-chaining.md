---
question: Czym jest optional chaining (?.) ?
category: JavaScript
---

Operator `?.`, nazywany `optional chainingiem`, pozwala nam odczytać zagnieżdżone elementy w obiekcie
zabezpieczając się przy tym przed ewentualnym wystąpieniem po drodze wartości zerowych (`nullish`) takich jak 
`undefined` czy `null`. Zaletą wykorzystania tego operatora jest to, że nie wywołuje on błędu gdy wartość
do której próbujemy się odwołać jest wartością zerową (`nullish`) ale zwraca `undefined`

Stwórzmy prosty i nieskomplikowany obiekt `car` posiadający takie wartości jak `brand`, `color` oraz `engine`. 
Zauważ, że `engine` jest to zagnieżdżony obiekt, który posiada takie wartości jak `cc` oraz `type`.
```javascript
const car = {
  brand: 'Audi',
  color: 'White',
  engine: {
    cc: 2000,
    type: 'diesel'
  }
}
```

Spróbujmy teraz przypisać do zmiennej `horsePower` nieistniejącą wartość `hp` z zagnieżdżonego obiektu `engine`

```javscript
const horsePower = car.engine?.hp

console.log(horsePower) // undefined
```

Zgodnie z tym co napisaliśmy wyżej, próba dostania się do nieistniejącej wartości w obiekcie, dzięki 
wykorzystaniu operatora `?.`, zakończyła się przypisaniem do zmiennej `horsePower` wartości `undefined` gdyż obiekt 
`car` nie posiada wartości `hp`. 


Spróbujmy wywołać w takim razie nieistniejącą funkcję w obiekcie `car`.
```javascript
console.log(car.fireUpEngine?.()) // undefined
```

Rezultat jest przewidywalny. Odwołanie się do nieistniejącej funkcji w obiekcie `car` skutkuję zwróceniem wartości
`undefined`. Powyższy zapis na pierwszy rzut oka może wydawać się trudny, jednak nie ma tam nic skomplikowanego. 
Czytamy go w następujący sposób: jeżeli w obiekcie `car` istnieje funkcja `fireUpEngine` -> `car.fireUpEngine?.` 
to ją wywołaj `()`.




