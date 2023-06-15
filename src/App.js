import React from 'react';
import Cal from './Calculator';

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
        else {
          throw new Error("Erreur de api backend");
        }
      })
    .then((data) => setData(data.message))
    .catch((error) => console.error("Erreur lors de la reuperation des données", error));
  }, []);

<p>{!data ? "En chargement.." : data}</p>

  return (
<Cal/>
  );
};

export default App;
