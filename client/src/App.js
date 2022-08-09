import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as cardService from './service/cardService.js';

import { Header } from './components/common/header/Header';
import { Footer } from './components/common/footer/Footer';
import { Catalog } from './components/catalog/Catalog';
import './App.css';

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
                    <Route path="/catalog" element={<Catalog cards={cards} />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;
