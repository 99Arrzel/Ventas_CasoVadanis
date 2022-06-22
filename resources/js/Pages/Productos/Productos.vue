<template>
    <div class="mx-2 sm:mx-4 mt-2 pb-12">
        <p class="text-center text-white text-2xl">Productos</p>
        <DataTable
            :value="productos_c"
            rowGroupMode="subheader"
            groupRowsBy="id_grupo_producto"
            sortMode="single"
            :expandableRowGroups="true"
            v-model:expandedRowGroups="data.expandido"
            responsiveLayout="scroll"
            sortField="id_grupo_producto"
            :sortOrder="1"
            class="p-datatable-sm"
            v-model:filters="filters"
            editMode="row"
            v-model:editingRows="data.editRow"
            @row-edit-save="editarProducto"
            showGridlines
        >
            <template #header>
                <form
                    @submit.prevent="crearProducto"
                    class="flex flex-wrap gap-2 justify-center"
                >
                    <div class="sm:w-fit w-full">
                        <p>Nombre*</p>
                        <InputText
                            class="w-full"
                            v-model="nuevoProducto.nombre"
                            type="text"
                        ></InputText>
                    </div>
                    <div class="sm:w-fit w-full">
                        <p>Precio*</p>
                        <InputText
                            min="0"
                            type="number"
                            class="w-full"
                            v-model="nuevoProducto.precio"
                        ></InputText>
                    </div>
                    <div class="sm:w-fit w-full">
                        <p>Descuento*</p>
                        <InputText
                            min="0"
                            max="100"
                            type="number"
                            class="w-full"
                            v-model="nuevoProducto.descuento"
                        ></InputText>
                    </div>
                    <div class="sm:w-fit w-full">
                        <p>Cantidad*</p>
                        <InputText
                            min="0"
                            type="number"
                            class="w-full"
                            v-model="nuevoProducto.cantidad"
                        ></InputText>
                    </div>
                    <div class="sm:w-fit w-full">
                        <p>Descripción*</p>
                        <InputText
                            class="w-full"
                            type="text"
                            v-model="nuevoProducto.descripcion"
                        ></InputText>
                    </div>
                    <div class="sm:w-fit w-full">
                        <p>Fecha expiración*</p>
                        <Calendar
                            placeholder="dd/mm/aaaa"
                            format="dd/mm/yyyy"
                            class="w-full"
                            v-model="nuevoProducto.fecha_expiracion"
                        ></Calendar>
                    </div>
                    <div class="sm:w-fit w-full">
                        <p>Categoria*</p>
                        <Dropdown
                            :filter="true"
                            :options="categorias"
                            optionLabel="nombre"
                            class="w-full"
                            v-model="nuevoProducto.categoria"
                        ></Dropdown>
                    </div>
                    <div class="sm:w-fit w-full">
                        <p>Marca*</p>
                        <Dropdown
                            :filter="true"
                            :options="marcas"
                            optionLabel="nombre"
                            class="w-full"
                            v-model="nuevoProducto.marca"
                        ></Dropdown>
                    </div>
                    <div class="sm:w-fit w-full">
                        <p>Detalle*</p>
                        <div class="flex">
                            <Dropdown
                                :filter="true"
                                :options="detalles"
                                optionLabel="nombre"
                                class="w-full"
                                v-model="nuevoProducto.detalle"
                            >
                                <template #option="slotProps">
                                    <span>
                                        {{
                                            `${slotProps.option.nombre}[${
                                                slotProps.option.cantidad
                                            } - ${getDate(
                                                slotProps.option.transaccion
                                                    .fecha
                                            )}]`
                                        }}
                                    </span>
                                </template>
                            </Dropdown>
                            <button
                                class="text-white rounded-tr-lg rounded-br-lg p-2 bg-green-500"
                            >
                                Crear
                            </button>
                        </div>
                    </div>
                    <div class="sm:w-fit w-full">
                        <p class="text-center">Buscar</p>
                        <InputText
                            v-model="filters['global'].value"
                            class="w-full"
                            placeholder="Buscar..."
                        >
                        </InputText>
                    </div>
                </form>
            </template>
            <template #empty> Sin productos </template>
            <Column field="id_grupo_producto" header="Productos"></Column>
            <Column field="nombre" header="Nombre" style="min-width: 150px"
                ><template #editor="{ data, field }">
                    <InputText
                        v-model="data[field]"
                        style="max-width: 150px"
                        type="text"
                    />
                </template>
            </Column>
            <Column field="precio" header="Precio" style="min-width: 100px">
                <template #editor="{ data, field }">
                    <InputText
                        style="max-width: 100px"
                        v-model="data[field]"
                        type="number"
                        min="0"
                    />
                </template>
            </Column>
            <Column
                field="descuento"
                header="Descuento"
                style="min-width: 100px"
            >
                <template #body="slotProps">
                    <span>{{ slotProps.data.descuento }}%</span>
                </template>
                <template #editor="{ data, field }">
                    <InputText
                        v-model="data[field]"
                        style="max-width: 100px"
                        type="number"
                        min="0"
                    />
                </template>
            </Column>
            <Column field="cantidad" header="Cantidad" style="min-width: 100px">
                <template #editor="{ data, field }">
                    <InputText
                        v-model="data[field]"
                        class="w-fit"
                        style="max-width: 100px"
                        type="number"
                        min="0"
                    /> </template
            ></Column>
            <Column
                field="descripcion"
                header="Descripción"
                style="min-width: 200px"
            >
                <template #editor="{ data, field }">
                    <InputText
                        style="max-width: 200px"
                        v-model="data[field]"
                        type="text"
                    /> </template
            ></Column>
            <Column
                field="fecha_expiracion"
                header="Fecha de expiración"
                style="min-width: 100px"
            >
                <template #body="slotProps">
                    <span>{{
                        getDate(slotProps.data.fecha_expiracion) != ""
                            ? getDate(slotProps.data.fecha_expiracion)
                            : "-"
                    }}</span>
                </template>
                <template #editor="{ data }">
                    <Calendar
                        style="max-width: 150px"
                        v-model="data.fecha_expiracion_c"
                        type="text"
                    /> </template
            ></Column>
            <Column field="marca" header="Marca" style="min-width: 200px">
                <template #body="slotProps">
                    <span>{{ slotProps.data.marca.nombre }}</span>
                </template>
                <template #editor="{ data, field }">
                    <Dropdown
                        :filter="true"
                        :options="marcas"
                        optionLabel="nombre"
                        style="max-width: 150px"
                        v-model="data[field]"
                        type="text"
                    /> </template></Column
            ><Column
                field="categoria"
                header="Categoria"
                style="min-width: 200px"
            >
                <template #body="slotProps">
                    <span>{{ slotProps.data.categoria.nombre }}</span>
                </template>
                <template #editor="{ data, field }">
                    <Dropdown
                        :filter="true"
                        :options="categorias"
                        optionLabel="nombre"
                        style="max-width: 150px"
                        v-model="data[field]"
                        type="text"
                    /> </template
            ></Column>
            <Column
                field="detalle"
                header="Detalle Transacción"
                style="min-width: 200px"
            >
                <template #body="slotProps">
                    <span>
                        {{
                            `${slotProps.data.detalle.nombre} [${
                                slotProps.data.detalle.cantidad
                            } - ${getDate(
                                slotProps.data.detalle.transaccion.fecha
                            )}]`
                        }}
                    </span>
                </template>
                <template #editor="{ data, field }">
                    <Dropdown
                        :filter="true"
                        :options="detalles"
                        optionLabel="nombre"
                        style="max-width: 150px"
                        v-model="data[field]"
                    >
                        <template #option="slotProps">
                            <span>
                                {{
                                    `${slotProps.option.nombre}[${
                                        slotProps.option.cantidad
                                    } - ${getDate(
                                        slotProps.option.transaccion.fecha
                                    )}]`
                                }}
                            </span>
                        </template></Dropdown
                    >
                </template></Column
            >
            <Column field="deleted_at" header="Estado" style="min-width: 200px">
                <template #body="slotProps">
                    <div
                        class="w-fit rounded-lg px-2"
                        :class="
                            slotProps.data.deleted_at == null
                                ? 'bg-green-500'
                                : 'bg-red-500'
                        "
                    >
                        {{
                            slotProps.data.deleted_at == null
                                ? "Actual"
                                : "Historico desde " +
                                  getDate(slotProps.data.deleted_at)
                        }}
                    </div>
                </template>
            </Column>
            <Column
                field="created_at"
                header="Fecha de creación"
                style="min-width: 100px"
            >
                <template #body="slotProps">
                    {{ getDate(slotProps.data.created_at) }}
                </template>
            </Column>
            <Column
                :rowEditor="true"
                style="width: 10%; min-width: 8rem"
                bodyStyle="text-align:center"
                header="Editar"
            >
            </Column>
            <template #groupheader="slotProps">
                <span class="bg-sky-500 px-2 rounded-lg">{{
                    `${slotProps.data.nombre} ${slotProps.data.marca.nombre}`
                }}</span>
            </template>
        </DataTable>
    </div>
