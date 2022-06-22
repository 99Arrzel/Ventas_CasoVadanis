<template>
    <div class="pb-10 mx-2 sm:mx-4">
        <div class="flex flex-col md:flex-row gap-2">
            <div class="md:w-8/12 w-full">
                <p class="text-white text-3xl text-center">Categorias</p>
                <TreeTable
                    :value="arbol_c"
                    :expandedKeys="data.expandedKeys"
                    selectionMode="single"
                    v-model:selectionKeys="data.selectedCategoryKeysKeys"
                    @node-select="onNodeSelect"
                    @node-unselect="onNodeUnselect"
                    :filters="data.filters"
                    filterMatchMode="custom"
                    class="p-datatable-sm"
                >
                    <template #header>
                        <div class="flex flex-wrap gap-2">
                            <form @submit.prevent="crearCategoria">
                                <InputText
                                    class="w-fit"
                                    v-model="categoriaData.nombre"
                                    placeholder="Nombre de categoria"
                                >
                                </InputText>
                                <button
                                    class="bg-green-500 p-2 rounded-lg text-white"
                                >
                                    Crear
                                </button>
                            </form>
                            <form @submit.prevent="editarCategoria">
                                <InputText
                                    class="w-fit"
                                    v-model="categoriaData.nombre"
                                    placeholder="Selecciona una categoría para editar"
                                    :disabled="
                                        categoriaData.id_categoria_padre ==
                                            '' ||
                                        categoriaData.id_categoria_padre == null
                                    "
                                >
                                </InputText>
                                <button
                                    class="bg-yellow-500 p-2 rounded-lg text-white disabled:bg-gray-500"
                                    :disabled="
                                        categoriaData.id_categoria_padre ==
                                            '' ||
                                        categoriaData.id_categoria_padre == null
                                    "
                                >
                                    Editar
                                </button>
                            </form>

                            <button
                                class="bg-red-500 p-2 rounded-lg text-white disabled:bg-gray-500"
                                @click="eliminarCategoria"
                                :disabled="
                                    categoriaData.id_categoria_padre == '' ||
                                    categoriaData.id_categoria_padre == null
                                "
                            >
                                Eliminar
                            </button>
                        </div>
                    </template>
                    <template #empty> No hay categorías </template>
                    <Column
                        field="nombre"
                        :expander="true"
                        filterMatchMode="contains"
                    >
                        <template #header>
                            <InputText
                                class="w-40"
                                type="text"
                                v-model="data.filters['name']"
                                placeholder="Filtrar por nombre"
                            />
                        </template>
                    </Column>
                </TreeTable>
            </div>
            <div class="w-full md:w-4/12">
                <p class="text-white text-3xl text-center">Marcas</p>
                <DataTable
                    :value="marcas"
                    class="p-datatable-sm"
                    v-model:filters="data.filtersMarca"
                    editMode="cell"
                    :scrollable="true"
                    @cell-edit-complete="editMarca"
                    :rows="10"
                    :paginator="true"
                >
                    <template #header>
                        <div class="flex flex-wrap gap-2 justify-center">
                            <InputText
                                type="text"
                                v-model="data.filtersMarca['global'].value"
                                class="mr-auto"
                                placeholder="Filtrar por nombre"
                            />
                            <div class="w-fit flex flex-row">
                                <InputText
                                    style="width: 150px"
                                    type="text"
                                    v-model="nuevaMarca.nombre"
                                    class="p-column-filter"
                                    placeholder="Crear marca"
                                />
                                <button
                                    class="bg-green-500 rounded-tr-lg rounded-br-lg px-1.5 text-white"
                                    @click="crearMarca"
                                >
                                    Crear
                                </button>
                            </div>
                        </div>
                    </template>
                    <Column field="nombre" header="Nombre">
                        <template #editor="slotProps">
                            <InputText
                                v-model="slotProps.data.nombre"
                                placeholder="Nombre"
                            />
                        </template>
                    </Column>
                    <Column>
                        <template #body="slotProps">
                            <button
                                class="bg-red-500 rounded-lg px-2"
                                @click="eliminarMarca(slotProps.data)"
                            >
                                X
                            </button>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>
<script>
import TreeTable from "primevue/treetable";

import Column from "primevue/column";
import InputText from "primevue/inputtext";
import { computed, onMounted, reactive } from "@vue/runtime-core";
import Layout from "../Layout";
import DataTable from "primevue/datatable";
import { FilterMatchMode } from "primevue/api";
import { Notify } from "notiflix";
import { Inertia } from "@inertiajs/inertia";

