<template>
  <div class="list">
      <ListNav :counter="counter"/>
      <ListCatalogue @counter="changeCounter"/>
  </div>   
</template>

<script>
  import ListNav from './ListNav.vue';
  import ListCatalogue from './temp.vue';

    export default {
        name: 'ListContainer',
        components: {
            ListNav,
            ListCatalogue,
        },
        data(){
          return { 
            counter: 219,
          }
        },
        methods: {
          changeCounter(count){
            this.counter = count;
          }
        }
    };

</script>

<style scoped>

  .list {
    position: sticky;
    top: 2.5vh;
    margin-top: 2.5vh;
    background: var(--new-colors-grey-dark);
    justify-content: center;
    border-radius: 8px;
    width: var(--list-width);
    height: 95vh;
    z-index: 4;
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid var(--new-colors-grey);
  }

  @media (min-width: 1000px){
    .list {
      display: block !important; 
    } 
  }

  @media (max-width: 1000px){
    .list {
      display: none;
      grid-row: 2 / 3;
      height: 95%;
    }
  }


</style>