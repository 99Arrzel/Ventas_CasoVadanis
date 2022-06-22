<template>
    <div class="flex flex-wrap mx-4 mt-4 pb-10 justify-center gap-2">
        <!-- Para usuarios -->
        <div v-if="usuario.nivel == 'Administrador'">
            <p class="text-lg text-center text-white">Usuarios</p>
            <DataTable
                :value="usuarios_c"
                :paginator="true"
                :rows="5"
                selectionMode="single"
                v-model:selection="data.usuario_sel"
                v-model:filters="filters_u"
            >
                <template #empty>
                    <p>No hay usuarios</p>
                </template>
                <template #header>
                    <div class="flex flex-col justify-center space-x-2 gap-2">
                        <span class="p-input-icon-left mx-auto mb-2">
                            <i class="pi pi-search" />
                            <InputText
                                type="text"
                                v-model="filters_u['global'].value"
                                placeholder="Buscar"
                            />
                        </span>
                        <div class="flex justify-center flex-wrap gap-2">
                            <button
                                class="disabled:bg-green-800 bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2.5"
                                v-tooltip.bottom="'Crear usuario'"
                                @click="data.verModalUsuarios = true"
                            >
                                <IconoCrear />
                            </button>
                            <button
                                v-tooltip.bottom="'Editar usuario seleccionado'"
                                class="disabled:bg-gray-500 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-4 py-2.5"
                                :disabled="
                                    Object.keys(data.usuario_sel ?? {})
                                        .length === 0
                                "
                                @click="
                                    (usuarios_data.accion = 'Editar'),
                                        (data.verModalUsuarios = true),
                                        (usuarios_data.usuario =
                                            data.usuario_sel.usuario),
                                        (usuarios_data.nivel = niveles.find(
                                            (n) =>
                                                n.nombre ==
                                                    data.usuario_sel.nivel ?? ''
                                        ))
                                "
                            >
                                <IconoEditar />
                            </button>
                            <button
                                v-tooltip.bottom="
                                    data.usuario_sel?.deleted_at == null
                                        ? 'Eliminar usuario seleccionado'
                                        : 'Restaurar usuario seleccionado'
                                "
                                class="disabled:bg-gray-500 text-white rounded-lg px-4 py-2.5"
                                :class="
                                    data.usuario_sel?.deleted_at == null
                                        ? 'bg-red-500 hover:bg-red-600'
                                        : 'bg-sky-500'
                                "
                                :disabled="
                                    Object.keys(data.usuario_sel ?? {})
                                        .length === 0
                                "
                                @click="estado_usuario()"
                            >
                                <IconoEliminar />
                            </button>
                        </div>
                    </div>
                </template>
                <Column header="Usuario" field="usuario" :sortable="true">
                </Column>
                <Column header="Nivel" field="nivel" :sortable="true"> </Column>
                <Column header="Estado" field="estado" :sortable="true">
                    <template #body="slotProps">
                        <span
                            :class="
                                slotProps.data.estado == 'Activo'
                                    ? 'bg-green-500 text-white p-2 rounded-lg'
                                    : 'bg-red-500 text-white p-2 rounded-lg'
                            "
                            >{{ getDate(slotProps.data.estado) }}</span
                        ></template
                    >
                </Column>
            </DataTable>
        </div>
        <!-- Para Clientes -->
        <div>
            <p class="text-lg text-center text-white">Clientes</p>
            <DataTable
                :value="clientes_c"
                :paginator="true"
                :rows="10"
                selectionMode="single"
                v-model:selection="data.cliente_sel"
                v-model:filters="filters_c"
                ><template #empty>No hay clientes </template>
                <template #header>
                    <div class="flex flex-col justify-center space-x-2 gap-2">
                        <span class="p-input-icon-left mx-auto mb-2">
                            <i class="pi pi-search" />
                            <InputText
                                type="text"
                                v-model="filters_c['global'].value"
                                placeholder="Buscar cliente..."
                            />
                        </span>
                        <div class="flex justify-center flex-wrap gap-2">
                            <button
                                class="disabled:bg-green-800 bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2.5"
                                v-tooltip.bottom="'Agregar cliente'"
                                @click="data.verModalClientes = true"
                            >
                                <IconoCrear />
                            </button>
                            <button
                                v-tooltip.bottom="'Editar cliente'"
                                class="disabled:bg-gray-500 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-4 py-2.5"
                                :disabled="
                                    Object.keys(data.cliente_sel ?? {})
                                        .length === 0
                                "
                            >
                                <IconoEditar />
                            </button>
                            <button
                                class="disabled:bg-gray-500 bg-red-400 hover:bg-red-500 text-white rounded-lg px-4 py-2.5"
                                :disabled="
                                    Object.keys(data.cliente_sel ?? {})
                                        .length === 0
                                "
                                v-tooltip.bottom="'Eliminar cliente'"
                            >
                                <IconoEliminar />
                            </button>
                        </div>
                    </div>
                </template>
                <Column header="Nombre " field="nombre"> </Column>
                <Column header="Estado" field="deleted_at">
                    <template #body="slotProps">
                        {{
                            slotProps.data[slotProps.field] == null
                                ? "Activo"
                                : "Creado en " + slotProps.data[slotProps.field]
                        }}
                    </template></Column
                >
            </DataTable>
        </div>
        <!-- Empleados -->
        <div v-if="usuario.nivel == 'Administrador'">
            <p class="text-lg text-center text-white">Empleados</p>
            <DataTable
                :value="empleados_c"
                :paginator="true"
                :rows="10"
                selectionMode="single"
                v-model:selection="data.empleado_sel"
                v-model:filters="filters_e"
                ><template #header>
                    <div class="flex flex-col justify-center space-x-2 gap-2">
                        <span class="p-input-icon-left mx-auto mb-2">
                            <i class="pi pi-search" />
                            <InputText
                                type="text"
                                v-model="filters_e['global'].value"
                                placeholder="Buscar empleado..."
                            />
                        </span>
                        <div class="flex justify-center flex-wrap gap-2">
                            <button
                                class="disabled:bg-green-800 bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2.5"
                                v-tooltip.bottom="'Agregar empleado'"
                                @click="data.verModalEmpleados = true"
                            >
                                <IconoCrear />
                            </button>
                            <button
                                v-tooltip.bottom="'Editar empleado'"
                                class="disabled:bg-gray-500 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-4 py-2.5"
                                :disabled="
                                    Object.keys(data.empleado_sel ?? {})
                                        .length === 0
                                "
                            >
                                <IconoEditar />
                            </button>
                            <button
                                class="disabled:bg-gray-500 bg-red-400 hover:bg-red-500 text-white rounded-lg px-4 py-2.5"
                                :disabled="
                                    Object.keys(data.empleado_sel ?? {})
                                        .length === 0
                                "
                                v-tooltip.bottom="'Eliminar empleado'"
                            >
                                <IconoEliminar />
                            </button>
                        </div>
                    </div> </template
                ><template #empty>No hay empleados </template>
                <Column header="Nombre" :sortable="true" field="nombre">
                </Column>
                <Column header="Usuario" :sortable="true" field="usuario">
                </Column>
                <Column header="Creado en" :sortable="true" field="created_at">
                </Column>
                <Column header="Salario Bs.-" :sortable="true" field="salario">
                </Column>
                <Column header="Estado" :sortable="true" field="deleted_at">
                    <template #body="slotProps">
                        {{
                            slotProps.data[slotProps.field] == null
                                ? "Activo"
                                : "Creado en " + slotProps.data[slotProps.field]
                        }} </template
                    >></Column
                >
            </DataTable>
        </div>
        <!-- Para personas -->
        <div>
            <p class="text-lg text-center text-white">Personas</p>
            <DataTable
                :value="personas"
                :paginator="true"
                :rows="10"
                selectionMode="single"
                v-model:selection="data.persona_sel"
                v-model:filters="filters_p"
            >
                <template #header>
                    <div
                        class="flex sm:flex-row flex-col justify-center space-x-2 gap-2"
                    >
                        <span
                            class="p-input-icon-left mx-auto lg:mr-auto lg:ml-0 mb-2"
                        >
                            <i class="pi pi-search" />
                            <InputText
                                type="text"
                                v-model="filters_p['global'].value"
                                placeholder="Buscar personas..."
                            />
                        </span>
                        <div class="flex justify-center flex-wrap gap-2">
                            <button
                                class="disabled:bg-green-800 bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2.5"
                                v-tooltip.bottom="'Agregar persona'"
                                @click="data.verModalPersonas = true"
                            >
                                <IconoCrear />
                            </button>
                            <button
                                v-tooltip.bottom="'Editar persona'"
                                class="disabled:bg-gray-500 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-4 py-2.5"
                                :disabled="
                                    Object.keys(data.persona_sel ?? {})
                                        .length === 0
                                "
                                @click="setEditPersonas()"
                            >
                                <IconoEditar />
                            </button>
                            <button
                                class="disabled:bg-gray-500 text-white rounded-lg px-4 py-2.5"
                                :disabled="
                                    Object.keys(data.persona_sel ?? {})
                                        .length === 0
                                "
                                v-tooltip.bottom="'Eliminar persona'"
                                @click="estado_persona()"
                                :class="
                                    data.persona_sel?.deleted_at == null
                                        ? 'bg-red-500 hover:bg-red-600'
                                        : 'bg-sky-500'
                                "
                            >
                                <IconoEliminar />
                            </button>
                        </div>
                    </div> </template
                ><template #empty>No hay personas </template>
                <Column :sortable="true" field="nombre" header="Nombre">
                </Column>
                <Column :sortable="true" field="ci" header="CI"> </Column>
                <Column
                    :sortable="true"
                    field="apellido_p"
                    header="Apellido Paterno"
                >
                </Column>
                <Column
                    :sortable="true"
                    field="apellido_m"
                    header="Apellido Materno"
                >
                    <template #body="slotProps">
                        {{
                            slotProps.data[slotProps.field] == null
                                ? "-"
                                : slotProps.data[slotProps.field]
                        }}
                    </template>
                </Column>
                <Column :sortable="true" field="telefono" header="Teléfono">
                    <template #body="slotProps">
                        {{
                            slotProps.data[slotProps.field] == null
                                ? "-"
                                : slotProps.data[slotProps.field]
                        }}
                    </template>
                </Column>
                <Column :sortable="true" field="direccion" header="Dirección">
                    <template #body="slotProps">
                        {{
                            slotProps.data[slotProps.field] == null
                                ? "-"
                                : slotProps.data[slotProps.field]
                        }}
                    </template>
                </Column>
                <Column :sortable="true" field="correo" header="Correo">
                    <template #body="slotProps">
                        {{
                            slotProps.data[slotProps.field] == null
                                ? "-"
                                : slotProps.data[slotProps.field]
                        }}
                    </template>
                </Column>
                <Column
                    :sortable="true"
                    field="fecha_nacimiento"
                    header="Fecha de nacimiento"
                >
                    <template #body="slotProps">
                        {{
                            getDate(slotProps.data[slotProps.field]) == null
                                ? "-"
                                : getDate(slotProps.data[slotProps.field])
                        }}
                    </template>
                </Column>
                <Column :sortable="true" field="genero" header="Género">
                    <template #body="slotProps">
                        {{
                            slotProps.data[slotProps.field] == null
                                ? "-"
                                : slotProps.data[slotProps.field]
                        }}
                    </template>
                </Column>
                <Column field="deleted_at" header="Estado" :sortable="true">
                    <template #body="slotProps">
                        <!-- Definimos si está activo o no -->
                        <div
                            class="p-2 rounded-lg w-fit"
                            :class="
                                slotProps.data[slotProps.field] == null
                                    ? 'bg-green-500'
                                    : 'bg-red-500'
                            "
                        >
                            {{
                                slotProps.data[slotProps.field] == null
                                    ? "Activo"
                                    : getDate(slotProps.data[slotProps.field])
                            }}
                        </div>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
    <!-- Dialogs-->
    <!-- Para usuario -->
    <Dialog
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
        :style="{ width: '50vw' }"
        :modal="true"
        v-model:visible="data.verModalUsuarios"
    >
        <!-- Header -->
        <template #header>
            <p class="text-white text-2xl">
                Estás
                {{
                    usuarios_data.accion == "Agregar"
                        ? "agregando un usuario"
                        : "editando un usuario "
                }}
            </p>
        </template>
        <!-- Body -->

        <div class="flex lg:flex-row flex-col gap-2 justify-center">
            <div class="w-full">
                <p>Usuario*</p>
                <InputText
                    type="text"
                    class="w-full"
                    placeholder="Nombre de usuario"
                    v-model="usuarios_data.usuario"
                ></InputText>
            </div>
            <div class="w-full">
                <p>Contraseña*</p>
                <InputText
                    type="password"
                    class="w-full"
                    placeholder="Contraseña"
                    v-model="usuarios_data.password"
                ></InputText>
            </div>
            <div class="w-full">
                <p>Nivel*</p>
                <Dropdown
                    :options="niveles"
                    class="min-w-full w-full"
                    optionLabel="nombre"
                    v-model="usuarios_data.nivel"
                    placeholder="Selecciona un nivel"
                >
                </Dropdown>
            </div>
        </div>
        <!-- Footer -->

        <template #footer>
            <button
                class="rounded-lg p-2 shadow disabled:bg-gray-400"
                :class="
                    usuarios_data.accion == 'Agregar'
                        ? 'bg-green-500'
                        : 'bg-yellow-500'
                "
                @click="crearUsuario()"
            >
                {{ usuarios_data.accion }}
            </button>
        </template>
    </Dialog>
    <!-- Clientes -->
    <Dialog
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
        :style="{ width: '50vw' }"
        :modal="true"
        v-model:visible="data.verModalClientes"
    >
        <template #header>Agrega un cliente </template>
        <div class="flex">
            <Dropdown
                class="mx-auto"
                :options="personas_c"
                optionLabel="nombre_c"
                placeholder="Selecciona una persona"
                v-model="clientes_data.persona"
            >
            </Dropdown>
        </div>
        <template #footer>
            <button
                class="rounded-lg p-2 shadow disabled:bg-gray-400"
                :class="
                    clientes_data.accion == 'Agregar'
                        ? 'bg-green-500'
                        : 'bg-yellow-500'
                "
                @click="crearCliente()"
            >
                {{ clientes_data.accion }}
            </button>
        </template>
    </Dialog>
    <Dialog
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
        :style="{ width: '50vw' }"
        :modal="true"
        v-model:visible="data.verModalEmpleados"
    >
    </Dialog>
    <Dialog
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
        :style="{ width: '50vw' }"
        :modal="true"
        v-model:visible="data.verModalPersonas"
    >
        <!-- Header -->
        <template #header>
            <p class="text-white text-2xl">
                Estás
                {{
                    personas_data.accion == "Agregar"
                        ? "agregando una persona"
                        : "editando una persona "
                }}
            </p>
        </template>
        <!-- Body -->
        <form>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-2">
                <div class="w-full">
                    <p>Nombre*</p>
                    <InputText
                        class="w-full"
                        v-model="personas_data.nombre"
                    ></InputText>
                </div>
                <div class="w-full">
                    <p>CI*</p>
                    <InputText
                        type="number"
                        class="w-full"
                        v-model="personas_data.ci"
                    ></InputText>
                </div>
                <div class="w-full">
                    <p>Apellido Paterno*</p>
                    <InputText
                        class="w-full"
                        v-model="personas_data.apellido_p"
                    ></InputText>
                </div>
                <div class="w-full">
                    <p>Apellido Materno</p>
                    <InputText
                        class="w-full"
                        v-model="personas_data.apellido_m"
                    ></InputText>
                </div>
                <div class="w-full">
                    <p>Teléfono</p>
                    <InputText
                        type="number"
                        class="w-full"
                        v-model="personas_data.telefono"
                    ></InputText>
                </div>
                <div class="w-full">
                    <p>Correo</p>
                    <InputText
                        type="email"
                        placeholder="Correo"
                        class="w-full"
                        v-model="personas_data.correo"
                    ></InputText>
                </div>
                <div class="w-full">
                    <p>Género</p>
                    <Dropdown
                        :options="generos"
                        class="min-w-full w-full"
                        optionLabel="label"
                        v-model="personas_data.genero"
                        placeholder="Selecciona un Genero"
                    >
                    </Dropdown>
                </div>

                <div class="w-full">
                    <p>Fecha de nacimiento</p>
                    <Calendar
                        placeholder="Selecciona una fecha"
                        class="w-full"
                        v-model="personas_data.fecha_nacimiento"
                    ></Calendar>
                </div>
                <div class="col-span-2">
                    <p>Dirección</p>
                    <Textarea
                        placeholder="Introduce la dirección de esta persona"
                        :autoResize="true"
                        rows="5"
                        cols="30"
                        class="w-full"
                        v-model="personas_data.direccion"
                    ></Textarea>
                </div>
            </div>
        </form>
        <!-- Footer -->
        <template #footer>
            <button
                class="rounded-lg p-2 shadow disabled:bg-gray-400"
                :class="
                    personas_data.accion == 'Agregar'
                        ? 'bg-green-500'
                        : 'bg-yellow-500'
                "
                @click="crearPersona()"
            >
                {{ personas_data.accion }}
            </button>
        </template>
    </Dialog>
