---
question: Czym są dumb i smart komponenty?
---

`Smart komponenty` wykonują logiczne operacje, strzelają po dane, modyfikują je i przesyłają przygotowane wartości do dumb komponentów. Nie odpowiadają za wyświetlanie informacji i nie zawierają styli CSS.
Często smart komponenty nazywamy `kontenerami`. To podejście jest najczęściej stosowane w JSowych frameworkach jak `React` czy `Angular`.

---

`Dumb komponenty` natomiast są to komponenty, których rolą jest wyłącznie wyświetlenie otrzymanych danych. Zawierają HTML i CSS. 
Nie używają zewnętrznych zależności (bibliotek), z wyjątkiem tych odpowiedzialnych za prezentacje informacji.

---

Przykład `Smart` i `Dumb` komponentu.

`Smart Component`
```javascript
function SmartComponent() {
  // strzał do API
  const data = fetch('https://api.jakas.strona').then(response => response.json())

  // przekazanie danych do DumbComponent
  <DumbComponent data={data} />
}
```

`Dumb Component`
```javascript
export function DumbComponent(props) {
    return(
        <div className="dumb-component-value">
          {props.value}
        </div>
    )
}
```