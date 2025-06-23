
<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
    <!-- Navigation moderne -->
    <nav class="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-bold text-primary">Tontine Project</div>
          <div class="hidden md:flex space-x-6">
            <a href="#home" class="text-gray-700 hover:text-primary transition-colors">Accueil</a>
            <a href="#about" class="text-gray-700 hover:text-primary transition-colors">À propos</a>
            <a href="#services" class="text-gray-700 hover:text-primary transition-colors">Services</a>
            <a href="#contact" class="text-gray-700 hover:text-primary transition-colors">Contact</a>
          </div>
          <button class="md:hidden">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="pt-20 pb-16 min-h-screen flex items-center">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div class="space-y-4">
              <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Bienvenue dans le
                <span class="text-primary">Futur</span>
              </h1>
              <p class="text-xl text-gray-600 leading-relaxed">
                Découvrez une expérience utilisateur exceptionnelle avec notre plateforme moderne et intuitive.
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Commencer
              </button>
              <button class="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                En savoir plus
              </button>
            </div>
          </div>
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-3xl transform rotate-6"></div>
            <div class="relative bg-white p-8 rounded-3xl shadow-2xl">
              <div class="space-y-4">
                <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                <div class="h-4 bg-gray-200 rounded w-2/3"></div>
                <div class="grid grid-cols-2 gap-4 mt-6">
                  <div class="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                  <div class="h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="about" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Nos Fonctionnalités</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Des outils puissants conçus pour simplifier votre quotidien
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Performance</h3>
            <p class="text-gray-600">Une vitesse d'exécution exceptionnelle pour tous vos besoins</p>
          </div>
          <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Sécurité</h3>
            <p class="text-gray-600">Protection avancée de vos données personnelles</p>
          </div>
          <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Simplicité</h3>
            <p class="text-gray-600">Interface intuitive et facile à utiliser</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-primary text-white">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold mb-2">10K+</div>
            <div class="text-purple-200">Utilisateurs actifs</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">99.9%</div>
            <div class="text-purple-200">Disponibilité</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">24/7</div>
            <div class="text-purple-200">Support</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">50+</div>
            <div class="text-purple-200">Pays</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contact" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Prêt à commencer votre aventure ?
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            Rejoignez des milliers d'utilisateurs qui nous font déjà confiance
          </p>
          <div class="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button class="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Commencer gratuitement
            </button>
            <button class="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300">
              Planifier une démo
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="text-2xl font-bold mb-4">Tontine Project</div>
            <p class="text-gray-400">
              Créer l'avenir ensemble avec des solutions innovantes.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Produit</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Tarifs</a></li>
              <li><a href="#" class="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Entreprise</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Carrières</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Support</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Centre d'aide</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Statut</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Tontine Project. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Logique Vue.js peut être ajoutée ici si nécessaire
</script>

<style scoped>
/* Styles personnalisés si nécessaires */
.gradient-text {
  background: linear-gradient(135deg, #6153CD, #9333EA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
