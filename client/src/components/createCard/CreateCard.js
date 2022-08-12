import { Link } from "react-router-dom";
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
        <div className="form-container">
            <form className="form" id="create" onSubmit={submitHandler}>
                <h1>Create Card</h1>

                <label className='label' htmlFor="title">Title:</label>
                <input
                    className='inputFields'
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                />

                <label className='label' htmlFor="description">Description:</label>
                <input
                    className='inputFields'
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Description"
                />

                <label className='label' htmlFor="pass">Image:</label>
                <input
                    className='inputFields'
                    type="img"
                    name="img"
                    id="img"
                    placeholder="http://..."

                />
                <div className="formButtons">
                    <button className='button' type="submit" >Create</button>
                    <button className='button' >
                        <Link to={'/catalog'} className='buttonLink' >
                            Back
                        </Link>
                    </button>
                </div>
            </form>
        </div>
    );
};