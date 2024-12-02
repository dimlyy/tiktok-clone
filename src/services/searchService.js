import * as request from "../utils/httpRequest";

const searchService = async(q,type='less') => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q,
                type
            }
        })
        return res.data;
    }
    catch(err) {
    }
}

export default searchService;