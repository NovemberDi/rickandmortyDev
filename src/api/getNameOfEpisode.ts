import axios from "axios";
export const getNameOfEpisode = async (link: string) => {
    try {
        const { data } = await axios.get(link);
        return data.name
    } catch (e) {
        console.log(e)
    }
}