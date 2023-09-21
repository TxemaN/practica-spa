
export const dummyConsulta = async (url) => {

    try {
        const resp = await fetch(url)
        if (resp.ok) {
            const data = await resp.json()
            
            return {
                ok: true,
                data
            };
        } else {
            throw new Error('Dummyjson no responde')
        };
    } catch (error) {
        return {
            ok: false,
            msg: error
        };
    };
};
