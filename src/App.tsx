import React from 'react';
import './App.css';
import init, { square_area } from 'wasm-lib';

function App() {
  const [area, setArea] = React.useState(0);

  React.useEffect(() => {
    init().then(() => {
      setArea(square_area(10, 5));
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          พื้นที่ของสี่เหลี่ยมจัตุรัส กว้าง 10 ยาว 5 = {area}
        </h1>
      </header>
    </div>
  );
}

export default App;
