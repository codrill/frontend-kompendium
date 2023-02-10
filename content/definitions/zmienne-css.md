---
question: Zmienne CSS
category: CSS
---

Zmienne CSS to specyficzny typ zmiennych, które pozwalają na przechowywanie i udostępnianie wartości CSS na poziomie kodu. Zmienne CSS umożliwiają zdefiniowanie jednej wartości w jednym miejscu i użycie jej w innych miejscach w kodzie. Dzięki temu można znacznie ułatwić zarządzanie i modyfikowanie stylów w aplikacji.

Zmienne CSS definiuje się za pomocą słowa kluczowego "var" i nazywa się je zgodnie z własnym wyborem. Na przykład:

```css
:root {
  --main-color: blue;
}

body {
  background-color: var(--main-color);
}
```
W powyższym przykładzie zmienna CSS "--main-color" została zdefiniowana w selektorze ":root" i jest używana w selektorze "body" jako wartość tła. W razie potrzeby można łatwo zmienić wartość zmiennej i automatycznie zmieni się ona wszędzie, gdzie jest używana.

Zmienne CSS są dostępne we wszystkich nowoczesnych przeglądarkach, ale nie są jeszcze w pełni wspierane we wszystkich przeglądarkach. Dlatego ważne jest, aby upewnić się, że kod jest kompatybilny z wybranymi przeglądarkami, zanim zacznie się go używać.