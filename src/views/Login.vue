<template>
    <div v-if="!store.loading_login" class="font-[sans-serif] max-w-7xl mx-auto h-screen">
      <div class="grid md:grid-cols-2 items-center gap-8 h-full">
        <form class="max-w-lg max-md:mx-auto w-full p-6" @submit.prevent="store.login()">
          <!-- <img src="/src/assets/img/logo.png" alt="" srcset="" class="w-[50%]"> -->
          <div class="mb-12">
            <h3 class="text-gray-800 text-4xl font-bold text-center">Iniciar Sesión</h3>
            
          </div>
  
          <div>
            <label class="text-gray-800 text-[15px] mb-2 block">Email</label>
            <div class="relative flex items-center">
              <input name="email" type="text" v-model="store.sesion.email" required class="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent pl-4 pr-10 py-3 rounded-md border border-gray-100 focus:border-blue-600 outline-none transition-all" placeholder="Ingrese su email" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4" viewBox="0 0 682.667 682.667">
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                  </clipPath>
                </defs>
                <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                  <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                  <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                </g>
              </svg>
            </div>
          </div>
  
          <div class="mt-4">
            <label class="text-gray-800 text-[15px] mb-2 block">Password</label>
            <div class="relative flex items-center">
              <input name="password" type="password" v-model="store.sesion.password" required class="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent pl-4 pr-10 py-3 rounded-md border border-gray-100 focus:border-blue-600 outline-none transition-all" placeholder="Ingrese su contraseña" />
              
            </div>
          </div>
          <div class="mt-8">
            <button type="submit" class="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Log in
            </button>
          </div>
          <!-- <p class="text-sm mt-8 text-center text-gray-500">Don't have an account? <a href="javascript:void(0);" class="text-blue-600 font-semibold tracking-wide hover:underline ml-1">Register here</a></p> -->
        </form>
  
        <div class="hidden h-full md:py-6 md:flex items-center relative max-md:before:hidden before:absolute before:bg-gradient-to-r before:from-gray-50 before:via-[#E4FE66] before:to-[#55F5A3] before:h-full before:w-3/4 before:right-0 before:z-0">
          <img src="/src/assets/img/Monumentos.png" class="rounded-md lg:w-4/5 md:w-11/12 z-50 relative" alt="Dining Experience" />
        </div>
      </div>
    </div>
    <div v-else class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div class="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
        <svg class="animate-spin h-10 w-10 text-blue-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="0.75"></path>
        </svg>
        <p class="text-gray-700 font-semibold">Validando sus credenciales</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'; // Importa el hook `useRouter`
  import { useAuthStore } from '@/stores/auth';
  
  // Inicializa el router
  const router = useRouter();
  const store = useAuthStore();

  </script>