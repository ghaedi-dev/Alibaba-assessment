import api, { source } from '../axios';

const API = {
    source,
    getAllCountries: async (cancelToken) => {
        return await api.get('/all', { cancelToken });
    },
};

export default API;