import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu } from "./components/Menu";
import { Contatos } from './pages/Contatos';
import { Home } from './pages/Home';
// import { Sobre } from "./pages/Sobre";
import { Servico } from './pages/Servico';


//mass de um elemento eu uso fragmentação ou uma div
function App() {
    return (
        <>
            <BrowserRouter>
                <Menu />

                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='/sobre' element={<Sobre />} /> */}
                    <Route path='/contatos' element={<Contatos />} />
                    <Route path='/servicos' element={<Servico />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;

//funçao tem que começar com a letra maiuscula