<template>
    <div class="mt-2 sm:mx-4 mx-2 pb-10">
        <div>
            <p class="text-white">Fecha</p>
            <Calendar
                v-model="datosFactura.fecha"
                :showTime="true"
                :showSeconds="true"
                disabled
            ></Calendar>
        </div>
        <div>
            <DataTable :value="datosFactura.detalles">
                <template #header>
                    <form
                        @submit.prevent="pushItem"
                        class="flex flex-wrap justify-center gap-2"
                    >
                        <div class="sm:w-fit w-full">
                            <p>Cantidad</p>
                            <InputText
                                v-model="toPush.cantidad"
                                type="number"
                                min="1"
                            >
                            </InputText>
                        </div>
                        <div class="sm:w-fit w-full">
                            <p>Producto</p>
                            <Dropdown
                                :options="productos_c"
                                v-model="toPush.producto"
                                optionLabel="nombre"
                                :filter="true"
                            >
                                <template #option="slotProps">
                                    <div>
                                        <span>{{
                                            `${slotProps.option.nombre} - ${slotProps.option.marca.nombre} | ${slotProps.option.categoria.nombre}`
                                        }}</span>
                                    </div>
                                </template>
                            </Dropdown>
                        </div>
                        <button class="mt-6 p-2 rounded-lg bg-green-500">
                            Añadir
                        </button>
                    </form>
                </template>
                <template #empty> Añade algo a la factura! </template>
                <Column header="Cantidad" field="cantidad"> </Column>
                <Column header="Producto" field="producto">
                    <template #body="slotProps">
                        {{
                            slotProps.data.producto.nombre +
                            " - " +
                            slotProps.data.producto.marca.nombre
                        }}
                    </template>
                </Column>
                <Column header="Precio Unitario" field="pu"> </Column>
                <Column header="Descuento" field="desc"> </Column>
                <Column header="Sub total" field="st"> </Column>
                <Column>
                    <template #body="slotProps">
                        <button
                            @click="removeItem(slotProps)"
                            class="p-2 rounded-lg bg-red-500"
                        >
                            Eliminar
                        </button>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>
<script>
import Layout from "../Layout.vue";
import InputText from "primevue/inputtext";
import { reactive } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import dayjs from "dayjs";
import Calendar from "primevue/calendar";
import { generateControlCode } from "./CodigoControl";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Dropdown from "primevue/dropdown";
import { Notify } from "notiflix";

/** GenerateControlCode requiere
 * @param {String} authorizationNumber Numero de autorizacion
 * @param {String} invoiceNumber Numero de factura
 * @param {String} nitci Número de Identificación Tributaria o Carnet de Identidad
 * @param {String} dateOfTransaction fecha de transaccion de la forma AAAAMMDD
 * @param {String} transactionAmount Monto de la transacción
 * @param {String} dosageKey Llave de dosificación
 *  */

console.log(generateControlCode);

/** Según https://impuestos.com.bo/aspectos-tecnicos-de-las-facturas/#:~:text=Datos%20de%20Dosificaci%C3%B3n.,Documento%20Equivalente%20(dato%20num%C3%A9rico)%3B
 *  La leyenda debe ser asignada automaticamente por el SFV (SIN)
 */

/** Código/Númeor de autorización también lo asigna el SFV (SIN)
 *
 *
 * */

export default {
    components: {
        Dropdown,
        InputText,
        Calendar,
        DataTable,
        Column,
    },
    layout: Layout,
    props: {
        usuario: {
            type: Object,
            required: true,
        },
        personas: {
            type: Array,
            required: true,
        },
        ventas: {
            type: Array,
            required: true,
        },
        productos: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        onMounted(() => {
            setInterval(() => {
                datosFactura.fecha = new Date();
            }, 1000);
        });
        const productos_c = computed(() => {
            /* Lo mismo que productos, pero vamos a filtar los valores en datosFactura.detalles */
            return props.productos.filter((producto) => {
                return !datosFactura.detalles.some(
                    (detalle) => detalle.producto.id === producto.id
                );
            });
        });
        const toPush = reactive({
            producto: "",
            cantidad: "",
        });
        const pushItem = () => {
            /* Validar */
            if (toPush.cantidad.trim() === "") {
                Notify.failure("La cantidad no puede estar vacía");
                return;
            }
            if (toPush.producto.length == 0) {
                Notify.failure("El producto no puede estar vacío");
                return;
            }
            /* Agregar */
            datosFactura.detalles.push({
                producto: toPush.producto,
                cantidad: toPush.cantidad,
                pu: toPush.producto.precio,
                desc: toPush.producto.descuento,
                /* Calculamos el valor con la cantidad * el producto menos el producto * cantidad */
                st: toPush.cantidad * toPush.producto.precio,
                /* Falta el  */
            });
            /* Limpiar */
            toPush.producto = "";
            toPush.cantidad = "";
        };
        const datosFactura = reactive({
            fecha: "",
            codigo_control: "",
            ley_grabada: "",
            persona: "",
            proveedor: "",
            marca: "",
            cantidad: "",
            precio: "",
            total: "",
            detalles: [],
        });
        return {
            pushItem,
            productos_c,
            toPush,
            datosFactura,
        };
    },
};
</script>