</template>
<script>
/* Import layout */
import Layout from "../Layout.vue";

import { Inertia } from "@inertiajs/inertia";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import dayjs from "dayjs";
import { reactive, ref } from "@vue/reactivity";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import { computed } from "@vue/runtime-core";
import { Notify } from "notiflix";
import { FilterMatchMode, FilterOperator } from "primevue/api";

export default {
    components: {
        Calendar,
        DataTable,
        Column,
        InputText,
        Dropdown,
    },
    layout: Layout,

    props: {
        usuario: {
            type: Object,
            required: true,
        },
        productos: {
            type: Array,
            required: true,
        },
        marcas: {
            type: Array,
            required: true,
        },
        detalles: {
            type: Array,
            required: true,
        },
        categorias: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const filters = ref({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        });
        const nuevoProducto = reactive({
            nombre: "",
            precio: "",
            descuento: "",
            cantidad: "",
            descripcion: "",
            fecha_expiracion: "",
            categoria: "",
            marca: "",
            detalle: "",
        });
        const crearProducto = () => {
            Inertia.post(
                route("productos_create"),
                {
                    nombre: nuevoProducto.nombre,
                    precio: nuevoProducto.precio,
                    descuento: nuevoProducto.descuento,
                    cantidad: nuevoProducto.cantidad,
                    descripcion: nuevoProducto.descripcion,
                    fecha_expiracion: nuevoProducto.fecha_expiracion,
                    id_categoria: nuevoProducto.categoria.id,
                    id_marca: nuevoProducto.marca.id,
                    id_detalle: nuevoProducto.detalle.id,
                },
                {
                    preserveState: true,
                    preserveScroll: true,
                    onSuccess: () => {
                        nuevoProducto.nombre = "";
                        nuevoProducto.precio = "";
                        nuevoProducto.descuento = "";
                        nuevoProducto.cantidad = "";
                        nuevoProducto.descripcion = "";
                        nuevoProducto.fecha_expiracion = "";
                        nuevoProducto.categoria = "";
                        nuevoProducto.marca = "";
                        nuevoProducto.detalle = "";
                        Notify.success("Producto creado correctamente");
                    },
                    onError: (error) => {
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                }
            );
        };

        const productos_c = computed(() => {
            return props.productos.map((p) => {
                return {
                    ...p,
                    fecha_expiracion_c: new Date(p.fecha_expiracion),
                };
            });
        });
        const getDate = (date) => {
            let conv = dayjs(date).format("DD/MM/YYYY");
            return conv != "Invalid Date" ? conv : "";
        };
        const data = reactive({
            expandido: [],
            editRow: [],
        });
        const log = (d, e) => {
            console.log(d);
            console.log(e);
        };
        const editarProducto = (e) => {
            console.log(e);
            Inertia.post(
                route("productos_update"),
                {
                    id: e.newData.id,
                    nombre: e.newData.nombre,
                    precio: e.newData.precio,
                    descuento: e.newData.descuento,
                    cantidad: e.newData.cantidad,
                    descripcion: e.newData.descripcion,
                    fecha_expiracion: e.newData.fecha_expiracion_c,
                    id_categoria: e.newData.categoria.id,
                    id_marca: e.newData.marca.id,
                    id_detalle: e.newData.detalle.id,
                },
                {
                    preserveState: true,
                    preserveScroll: true,
                    onSuccess: () => {
                        Notify.success("Producto editado correctamente");
                    },
                    onError: (error) => {
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                }
            );
        };

        return {
            filters,
            crearProducto,
            nuevoProducto,
            productos_c,
            editarProducto,
            log,
            getDate,
            data,
        };
    },
};
</script>