</template>
<script>
import DataTable from "primevue/datatable";
import Textarea from "primevue/textarea";
import IconoCrear from "../Comun/IconoCrear.vue";
import IconoEditar from "../Comun/IconoEditar.vue";
import IconoEliminar from "../Comun/IconoEliminar.vue";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Column from "primevue/column";
import Calendar from "primevue/calendar";
import Dialog from "primevue/dialog";
import Layout from "../Layout";
import Tooltip from "primevue/tooltip";
import { Inertia } from "@inertiajs/inertia";
import { FilterMatchMode } from "primevue/api";
import { computed, reactive } from "vue";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import dayjs from "dayjs";
export default {
    directives: {
        Tooltip,
    },
    components: {
        Textarea,
        Calendar,
        InputText,
        Dropdown,
        Dialog,
        IconoCrear,
        IconoEditar,
        IconoEliminar,
        DataTable,
        Column,
    },
    props: {
        usuario: {
            type: Object,
            required: true,
        },
        usuarios: {
            type: Array,
            required: true,
        },
        personas: {
            type: Array,
            required: true,
        },
        empleados: {
            type: Array,
            required: true,
        },
        clientes: {
            type: Array,
            required: true,
        },
    },
    layout: Layout,
    setup(props) {
        const crearCliente = () => {
            Inertia.post("/clientes/crear", {
                usuario: props.usuario,
            });
        };
        const personas_c = props.personas.map((person) => {
            return {
                ...person,
                nombre_c:
                    person.nombre + " " + person.apellido_p + " | " + person.ci,
            };
        });
        const clientes_data = reactive({
            accion: "Agregar",
            persona: "",
        });

        const generos = [
            {
                value: "M",
                label: "Masculino",
            },
            {
                value: "F",
                label: "Femenino",
            },
        ];
        const niveles = [
            { id: 1, nombre: "Administrador" },
            { id: 2, nombre: "Empleado" },
        ];
        const estado_persona = () => {
            Inertia.post(
                route(
                    data.persona_sel.deleted_at == null
                        ? "personas_eliminar"
                        : "personas_restaurar"
                ),
                {
                    id_persona: data.persona_sel.id_persona,
                },
                onPost
            );
        };
        const setEditPersonas = () => {
            personas_data.accion = "Editar";
            data.verModalPersonas = true;
            personas_data.ci = data.persona_sel.ci;
            personas_data.nombre = data.persona_sel.nombre;
            personas_data.apellido_p = data.persona_sel.apellido_p;
            personas_data.apellido_m = data.persona_sel.apellido_m;
            personas_data.telefono = data.persona_sel.telefono;
            personas_data.direccion = data.persona_sel.direccion;
            personas_data.correo = data.persona_sel.correo;
            personas_data.genero =
                data.persona_sel.genero == "M" ? generos[0] : generos[1];
            personas_data.fecha_nacimiento = data.persona_sel.fecha_nacimiento;
        };
        const estado_usuario = () => {
            console.log(data.usuario_sel);
            if (data.usuario_sel.deleted_at == null) {
                Inertia.post(
                    route("usuarios_eliminar"),
                    {
                        id_usuario: data.usuario_sel.id_usuario,
                    },
                    onPost
                );
            } else {
                Inertia.post(
                    route("usuarios_restaurar"),
                    {
                        id_usuario: data.usuario_sel.id_usuario,
                    },
                    onPost
                );
            }
        };
        const personas_data = reactive({
            accion: "Agregar",
            nombre: "",
            ci: "",
            apellido_p: "",
            apellido_m: "",
            telefono: "",
            direccion: "",
            correo: "",
            fecha_nacimiento: "",
            genero: "",
        });
        const usuarios_data = reactive({
            accion: "Agregar",
            usuario: "",
            password: "",
            nivel: {},
        });
        const onPost = {
            /* Ni idea de cual sea, pero ahí van */
            preserveScroll: true,
            preserveState: true,
            onSuccess: (sucess) => {
                Notify.success(sucess.props.flash.success);
                data.verModalUsuarios = false;
                data.verModalClientes = false;
                data.verModalEmpleados = false;
                data.verModalPersonas = false;
                data.cliente_sel = {};
                data.empleado_sel = {};
                data.persona_sel = {};
                data.usuario_sel = {};
                /* Limpiar datos de usuario*/
                for (let i in usuarios_data) {
                    usuarios_data[i] = "";
                }
                for (let i in personas_data) {
                    personas_data[i] = "";
                }
            },
            onError: (error) => {
                for (let i in error) {
                    Notify.failure(error[i]);
                }
            },
        };
        const crearPersona = () => {
            /* Validar */
            if (personas_data.nombre == "") {
                Notify.failure("El nombre es requerido");
                return;
            }
            if (personas_data.ci == "") {
                Notify.failure("El ci es requerido");
                return;
            }
            if (personas_data.apellido_p == "") {
                Notify.failure("El apellido paterno es requerido");
                return;
            }
            /* Lo demás es nullable así que fin*/
            Inertia.post(
                route(
                    personas_data.accion == "Agregar"
                        ? "personas_crear"
                        : "personas_editar"
                ),
                {
                    id_persona: data.persona_sel?.id_persona,
                    nombre: personas_data.nombre,
                    ci: personas_data.ci,
                    apellido_p: personas_data.apellido_p,
                    apellido_m: personas_data.apellido_m,
                    telefono: personas_data.telefono,
                    correo: personas_data.correo,
                    direccion: personas_data.direccion,
                    fecha_nacimiento: personas_data.fecha_nacimiento,
                    genero: personas_data.genero?.label,
                },
                onPost
            );
        };

        const crearUsuario = () => {
            /* Validate */

            if (usuarios_data.accion == "Agregar") {
                Inertia.post(
                    route("usuarios_crear"),
                    {
                        usuario: usuarios_data.usuario,
                        password: usuarios_data.password,
                        nivel: usuarios_data.nivel.id,
                    },
                    onPost
                );
            } else {
                Inertia.post(
                    route("usuarios_editar"),
                    {
                        id_usuario: data.usuario_sel.id_usuario,
                        usuario: usuarios_data.usuario,
                        password:
                            usuarios_data.password == ""
                                ? null
                                : usuarios_data.password,
                        nivel: usuarios_data.nivel.id,
                    },
                    onPost
                );
            }
        };

        const data = reactive({
            verModalUsuarios: false,
            verModalClientes: false,
            verModalEmpleados: false,
            verModalPersonas: false,
            usuario_sel: {},
            empleado_sel: {},
            persona_sel: {},
            cliente_sel: {},
        });
        const clientes_c = computed(() => {
            return props.clientes.map((cliente) => {
                let persona = props.persona.find(() => {
                    return cliente.id_persona == persona.id_persona;
                });
                return {
                    ...cliente,
                    nombre:
                        persona.nombre +
                        " " +
                        persona.apellido_p +
                        `[${persona.ci}]`,
                };
            });
        });

        const empleados_c = computed(() => {
            return props.empleados.map((empleado) => {
                let persona_emp = props.personas.find((persona) => {
                    return persona.id_persona == empleado.id_persona;
                });
                return {
                    ...empleado,
                    nombre:
                        persona_emp.nombre +
                        " " +
                        persona_emp.apellido_p +
                        " " +
                        persona_emp.apellido_m,
                    usuario: props.usuarios.find((usuario) => {
                        return usuario.id_usuario == empleado.id_usuario;
                    }),
                };
            });
        });

        const usuarios_c = computed(() => {
            return props.usuarios.map((usuario) => {
                return {
                    ...usuario,
                    id_usuario: usuario.id_usuario,
                    usuario: usuario.usuario,
                    nivel: usuario.nivel,
                    estado:
                        usuario.deleted_at == null
                            ? "Activo"
                            : usuario.deleted_at,
                };
            });
        });

        const filters_c = reactive({
            global: {
                value: "",
                matchMode: FilterMatchMode.Contains,
            },
        });
        const filters_e = reactive({
            global: {
                value: "",
                matchMode: FilterMatchMode.Contains,
            },
        });
        const filters_u = reactive({
            global: {
                value: "",
                matchMode: FilterMatchMode.Contains,
            },
        });
        const filters_p = reactive({
            global: {
                value: "",
                matchMode: FilterMatchMode.Contains,
            },
        });

        const getDate = (date) => {
            return dayjs(date).format("DD/MM/YYYY") == "Invalid Date"
                ? date
                : dayjs(date).format("DD/MM/YYYY");
        };
        return {
            clientes_data,
            estado_persona,
            setEditPersonas,
            crearPersona,
            generos,
            personas_data,
            estado_usuario,
            crearUsuario,
            niveles,
            usuarios_data,
            getDate,
            filters_p,
            clientes_c,
            empleados_c,
            data,
            filters_c,
            filters_e,
            filters_u,
            usuarios_c,
            personas_c,
        };
    },
};
</script>
