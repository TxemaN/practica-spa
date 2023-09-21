import { Link } from 'react-router-dom';

export const Card = ({ id, title, price, rating, thumbnail }) => {

    return (
        <article className="bg-light card h-100 col-md-4 mb-2">
            <div>
                <img src={thumbnail} alt={title} className="card-img-top img-fluid mb-2" />
            </div>
            <div className="card-body">
            <h2 className='card-title text-dark'>{title}</h2>
            <p className='card-subtitle'>{price} - <strong>{rating}★</strong></p>
            </div>
            <Link to={`/producto/${id}`} className='btn btn-dark' >Más info</Link>
        </article>
    );
};
