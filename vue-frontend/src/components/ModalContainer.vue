<template>
    <div class="modal-container">
        <ModalViewer :episode="episode"/>
        <ModalImage :episode="episode"/>
        <div class="modal-color"></div>
    </div>
</template>

<script>
    import ModalViewer from './ModalViewer.vue';
    import ModalImage from './ModalImage.vue';

    export default {
        name: 'ModalContainer',
        components: {
            ModalViewer,
            ModalImage,
        },
        props: {
            episode: {
                required: true,
            },
        }
    };

</script>

<style scoped>

    @media (min-width: 1000px){
        .modal-container {
            display: block !important;
            top: 2.5vh;
            position: relative;
            width: var(--modal-width);
            height: calc(var(--height) - 5vh);
        }
    }


    @media (max-width: 1000px){
        .modal-container {
            position: relative;
            grid-row: 2 / 3;
            height: 95%;
            z-index: 4;
            align-self: baseline;
            width: var(--modal-width);
            top: 2.5vh;
            display: block;
        }
    }

    .modal-color {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: var(--new-colors-grey-dark);
        border-radius: 8px;
    }

</style>