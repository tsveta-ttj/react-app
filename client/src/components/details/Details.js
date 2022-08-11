import { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import * as cardService from '../../services/cardService';
import { CardContext } from "../../contexts/CardContext";

export const Details = () => {
    const { deleteCard } = useContext(CardContext);

    const { cardId } = useParams();
    const navigate = useNavigate();

    const [card, setCard] = useState({
        title: '',
        img: '',
        description: '',
        owner: {},

    });

    useEffect(() => {
        cardService.getOne(cardId)
            .then(result => {
                if (result.message) {
                    throw new Error(result.message);
                }
                setCard(result);
            })
            .catch(err => console.log(err));
    }, [cardId]);

    const onDelete = () => {
        const choice = window.confirm('Are you sure you want to delete this post ?');

        if (choice) {
            cardService.del(cardId)
                .then(res => {
                    console.log('res from del', res);
                    if (res === undefined) {
                        
                        deleteCard(cardId);
                    } else {
                        throw new Error(res.message);

                    }
                })
                .catch(err => console.log(err));

        }
    }

    return (
        <section id="details">
            <h1>Details page</h1>
            <div className="image-container">
                <img src={card.img} alt={`${card.title}'s img`}
                    className="image" />
            </div>

            <div className="card-details">
                <p>Blog title: <strong>{card.title}</strong></p>
                <p>Description: <strong>{card.description}</strong></p>
                <p>Author: <strong>{card.owner.username}</strong></p>
            </div>
            <div className="details-buttons">
                <Link to={`/catalog/${cardId}/edit`} className="button">
                    Edit
                </Link>
                <button className="button" onClick={onDelete}>
                    Delete
                </button>
                <Link to={'/catalog'} className="button" >
                    Back
                </Link>
            </div>
        </section>
    );
};