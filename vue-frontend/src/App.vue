<template>
    <main class="main">
      <ListContainer/> 
      <ModalContainer :episode="fallBackContent"/>
      <NavMobile/>
    </main>
</template>

<script>
  import axios from 'axios';
  import NavMobile from './components/NavMobile.vue';
  import ListContainer from './components/ListContainer.vue';
  import ModalContainer from './components/ModalContainer.vue';

  import { mapState } from 'vuex';

  export default {
    components: {
      NavMobile,
      ListContainer,
      ModalContainer,
    }, 
    data(){
      return {
          fallBackContent: {
            id : 0,
            name : "",
            title: "",
            author : "",
            publication : "",
            characters: [],
          },
      }
    },
    computed: {
      // maps the $stores "selectedEpisodeId" state to the computed properties
      ...mapState(['selectedEpisodeId']),
    },
    watch: {
      selectedEpisodeId:{
        immediate: true,
        handler(newId){
          this.fetchNewEpisode(newId);
        }
      },
    },
    methods: {  
      async fetchNewEpisode(id){
        const result = await axios.get(`${import.meta.env.VITE_SERVER}/api/episodes/${id}`);
        const episode = result.data;
        this.fallBackContent = episode;
      }
    },
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .main {
    display: grid;
    grid-template-columns: 350px auto;
    justify-items: center;
    height: var(--height);
    width: 100vw;
  }

  @media (max-width: 1000px){
    .main {
      width: 100%;
      grid-template-rows: 50px auto;
      grid-template-columns: unset;
    }
  }

</style>
