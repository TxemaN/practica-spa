
export const getProductById = (products, id) => {
    const product = products.find(prod => prod.id == id);

    return product;
};
