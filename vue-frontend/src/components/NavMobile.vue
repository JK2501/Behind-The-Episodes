<template>
    <div class="nav-mobile">
        <label>
            <input type="checkbox">
            <p name="catalogue">Episoden &#8250;</p>
            <p name="info">&#8249; Auswahl</p>
        </label>
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
            display: grid;
        }

        .nav-mobile > label input {
            appearance: none;
        }

        .nav-mobile > label p {
            color: var(--new-colors-white);
            cursor: pointer;
            font-family: Helvetica, Arial, sans-serif;
        }

        .nav-mobile > label p[name="info"] {
            display: none;
        }
    }
  
</style>