import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as cardService from './services/cardService.js';
import { AuthContext } from './contexts/AuthContext.js';

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

function App() {
    const [cards, setCards] = useState([]);
    const [auth, setAuth] = useLocalStorage('auth', {});

    const navigate = useNavigate();

    const userRegister = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    useEffect(() => {
        cardService.getAll()
            .then(result => {
                setCards(result)
            });
    }, []);

    const cardCreateHandler = (card) => {

        cardService.create(card)
            .then((newItem) => {
                setCards(oldCards => [...oldCards, newItem]);
            })
            .catch(err => {
                console.log(err);
            });

        navigate('/catalog');
    };

    return (
        <>
            <AuthContext.Provider value={{user:auth, userRegister, userLogout}}>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Catalog cards={cards} />} />
                        <Route path="/catalog/:cardId" element={<Details />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/create" element={<CreateCard onCardCreate={cardCreateHandler} />} />
                    </Routes>
                </main>
            </AuthContext.Provider>

            <Footer />
        </>
    );
}

export default App;
