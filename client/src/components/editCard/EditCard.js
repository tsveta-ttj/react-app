import { useState, useContext, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { CardContext } from "../../contexts/CardContext";
import * as cardService from '../../services/cardService';

export const EditCard = () => {
    const [currentCard, setCurrentCard] = useState({});
    const { editCard } = useContext(CardContext);
    const { cardId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        cardService.getOne(cardId)
            .then(gameData => {
                if (gameData.message) {
                    throw new Error(gameData.message);
                }
                setCurrentCard(gameData);
            })
            .catch(err => console.log(err));
    }, [cardId]);

    const onSubmit = (e) => {
        e.preventDefault();

        const gameData = Object.fromEntries(new FormData(e.target));

        cardService.edit(cardId, gameData)
            .then(result => {
                if (result.message) {
                    throw new Error(result.message);
                }
                editCard(cardId, result);
                navigate(`/catalog/${cardId}`)
            })
            .catch(err => console.log(err));
    };
    
    return (
        <form id="create" onSubmit={onSubmit}>
            <div className="form-container">
                <h1>Edit Card</h1>

                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="title"
                    defaultValue={currentCard.title}
                />

                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="description"
                    defaultValue={currentCard.description}

                />

                <label htmlFor="pass">Image:</label>
                <input
                    type="img"
                    name="img"
                    id="img"
                    defaultValue={currentCard.img}

                />

                <button type="submit" >Edit</button>
                <Link to={`/catalog/${cardId}`} className="button">
                    Back
                </Link>

            </div>
        </form>

    );
}