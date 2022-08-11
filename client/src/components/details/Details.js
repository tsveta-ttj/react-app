import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as cardService from '../../services/cardService';

export const Details = () => {
    const { cardId } = useParams();

    const [card, setCard] = useState({
        title: '',
        img: '',
        description: '',
        owner: {},

    });


    useEffect(() => {
        cardService.getOne(cardId)
            .then(result => {
                setCard(result);
            });
    }, [cardId]);

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
                <Link to="#" className="button">
                    Edit
                </Link>
                <Link to="#" className="button">
                    Delete
                </Link>
            </div>
        </section>
    );
};