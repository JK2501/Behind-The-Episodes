<template>
    <div id="modal" class="modal">
        <div class="content-title">
            <h1>Behind the Episodes</h1>
        </div>
        <div class="content-description">
            <table id="content-description-table">
                <caption>
                    <b>{{ episode.name }}</b>
                </caption>
                <caption>
                </caption>
                
                <tbody>
                    <tr v-if="episode.originalTitle">
                        <td>Originaltitel</td>
                        <td><i>{{ episode.originalTitle }}</i></td>
                    </tr>
                    <tr>
                        <td>Autor</td>
                        <td>{{ episode.author }}</td>
                    </tr>
                    <tr>
                        <td>Ersterscheinung</td>
                        <td>{{ dateString }}</td>
                    </tr>
                    <tr>
                        <td>Dauer</td>
                        <td>{{ episode.duration }} Minuten</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="content-navigator">
            <button v-if="episode.id != 1" type="button" title="Previous Episode" @click="storeId(episode.id - 1)">
                <i class="fa-solid fa-chevron-left"></i>
                <p>Prev</p>
            </button>
            <button type="button" title="Next Episode" @click="storeId(episode.id + 1)">
                <p>Next</p>
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
        <div class="content-characters">
            <ModalCharacter v-for="char in episode.characters.slice(4)" :key="char" :characterName="char"/>
        </div>
        <div class="content-text">
            {{ episode.description }}
        </div>
    </div>
</template>

<script>
    import ModalCharacter from './ModalCharacter.vue';
    import { mapState } from 'vuex';

    export default {
        name: "ModalViewer",
        components: {
            ModalCharacter,
        },
        props: {
            episode: {
                required: true,
            },
        },
        computed: {
            ...mapState(['selectedEpisodeId']),
            dateString(){
                const d = new Date(String(this.episode.publication));
                return d.toLocaleDateString();
            }, 
            descriptionText(){
                return this.episode.description.slice(0, this.characterLimit);
            }
        },
        methods: {
            storeId(id){
                this.$store.commit('setSelectedEpisodeId', id);
                console.log(this.$store.state.selectedEpisodeId);
            },
        },
    }
</script>

<style scoped>
    .modal {
        display: grid;
        grid-template-columns: 0.5fr 4fr 0.5fr;
        grid-template-rows: 0px 50px 250px 25px min-content max-content 0px;
        grid-row-gap: 1.4em;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 3;
        border-radius: 8px;
        border: 1px solid var(--new-colors-grey);
        overflow-y: scroll;
    }
    .content-title {
        display: flex;
        color: var(--new-colors-white);
        grid-column: 1/5;
        grid-row: 2/3;
        font-family: Helvetica, Arial, sans-serif;
        align-items: center;
        justify-content: center;
    }

    table {
        position: relative;
        width: 100%;
    }
    
    caption {
        margin: 5px;
        border: 1px solid var(--new-colors-white);
        padding: 0.5rem;
    }

    th, td {
        border: 1px solid var(--new-colors-white);
        padding: 0.5rem;
    }

    .content-description {
        height: 250px;
        grid-column: 2 / 3;
        grid-row: 3 / 6;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        font-weight: bold;
        color: var(--new-colors-white);
    }

    @media (max-width: 1000px){

        .modal {
            grid-template-columns: 0 4fr 0;
            grid-template-rows: 0px 25px 250px 25px 75px max-content 0px;
            grid-row-gap: 1em;
            padding-left: 5%;
            padding-right: 5%;
        } 
        .content-title {
            font-size: x-small;
        }
    }
    
    .content-description table * {
        font-weight: normal;
    }

    .content-characters {
        display: flex;
        grid-column: 2/ 3;
        grid-row: 5 / 6;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        overflow: hidden;
    }

    .content-text {
        height: 100%;
        grid-column: 2/ 3;
        grid-row: 6 / 7;
        border-radius: 5px;
        color: var(--new-colors-white);
        line-height: 1.8;
        text-align: justify;
        overflow: hidden;
    }

    .content-navigator {
        display: flex;
        grid-column: 2/3;
        grid-row: 4 / 5;
        justify-content: space-evenly;
        align-items: center;
    }

    .content-navigator > button {
        width: 75px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        display: flex;
        padding: 0.4rem 1rem;
        border: 1px solid var(--new-colors-black);
        border-radius: 5rem;
        color: var(--new-colors-black);
        background-color: var(--new-colors-white);
        align-items: center;
        justify-content: space-between;
    }

</style>