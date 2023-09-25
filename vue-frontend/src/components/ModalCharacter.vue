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
        text-decoration: none;
        font-size: 14px;
        display: block;
        padding: 0.4rem;
        border: 1px solid var(--new-colors-white);
        border-radius: 5rem;
        color: var(--new-colors-white);
        margin: 0.2rem;
    }

  </style>
  