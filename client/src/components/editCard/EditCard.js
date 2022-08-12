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
        <div className="form-container">
            <form className="form" id="create" onSubmit={onSubmit}>
                <h1>Edit your post</h1>

                <label className='label' htmlFor="title">Title:</label>
                <input
                    className='inputFields'
                    type="text"
                    id="title"
                    name="title"
                    placeholder="title"
                    defaultValue={currentCard.title}
                />

                <label className='label' htmlFor="description">Description:</label>
                <input
                    className='inputFields'
                    type="text"
                    id="description"
                    name="description"
                    placeholder="description"
                    defaultValue={currentCard.description}

                />

                <label className='label' htmlFor="pass">Image:</label>
                <input
                    className='inputFields'
                    type="img"
                    name="img"
                    id="img"
                    defaultValue={currentCard.img}

                />

                <div className="formButtons">
                    <button className='button' type="submit" >Edit</button>
                    <button className='button' >
                        <Link to={'/catalog'} className='buttonLink' >
                            Back
                        </Link>
                    </button>
                </div>

            </form>
        </div>

    );
}