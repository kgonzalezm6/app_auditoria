<template>
    <!-- <div class="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 flex items-center justify-center">
      <div class="max-w-sm w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div class="px-6 py-4">
          <div class="flex justify-between items-start">
            <div class="font-bold text-xl mb-2 text-gray-800 dark:text-white">Título de la Tarjeta</div>
            <div class="relative">
              <button 
                @click="toggleMenu"
                class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
                aria-haspopup="true"
                :aria-expanded="isMenuOpen"
              >
                <MoreVertical class="h-5 w-5" />
              </button>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <div 
                  v-if="isMenuOpen"
                  class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5"
                >
                  <div 
                    class="py-1" 
                    role="menu" 
                    aria-orientation="vertical" 
                    aria-labelledby="options-menu"
                  >
                    <a 
                      v-for="(item, index) in menuItems" 
                      :key="index"
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white"
                      role="menuitem"
                      @click="handleMenuItemClick(item)"
                    >
                      {{ item }}
                    </a>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <p class="text-gray-700 dark:text-gray-300 text-base mt-2">
            Esta es una descripción de ejemplo para la tarjeta. Puedes agregar cualquier contenido aquí.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span 
            v-for="(tag, index) in tags" 
            :key="index"
            class="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
          >
            #{{ tag }}
          </span>
        </div>
      </div>
    </div> -->
    <div>
        <nav class="bg-gray-800 text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                        <!-- Logo -->
                        <a href="#" class="text-xl font-bold">MonLogo</a>
                        <!-- Desktop Links -->
                        <!-- <div class="hidden md:block ml-10 space-x-4">
                    <a href="#" class="hover:text-gray-300">Accueil</a>
                    <a href="#" class="hover:text-gray-300">À propos</a>
                    <a href="#" class="hover:text-gray-300">Services</a>
                    <a href="#" class="hover:text-gray-300">Contact</a>
                  </div> -->
                    </div>

                    <!-- User Profile -->
                    <div class="relative">
                        <button @click="toggleUserMenu" class="flex items-center space-x-2 focus:outline-none">
                            <!-- User Image -->
                            <img :src="user.image" alt="User Profile"
                                class="h-8 w-8 rounded-full border border-gray-300" />
                            <!-- Username -->
                            <span class="hidden md:block">{{ user.name }}</span>
                        </button>

                        <!-- User Dropdown Menu -->
                        <div v-if="isUserMenuOpen"
                            class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                Perfil
                            </a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                Cambiar de contraseña
                            </a>
                            <a @click="logout" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                                Cerrar Sesión
                            </a>
                        </div>
                    </div>

                    <!-- Mobile Menu Button -->
                    <div class="md:hidden">
                        <button @click="toggleMenu" type="button"
                            class="text-gray-400 hover:text-white focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div v-if="isMenuOpen" class="md:hidden bg-gray-700 px-4 pt-2 pb-4 space-y-2">
                <a href="#" class="block hover:text-gray-300">Accueil</a>
                <a href="#" class="block hover:text-gray-300">À propos</a>
                <a href="#" class="block hover:text-gray-300">Services</a>
                <a href="#" class="block hover:text-gray-300">Contact</a>
            </div>
        </nav>
        <div class="w-[80%] ml-[10%] mt-14">
            <div class="grid grid-cols-3 gap-4">
                <div v-for="(item, index) in items" :key="index"
                    class="group px-10 py-5 rounded-lg flex flex-col items-center justify-center gap-2 relative shadow-lg overflow-hidden cursor-pointer transition-all duration-300">
                    <!-- Fondo dinámico con animación -->
                    <div class="absolute inset-0 transition-transform duration-500 -translate-y-full group-hover:translate-y-0 rounded-lg z-[-1]"
                        :style="{ backgroundColor: item.backgroundColor }"></div>

                    <!-- Ícono dinámico -->
                    <Icon :icon="item.icon"
                        class="w-16 h-16 aspect-square rounded-full p-4 transition-all duration-300 group-hover:bg-gray-800 group-hover:-translate-y-2"
                        :style="{ color: item.color }" />

                    <!-- Título dinámico -->
                    <p class="cardtxt font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">
                        {{ item.title }}
                    </p>


                    <!-- Precio y botón dinámico -->
                    <div class="ordernow flex flex-row justify-between items-center w-full">
                        <p class="ordernow-text" :style="{ color: item.color }">
                            ${{ item.price }}
                        </p>
                        <p class="btun4 lg:inline-flex items-center gap-3 cursor-pointer py-2 px-4 text-sm font-semibold rounded-full shadow-[10px_10px_150px_#ff9f0d]"
                            :style="{ backgroundColor: item.color }">
                            Order Now
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <!-- Contenido para simular el scroll -->
            <div class="min-h-[2000px] bg-gray-100">
                <p class="p-8 text-gray-700">
                    Desplázate hacia abajo para que aparezca el botón "Back to Top".
                </p>
            </div>

            <!-- Botón "Back to Top" -->
            <button v-if="isVisible" @click="scrollToTop"
                class="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </div>
    </div>


</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const items = ref([
    {
        title: "Calathea Orbifolia",
        color: "#abd373", // Color del ícono y otros elementos relacionados
        backgroundColor: "#f0f7e8", // Color de fondo dinámico
        icon: "user",
        price: 21.0,
    },
    {
        title: "Monstera Deliciosa",
        color: "#ff9f0d",
        backgroundColor: "#fff7e6",
        icon: "leaf",
        price: 25.0,
    },
    {
        title: "Fiddle Leaf Fig",
        color: "#34a4eb",
        backgroundColor: "#e6f7ff",
        icon: "tree",
        price: 30.0,
    },
]);
// Fake user data (replace with real data from your API)
const user = ref({
    name: "John Doe",
    image: "https://cdn-icons-png.flaticon.com/512/219/219986.png", // Replace with user's real profile image URL
});

const isMenuOpen = ref(false);
const isUserMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const toggleUserMenu = () => {
    isUserMenuOpen.value = !isUserMenuOpen.value;
};

const logout = () => {
    console.log("Déconnexion"); // Replace with actual logout logic
};
const isVisible = ref(false);

const handleScroll = () => {
  // Mostrar el botón si el usuario ha desplazado más de 300px
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  // Subir automáticamente y suavemente al principio de la página
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Desplazamiento suave
  });
};

// Agregar el evento de scroll al montar el componente
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Quitar el evento de scroll al desmontar el componente
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>