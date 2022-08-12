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
import PrivateGuard from './components/common/guard/PrivateGuard.js';
import NotFound from './components/NotFound/NotFound.js';

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

    const editCard = (cardId, cardData) => {
        setCards(state => state.map(x => x._id === cardId ? cardData : x));
    };
;
    const deleteCard = (cardId) => {   
        setCards(state => state.filter(x => x._id !== cardId))
        navigate('/catalog');   
    };


    return (
        <>
            <AuthContext.Provider value={{ user: auth, storeUserCredentials, clearUserCredentials, isAuthenticated: !!auth.accessToken}}>
                <Header />
                <main>
                    <CardContext.Provider value={{ createCard, editCard, deleteCard }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/catalog" element={<Catalog cards={cards} />} />
                            
                           
                            <Route element={<PrivateGuard />}>
                            <Route path="/create" element={<CreateCard />} />
                            <Route path="/catalog/:cardId/edit" element={<EditCard />} />
                            <Route path="/catalog/:cardId" element={<Details />} />
                            <Route path="/logout" element={<Logout />} />
                            </Route>

                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </CardContext.Provider>
                </main>
            </AuthContext.Provider>

            <Footer />
        </>
    );
}

export default App;
