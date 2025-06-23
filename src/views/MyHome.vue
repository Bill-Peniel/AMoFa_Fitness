
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
                Révolutionnez vos
                <span class="text-primary">Tontines</span>
              </h1>
              <p class="text-xl text-gray-600 leading-relaxed">
                Gérez vos tontines en toute simplicité avec notre plateforme sécurisée et innovante. Organisez, suivez et optimisez vos finances collectives en quelques clics.
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
            <div class="relative bg-white p-8 rounded-3xl shadow-2xl overflow-hidden">
              <img src="/assets/images/finances_bj_logo.png" alt="Tontine Dashboard" class="w-full h-64 object-cover rounded-2xl mb-6">
              <div class="space-y-4">
                <h3 class="text-xl font-bold text-gray-900">Dashboard Intuitif</h3>
                <p class="text-gray-600">Visualisez vos contributions, suivez les cycles et gérez vos membres en temps réel.</p>
                <div class="grid grid-cols-2 gap-4 mt-6">
                  <div class="h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                    <span class="text-green-700 font-semibold">💰 Épargne</span>
                  </div>
                  <div class="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <span class="text-blue-700 font-semibold">📊 Suivi</span>
                  </div>
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
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Fonctionnalités Avancées</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour gérer efficacement vos tontines et épargnes collectives
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Gestion Automatisée</h3>
            <p class="text-gray-600">Calculs automatiques des contributions, échéances et répartitions pour une gestion sans erreur</p>
          </div>
          <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.586-3.586a2 2 0 00-2.828 0L10 8.586l-1.293-1.293a1 1 0 00-1.414 1.414L10 10.414l1.293 1.293a1 1 0 001.414-1.414L15.414 8.414a2 2 0 000-2.828z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Sécurité Bancaire</h3>
            <p class="text-gray-600">Chiffrement de niveau bancaire et authentification multi-facteurs pour protéger vos fonds</p>
          </div>
          <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
            <p class="text-gray-600">Invitez facilement des membres, gérez les rôles et communiquez en temps réel</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-primary text-white">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold mb-2">5,000+</div>
            <div class="text-purple-200">Tontines actives</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">50M+</div>
            <div class="text-purple-200">FCFA gérés</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">98%</div>
            <div class="text-purple-200">Satisfaction client</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">15</div>
            <div class="text-purple-200">Pays d'Afrique</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contact" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Transformez votre épargne collective dès aujourd'hui
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            Rejoignez plus de 25,000 membres qui économisent et investissent ensemble grâce à notre plateforme de tontines digitales
          </p>
          <div class="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button class="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Créer ma tontine gratuite
            </button>
            <button class="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300">
              Voir une démonstration
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
            <div class="text-2xl font-bold mb-4">Tontine Digital</div>
            <p class="text-gray-400">
              L'épargne collective réinventée pour l'Afrique moderne. Économisez, investissez et prospérez ensemble.
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
