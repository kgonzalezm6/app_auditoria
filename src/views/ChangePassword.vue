<template>
    <div>
        <NavBar />
        <div v-if="!store.loading_change" class="grid justify-center">
            <form class="max-w-lg max-md:mx-auto w-full p-6 mt-20" @submit.prevent="store.changepassword()">
                <div class="mb-12">
                  <h3 class="text-gray-800 text-4xl font-bold text-center">Cambio de contraseña</h3>            
                </div>

                <div class="mt-4">
                    <!-- <label class="text-gray-800 text-[15px] mb-2 block">Password</label> -->
                    <div class="relative flex items-center">
                      <input v-model="store.change.current_password" name="password" type="password" required class="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent pl-4 pr-10 py-3 rounded-md border border-gray-100 focus:border-blue-600 outline-none transition-all" placeholder="Ingrese su contraseña actual" />
                      
                    </div>
                  </div>
                <div class="mt-4">
                  <!-- <label class="text-gray-800 text-[15px] mb-2 block">Password</label> -->
                  <div class="relative flex items-center">
                    <input v-model="store.change.new_password" name="password" type="password" required class="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent pl-4 pr-10 py-3 rounded-md border border-gray-100 focus:border-blue-600 outline-none transition-all" placeholder="Ingrese su contraseña" />
                    
                  </div>
                </div>
                <div class="mt-4">
                    <!-- <label class="text-gray-800 text-[15px] mb-2 block">Password</label> -->
                    <div class="relative flex items-center">
                      <input v-model="store.change.new_password_confirmation" name="password" type="password" required class="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent pl-4 pr-10 py-3 rounded-md border border-gray-100 focus:border-blue-600 outline-none transition-all" placeholder="Repita su contraseña" />
                      
                    </div>
                  </div>
                <div class="mt-8">
                  <button type="submit" class="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                    Cambiar contraseña
                  </button>
                </div>
                <!-- <p class="text-sm mt-8 text-center text-gray-500">Don't have an account? <a href="javascript:void(0);" class="text-blue-600 font-semibold tracking-wide hover:underline ml-1">Register here</a></p> -->
            </form>
        </div>
        <div v-else class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
          <div class="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <svg class="animate-spin h-10 w-10 text-blue-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
              <path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="0.75"></path>
            </svg>
            <p class="text-gray-700 font-semibold">Cambiando la contraseña</p>
          </div>
        </div>
        <BackTop />
      

    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/Auth';
import NavBar from '@/components/NavBar.vue';
import BackTop from '@/components/BackTop.vue';
import Alert from '@/components/Alert.vue';
const store = useAuthStore();
onMounted(() => {});
</script>

<style scoped>

</style>