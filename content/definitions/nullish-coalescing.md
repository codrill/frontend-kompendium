---
question: Nullish coalescing
category: JavaScript
---

**Nullish coalescing operator** (`??`) to specjalny typ operatora wprowadzony w JavaScript w **ECMAScript 2020**, który umożliwia łatwe określenie domyślnej wartości dla zmiennej, jeśli wartość tej zmiennej jest `null` lub `undefined`.
&nbsp;  
&nbsp;

Operator ten działa w następujący sposób: 

jeśli wartość po lewej stronie operatora nie jest `null` ani `undefined`, operator zwraca tę wartość. 
W przeciwnym razie, jeśli wartość po lewej stronie operatora jest `null` lub `undefined`, operator zwraca wartość po prawej stronie operatora.
&nbsp;  
&nbsp;

Przykładowo, jeśli chcemy przypisać wartość zmiennej `x`, ale chcemy ustawić domyślną wartość, jeśli wartość `x` jest `null` lub `undefined`, możemy użyć operatora `??`:

```javascript
let x = null;
let y = x ?? "domyslna wartość";

console.log(y); // wyświetli "domyslna wartość"
```

W powyższym przykładzie wartością zmiennej `y` będzie "domyslna wartość", ponieważ wartość zmiennej `x` jest `null`. 
Gdybyśmy zmienili wartość zmiennej `x` na wartość inna niż `null` lub `undefined`, wartość zmiennej `y` byłaby równa wartości zmiennej `x`.

---

**Nullish coalescing assignment** (`??=`) to operator wprowadzony w **ECMAScript 2021**, który umożliwia przypisanie wartości do zmiennej, ale tylko wtedy, gdy wartość zmiennej jest `null` lub `undefined`.
&nbsp;  
&nbsp;

Operator ten działa w następujący sposób: 

jeśli wartość zmiennej po lewej stronie operatora nie jest `null` ani `undefined`, operator nie wykonuje przypisania. 
W przeciwnym razie, jeśli wartość zmiennej po lewej stronie operatora jest `null` lub `undefined`, operator przypisuje wartość po prawej stronie operatora.
&nbsp;  
&nbsp;

Przykładowo, jeśli chcemy przypisać wartość zmiennej x, ale chcemy ustawić domyślną wartość, jeśli wartość x jest `null` lub `undefined`, możemy użyć operatora `??=`:

```javascript
let x = null;
x ??= "domyslna wartość";

console.log(x); // wyświetli "domyslna wartość"
```