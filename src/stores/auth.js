import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { ref, reactive } from 'vue';
import axios from 'axios';
import { LoaderCircle } from 'lucide-vue-next';
// import { useGlobalStore } from './global';
export const useAuthStore = defineStore('auth', () => {
//   const global = useGlobalStore();
  const router = useRouter();
  let errors = ref([]);
  let id = ref(null);
  let registro = ref([]);
  let loading_login = ref(false);
  let loading_change = ref(false);
  let loading_permission = ref(false);
  let registros = ref([]);
  let loading_registros = ref(false);
  let loading_opciones = ref(false);
  let opcion_editar = ref(false);
  let opcion_nuevo = ref(false);
  let opcion_eliminar = ref(false);
  let btn_editar = ref(false);
  let btn_nuevo = ref(false);
  let btn_eliminar = ref(false);
  let permission = ref([]);
  let sesion = reactive({email: null, password:null })
  let change = reactive({current_password: null, new_password: null, new_password_confirmation:null});
  const encodeBase64 = (data) => {
    return btoa(JSON.stringify(data)); // Convierte el objeto a string y luego a Base64     
  }; 
    async function login() {
      try {
          loading_login.value = true;
          const response = await axios.post('login',{
            data: encodeBase64(sesion)
          });
          if (response.status === 200) {
              const data = response.data; 
              if (data.code === 1) { // Login exitoso  
                  const expirationDate = new Date(data.expires_at);              
                  localStorage.setItem("token", data.token);
                  localStorage.setItem("expires_at", expirationDate.toLocaleString());
                  localStorage.setItem("user", btoa(data.user.smallname));
                  router.push('/');

              } else if (data.code === 2) { // Credenciales incorrectas
                  alert('Las credenciales son incorrectas');
              } else { // Otros posibles errores controlados por el backend
                  alert('Error con la petición: ' + data.mensaje);
              }
          } else {
              alert('Error del servidor: ' + response.statusText);
          }
      } catch (error) {
          // Aquí manejamos errores no previstos o problemas de conexión
          if (error.response) {
              // Errores con código de estado HTTP devueltos por el servidor
              alert(`Error del servidor: ${error.response.status} - ${error.response.data.mensaje || 'Ocurrió un error inesperado'}`);
          } else if (error.request) {
              // Problema de red o el servidor no respondió
              alert('No se pudo conectar con el servidor');
          } else {
              // Error en la configuración de la petición
              alert('Error en la solicitud: ' + error.message);
          }
      } finally {
        loading_login.value = false;
      }
    }
    async function logout(){
      try {

        const response = await axios.post('logout', {}, {
          headers: { // ✅ Encapsular en "headers"
              'Authorization': 'Bearer ' + localStorage.getItem('token'),
              'Content-Type': 'application/json'
          }
      });
          if (response.status === 200) {
              const data = response.data; 
              if (data.code === 1) { // Logout exitoso               
                  localStorage.removeItem("token");
                  localStorage.removeItem("expires_at");
                  router.push('/login');
              } else if (data.code === 2) { // Credenciales incorrectas
                  alert('No se encontro un token activo');
              } else { // Otros posibles errores controlados por el backend
                  alert('Error con la petición: ' + data.mensaje);
              }
          } else {
              alert('Error del servidor: ' + response.statusText);
          }
      } catch (error) {
         // Aquí manejamos errores no previstos o problemas de conexión
         if (error.response) {
              // Errores con código de estado HTTP devueltos por el servidor
              alert(`Error del servidor: ${error.response.status} - ${error.response.data.mensaje || 'Ocurrió un error inesperado'}`);
          } else if (error.request) {
              // Problema de red o el servidor no respondió
              alert('No se pudo conectar con el servidor');
          } else {
              // Error en la configuración de la petición
              alert('Error en la solicitud: ' + error.message);
          }
      }
    }
    async function changepassword(){
        try {
            loading_change.value = true;
          const response = await axios.post('change_password',{
            data: encodeBase64(change)
          }, {
            headers: { 
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        });
            if (response.status === 200) {
                const data = response.data; 
                if (data.code === 1) { // Logout exitoso               
                    localStorage.removeItem("token");
                    localStorage.removeItem("expires_at");
                    router.push('/login');
                } else if (data.code === 2) { // Credenciales incorrectas
                    alert('Contraseña actual incorrecta');
                } else { // Otros posibles errores controlados por el backend
                    alert('Error con la petición: ' + data.mensaje);
                }
            } else {
                alert('Error del servidor: ' + response.statusText);
            }
        } catch (error) {
           // Aquí manejamos errores no previstos o problemas de conexión
           if (error.response) {
                // Errores con código de estado HTTP devueltos por el servidor
                alert(`Error del servidor: ${error.response.status} - ${error.response.data.mensaje || 'Ocurrió un error inesperado'}`);
            } else if (error.request) {
                // Problema de red o el servidor no respondió
                alert('No se pudo conectar con el servidor');
            } else {
                // Error en la configuración de la petición
                alert('Error en la solicitud: ' + error.message);
            }
        } finally{
            loading_change.value = false;
        }
    }
    async function home(){
        try {
          loading_permission.value = true;
          const response = await axios.post('home', {}, {
            headers: { // ✅ Encapsular en "headers"
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        });
            if (response.status === 200) {
                const data = response.data; 
                if (data.code === 1) { // Logout exitoso               
                    permission.value = data.datos;
                }else { // Otros posibles errores controlados por el backend
                    alert('Error con la petición: ' + data.mensaje);
                }
            } else {
                alert('Error del servidor: ' + response.statusText);
            }
        } catch (error) {
           // Aquí manejamos errores no previstos o problemas de conexión
           if (error.response) {
                // Errores con código de estado HTTP devueltos por el servidor
                alert(`Error del servidor: ${error.response.status} - ${error.response.data.mensaje || 'Ocurrió un error inesperado'}`);
            } else if (error.request) {
                // Problema de red o el servidor no respondió
                alert('No se pudo conectar con el servidor');
            } else {
                // Error en la configuración de la petición
                alert('Error en la solicitud: ' + error.message);
            }
        } finally {
            loading_permission.value = false;
        }
      }
    function opciones(type, item = null) {
      registro.value = item;
      switch (type) {
        case value:
          // Add your case logic here
          break;
        default:
          break;
      }
      loading_opciones.value = true;
    };
    function reset() {
      btn_nuevo.value = false;
      btn_editar.value = false;
      btn_eliminar.value = false;
      registro.value = [];
      registros.value = [];
      loading_registro.value = false;
      loading_registros.value = false;
    }
  return {
    errors,
    registros,
    loading_registros,
    registro,
    loading_login,
    loading_change,
    loading_permission,
    loading_opciones,
    id,
    opcion_editar,
    opcion_nuevo,
    opcion_eliminar,
    btn_editar,
    btn_nuevo,
    btn_eliminar,
    sesion,
    change,
    permission,

    login,
    logout,
    changepassword,
    home,
    opciones,
    reset,
  };
});