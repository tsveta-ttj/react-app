import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as cardService from './services/cardService.js';
import { AuthContext } from './contexts/AuthContext.js';
import { CardContext } from './contexts/CardContext.js';


import './App.css';
import { Header } from './components/common/header/Header';
import { Footer } from './components/common/footer/Footer';
import { Catalog } from './components/catalog/Catalog';
import { Home } from './components/home/Home';
import { Login } from './components/login/Login.js';
import { Register } from './components/register/register.js';
import { CreateCard } from './components/createCard/CreateCard.js';
import { Details } from './components/details/Details.js';
import { useLocalStorage } from './hook/useLocalStorage';
import { Logout } from './components/logout/Logout.js';
import { EditCard } from './components/editCard/EditCard.js';

function App() {
    const [cards, setCards] = useState([]);
    const [auth, setAuth] = useLocalStorage('auth', {});

    useEffect(() => {
        cardService.getAll()
            .then(result => {
                setCards(result)
            });
    }, []);

    const navigate = useNavigate();

    const storeUserCredentials = (authData) => {
        setAuth(authData);
    };

    const clearUserCredentials = () => {
        setAuth({});
    };

    const createCard = (newCard) => {
        setCards(oldCards => [...oldCards, newCard]);
        navigate('/catalog');
    };

    const editCard = (gameId, gameData) => {
        setCards(state => state.map(x => x._id === gameId ? gameData : x));
    }

    return (
        <>
            <AuthContext.Provider value={{ user: auth, storeUserCredentials, clearUserCredentials }}>
                <Header />
                <main>
                    <CardContext.Provider value={{ createCard, editCard }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/catalog" element={<Catalog cards={cards} />} />
                            <Route path="/catalog/:cardId" element={<Details />} />
                            <Route path="/catalog/:cardId/edit" element={<EditCard />} />
                            <Route path="/create" element={<CreateCard />} />

                            <Route path="/logout" element={<Logout />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </CardContext.Provider>
                </main>
            </AuthContext.Provider>

            <Footer />
        </>
    );
}

export default App;
