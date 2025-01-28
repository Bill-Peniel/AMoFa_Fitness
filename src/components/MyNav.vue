<template>
  <nav>
    <div class="container mx-auto !py-3 md:py-1">
      <div class="flex justify-between items-center">
        <!-- Logo section -->
        <div class="flex-shrink-0">
          <a href="#" class="flex items-center gap-3">
            <span class=" !text-5xl sm:text-3xl font-semibold">AMoFA</span>
          </a>
        </div>

        <!-- Menu Icon (Visible on all screen sizes) -->
        <div>
          <button
            @click="toggleMenu"
            class="text-5xl focus:outline-none"
            aria-label="Toggle menu"
          >
            <span>&#9776;</span> <!-- Hamburger Icon -->
          </button>
        </div>
      </div>
    </div>

    <!-- Dropdown Menu -->
    <transition name="slide-down">
      <div
        v-if="isMenuOpen"
        class="absolute top-0 left-0 w-full h-screen bg-white z-50 flex flex-col justify-center items-center"
      >
        <ul class="space-y-6">
          <li @click="scrollToSection('accueil')" class="cursor-pointer">
            <a href="#" class="text-3xl font-semibold hover:text-[#e73131] hover:border-b-2 hover:border-[#e73131] transition-all duration-300">Accueil</a>
          </li>
          <li @click="scrollToSection('about')" class="cursor-pointer">
            <a class="text-3xl font-semibold hover:text-[#e73131] hover:border-b-2 hover:border-[#e73131] transition-all duration-300">Association</a>
          </li>
          <li @click="scrollToSection('service')" class="cursor-pointer">
            <a class="text-3xl font-semibold hover:text-[#e73131] hover:border-b-2 hover:border-[#e73131] transition-all duration-300">Formations</a>
          </li>
          <li @click="scrollToSection('features')" class="cursor-pointer">
            <a class="text-3xl font-semibold hover:text-[#e73131] hover:border-b-2 hover:border-[#e73131]  transition-all duration-300">Marches</a>
          </li>
          <li @click="scrollToSection('contact')" class="cursor-pointer">
            <a class="text-3xl font-semibold hover:text-[#e73131] hover:border-b-2 hover:border-[#e73131] transition-all duration-300">Adhesion</a>
          </li>
          <li @click="scrollToSection('section1')" class="cursor-pointer">
            <a class="text-3xl font-semibold hover:text-[#e73131] hover:border-b-2 hover:border-[#e73131] transition-all duration-300">Clubs Affiliés</a>
          </li>
          <li @click="scrollToSection('team')" class="cursor-pointer">
            <a class="text-3xl font-semibold hover:text-[#e73131] hover:border-b-2 hover:border-[#e73131] transition-all duration-300">Equipes</a>
          </li>
        </ul>
        <button
          @click="toggleMenu"
          class="absolute top-4 right-6 text-3xl font-bold text-gray-800"
          aria-label="Close menu"
        >
          &times; <!-- Close Icon -->
        </button>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: "MyNav",
  data() {
    return {
      isMenuOpen: false, // État du menu
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Basculer l'état du menu
    },
    scrollToSection(sectionId) {
      this.isMenuOpen = false; // Fermer le menu après le clic
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth", // Défilement fluide
          block: "start", // Aligner la section en haut
        });
      }
    },
  },
};
</script>

<style>
/* Animation for dropdown */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* Optional: Adjust menu styles */
</style>
