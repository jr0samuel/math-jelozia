import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GelosiaUm } from './components/app-gelosia-um.jsx';
import { GelosiaDois } from './components/app-gelosia-dois.jsx';

export default function App() {

  return (

    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GelosiaUm />} />
          <Route path="/versao-dois" element={<GelosiaDois />} />
        </Routes>
      </BrowserRouter>

    </>

  );

};
