import { dummyConsulta } from "../../helpers/dummyConsulta";

export const getProductById = async (id) => {
    const urlBase = import.meta.env.VITE_APP_URL;
    const urlProduct = `${urlBase}/${id}`

    const { data } = await dummyConsulta(urlProduct, 'GET');

    const product = {
        title: data.title,
        price: data.price,
        description: data.description,
        rating: data.rating,
        thumbnail: data.thumbnail,
        category: data.category
    };

    return product;
};
