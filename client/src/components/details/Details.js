import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as cardService from '../../services/cardService';

export const Details = () => {
    const { cardId } = useParams();
    const [card, setCard] = useState({});


    useEffect(() => {
        cardService.getOne(cardId)
            .then(result => {
                setCard(result);
            });
    }, []);

    console.log('Card from details', card);
    return (
        <section id="details">
            <h1>Details page</h1>
            <div className="image-container">
                <img src={card.img} alt={`${card.title}'s img`}
                    className="image" />
            </div>

            <div className="card-details">
                <p>Blog title: <strong>{card.title}</strong></p>
                <p>Description:<strong>{card.description}</strong></p>
            </div>
        </section>
    );
};