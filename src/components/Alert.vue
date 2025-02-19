<template>
    <transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        :class="[
          'max-w-sm w-full shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden',
          positionClass, colorClass
        ]"
      >
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <Icon class="h-6 w-6" :icon="iconName" :class="iconClass"/>
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="text-sm font-medium text-gray-900">
                {{ title }}
              </p>
              <p class="mt-1 text-sm text-white">
                {{ message }}
              </p>
            </div>
            <div class="ml-4 flex-shrink-0 flex">
              <button
                @click="$emit('close')"
                class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="sr-only">Close</span>
                <icon name="x-mark" class="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup lang="ts">
  import { computed, onMounted } from 'vue';
  
  const props = defineProps<{
    type: 'success' | 'error' | 'info' | 'warning';
    title: string;
    message: string;
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    duration?: number; // Nueva prop opcional
  }>();
  
  const emit = defineEmits<{
    (e: 'close'): void;
  }>();
  
  // Cerrar automáticamente después de la duración especificada
  onMounted(() => {
    if (props.duration) {
      setTimeout(() => {
        emit('close');
      }, props.duration);
    }
  });
  
  const iconName = computed(() => {
    switch (props.type) {
      case 'success': return 'check-circle';
      case 'error': return 'circle-xmark';
      case 'info': return 'circle-info';
      case 'warning': return 'triangle-exclamation';
    }
  });
  
  const iconClass = computed(() => 'text-white');
  
  const colorClass = computed(() => {
    switch (props.type) {
      case 'success': return 'bg-green-400';
      case 'error': return 'bg-red-400';
      case 'info': return 'bg-blue-400';
      case 'warning': return 'bg-yellow-400';
    }
  });
  
  const positionClass = computed(() => {
    switch (props.position) {
      case 'top-right': return 'fixed top-4 right-4';
      case 'top-left': return 'fixed top-4 left-4';
      case 'bottom-right': return 'fixed bottom-4 right-4';
      case 'bottom-left': return 'fixed bottom-4 left-4';
    }
  });
  </script>
  