import { useContext } from "react";
import { CardContext } from "../../contexts/CardContext";
import * as cardService from '../../services/cardService';

export const CreateCard = () => {
    const { createCard } = useContext(CardContext);

    const submitHandler = (e) => {
        e.preventDefault();

        const cardData = Object.fromEntries(new FormData(e.target));
        
        cardService.create(cardData)
            .then(result => {
                console.log(result);
                if (result.message) {
                    throw new Error(result.message);
                }
                createCard(result);
            })
            .catch(err => console.log(err));
    };

    return (
        <form id="create" onSubmit={submitHandler}>
            <div className="form-container">
                <h1>Create Card</h1>

                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="title"
                />

                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="description"
                />

                <label htmlFor="pass">Image:</label>
                <input
                    type="img"
                    name="img"
                    id="img"
                />
                
                <button type="submit" >Create</button>
            </div>
        </form>
    );
};