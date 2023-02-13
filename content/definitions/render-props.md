---
question: Render Props w React.js
category: React
---

Render Props to technika w **React.js**, która pozwala na udostępnianie funkcjonalności komponentu w formie właściwości (props). 
W miejsce renderowania interfejsu użytkownika za pomocą zwykłego kodu JSX, komponent Render Props przekazuje funkcję do wywołania, która odpowiada za renderowanie tego interfejsu.

Można to zrobić, używając właściwości `render`, która jest funkcją przekazywaną do komponentu Render Props. 
Funkcja ta jest wywoływana w momencie renderowania komponentu i może zwrócić kod JSX, który opisuje interfejs użytkownika.

Oto przykład komponentu Render Props:

```javascript
const DataFetcher = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(data => setData(data));
  }, []);

  return children(data);
};

const App = () => (
  <DataFetcher>
    {data => {
      if (data === null) {
        return <p>Loading...</p>;
      }

      return <pre>{JSON.stringify(data, null, 2)}</pre>;
    }}
  </DataFetcher>
);
```

W powyższym przykładzie komponent `DataFetcher` jest funkcją, która korzysta z hooka `useState` do zarządzania danymi, które są ładowane w momencie montowania komponentu. 
Funkcja `useEffect` jest używana, aby ładować dane asynchronicznie. 
W miejsce właściwości `render`, w komponencie `DataFetcher` wykorzystywany jest właściwość `children`, która jest funkcją przekazywaną jako dziecko komponentu i odpowiada za renderowanie interfejsu użytkownika.

Komponent `App` używa komponentu `DataFetcher` w postaci funkcji jako dziecka i w ten sposób przekazuje funkcję, która odpowiada za renderowanie interfejsu użytkownika.
&nbsp;  
&nbsp;


**Render Props** są bardzo przydatne, gdy chce się udostępnić funkcjonalność między komponentami bez konieczności tworzenia nowych komponentów i zachowania modularności aplikacji.