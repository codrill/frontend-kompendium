---
question: Czym jest inferencja typów (Type Inference) ?
category: TypeScript
---

Inferencja jest to mechanizm TypeScript'u, który na podstawie przypisanej wartości sam, niejawnie,
przypisuje odpowiedni typ danej zmiennej. 

```typescript
const x = 3
console.log(typeof x) // 'number'

const y = 'hello world'
console.log(typeof y) // 'string'
```

W niektórych sytuacjach pozostawienie TypeScriptowi możliwości określenia danego typu w sposób niejawny
jest w porządku jednak nie powinniśmy zawsze polegać na inferencji. W większości przypadków znacznie
bezpieczniejsze jest jednak jawne określanie typu który przechowywać będzie nam dana zmienna. 