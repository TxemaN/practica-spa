import { dummyConsulta } from '../../helpers/dummyConsulta';

export const getCategoria = async (categoria) => {
    const urlBase = import.meta.env.VITE_APP_URL;
    const urlCategoria = `${urlBase}/category/${categoria}`;

    const { data } = await dummyConsulta(urlCategoria);
    const { products } = data

    const newProducts = products.map((prod) => ({
        id: prod.id,
        title: prod.title,
        rating: prod.rating,
        thumbnail: prod.thumbnail
    }));

    return newProducts;
};