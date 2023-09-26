<template>
    <li class="modal-character">
        <p>{{ characterName }}</p>
    </li>
</template>
  
  
  <script>
  export default {
      name: 'ModalCharacter',
      props: ['characterName'],
  };
  </script>
  
  <style scoped>
    .modal-character {
        position: relative;
        /* list-style-type: none; */
        font-size: 14px;
        height: 30px;
        display: grid;
        place-items: center;
        padding: 0 0.4rem;
        border: 1px solid var(--new-colors-white);
        border-radius: 5rem;
        color: var(--new-colors-white);
        margin: 0.2rem;
    }

  </style>
  