import React from 'react'
import { useCategoria } from '../hooks/useCategoria';
import { Card } from './Card'

export const PintarCategoria = ({ categoria }) => {
    const { products, loading } = useCategoria(categoria);

    if (loading) {
        return <p className='alert alert-dark text-center'>Cargando...</p>;
    }

    return (
        <section className='mb-5'>
            <h1 className='text-end'><strong>{categoria}</strong></h1>
            <div className='row'>
            {
                products.map(item =>
                    <Card key={item.id} {...item} />
                )
            }
            </div>
        </section>
    );
};
