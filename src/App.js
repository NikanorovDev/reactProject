import './App.scss';
import React from 'react';
import Routers from './pages/Routers';
import { AuthProvider } from './hooks/AuthProvider';
// import { formatTimeStrings } from './utils/formatTimeString';


function App() {
  return (
    <>
      {/* <p>
        Время работы нашего магазина: {formatTimeStrings(['c 25.03.2022'])}
      </p> */}
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </>
  );
}
export default App;