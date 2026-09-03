import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Gelosia } from './components/app-gelosia.jsx';
import GelosiaExplicada from './components/GelosiaExplicada.jsx';

export default function App() {

  return (

    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gelosia variant="um" />} />
          <Route path="/outra-versao" element={<Gelosia variant="dois" />} />
          <Route path="/gelosia-explicada" element={<GelosiaExplicada />} />
        </Routes>
      </BrowserRouter>

    </>

  );

};
