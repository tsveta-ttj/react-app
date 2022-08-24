import { CatalogItem } from "./catalogItem/CatalogItem";
import { Pagination } from "./pagination/Pagination";

export const Catalog = ({
    cards
}) => {
    return (
        <div className="catalog">
        <section id="catalog" className="catalog">
            <h1 className="catalogH1">All Posts</h1>
            <div className="cards">
                {cards.length > 0
                    ? cards.map(card => <CatalogItem key={card._id} card={card} />)
                    : <p className='no-cards'> No Post yet</p>
                }
            </div>
        </section>
        <Pagination />
        </div>

    );
} 