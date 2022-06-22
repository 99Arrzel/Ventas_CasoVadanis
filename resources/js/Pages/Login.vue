<template>
    <div class="container mx-auto p-8">
        <div class="mx-auto max-w-sm">
            <div class="py-10 text-center"></div>

            <div class="bg-white shadow rounded-lg">
                <div
                    class="border-b py-8 font-bold text-black text-center text-xl tracking-widest uppercase"
                >
                    <img
                        src="/img/VanadisOK.png"
                        class="object-contain h-50 mx-auto"
                        alt="Logo"
                    />
                </div>

                <form @submit.prevent="submit" class="bg-red-300 px-10 py-10">
                    <div class="mb-3">
                        <input
                            v-model="data.usuario"
                            class="border w-full p-3 rounded-lg shadow border-red-500 focus:border-red-500"
                            name="email"
                            type="text"
                            min="3"
                            placeholder="Ingresa tu usuario"
                            autocomplete="off"
                        />
                    </div>
                    <div class="mb-6">
                        <input
                            v-model="data.password"
                            class="border w-full p-3 rounded-lg shadow border-red-500"
                            name="password"
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            autocomplete="off"
                            min="5"
                        />
                    </div>
                    <div class="flex place-content-center">
                        <button
                            class="bg-red-600 hover:bg-primary-dark p-4 text-sm text-white uppercase font-bold rounded-lg shadow-lg"
                        >
                            Iniciar sesión
                        </button>
                    </div>
                </form>

                <div class="border-t px-10 py-6">
                    <div class="flex justify-between">
                        <!-- Esto podría ser una lista -->
                        <p class="text-red-500">{{ data.showError }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Inertia } from "@inertiajs/inertia";
import { reactive } from "vue";

export default {
    setup() {
        const data = reactive({
            usuario: "",
            password: "",
            showError: "",
        });
        const submit = () => {
            Inertia.post(route("loginIntento"), data, {
                onError(errors) {
                    let concat = "";
                    for (let key in errors) {
                        concat += errors[key] + "\n";
                    }
                    data.showError = concat;
                },
            });
        };
        return {
            data,
            submit,
        };
    },
};
</script>
