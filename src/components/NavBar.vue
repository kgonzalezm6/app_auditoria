<template>
    <div>
        <nav class="bg-[#F3F4F6] text-blue-muni font-semibold">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                        <img src="@/assets/img/logo.png" class="h-[3.5rem]">
                    </div>

                    <!-- User Profile -->
                    <div class="relative">
                        <button @click="toggleUserMenu" class="flex items-center space-x-2 focus:outline-none">
                            <!-- User Image -->
                            <img src="@/assets/img/user.png" alt="User Profile"
                                class="h-8 w-8 rounded-full border border-gray-300 hidden md:block" />
                            <!-- Username -->
                            <span class="hidden md:block">{{ user }}</span>
                        </button>

                        <!-- User Dropdown Menu -->
                        <div v-if="isUserMenuOpen"
                            class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                            <router-link to="/change_password" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                Cambiar de contraseña
                              </router-link>
                            <a @click="store.logout()" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
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
            </div
            <!-- Mobile Menu -->
            <div v-if="isMenuOpen" class="md:hidden bg-white px-4 pt-2 pb-4 space-y-2">
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Perfil
            </a>
            <router-link to="/change_password" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Cambiar de contraseña
              </router-link>
            <a @click="store.logout()" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                Cerrar Sesión
            </a>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/auth';
import axios from 'axios';
const store = useAuthStore();
const user = atob(localStorage.getItem("user"));
const isUserMenuOpen = ref(false);
const isMenuOpen = ref(false);
const toggleUserMenu = () => {
    isUserMenuOpen.value = !isUserMenuOpen.value;
};
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
const checkTokenExpiration = () => {
    const token = localStorage.getItem('token');
    const expiresAt = localStorage.getItem('expires_at');

    if (token && expiresAt) {
        const expirationDate = new Date(expiresAt);
        const now = new Date();

        if (now >= expirationDate) {
            console.log('Token expirado, eliminando...');
            localStorage.removeItem('token');
            localStorage.removeItem('expires_at');
        }
    }
};

// Interceptor para manejar expiración desde el backend
axios.interceptors.response.use(
    response => response, 
    error => {
        if (error.response && error.response.status === 401) {
            console.log("Token expirado, cerrando sesión...");
            localStorage.removeItem('token');
            localStorage.removeItem('expires_at');
            window.location.href = "/login"; // Redirigir al login
        }
        return Promise.reject(error);
    }
);
onMounted(() => {
    checkTokenExpiration();
});
</script>

<style scoped>

</style>