<template>
    <main class="relative min-h-screen">
        <header>
            <nav
                class="flex flex-wrap items-center justify-between w-full py-4 lg:py-0 px-4 text-lg text-gray-700 bg-gray-600"
            >
                <div class="flex">
                    <a @click="irA('dashboard')" class="text-white text-4xl">
                        <img
                            src="/img/VanadisOK.png"
                            class="object-contain h-20"
                            alt="Logo"
                        />
                    </a>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="menu-button"
                    @click="menuOptions.show = !menuOptions.show"
                    class="h-6 w-6 cursor-pointer lg:hidden block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                <div
                    :class="
                        'w-full lg:flex lg:items-center lg:w-auto' +
                        (menuOptions.show ? ' hidden' : '')
                    "
                    id="menu"
                >
                    <ul
                        class="pt-2 text-base text-gray-700 lg:flex lg:justify-between lg:pt-0"
                    >
                        <li>
                            <SplitButton
                                label="Dashboard"
                                :model="direcciones"
                                class="p-button-md p-button-text mt-1.5"
                            ></SplitButton>
                        </li>

                        <li>
                            <a
                                class="ml-6 text-white hover:text-red-600 mr-4 lg:p-4 py-2 block"
                                @click="irA('dashboard')"
                                >Estadísticas</a
                            >
                        </li>
                        <li>
                            <a
                                class="ml-6 text-white hover:text-red-600 mr-4 lg:p-4 py-2 block"
                                @click="irA('dashboard')"
                                >Reportes</a
                            >
                        </li>
                        <li>
                            <a
                                class="ml-6 text-white hover:text-red-600 mr-4 lg:p-4 py-2 block"
                                @click="irA('logout')"
                                >Cerrar sesión</a
                            >
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <article>
            <slot />
        </article>
        <!-- <footer class="absolute w-full bottom-0 mt-2">
            <div class="flex bg-gray-700 h-10 justify-center">
                <p class="text-center self-center text-white">
                    Hecho por
                    <a
                        class="text-green-400"
                        href="https://github.com/CraniumAdamantium"
                        >Link
                    </a>
                    y
                    <a class="text-blue-500" href="https://github.com/Hyhy092"
                        >Wits</a
                    >
                </p>
            </div>
        </footer> -->
    </main>
</template>
<script>
import { Inertia } from "@inertiajs/inertia";
import SplitButton from "primevue/splitbutton";
import { reactive } from "vue";
export default {
    components: {
        SplitButton,
    },
    setup() {
        const menuOptions = reactive({
            show: true,
        });

        return {
            menuOptions,
            irA(ruta) {
                Inertia.visit(route(ruta));
            },
            direcciones: [
                {
                    label: "Usuarios",
                    command: () => {
                        Inertia.visit(route("usuarios"));
                    },
                },
                {
                    label: "Ventas",
                    command: () => {
                        Inertia.visit(route("ventas"));
                    },
                },
                {
                    label: "Productos",
                    command: () => {
                        Inertia.visit(route("productos"));
                    },
                },
                {
                    label: "Categorias",
                    command: () => {
                        Inertia.visit(route("categorias"));
                    },
                },
                {
                    label: "Proveedores",
                    command: () => {
                        Inertia.visit(route("proveedores"));
                    },
                },

                {
                    label: "Transacciones",
                    command: () => {
                        Inertia.visit(route("transacciones"));
                    },
                },
            ],
        };
    },
};
</script>
