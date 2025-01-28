import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue'; // Asegúrate de que el path sea correcto
import Home from '@/views/Home.vue';   // Asegúrate de que el path sea correcto

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_MY_URL), // Usa el valor configurado en tu entorno
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }, // Agregas protección para rutas que necesitan autenticación
    },
  ],
});

// Middleware para proteger rutas
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Verifica si el usuario está autenticado
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Redirige al login si no está autenticado
  } else if (to.name === 'Login' && isAuthenticated) {
    next('/'); // Redirige al home si el usuario ya está autenticado
  } else {
    next(); // Permite la navegación en otros casos
  }
});

export default router;
