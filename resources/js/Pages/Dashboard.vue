<template>
    <div
        class="flex flex-wrap justify-center gap-4 mt-2 sm:mt-10 sm:mx-4 pb-10"
    >
        <Card class="w-80">
            <template #header>
                <img
                    src="/img/carrito.png"
                    style="height: 15rem"
                    class="object-contain h-48 w-96"
                    alt="Carrito de ventas"
                />
            </template>
            <template #title> Ventas</template>
            <template #content>
                <p>Realiza la venta de productos, emite facturas</p>
            </template>
            <template #footer>
                <button
                    @click="goto('ventas')"
                    class="py-2 px-4 shadow rounded-md bg-green-600 w-full"
                >
                    Ir
                </button>
            </template>
        </Card>
        <Card class="w-80">
            <template #header>
                <img
                    src="/img/usuario.png"
                    style="height: 15rem"
                    class="object-contain h-48 w-96"
                    alt="Usuario"
                />
            </template>
            <template #title> Usuarios</template>
            <template #content>
                <p>
                    Añade modifica o elimina usuarios, personas, clientes y
                    empleados
                </p>
            </template>
            <template #footer>
                <button
                    @click="goto('usuarios')"
                    class="py-2 px-4 shadow rounded-md bg-green-600 w-full"
                >
                    Ir
                </button>
            </template>
        </Card>
        <Card class="w-80">
            <template #header>
                <img
                    src="/img/caja.png"
                    style="height: 15rem"
                    class="object-contain h-48 w-96"
                    alt="Usuario"
                />
            </template>
            <template #title> Productos</template>
            <template #content>
                <p>Añade modifica o elimina productos con detalle</p>
            </template>
            <template #footer>
                <button
                    class="py-2 px-4 shadow rounded-md bg-green-600 w-full"
                    @click="goto('productos')"
                >
                    Ir
                </button>
            </template>
        </Card>
        <Card class="w-80">
            <template #header>
                <img
                    src="/img/Categorias.png"
                    style="height: 15rem"
                    class="object-contain h-48 w-96"
                    alt="Usuario"
                />
            </template>
            <template #title> Categorias</template>
            <template #content>
                <p>Añade o modifica categorías y marcas y sus relaciones</p>
            </template>
            <template #footer>
                <button
                    class="py-2 px-4 shadow rounded-md bg-green-600 w-full"
                    @click="goto('categorias')"
                >
                    Ir
                </button>
            </template>
        </Card>
        <Card class="w-80">
            <template #header>
                <img
                    src="/img/proveedor.png"
                    style="height: 15rem"
                    class="object-contain h-48 w-96"
                    alt="Usuario"
                />
            </template>
            <template #title> Proveedores</template>
            <template #content>
                <p>Asocia proveedores con personas y marcas</p>
            </template>
            <template #footer>
                <button
                    @click="goto('proveedores')"
                    class="py-2 px-4 shadow rounded-md bg-green-600 w-full"
                >
                    Ir
                </button>
            </template>
        </Card>
        <Card class="w-80">
            <template #header>
                <img
                    src="/img/transaccion.png"
                    style="height: 15rem"
                    class="object-contain h-48 w-96"
                    alt="Usuario"
                />
            </template>
            <template #title> Transacciones</template>
            <template #content>
                <p>Añade modifica o elimina transacciones de compras</p>
            </template>
            <template #footer>
                <button
                    class="py-2 px-4 shadow rounded-md bg-green-600 w-full"
                    @click="goto('transacciones')"
                >
                    Ir
                </button>
            </template>
        </Card>
    </div>
</template>

<script>
import Card from "primevue/card";
import Layout from "./Layout";
import { Inertia } from "@inertiajs/inertia";
export default {
    components: {
        Card,
        Layout,
    },
    layout: [Layout],
    setup() {
        const goto = (go) => {
            console.log(go);
            Inertia.visit(route(go), {
                preserveScroll: true,
                preserveState: true,
            });
        };
        return {
            goto,
        };
    },
};
</script>
>
