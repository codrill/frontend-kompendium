---
question: Czym jest koercja?
---
Jest to niejawna konwersja jednego prymitywnego typu na drugi, na przykład ze `string` na `number`.


```javascript
const a = '1'
const b = 5
console.log(a + b)
```


Silnik Javascriptu wykonuje koercje na liczbie `5`, przekształcając ją w tekst i następnie łączy dwa teksty w jeden dając w rezultacie wynik `15`.
Dlaczego akurat wykonuje to na liczbie `5`, a nie na tekstowej jedynce? Kompiler miał do wyboru dwie możliwe koercje i wybrał akurat konwersje liczby na string.