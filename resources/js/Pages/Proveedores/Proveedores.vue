<template>
    <div class="flex flex-col mx-2 sm:mx-5 pb-12">
        <p class="text-center text-white text-2xl">Proveedores</p>
        <DataTable
            :value="table"
            :rows="10"
            :paginator="true"
            responsiveLayout="scroll"
            :scrollable="true"
            editMode="cell"
            class="p-datatable-sm"
        >
            <template #header>
                <form
                    @submit.prevent="crearProveedor"
                    class="flex flex-wrap justify-center gap-2"
                >
                    <div class="sm:w-fit w-full">
                        <p>Proveedor*</p>
                        <Dropdown
                            :options="personasDrop"
                            v-model="persona.nombre"
                            optionLabel="label"
                            placeholder="Juan Perez"
                            :filter="true"
                        />
                    </div>
                    <div class="sm:w-fit w-full">
                        <p>Marca*</p>
                        <Dropdown
                            :options="marcasDrop"
                            v-model="marca.nombre"
                            optionLabel="label"
                            placeholder="Elige las marcas"
                            :filter="true"
                        />
                    </div>
                    <div class="sm:w-fit w-full">
                        <button
                            class="bg-green-500 p-2 rounded-lg text-white mt-6"
                        >
                            Crear
                        </button>
                    </div>
                </form>
            </template>
            <Column header="Nombre de Proveedor" field="label" :sortable="true">
            </Column>
            <Column header="Telefono" field="telefono" :sortable="true">
            </Column>
            <Column header="Marca" field="marca" :sortable="true"> </Column>
            <Column header="Estado" field="deleted_at" :sortable="true">
                <template #body="slotProps">
                    <div
                        @click="cambiarEstadoProveedor(slotProps.data)"
                        class="px-2 rounded-lg w-fit"
                        :class="
                            slotProps.data.deleted_at == null
                                ? 'bg-green-500'
                                : 'bg-red-500'
                        "
                    >
                        {{
                            slotProps.data.deleted_at == null
                                ? "Activo"
                                : `Inactivo desde ${getDate(
                                      slotProps.data.deleted_at
                                  )} `
                        }}
                    </div>
                </template>
            </Column>
            <Column>
                <template #body="slotProps">
                    <div>
                        <button
                            class="bg-red-500 text-white text-center px-2 rounded-lg"
                            @click="eliminarProveedor(slotProps.data)"
                        >
                            X
                        </button>
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>
<script>
import Calendar from "primevue/calendar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Layout from "../Layout";
import IconoCrear from "../Comun/IconoCrear.vue";
import Tooltip from "primevue/tooltip";
import Divider from "primevue/divider";
import { computed, reactive, ref } from "@vue/runtime-core";
import dayjs from "dayjs";
import Dropdown from "primevue/dropdown";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Inertia } from "@inertiajs/inertia";
import { Confirm } from "notiflix";
/* Confirm trucho en rojo */
Confirm.init({
    titleColor: "#FF0000",
    messageColor: "#FF0000",
    okButtonBackground: "#FF0000",
});

export default {
    layout: Layout,
    directives: {
        Tooltip,
    },
    components: {
        Dropdown,
        Calendar,
        Divider,
        IconoCrear,
        InputText,
        DataTable,
        Column,
        dayjs,
    },
    props: {
        usuario: { type: Object, required: true },
        personas: { type: Array, required: true },
        proveedores: { type: Array, required: true },
        marcas: { type: Array, required: true },
    },
    setup(props) {
        const getDate = (date) => {
            let conv = dayjs(date).format("DD/MM/YYYY");
            return conv != "Invalid Date" ? conv : "";
        };
        const table = computed(() => {
            return props.proveedores.map((p) => {
                return {
                    value: p.id,
                    label: `${p.personas.nombre} ${p.personas.apellido_p} ${p.personas.apellido_m}`,
                    telefono: `${p.personas.telefono}`,
                    marca: `${p.marcas.nombre}`,
                    ...p,
                };
            });
        });
        const marca = reactive({
            nombre: "",
        });
        const persona = reactive({
            nombre: "",
            telefono: "",
        });
        const marcasDrop = computed(() => {
            return props.marcas.map((p) => {
                return {
                    value: p.id,
                    label: `${p.nombre}`,
                };
            });
        });
        const personasDrop = computed(() => {
            return props.personas.map((p) => {
                return {
                    value: p.id,
                    label: `${p.nombre} ${p.apellido_p} ${p.apellido_m}`,
                };
            });
        });
        const crearProveedor = () => {
            if (persona.nombre.length == "") {
                Notify.failure("Seleccione una persona");
                return;
            }
            if (marca.nombre.length == "") {
                Notify.failure("Seleccione una marca");
                return;
            }
            Inertia.post(
                route("proveedores_create"),
                {
                    id_marca: marca.nombre.value,
                    id_persona: persona.nombre.value,
                },
                {
                    only: ["proveedores", "flash", "errors"],
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        Notify.success("Proveedor creado correctamente");
                    },
                    onError: (error) => {
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                }
            );
        };
        const cambiarEstadoProveedor = (u_data) => {
            Inertia.post(
                route("proveedores_delete"),
                {
                    id: u_data.value,
                },
                {
                    only: ["proveedores", "errors", "flash"],
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        Notify.success("Estado cambiado");
                    },
                    onError: (error) => {
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                }
            );
        };
        const eliminarProveedor = (u_data) => {
            Confirm.show(
                "¿Está seguro de eliminar este proveedor?",
                "Eliminarás al proveedor " + u_data.label,
                "Ok",
                "Cancelar",
                () => {
                    Inertia.post(
                        route("proveedores_truedelete"),
                        {
                            id: u_data.value,
                        },
                        {
                            only: ["proveedores", "errors", "flash"],
                            preserveScroll: true,
                            preserveState: true,
                            onSuccess: () => {
                                Notify.success("Proveedor eliminado");
                            },
                            onError: (error) => {
                                for (let i in error) {
                                    Notify.failure(error[i]);
                                }
                            },
                        }
                    );
                }
            );
        };

        return {
            eliminarProveedor,
            getDate,
            marcasDrop,
            personasDrop,
            marca,
            persona,
            crearProveedor,
            table,
            cambiarEstadoProveedor,
        };
    },
};
</script>
<style>
/* Quitar el botón número del input type number */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
}
</style>
