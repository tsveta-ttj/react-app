import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import * as cardService from '../../services/cardService';
import { CardContext } from "../../contexts/CardContext";
import { AuthContext } from "../../contexts/AuthContext";
import styles from '../details/Details.module.css';

export const Details = () => {
    const { deleteCard } = useContext(CardContext);
    const { user } = useContext(AuthContext)
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
    console.log('user id', user._id);

    const isOwner = user._id === card.owner._id;

    return (
        <div className={styles.details}>
            <section id="details" className={styles.detailsSection}>
                <h1 className={styles.postTitle}>Details for {card.title} post by {card.owner.username} </h1>
                <div className={styles.imageContainer}>
                    <img src={card.img} alt={`${card.title}'s img`}
                        className={styles.img} />
                </div>

                <div className={styles.cardDetails}>

                    <p className={styles.description}>{card.description}</p>
                    <p className={styles.description}><span className={styles.accent}>By: </span> {card.owner.username}</p>

                </div>

                <div className={styles.detailsButtons}>
                    {isOwner &&
                        <button className={styles.detailsButton} >

                            <Link to={`/catalog/${cardId}/edit`} className={styles.detailsButton}>
                                Edit
                            </Link>
                        </button>
                    }

                    {isOwner &&
                        <button className={styles.detailsButton} onClick={onDelete}>
                            <Link to={"#"} className={styles.detailsButton}>Delete</Link>
                        </button>
                    }
                    <button className={styles.detailsButton} >
                        <Link to={'/catalog'} className={styles.detailsButton} >
                            Back
                        </Link>
                    </button>
                </div>

            </section>
        </div>
    );
};