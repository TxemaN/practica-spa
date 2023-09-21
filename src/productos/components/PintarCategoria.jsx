import React from 'react'
import { useCategoria } from '../hooks/useCategoria';
import { Card } from './Card'

export const PintarCategoria = ({ categoria }) => {
    const { products, loading } = useCategoria(categoria);

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <section>
            <h1>{categoria}</h1>
            {
                products.map(item =>
                    <Card key={item.id} {...item} />
                )
            }
        </section>
    );
}
