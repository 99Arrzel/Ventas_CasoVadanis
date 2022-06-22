import { createApp, h } from "vue";
import { createInertiaApp, Link } from "@inertiajs/inertia-vue3";

import PrimeVue from "primevue/config"; //Base de primevue como UI
/* Esto hace que al dar con inertia visit a algun lado te muestre la carga 👍 */
import { InertiaProgress } from "@inertiajs/progress";
InertiaProgress.init();

const language = {
    locale: {
        startsWith: "Empieza con",
        contains: "Tiene",
        notContains: "No tiene",
        endsWith: "Termina en",
        equals: "Es igual a",
        notEquals: "No es igual a",
        noFilter: "No filtrar",
        lt: "Menos que",
        lte: "Menos que o igual a",
        gt: "Más grande que",
        gte: "Más grande que o igual que",
        dateIs: "Fecha es",
        dateIsNot: "Fecha no es",
        dateBefore: "Fecha es antes",
        dateAfter: "Fecha es después",
        clear: "Limpiar",
        apply: "Aplicar",
        matchAll: "Coincidir todo",
        matchAny: "Coincidir cualquiera",
        addRule: "Agregar regla",
        removeRule: "Eliminar regla",
        accept: "Sí",
        reject: "No",
        choose: "Escoger",
        upload: "Cargar",
        cancel: "Cancelar",
        dayNames: [
            "Domingo",
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sábado",
        ],
        dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
        dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
        monthNames: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ],
        monthNamesShort: [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic",
        ],
        today: "Hoy",
        weekHeader: "Semana",
        firstDayOfWeek: 0,
        dateFormat: "dd/mm/yy",
        weak: "Debil",
        medium: "Medio",
        strong: "Fuerte",
        passwordPrompt: "Ingresa una contraseña",
        emptyFilterMessage: "Sin resultados",
        emptyMessage: "Sin opciones disponibles",
    },
};

/* ============== */
createInertiaApp({
    resolve: (name) => import(`./Pages/${name}`), //Import dinamico
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("router-link", Link)
            .use(PrimeVue, language)
            .mount(el);
    },
});
