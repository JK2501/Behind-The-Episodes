<template>
    <div class="modal-image" :style="{ backgroundImage: 'url(' + getImageUrl(episode.name) + ')' }"></div>
</template>

<script>
    export default {
        name: "ModalImage",
        props: {
            episode: {
                required: true,
            },
        },
        methods: {
            getImageUrl(name) {
                return new URL(`/episodes/${name}.jpg`, import.meta.url);
            }
        }
    }
</script>

<style scoped>
    .modal-image {
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: 50% -415px;
        filter: grayscale(100%);
        background-repeat: no-repeat;
        z-index: 2;
        opacity: 0.1;
        border-radius: 8px;
    }

</style>