import axios from "axios";
export const getPersons = async (name: string, status: string, page?: number | null) => {
    try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character?name=${name || ''}&status=${status || ''}&page=${page || ''}`);
        return data
    }
    catch (e) {
        console.log(e)
    }
}