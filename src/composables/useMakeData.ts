import { onMounted, ref, type Ref } from "vue";

import { getPersons } from "@/api/getPersons";
import { getNameOfEpisode } from '@/api/getNameOfEpisode';
import type { Person } from '@/interfaces/Person';


interface MyPerson extends Person {
    episode: string[]
}

const persons = ref();
const name = ref<string>('')
const status = ref<string>('')
const currentPage = ref<number>(1)
const totalPages = ref<number>()
const isLoading = ref<boolean>()

const makeInfo = (info: any): number => {
    if (info.next === null) return info.pages;
    return info.next.split('page=')[1].split('&')[0] - 1

}

export const useMakeData = () => {

    const makeData = async () => {
        isLoading.value = true;
        try {
            const searchResult = await getPersons(name.value, status.value, currentPage.value);
            if (!searchResult) {
                persons.value = null;
                return
            }
            persons.value = await Promise.all(searchResult.results.map(async (item: MyPerson) => {
                let name = await getNameOfEpisode(item.episode[0])
                return {
                    name: item.name,
                    image: item.image,
                    species: item.species,
                    status: item.status,
                    location: item.location,
                    episode: name
                }
            }))

            totalPages.value = searchResult.info.pages;
            currentPage.value = makeInfo(searchResult.info);
        } catch (e) {
            console.error(e)
        } finally {
            isLoading.value = false;
        }

    }

    return {
        persons,
        name,
        status,
        currentPage,
        totalPages,
        isLoading,
        makeData
    }
}
