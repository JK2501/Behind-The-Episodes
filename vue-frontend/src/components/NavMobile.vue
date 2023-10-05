<template>
    <div class="nav-mobile">
        <label for="tab-switcher"></label>
    </div>
</template>
    
<script>
    export default {
        name: "NavMobile",
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
            justify-content: center;
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

        .nav-mobile > label {
            cursor: pointer;
            display: flex;
        }

        .nav-mobile > label::before {
            --text: "Episoden ›";
            content: var(--text);
            font-size: 18px;
            color: var(--new-colors-white);
        }
    }
  
</style>