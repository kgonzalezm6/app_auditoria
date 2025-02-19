<template>
    <div>
        <div>
           
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
import { onMounted, onUnmounted, ref } from 'vue'
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

<style scoped>

</style>