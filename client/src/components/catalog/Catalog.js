import { CatalogItem } from "./catalogItem/CatalogItem";

export const Catalog = ({
    cards
}) => {
    return (
        <section id="catalog">
            <h1>All Posts</h1>
            <div className="cards">
                {cards.length > 0
                    ? cards.map(card => <CatalogItem key={card._id} card={card} />)
                    : <p className='no-cards'> No Post yet</p>
                }
            </div>
        </section>
    );
} 