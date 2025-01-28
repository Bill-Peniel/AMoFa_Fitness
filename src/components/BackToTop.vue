<template>
    <div
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-5 right-5 p-10 bg-gray-400 text-[#e73131] text-xl rounded-full shadow-lg cursor-pointer hover:bg-[#e73131] hover:text-white transition-all duration-400"
      title="Retour en haut"
    >
      ↑
    </div>
  </template>
  
  <script>
  export default {
    name: 'BackToTop',

    data() {
      return {
        isVisible: false,
      };
    },
    methods: {
      handleScroll() {
        this.isVisible = window.scrollY > 200; // Affiche si scroll > 200px
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Scroll fluide
        });
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  };
  </script>
  
  <style scoped>
  /* Ajoutez des styles si nécessaire */
  </style>
  