const focus = {
    mounted: (el) => el.focus(),
};
export default {
    directives: {
        focus,
    },
    components: {
        DataTable,
        TreeTable,
        Column,
        InputText,
    },
    layout: Layout,
    props: {
        usuario: {
            type: Object,
            required: true,
        },
        categorias: {
            type: Array,
            required: true,
        },
        marcas: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const arbol_c = computed(() => {
            return crearArbol(props.categorias);
        });
        const crearArbol = (lasCat) => {
            let arrayToTree = (array) => {
                console.log("Partimos de", array);
                array.forEach((node) => {
                    node.key = node.id;
                    node.data = {
                        nombre: node.nombre,
                        marcas: node.marcas.map((n) => {
                            return {
                                nombre: n.nombre,
                                id: n.id,
                            };
                        }),
                    };
                });

                let findParentIndex = (id_categoria_padre) => {
                    return array.findIndex(
                        (node) => node.id == id_categoria_padre
                    );
                };

                let allParentsNull = (arr) => {
                    return arr.find((node) => {
                        return node.id_categoria_padre != null;
                    });
                };
                let hasChildren = (id) => {
                    return array.find((node) => node.id_categoria_padre == id);
                };
                let check = allParentsNull(array);

                /* Ignore here for filter */
                let count = 0;
                while (check) {
                    for (let i = 0; i < array.length; i++) {
                        if (array[i].id_categoria_padre != null) {
                            if (hasChildren(array[i].id) == undefined) {
                                let indexParent = findParentIndex(
                                    array[i].id_categoria_padre
                                );

                                if (indexParent != -1) {
                                    let padre = array[indexParent];

                                    if (!padre.children) {
                                        padre.children = [];
                                    }
                                    console.log("Pusheando");
                                    padre.children.push(array[i]);
                                }
                                array.splice(i, 1);
                            }
                        }
                    }

                    check = allParentsNull(array);

                    count++;
                    if (count > 100) {
                        break;
                    }
                }

                console.log("Terminado en ", count, " iteraciones", array);
                return [
                    {
                        key: null,
                        data: {
                            nombre: "Categorias",
                            marcas: "Marcas",
                        },
                        children: array,
                    },
                ];
            };
            //Assign porque proxy prop no es editable

            return arrayToTree([...lasCat]);
            //Expand all
        };
        const onNodeUnselect = (e) => {
            data.categoria_seleccionada_keys = {};
            categoriaData.id_categoria_padre = "";
        };
        const onNodeSelect = (e) => {
            data.selectedCategory = e;
            categoriaData.id_categoria_padre = e.key;
            if (e.key != null) {
                categoriaData.nombre = e.data.nombre;
            }
            data.categoria_seleccionada_keys = e;
        };
        const expandAll = () => {
            for (let node in data.categorias_tratadas) {
                expandNode(data.categorias_tratadas[node]);
            }
            data.expandedKeys = { ...data.expandedKeys };
        };
        const expandNode = (node) => {
            data.expandedKeys[node.key] = true;
            if (node.children && node.children.length) {
                for (let child of node.children) {
                    expandNode(child);
                }
            }
        };
        const data = reactive({
            showModal: false,
            accion: "Agregar",
            expandedKeys: [],
            selectedCategoryKeys: {},
            categorias_tratadas: [],
            name: "",
            description: "",
            categoria_seleccionada: {},
            minval: "",
            filters: {},
            filtersMarca: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
        });
        const nuevaMarca = reactive({
            nombre: "",
        });
        const editMarca = (u_data) => {
            console.log(u_data);
            if (u_data.newData.nombre < 3) {
                Notify.failure("El nombre debe tener al menos 3 caracteres");
                return;
            }
            Inertia.post(
                route("marca_update"),
                {
                    id: u_data.newData.id,
                    nombre: u_data.newData.nombre,
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        Notify.success("Marca actualizada");
                    },
                    onError: (error) => {
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                }
            );
        };
        onMounted(() => {
            expandAll();
        });
        const crearMarca = () => {
            if (nuevaMarca.nombre.length < 3) {
                Notify.failure("El nombre debe tener al menos 3 caracteres");
                return;
            }
            Inertia.post(
                route("marca_create"),
                {
                    nombre: nuevaMarca.nombre,
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        nuevaMarca.nombre = "";
                        Notify.success("Marca creada");
                    },
                    onError: (error) => {
                        for (let e in error) {
                            Notify.failure(error[e]);
                        }
                    },
                }
            );
        };
        const eliminarMarca = (u_data) => {
            Inertia.post(
                route("marca_delete"),
                {
                    id: u_data.id,
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        Notify.success("Marca eliminada");
                    },
                    onError: (error) => {
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                }
            );
        };
        const categoriaData = reactive({
            nombre: "",
            id: "",
            id_categoria_padre: "",
        });
        const crearCategoria = () => {
            if (categoriaData.nombre.length < 3) {
                Notify.failure(
                    "El nombre de la categoría debe ser mayor a 3 caracteres"
                );
                return;
            }
            Inertia.post(
                route("categoria_create"),
                {
                    nombre: categoriaData.nombre,
                    id_categoria_padre: categoriaData.id_categoria_padre,
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        Notify.success("Categoría creada");
                    },
                    onError: (error) => {
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                }
            );
        };

        const log = (w) => {
            console.log(w);
        };
        const aTexto = (a) => {
            if (typeof a == "string") {
                return "";
            }
            return a.map((e) => e.nombre).join(", ");
        };
        const editarCategoria = () => {
            Inertia.post(
                route("categoria_update"),
                {
                    id: categoriaData.id_categoria_padre,
                    nombre: categoriaData.nombre,
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        Notify.success("Categoría actualizada");
                    },
                    onError: (error) => {
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                }
            );
        };
        const eliminarCategoria = (id) => {
            Inertia.post(
                route("categoria_delete"),
                {
                    id: categoriaData.id_categoria_padre,
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        Notify.success("Categoría eliminada");
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
            eliminarCategoria,
            editarCategoria,
            crearCategoria,
            categoriaData,
            aTexto,
            log,
            eliminarMarca,
            editMarca,
            crearMarca,
            nuevaMarca,
            data,
            onNodeUnselect,
            onNodeSelect,
            crearArbol,
            arbol_c,
        };
    },
};
</script>
