import { Link } from 'react-router-dom';
export const CatalogItem = ({
    card
}) => {
    return (
        <article className="card" >
            <img className="img" src={card.img} alt="" />
            <section className="desc-section">
                <h3 className="title">{card.title}</h3>
                <p className="desription">{card.description}
                </p>
            </section>
            <footer className="buttons">
                <Link to={`/catalog/${card._id}`}>
                    <button className="button" type="button">Continue reading</button>
                </Link>
            {/* <button className="button" type="button">Edit</button>
                <button className="button" type="button">Delete</button> */}
        </footer>
        </article >
    );
} 