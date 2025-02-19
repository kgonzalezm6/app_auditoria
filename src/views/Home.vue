<template>
    <div>
        <NavBar />
        <div class="w-[80%] ml-[10%] mt-14">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4" v-if="!store.loading_permission">
            <div v-for="(item, index) in store.permission" :key="index"
                 class="group px-10 py-5 rounded-lg flex flex-col items-center justify-center gap-2 relative shadow-all overflow-hidden cursor-pointer transition-all duration-300"
                 @click="toggleMenuApp(index)">
              <!-- Fondo dinámico con animación -->
              <div class="absolute inset-0 transition-transform duration-500 -translate-y-full group-hover:translate-y-0 rounded-lg z-[-1]"
                   :style="{ backgroundColor: item.background }"></div>
      
              <!-- Ícono dinámico -->
              <Icon :icon="item.icono"
                    class="w-16 h-16 aspect-square rounded-full p-4 transition-all duration-300 group-hover:bg-gray-200 group-hover:-translate-y-2"
                    :style="{ color: item.color }" />
      
              <!-- Título dinámico -->
              <p class="cardtxt font-semibold text-gray-600 tracking-wider group-hover:text-gray-900 text-xl">
                {{ item.title }}
              </p>
      
              <!-- Menú desplegable -->
              <div v-if="item.showMenu" class="bg-white absolute -top-2 left-0 w-full h-full shadow-md rounded-lg mt-2 pt-4 pl-1">
                <!-- Botón para cerrar el menú -->
                <button @click.stop="closeMenu(index)" class="absolute -top-1 right-1 text-xl text-red-500 font-extrabold hover:text-red-800">
                  &times;
                </button>
                <div class="max-h-[9rem] overflow-y-auto"> <!-- Contenedor con scroll -->
                  <ul>
                    <li v-for="(app, appIndex) in item.applications" :key="appIndex" class="p-2 hover:bg-gray-100 cursor-pointer">
                      <a :href="app.enlace" target="_blank">{{ app.nombre }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
            <div class="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <svg class="animate-spin h-10 w-10 text-blue-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
                <path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="0.75"></path>
              </svg>
              <p class="text-gray-700 font-semibold">Validando sus permisos</p>
            </div>
          </div>
        </div>
        <BackTop />
    </div>


</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import NavBar from '@/components/NavBar.vue';
import BackTop from '@/components/BackTop.vue';
import { useAuthStore } from '@/stores/Auth';
const items = ref([
    {
        title: "Gestión de Servicios",
        color: "#abd373", // Color del ícono y otros elementos relacionados
        backgroundColor: "#f0f7e8", // Color de fondo dinámico
        icon: "users",
        price: 21.0,
        applications: [
            { name: 'Información academica', url: 'https://app1.com' },
            { name: 'Información personal', url: 'https://app2.com' },
            { name: 'Contactos de emergencia', url: 'https://app3.com' },
            { name: 'Gestionar personal', url: 'https://app4.com' }
          ],
          showMenu: false
    },
    {
        title: "Suministros",
        color: "#ff9f0d",
        backgroundColor: "#fff7e6",
        icon: "pen-ruler",
        price: 25.0,
        applications: [
            { name: 'Solicitar Suministros', url: 'https://appa.com' },
            { name: 'Gestionar Suministros', url: 'https://appb.com' }
          ],
          showMenu: false
    },
    {
        title: "Inventarios",
        color: "#34a4eb",
        backgroundColor: "#e6f7ff",
        icon: "computer",
        price: 30.0,
        applications: [
            { name: 'App A', url: 'https://appa.com' },
            { name: 'App B', url: 'https://appb.com' }
          ],
          showMenu: false
    },
    {
        title: "Biblioteca",
        color: "#f7304e",
        backgroundColor: "#fadbe0",
        icon: "book",
        price: 30.0,
        applications: [
            { name: 'App A', url: 'https://appa.com' },
            { name: 'App B', url: 'https://appb.com' }
          ],
          showMenu: false
    },
]);
const store = useAuthStore();
  function toggleMenuApp(index) {
      // Alternar la visibilidad del menú en el índice seleccionado
      store.permission[index].showMenu = !store.permission[index].showMenu;
  };
  function closeMenu(index) {
      // Cerrar el menú
      store.permission[index].showMenu = false;
  };
  onMounted(()=>{
    store.home();
  });
</script>
<style>
.cardtxt {
  transition: color 0.3s;
}
</style>