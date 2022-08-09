import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as cardService from './services/cardService.js';

import { Header } from './components/common/header/Header';
import { Footer } from './components/common/footer/Footer';
import { Catalog } from './components/catalog/Catalog';
import { Home } from './components/home/Home';
import { Login } from './components/login/Login.js';
import { Register } from './components/register/register.js';
import { CreateCard } from './components/createCard/CreateCard.js';

import './App.css';
import { Details } from './components/details/Details.js';

function App() {
    const [cards, setCard] = useState([]);

    useEffect(() => {
        cardService.getAll()
            .then(result => {
                setCard(result)
            });
    }, []);

    console.log('Cards:', cards);


    
    return (
        <>
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog cards={cards} />} />
                    <Route path="/catalog/:cardId" element={<Details />} />
                    
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create" element={<CreateCard />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;
