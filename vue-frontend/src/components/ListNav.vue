<template>
  <div class="list-nav" id="list-nav">
    <ListInput/>
    <ListFilter />
    <h3 class="list-counter">{{ counter }}</h3>
  </div>
</template>
    
<script>
    import ListInput from './ListInput.vue';
    import ListFilter from './ListFilter.vue';

    export default {
      name: "ListNav",
      components: {
        ListInput,  
        ListFilter,
      },
      props: ['counter'],
    }
  </script>
  
<style scoped>

  .list-counter {
    display: grid;
    color: var(--new-colors-white);
    background-color: var(--new-colors-grey);
    border-radius: 15px;
    margin: 0 auto 1rem auto;
    height: 38px;
    place-items: center;
    width: 200px;
  }

  .list-nav {
    position: sticky;
    top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: var(--new-colors-grey-dark);
    z-index: 5;
    border-radius: 8px;
    /* height: 10rem; */
    padding-top: 2rem;
  }

  @media (max-width: 1000px){
    .list-nav {
      z-index: 6;
    }
  }

  .list-input {
      width: 75%;
      font-size: 15px;
      padding: 12px 0 12px 5px;
      border: 1px solid var(--new-colors-grey);
      background-color: var(--new-colors-white);
      border-radius: 5px;
  }

</style>
  