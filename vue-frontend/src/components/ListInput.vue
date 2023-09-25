<template>
    <input 
      type="text" 
      class="list-input"
      v-model="selectName"
      placeholder="Suche nach Episoden..."
      title="Select Name"
    >
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        name: 'ListInput',
        data(){
            return {
                selectName: '',
            }
        },
        methods: {
            ...mapMutations(['addFilterProperty']),
            addProperty(key, selection) {
                this.addFilterProperty({ key: key, value: selection });
            },
        },
        watch: {
            selectName(newName){
                this.addProperty('name', newName);
            },
        }        
    }
</script>