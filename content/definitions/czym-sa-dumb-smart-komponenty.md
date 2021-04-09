---
question: Czym są dumb i smart komponenty?
---

`Smart komponenty` wykonują logiczne operacje, strzelają po dane, wykonują obliczenia, modyfikują dane, które później mogą
przekazać do innych komponentów. Często `smart komponenty` nazywamy kontenerami, których zadaniem jest właśnie przejęcie całego mechanizmu strzelania po API, czy
operacji na danych.


`Dumb komponenty` natomiast są to komponenty, których rolą jest tylko i wyłącznie wyświetlenie/zaprezentowanie danych.

Przykład `Smart` i `Dumb` komponentu.

`Smart Component`
```javascript
export function SmartComponent() {
    <strzał do Api> 
    <przejęcie danych>

    <przekazanie danych do komponentu DumbCompontent>
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