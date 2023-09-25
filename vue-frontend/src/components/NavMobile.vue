<template>
    <div class="nav-mobile">
        <a><i id="home" class="fas fa-house" @click="swap" :class="{ active: i == 0 }"></i></a>
        <a><i id="list" class="fas fa-bars"  @click="swap" :class="{ active: i == 1 }"></i></a>
    </div>
</template>
    
<script>
    export default {
        name: "NavMobile",
        data(){
            return {
                i: 0,
            }
        },
        methods: {
            swap(e){ e.target.id === "home" ? this.i = 0 : this.i = 1; }
        },
        watch: {
            i(newValue){
                this.$emit('id', newValue);
            }
        }
    }
</script>
    
<style scoped>
  
    .nav-mobile {
        display: none;
    }

    @media (max-width: 1000px){
        .nav-mobile {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            z-index: 5;
            position: relative;
            height: 33px;
            width: var(--modal-width);
            background-color: var(--new-colors-grey-dark);
            border: 1px solid var(--new-colors-grey);
            align-self: center;
            border-radius: 8px;
            visibility: visible;
        }

        .nav-mobile a{
            margin-left: 1rem;
            cursor: pointer;
        }

        .nav-mobile a > i {
            font-size: 1.25em;
        }
    }

    .active {
        color: var(--new-colors-white) !important;
    }
  
</style>