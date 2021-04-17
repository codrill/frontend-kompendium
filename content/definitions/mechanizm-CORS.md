---
question: Mechanizm CORS
---

`Cross-origin resource sharing` - jest to mechanizm, który **pozwala** na komunikację HTTP naszej strony z zewnętrznymi źródłami.

Domyślnie w przeglądarkach, obowiązuje zasada jednego pochodzenia (tzw. SOP). Jeżeli mamy stronę pod adresem `https://xyz.pl`, to możemy pobierać 
dane wyłącznie w zakresie tej domeny. Co więcej, ograniczenia dotyczą nie tylko domeny, ale także portu czy protokołu 
(`http://xyz.pl:3000` — będzie poza zasięgiem).


Jest to związane z bezpieczeństwem. To tak, jak do swojego domu wpuszczamy tylko zaufane osoby, a listę tych osób 
mamy spisaną w specjalnym notesie.

Notesem jest `CORS`, domem — nasz serwer www, a gościem jest strona w przeglądarce, która próbuje wejść do środka po różne dane.  

Przykładowa konfiguracja `CORS` po stronie serwera wygląda w ten sposób:

```http request
Access-Control-Allow-Origin: https://cc.xyz.pl
Access-Control-Allow-Credentials: true
Access-Control-Allow-Methods: POST
Access-Control-Allow-Headers: Content-Type 
```

Nasza strona przy próbie pobrania danych przekazuje informacje o sobie w nagłówkach (headers). Serwer sprawdza, czy otrzymane dane pokrywają się
ze zdefiniowaną polityką `CORS` i jeżeli wszystko będzie się zgadzać, to zwróci odpowiednie dane. W przeciwnym razie otrzymamy błąd.
