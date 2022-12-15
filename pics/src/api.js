import axios from "axios";

const serchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos/', {
        headers: {
            Authorization: 'Client-ID rG956vErVrcfDvkaEGeR-G14zJXk0x4fAQrdRSC2htY'
        },
        params: {
            query: term
        },
    });



    return response.data.results;
}

export default serchImages;