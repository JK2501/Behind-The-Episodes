<template>
    <div id="filter" class="list-filter" style="height: 56px;">
      <div class="filter-settings-wrapper">
        <div class="filter-character icon-wrapper" title="Select Character">
          <i class="fa-solid fa-people-group fa-sm"></i>
          <i data-index="0" class="fa-solid fa-chevron-down" @click="showFilterCheckboxs"></i>
        </div>
        <div class="filter-author icon-wrapper" title="Select Author">
          <i class="fa-solid fa-user-pen fa-sm"></i>
          <i data-index="1" class="fa-solid fa-chevron-down" @click="showFilterCheckboxs"></i>
        </div>
        <div class="filter-clear icon-wrapper" @click="clearSelection" title="Clear Selection">
          <i class="fa-solid fa-trash"></i>
        </div>
      </div>
      <div id="filter-content-wrapper" class="filter-content-wrapper">
        <div class="filter-content">
          <form>
            <FilterCheckbox label="Inspektor Cotta" inputValue="Inspektor Cotta" v-model="selection.Characters"/>
            <FilterCheckbox label="Skinny Norris" inputValue="Skinny Norris" v-model="selection.Characters" />
            <FilterCheckbox label="Victor Hugenay" inputValue="Victor Hugenay" v-model="selection.Characters"/>
            <FilterCheckbox label="Onkel Titus" inputValue="Onkel Titus" v-model="selection.Characters" />
            <FilterCheckbox label="Morton" inputValue="Morton" v-model="selection.Characters" />
            <FilterCheckbox label="HK Reynolds" inputValue="Hauptkommissar Reynolds" v-model="selection.Characters" />
            <FilterCheckbox label="Goodween" inputValue="Goodween" v-model="selection.Characters" />
            <FilterCheckbox label="Patrick" inputValue="Patrick" v-model="selection.Characters" />
            <FilterCheckbox label="Kenneth" inputValue="Kenneth" v-model="selection.Characters" />
            <FilterCheckbox label="Rubbish George" inputValue="Rubbish George" v-model="selection.Characters" />
            <FilterCheckbox label="Tante Mathilda" inputValue="Tante Mathilda" v-model="selection.Characters" />
            <FilterCheckbox label="Allie Jamison" inputValue="Allie Jamison" v-model="selection.Characters" />
            <FilterCheckbox label="Clarissa Franklin" inputValue="Clarissa Franklin" v-model="selection.Characters" />  
            <FilterCheckbox label="Jelena Charkov" inputValue="Jelena Charkov" v-model="selection.Characters"/>          
            <FilterCheckbox label="Elizabeth Zapata" inputValue="Elizabeth Zapata" v-model="selection.Characters"/>
            <FilterCheckbox label="Lys de Kerk" inputValue="Lys" v-model="selection.Characters" />
            <FilterCheckbox label="Kelly Madigan" inputValue="Kelly" v-model="selection.Characters" />
          </form>
        </div>
        <div class="filter-content">
          <form>
            <FilterRadio label="B. Waidhofer" inputValue="Brigitte Waidhofer" name="author" v-model="selection.Author"/> <!-- 16-->
            <FilterRadio label="M. V. Carey" inputValue="M. V. Carey" name="author" v-model="selection.Author" /> <!-- 15 -->
            <FilterRadio label="William Arden" inputValue="William Arden" name="author" v-model="selection.Author"/> <!-- 14 -->
            <FilterRadio label="Robert Arthur" inputValue="Robert Arthur" name="author" v-model="selection.Author" /> <!-- 10 -->
            <FilterRadio label="A. Vollenbruch" inputValue="Astrid Vollenbruch" name="author" v-model="selection.Author"/> <!-- 7 -->
            <FilterRadio label="Marc Brandel" inputValue="Marc Brandel" name="author" v-model="selection.Author"/> <!-- 4 -->
            <FilterRadio label="M. und H. Stine" inputValue="Megan und H. William Stine" name="author" v-model="selection.Author"/> <!-- 4 -->
            <FilterRadio label="G. H. Stone" inputValue="G. H. Stone" name="author" v-model="selection.Author" /> <!-- 3 -->           
            <FilterRadio label="Nick West" inputValue="Nick West" name="author" v-model="selection.Author"/> <!-- 2 -->
          </form>
        </div>
      </div>
    </div>

</template>

<script>
import { mapMutations } from 'vuex';
import FilterCheckbox from './FilterCheckbox.vue';
import FilterRadio from './FilterRadio.vue';

  export default {
    components: { 
      FilterCheckbox, 
      FilterRadio,
    },
    name: "ListFilter",
    data() {
      return {
        selection: {
          Characters: [],
          Author: "",
        },
      };
    },
    methods: {
      ...mapMutations(['addFilterProperty', 'emptyFilterProperty']),
      addProperty(key, selection) {
        this.addFilterProperty({ key: key, value: selection });
      },
      emptyProperty(key){
        this.emptyFilterProperty(key);
      },
      showFilterCheckboxs(element){
        const contentWrapper = document.getElementById('filter-content-wrapper');
        const contents = [...document.getElementsByClassName('filter-content')];
        const filter = document.getElementById('filter');

        let i = element.target.dataset.index;
        // if neighbouring tab is open we close it
        if(contents.at(i - 1).classList.contains('visible')){
          contents.at(i - 1).classList.toggle('visible');
        }
        // open up 
        filter.style.height = '270px';
        contents[i].classList.toggle('visible');
        contentWrapper.style.display = "block";

        if(!contents.at(i).classList.contains('visible') && !contents.at(i - 1).classList.contains('visible')){
          filter.style.height = '56px';
          contentWrapper.style.display = "none";
        }
      },
      clearSelection(){
        const inputs = document.getElementsByTagName('input');
        for(let input of inputs){
          if(input.type === "checkbox" && input.checked){
            input.checked = false;
          }
          else if(input.type === "text" && input.value){
            input.value = "";
            this.emptyProperty("name");
          }
        }
        this.selection.Characters = [];
        this.selection.Author = "";
      }
    },
    watch: {
      'selection.Characters': {
          handler(newArray) {
            this.addProperty('characters', newArray);
          },
          deep: true
      },
      'selection.Author': {
          handler(newString) {
            this.addProperty('author', newString);
          },
          deep: true
      }
    },
  }
</script>

<style scoped>

.list-filter {
    margin-top: 1rem;
    background-color: var(--new-colors-grey-dark);
    width: 200px;
  }

  .filter-settings-wrapper {
    width: 100%;
    height: 56px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;  
  }

  .filter-settings-wrapper i {
    z-index: 2;
  }

  .icon-wrapper i{
    color: var(--new-colors-white);
  }

  .fa-chevron-down, .fa-trash {
    cursor: pointer;
  }

  .filter-character, .filter-author {
    position: relative;
    height: 38px;
    width: 65px;
    background-color: var(--new-colors-grey);
    border-radius: 15px;
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly; 
  }

  .filter-clear {
    width: 38px;
    height: 38px;
    background-color: var(--new-colors-grey);
    border-radius: 15px;
    display: grid;
    place-items: center;
  }

  .filter-content-wrapper {
    display: none;
    height: 214px;
    width: 100%;
  }

  .filter-content {
    display: none;
    height: 205px;
    border-radius: 15px;
    background-color: var(--new-colors-grey);
    margin-left: 5.4px;
    width: 188.5px;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
  }

  .filter-content form {
    padding: 1rem;
  }

  .visible {
    display: block !important;
  }

</style>