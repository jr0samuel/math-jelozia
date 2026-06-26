import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GelosiaUm } from './components/app-gelosia-um.jsx';
import { GelosiaDois } from './components/app-gelosia-dois.jsx';
import GelosiaExplicada from './components/GelosiaExplicada.jsx';

export default function App() {

  return (

    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GelosiaUm />} />
          <Route path="/versao-dois" element={<GelosiaDois />} />
          <Route path="/gelosia-explicada" element={<GelosiaExplicada />} />
        </Routes>
      </BrowserRouter>

    </>

  );

};
