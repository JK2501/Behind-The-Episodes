<template>
    <label class="radio-container">
        <input
            type="radio"
            :value="inputValue" v-model="model"
        />
        <span class="checkmark"></span>
        <p>{{ label }}</p>
    </label>
</template>

<script>
    export default {
        name: "FilterRadio", 
        props: {
            label: String,
            modelValue: String,
            inputValue: String,
        },
        computed: {
            model: {
                get() {
                    return this.modelValue;
                },
                set(value) {
                    this.$emit("update:modelValue", value);
                },
            },
        },
    }
</script>

<style scoped>
    .radio-container {
        display: block;
        position: relative;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 1rem;
        line-height: 1.1;
        color: var(--new-colors-white);
        display: flex;
        flex-direction: row;
        align-items: center;
        scroll-snap-align: end;
    }

    .radio-container + .radio-container {
        margin-top: 8px;
    }

    .radio-container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .radio-container p {
        margin-left: 8px;
    }

    .checkmark {
        display: grid;
        place-items: center;
        height: 1.15rem;
        width: 1.15rem;
        background-color: var(--new-colors-white);
        border-radius: 50%;
        border: 1px solid var(--scrollthumb-grey);
    }

    .checkmark::after {
        content: "";
        width: 0.7em;
        height: 0.7em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--new-colors-black);
        transform-origin: bottom left;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }

    .radio-container:hover input ~ .checkmark {
        background-color: var(--scrollbar-grey);
    }

    .radio-container input:checked ~ .checkmark::after {
        transform: scale(1);
    }

</style>