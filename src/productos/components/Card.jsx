import { Link } from 'react-router-dom';

export const Card = ({ id, title, price, rating, thumbnail }) => {

    return (
        <article>
            <div>
                <img src={thumbnail} alt={title} />
            </div>
            <p>{title}</p>
            <p>{price}</p>
            <p>{rating}</p>
            <Link to={`/producto/${id}`} >Más info</Link>
        </article>
    );
};
