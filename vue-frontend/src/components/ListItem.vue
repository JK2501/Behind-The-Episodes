<template>
    <li class="list-item">
        <img class="list-item-img" 
             loading="lazy" 
             :src="getImageUrl(episode.name)" 
             @click="storeId(episode.id)"
             :class="{ 'selected': episode.id === selectedEpisodeId }"
        />
    </li>
</template>
  
  
  <script>

  import { mapState } from 'vuex';
    export default {
        name: 'ListItem',
        props: ['episode'],
        methods: {
            returnToViewer(){
                // Unchecks the checkbox -> displays selection
                // Note: This only affects the page when on mobile (< 1000px)
                const mobileTabSelector = document.getElementById("tab-switcher");
                mobileTabSelector.checked = false;
            },
            storeId(id){
                this.$store.commit('setSelectedEpisodeId', id);
                this.returnToViewer();
                console.log(this.$store.state.selectedEpisodeId);
            },
            getImageUrl(name) {
                return new URL(`/episodes/${name}.jpg`, import.meta.url);
            }
        },
        computed: {
            ...mapState(['selectedEpisodeId']),
        }
    };
  </script>
  
  <style scoped>
    .list-item {
        position: relative;
        border: 5px solid var(--new-colors-grey);
        text-decoration: none;
        font-size: 18px;
        display: block;
        margin-bottom: 1rem;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
    }

    .list-item:focus-within {
        outline: 2px solid white;
    }

    .list-item-img {
        position: relative;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    @media (max-width: 1000px){
        .list-item {
            display: inline-block;
            width: 150px;
            height: 150px;
            margin: 10px;
        }
    }

    .selected {
        outline: 2px solid var(--new-colors-white);
    }


  </style>
  