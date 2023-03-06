---
question: Operatory Logiczne
category: JavaScript
---

W JavaScript istnieją trzy podstawowe operatory logiczne: AND (`&&`), OR (`||`) i NOT (`!`).

Operator AND (`&&`) zwraca true tylko wtedy, gdy oba wyrażenia są prawdziwe. 
Na przykład, w poniższym kodzie zwróci się true, tylko gdy x jest większe od 5 i mniejsze od 10:

```javascript
if (x > 5 && x < 10) {
// wykonaj kod, jeśli x jest większe od 5 i mniejsze od 10
}
```

Operator OR (`||`) zwraca true, gdy przynajmniej jedno z wyrażeń jest prawdziwe. 
Na przykład, w poniższym kodzie zwróci się true, jeśli x jest równy 5 lub 10:

```javascript
if (x == 5 || x == 10) {
// wykonaj kod, jeśli x jest równy 5 lub 10
}
```
Operator NOT (`!`) zmienia wartość logiczną na przeciwną. 
Na przykład, w poniższym kodzie zwróci się true, jeśli x nie jest równy 5:

```javascript
if (x != 5) {
// wykonaj kod, jeśli x nie jest równy 5
}
```

Można łączyć te operatory, aby tworzyć bardziej skomplikowane wyrażenia logiczne:

```javascript
if ((x > 5 && x < 10) || (x > 20 && x < 25)) {
  // wykonaj kod, jeśli x jest większe od 5 i mniejsze od 10 lub większe od 20 i mniejsze od 25
}
```