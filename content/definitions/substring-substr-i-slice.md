---
question: Substring, substr i slice
category: JavaScript
---

Wszystkie trzy metody, są wywoływane na danych tekstowych (*string*). 
Nie modyfikują oryginalnej wartości, zamiast tego zwracają nowy string.

- `Substring` Przyjmuje dwa parametry numeryczne (indeksy znaków) i zwraca to, co znajduje się w podanym zakresie.
Pierwszy parametr jest wymagany, drugi opcjonalny (domyślnie jest to wartości).


```javascript
const text = 'Frontend'
console.log(text.substring(0)) // 'Frontend' - zwracamy całą wartość
console.log(text.substring(-3)) // 'frontend' - pierwszy parametr ujemny działa jak 0
console.log(text.substring(1, 5)) // 'ront' - zakres zaczynamy od drugiego i kończymy na piątym indeksie
console.log(text.substring(-3, -1)) // '' - ujemne indeksy działają jak 0
console.log(text.substring(8, 5)) // 'end' - parametry można podawać w odwrotnej kolejności, najważniejszy jest zakres.
```

---

- `Substr` Przyjmuje dwa parametry. Pierwszym parametrem jest indeks, od którego rozpoczyna
się nowa wartość. Drugi parametr to ilość znaków, które mają być wyciągnięte (domyślnie do końca początkowej wartości).

```javascript
const text = 'Frontend'
console.log(text.substr(0)) // 'Frontend' - zwracamy całą wartość
console.log(text.substr(-3)) // 'end' - pierwszy parametr może być ujemny
console.log(text.substr(1, 5)) // 'ronte' - 5 znaków zaczynając od drugiego indeksu.
console.log(text.substr(-3, -1)) // '' - długość nie może być ujemna
console.log(text.substr(8, 5)) // '' - nie można podawać zakresu w odwrotnej kolejności
```

- `Slice` Przyjmuje dwa parametry. Tak samo jak `substring` - początkowy oraz końcowy indeks.

```javascript
const text = 'Frontend'
console.log(text.slice(0)) // 'Frontend' - zwracamy całą wartość
console.log(text.slice(-3)) // 'end' - pierwszy parametr może być ujemny
console.log(text.slice(1, 5)) // 'ront' - zakres zaczynamy od drugiego i kończymy na piątym indeksie
console.log(text.slice(-3, -1)) // 'en' - można bazować na ujemnych indeksach
console.log(text.slice(8, 5)) // '' - nie można podawać zakresu w odwrotnej kolejności
```