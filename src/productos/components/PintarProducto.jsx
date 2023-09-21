import React from 'react';
import { useProducto } from '../hooks/useProducto';

export const PintarProducto = () => {
    const { product, handleVolver } = useProducto();

    if (!product) return <p>Cargando...</p>;

    const { title, description, price, rating, thumbnail, category } = product;

    return (
        <section>
            <h2 className='text-end'><strong>Top {category}</strong></h2>
            <article>
                <div>
                    <img src={thumbnail} alt={title} />
                </div>
                <h1>{title}</h1>
                <p>{description}</p>
                <p><strong>{price}€</strong></p>
                <p className='text-end h2'>{rating} ★</p>
            </article>
            <button className='btn btn-dark' onClick={handleVolver}>Volver</button>
        </section>
    );
};
