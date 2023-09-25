<template>
    <div class="list-content">
        
        <ul class="list-ul">
            <ListItem 
                v-for="episode in episodes" 
                :key="episode.id"
                :episode="episode"
            />
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapState } from 'vuex';
    import ListItem from './ListItem.vue';

    export default {
        name: 'ListCatalogue',
        components: {
            ListItem,
        },
        data(){
            return {
                episodes: [],
            }
        },
        async created(){
            const result = await axios.get(`${import.meta.env.VITE_SERVER}/api/episodes`);
            const episodes = result.data;
            this.episodes = episodes;
        },
        computed: {
            ...mapState(['Filter']),
        },
        watch: {
            Filter:{
                immediate: true,
                handler(properties){
                    console.log(this.Filter);
                    this.filterEpisodes(properties);
                },
            deep: true,
            },
        },
        methods: {
            async filterEpisodes(properties){
                const searchString = new URLSearchParams(properties).toString();
                const result = await axios.get(`${import.meta.env.VITE_SERVER}/api/episodes?${searchString}`);
                const episodes = result.data;
                this.episodes = episodes;
                this.$emit('counter', episodes.length);
            }
        }
    };
</script>

<style scoped>
    .list-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 2rem 2rem 2rem;
    }

    .list-ul {
        width: 100%;
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    @media (max-width: 1000px){
        .list-content  {
            display: unset;
            justify-content: unset;
            padding: 1rem 2rem 2rem 2rem;
        }

        .list-ul {
            text-align: center;
            max-width: 100%;
        }
    }
</style>