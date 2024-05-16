<script setup lang="ts">
import type { Person } from '@/interfaces/Person';

interface MyPerson extends Person {
    episode: string
}
interface Props {
    person: MyPerson
}
defineProps<Props>()

</script>
<template>
    <div class="person">
        <div class="img-wrap">
            <img :src="person.image" :alt="person.name">
        </div>
        <div class="character-card">
            <div class="section">
                <h2>{{ person.name }}</h2>
                <div class="status">
                    <div class="icon-status" :class="{
                        'status-dead': person.status.toLowerCase() == 'dead',
                        'status-alive': person.status.toLowerCase() == 'alive',
                        'status-unknown': person.status.toLowerCase() == 'unknown'
                    }" />
                    <div class="isAlive">{{ person.status }}</div>
                    <pre> - </pre>
                    <div class="species">{{ person.species }}</div>
                </div>
            </div>
            <div class="section">
                <span class="text-gray">Last known location:</span>
                <span>{{ person.location.name }}</span>
            </div>
            <div class="section">
                <span class="text-gray">First seen in:</span>
                <span>{{ person.episode }}</span>

            </div>
        </div>

    </div>

</template>
<style>
.text-gray {
    color: rgb(158, 158, 158);
}

.icon-status {
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    border-radius: 50%;
}

.status-dead {
    background: rgb(214, 61, 46);
}

.status-alive {
    background: rgb(85, 204, 68);
}

.status-unknown {
    background: rgb(158, 158, 158);
}

.status {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    text-transform: capitalize;
}

.character-card {
    flex: 3 1 0%;
    position: relative;
    padding: 0.75rem;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
}

.section {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: 1000;
}

h2 {
    color: inherit;
    font-weight: 800;
    font-size: 1.5rem;
    color: aliceblue
}

img {
    width: 100%;
    height: 100%;
    margin: 0px;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    object-position: center center;
    object-fit: cover;
}

.person {
    width: 600px;
    height: 220px;
    display: flex;
    overflow: hidden;
    background: rgb(60, 62, 68);
    border-radius: 0.5rem;
    margin: 0.75rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

@media (max-width: 1024px) {
    .person {
        max-width: 80vw;
        height: auto;
        flex-direction: column;
    }
}
</style>