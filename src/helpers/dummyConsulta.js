
export const dummyConsulta = async (url, method, body = {}) => {

    let options;

    switch (method) {
        case 'POST':
        case 'PUT':
            options = {
                method,
                body: JSON.stringify(body),
            };
            break;

        case 'DELETE':
            options = { method };
            break;

        case "GET":
            options = { method };
            break;

        default:
            throw new Error("Método no soportado");
    };

    try {
        const resp = await fetch(url, options); // para categorías "/category/${categoria}" ya sea "smartphones" o "home-decoration"

        if (resp.ok) {

            const data = await resp.json();
            
            return {
                ok: true,
                data
            };

        } else {
            throw new Error(`ERROR:  ${response.status}`);
        };

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            msg: `Fetch Error : ${error.message}`
        };
    };
};