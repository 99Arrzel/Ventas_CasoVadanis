<template>
    <div class="flex flex-col mx-2 sm:mx-5 pb-12">
        <p class="text-center text-white text-2xl">Personas</p>
        <DataTable
            :value="personas_c"
            ref="tablapersonas"
            :rows="10"
            :paginator="true"
            responsiveLayout="scroll"
            :scrollable="true"
            editMode="cell"
            @cell-edit-complete="editarPersona"
            :rowHover="true"
            :resizableColumns="true"
            columnResizeMode="fit"
            class="p-datatable-sm"
        >
            <template #header>
                <div>
                    <p class="text-white text-center text-xl">Crear Persona</p>
                    <form
                        class="flex flex-wrap justify-center gap-2"
                        @submit.prevent="crearPersona"
                    >
                        <div class="w-full sm:w-fit">
                            <p class="text-white">Nombre*</p>
                            <InputText
                                class="w-full"
                                v-model="persona.nombre"
                                placeholder="Juan"
                                type="text"
                            ></InputText>
                        </div>
                        <div class="w-full sm:w-fit">
                            <p class="text-white">Apellido Paterno*</p>
                            <InputText
                                class="w-full"
                                v-model="persona.apellido_p"
                                placeholder="Perez"
                                type="text"
                            ></InputText>
                        </div>
                        <div class="w-full sm:w-fit">
                            <p>Apellido Materno</p>
                            <InputText
                                class="w-full"
                                v-model="persona.apellido_m"
                                placeholder="Pereira"
                                type="text"
                            ></InputText>
                        </div>
                        <div class="w-full sm:w-fit">
                            <p class="text-white">CI*</p>
                            <InputText
                                class="w-full"
                                v-model="persona.ci"
                                placeholder="6978585"
                                type="number"
                            ></InputText>
                        </div>
                        <div class="w-full sm:w-fit">
                            <p>Teléfono</p>
                            <InputText
                                class="w-full"
                                v-model="persona.telefono"
                                placeholder="63613646"
                                type="number"
                                min="0"
                            ></InputText>
                        </div>
                        <div class="w-full sm:w-fit">
                            <p>Correo</p>
                            <InputText
                                class="w-full"
                                v-model="persona.correo"
                                placeholder="juan@gmail.com"
                                type="email"
                            ></InputText>
                        </div>
                        <div class="w-full sm:w-fit">
                            <p>Dirección</p>
                            <InputText
                                class="w-full"
                                v-model="persona.direccion"
                                placeholder="Calle #123"
                                type="text"
                            ></InputText>
                        </div>
                        <div class="w-full sm:w-fit">
                            <p>Género</p>
                            <Dropdown
                                class="w-full"
                                v-model="persona.genero"
                                :options="generos"
                                optionLabel="value"
                                placeholder="Masculino o Femenino"
                                type="text"
                            ></Dropdown>
                        </div>
                        <div class="w-full sm:w-fit">
                            <p>Fecha de nacimiento</p>
                            <Calendar
                                class="w-full"
                                v-model="persona.fecha_nacimiento"
                                placeholder="31/10/1999"
                                dateFormat="dd/mm/yy"
                            >
                            </Calendar>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <button
                                class="bg-green-500 p-3 rounded-lg text-white mt-6"
                                v-tooltip.top="'Crear'"
                            >
                                <IconoCrear />
                            </button>

                            <button
                                class="rounded-lg bg-purple-400 p-2 text-white mt-6"
                                @click="exportPDFPersonas()"
                                type="button"
                            >
                                PDF
                            </button>
                        </div>
                    </form>
                </div>
            </template>
            <Column header="Nombre" field="nombre" :sortable="true">
                <template #editor="slotProps">
                    <InputText v-model="slotProps.data.nombre"></InputText>
                </template>
            </Column>
            <Column
                header="Apellido Paterno"
                field="apellido_p"
                :sortable="true"
            >
                <template #editor="slotProps">
                    <InputText v-model="slotProps.data.apellido_p"></InputText>
                </template>
            </Column>
            <Column
                header="Apellido Materno"
                field="apellido_m"
                :sortable="true"
            >
                <template #editor="slotProps">
                    <InputText v-model="slotProps.data.apellido_m"></InputText>
                </template>
            </Column>
            <Column header="CI" field="ci" :sortable="true"
                ><template #editor="slotProps">
                    <InputText v-model="slotProps.data.ci"></InputText>
                </template>
            </Column>
            <Column header="Teléfono" field="telefono" :sortable="true">
                <template #editor="slotProps">
                    <InputText
                        v-model="slotProps.data.telefono"
                        type="number"
                    ></InputText>
                </template>
            </Column>
            <Column header="Correo" field="correo" :sortable="true">
                <template #editor="slotProps">
                    <InputText
                        v-model="slotProps.data.correo"
                        type="email"
                    ></InputText>
                </template>
            </Column>
            <Column header="Dirección" field="direccion" :sortable="true">
                <template #editor="slotProps">
                    <InputText v-model="slotProps.data.direccion"></InputText>
                </template>
            </Column>
            <Column
                header="Fecha de nacimiento"
                field="fecha_nacimiento"
                :sortable="true"
            >
                <template #body="slotProps">
                    {{ getDate(slotProps.data.f_nac) }}
                </template>
                <template #editor="slotProps">
                    <Calendar
                        dateFormat="dd/mm/yy"
                        v-model="slotProps.data.f_nac"
                        :baseZIndex="100000"
                        :style="'asdasd'"
                    ></Calendar>
                </template>
            </Column>
            <Column header="Edad" field="edad" :sortable="true"> </Column>
            <Column header="Género" field="genero" :sortable="true">
                <template #editor="slotProps">
                    <Dropdown
                        class="w-full"
                        optionLabel="value"
                        v-model="slotProps.data.genero_c"
                        :options="generos"
                        placeholder="Masculino o Femenino"
                        type="text"
                    ></Dropdown>
                </template>
            </Column>
            <Column>
                <template #body="slotProps">
                    <button
                        class="bg-red-500 px-2 rounded-lg text-white"
                        @click="eliminarPersona(slotProps.data)"
                    >
                        Eliminar
                    </button>
                </template>
            </Column>
        </DataTable>
        <Divider align="center">
            <span class="bg-sky-500 p-2 rounded-lg text-white"
                >O también</span
            ></Divider
        >
        <p class="text-white text-center text-2xl">Usuarios</p>
        <DataTable
            :value="usuarios_c"
            :rows="10"
            :paginator="true"
            responsiveLayout="scroll"
            :scrollable="true"
            editMode="cell"
            @cell-edit-complete="editarUsuario"
            class="p-datatable-sm"
        >
            <template #header>
                <form
                    @submit.prevent="crearUsuario"
                    class="flex flex-wrap justify-center gap-2"
                >
                    <div class="sm:w-fit w-full">
                        <p class="text-white">Usuario*</p>
                        <InputText
                            class="w-full"
                            v-model="usuario.usuario"
                            placeholder="juancho"
                        >
                        </InputText>
                    </div>
                    <div class="sm:w-fit w-full">
                        <p class="text-white">Contraseña*</p>
                        <InputText
                            v-model="usuario.password"
                            class="w-full"
                            placeholder="C0NTR4S3Ñ4"
                            type="password"
                        >
                        </InputText>
                    </div>
                    <div class="sm:w-fit w-full">
                        <p>Persona*</p>
                        <Dropdown
                            :options="personasDrop"
                            optionLabel="label"
                            v-model="usuario.persona"
                            placeholder="Juan Perez"
                            :filter="true"
                        />
                    </div>
                    <div class="sm:w-fit w-full">
                        <p>Nivel*</p>
                        <Dropdown
                            :options="niveles"
                            optionLabel="label"
                            v-model="usuario.nivel"
                            placeholder="Elige un nivel"
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
            <Column header="Usuario" field="usuario">
                <template #editor="slotProps">
                    <InputText v-model="slotProps.data.usuario"></InputText>
                </template>
            </Column>
            <Column header="Nivel" field="nivel_c" :sortable="true">
                <template #body="slotProps">
                    {{ slotProps.data.nivel_c.label }}
                </template>
                <template #editor="slotProps">
                    <Dropdown
                        :options="niveles"
                        optionLabel="label"
                        v-model="slotProps.data[slotProps.field]"
                    >
                    </Dropdown>
                </template>
            </Column>
            <Column header="Persona" field="persona_c" :sortable="true">
                <template #body="slotProps">
                    {{ slotProps.data.persona_c.label }}
                </template>
                <template #editor="slotProps">
                    <Dropdown
                        :options="personasDrop"
                        optionLabel="label"
                        :filter="true"
                        v-model="slotProps.data.persona_c"
                    >
                    </Dropdown>
                </template>
            </Column>
            <Column header="Estado" field="deleted_at" :sortable="true">
                <template #body="slotProps">
                    <div
                        @click="cambiarEstadoUsuario(slotProps.data)"
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
                                  )}`
                        }}
                    </div>
                </template>
            </Column>
            <Column header="Contraseñas">
                <template #body="slotProps">
                    <div>
                        <button
                            class="bg-yellow-500 px-2 rounded-lg text-white"
                            v-tooltip.top="'Crear'"
                            @click="promptContra(slotProps.data)"
                        >
                            Cambiar
                        </button>
                    </div>
                </template>
            </Column>
            <Column header="Foto">
                <template #body="slotProps">
                    <div></div>
                </template>
            </Column>
        </DataTable>
    </div>
    <Dialog
        header="Cambiar contraseña"
        v-model:visible="confPass.show"
        :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
        :style="{ width: '350px' }"
        :modal="true"
    >
        <div>
            <p class="text-center">Introduce una nueva contraseña</p>
            <form @submit.prevent="cambiarPass" class="flex flex-row">
                <InputText
                    class="w-full"
                    v-model="confPass.pass"
                    placeholder="1234ABC"
                    type="password"
                ></InputText>
                <button class="bg-green-500 p-1.5 rounded-tr-lg rounded-br-lg">
                    <span class="text-white">Cambiar</span>
                </button>
            </form>
        </div>
    </Dialog>
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
import Dialog from "primevue/dialog";

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
        Dialog,
        Dropdown,
        Calendar,
        Divider,
        IconoCrear,
        InputText,
        DataTable,
        Column,
    },
    props: {
        usuarios: {
            type: Array,
            required: true,
        },
        usuario: {
            type: Object,
            required: true,
        },
        personas: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const confPass = reactive({
            id: "",
            pass: "",
            show: false,
        });
        const promptContra = (us) => {
            confPass.id = us.id;
            confPass.show = true;
        };
        const cambiarPass = () => {
            if (confPass.pass.length < 4) {
                Notify.failure(
                    "La contraseña debe tener al menos 4 caracteres"
                );
                return;
            }
            Inertia.post(
                route("cambiar_pass"),
                {
                    id: confPass.id,
                    password: confPass.pass,
                },
                {
                    only: ["errors", "flash"],
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        Notify.success("Contraseña cambiada");
                        confPass.show = false;
                        confPass.pass = "";
                    },
                    onError: (error) => {
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                }
            );
            confPass.show = false;
        };
        const getDate = (date) => {
            let conv = dayjs(date).format("DD/MM/YYYY");
            return conv != "Invalid Date" ? conv : "";
        };
        const usuarios_c = computed(() => {
            return props.usuarios.map((u) => {
                return {
                    ...u,
                    nombre_nivel: u.nivel == 1 ? "Administrador" : "Usuario",
                    nivel_c: {
                        value: u.nivel,
                        label: u.nivel == 1 ? "Administrador" : "Usuario",
                    },
                    persona_c: {
                        value: u.id,
                        label: `${u.persona.nombre} - ${u.persona.ci}`,
                    },
                };
            });
        });
        const cambiarEstadoUsuario = (u_data) => {
            Inertia.post(
                route("usuarios_delete"),
                {
                    id: u_data.id,
                },
                {
                    only: ["usuarios", "errors", "flash"],
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

        const niveles = [
            { value: 1, label: "Administrador" },
            { value: 2, label: "Usuario" },
        ];
        const botonFoto = ref(null);
        const generos = [
            {
                label: "Masculino",
                value: "Masculino",
            },
            {
                label: "Femenino",
                value: "Femenino",
            },
        ];
        const personasDrop = computed(() => {
            return props.personas.map((p) => {
                return {
                    value: p.id,
                    label: `${p.nombre} - ${p.ci}`,
                };
            });
        });
        const personas_c = computed(() => {
            return props.personas.map((p) => {
                return {
                    ...p,
                    f_nac: new Date(p.fecha_nacimiento),
                    edad: dayjs().diff(p.fecha_nacimiento, "year"),
                    genero_c: {
                        value: p.genero,
                        label:
                            p.genero == "Masculino" ? "Masculino" : "Femenino",
                    },
                };
            });
        });
        const editarPersona = (per) => {
            /* Return si estás editando y pusiste lo mismo */

            //Validar longitud nombre
            console.log(per);
            if (per.newData.nombre.trim().length < 3) {
                Notify.failure("El nombre debe tener al menos 3 caracteres");
                return;
            }
            //Validar longitud apellido paterno
            if (per.newData.apellido_p.trim().length < 3) {
                Notify.failure(
                    "El apellido paterno debe tener al menos 3 caracteres"
                );
                return;
            }

            //Validar longitud apellido materno
            if (per.field == "apellido_m") {
                if (per.newData.apellido_m.trim().length < 3) {
                    Notify.failure(
                        "El apellido materno debe tener al menos 3 caracteres"
                    );
                    return;
                }
            }
            //Validar longitud ci
            if (per.field == "ci") {
                if (per.newData.ci.trim().length < 6) {
                    Notify.failure("El CI debe tener al menos 6 caracteres");
                    return;
                }
            }
            //Validar longitud telefono
            if (per.field == "telefono") {
                if (per.newData.telefono.trim().length < 6) {
                    Notify.failure("El telefono debe tener al menos 6 números");
                    return;
                }
            }

            //Validar longitud direccion
            if (per.field == "direccion") {
                if (per.newData.direccion.trim().length < 6) {
                    Notify.failure(
                        "La dirección debe tener al menos 5 caracteres"
                    );
                    return;
                }
            }
            //Validar fecha nacimiento edad minimo 18 años
            //dayjs().diff(p.fecha_nacimiento, "year")
            if (per.field == "f_nac") {
                if (dayjs().diff(dayjs(per.newData.f_nac), "year") < 18) {
                    console.log(per.newData.f_nac);
                    console.log(dayjs().diff(dayjs(per.newData.f_nac), "year"));
                    Notify.failure(
                        "La fecha de nacimiento es obligatoria y debe tener 18 años o más."
                    );
                    return;
                }
            }
            /* Finalmente un post de update */
            Inertia.post(
                route("personas_update"),
                {
                    id: per.newData.id,
                    nombre: per.newData.nombre,
                    apellido_p: per.newData.apellido_p,
                    apellido_m: per.newData.apellido_m,
                    ci: per.newData.ci,
                    telefono: per.newData.telefono,
                    direccion: per.newData.direccion,
                    correo: per.newData.correo,
                    fecha_nacimiento: per.newData.f_nac,
                    genero: per.newData.genero_c.value,
                },
                {
                    only: ["personas", "flash", "errors"],
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        Notify.success("Persona actualizada correctamente");
                    },
                    onError: (error) => {
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                }
            );
        };
        const usuario = reactive({
            usuario: "",
            password: "",
            nivel: "",
            persona: "",
            imagen: "",
        });
        const persona = reactive({
            nombre: "",
            apellido_p: "",
            apellido_m: "",
            ci: "",
            telefono: "",
            correo: "",
            direccion: "",
            fecha_nacimiento: "",
            genero: "",
        });
        const crearPersona = () => {
            /*  Validar datos de persona primero
              Solo son requeridos nombre, apellido paterno y ci
            */
            if (
                persona.nombre.length <= 3 &&
                persona.apellido_p.length <= 3 &&
                persona.ci.length <= 6
            ) {
                Notify.failure(
                    "Faltan datos para crear la persona, nombre de 3 digitios, apellido de 3 digitos y ci de 6 como minimo"
                );
                return;
            }
            Inertia.post(
                route("personas_create"),
                {
                    nombre: persona.nombre,
                    apellido_p: persona.apellido_p,
                    apellido_m: persona.apellido_m,
                    ci: persona.ci,
                    telefono: persona.telefono,
                    correo: persona.correo,
                    direccion: persona.direccion,
                    fecha_nacimiento: persona.fecha_nacimiento,
                    genero: persona.genero.label,
                },
                {
                    only: ["personas", "flash", "errors"],
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        Notify.success("Persona creada correctamente");
                    },
                    onError: (error) => {
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                }
            );
        };
        const editarUsuario = (dat) => {
            /* Validación de campos */
            if (dat.field == "persona_c") {
                if (dat.newValue.value == "") {
                    Notify.failure("Seleccione una persona");
                    return;
                }
            }
            if (dat.field == "nivel_c") {
                if (dat.newValue.value == "") {
                    Notify.failure("Seleccione un nivel");
                    return;
                }
            }
            if (dat.field == "usuario") {
                if (dat.newValue.length < 4) {
                    Notify.failure(
                        "El usuario debe tener al menos 4 caracteres"
                    );
                    return;
                }
            }
            console.log(dat);
            Inertia.post(
                route("usuarios_update"),
                {
                    id: dat.newData.id,
                    usuario: dat.newData.usuario,
                    password: null,
                    nivel: dat.newData.nivel_c.value,
                    id_persona: dat.newData.persona_c.value,
                },
                {
                    only: ["usuarios", "flash", "errors"],
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        Notify.success("Usuario actualizado correctamente");
                    },
                    onError: (error) => {
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                }
            );
        };
        const eliminarPersona = (datosPersona) => {
            Confirm.show(
                "¿Deseas eliminar la persona?",
                `Estás a punto de eliminar a  ${datosPersona.nombre} 😢`,
                "Eliminar",
                "Cancelar",
                () => {
                    Inertia.post(
                        route("personas_delete"),
                        {
                            id: datosPersona.id,
                        },
                        {
                            only: ["personas", "flash", "errors"],
                            preserveScroll: true,
                            preserveState: true,
                            onSuccess: () => {
                                Notify.success(
                                    "Persona eliminada correctamente"
                                );
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
        const crearUsuario = () => {
            /* Validación de campos */
            if (usuario.usuario.length < 4) {
                Notify.failure("El usuario debe tener al menos 4 caracteres");
                return;
            }
            if (usuario.password.length < 4) {
                Notify.failure(
                    "La contraseña debe tener al menos 4 caracteres"
                );
                return;
            }
            if (usuario.nivel.value == "") {
                Notify.failure("Seleccione un nivel");
                return;
            }
            if (usuario.persona.value == "") {
                Notify.failure("Seleccione una persona");
                return;
            }
            Inertia.post(
                route("usuarios_create"),
                {
                    usuario: usuario.usuario,
                    password: usuario.password,
                    nivel: usuario.nivel.value,
                    id_persona: usuario.persona.value,
                },
                {
                    only: ["usuarios", "flash", "errors"],
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        Notify.success("Usuario creado correctamente");
                    },
                    onError: (error) => {
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                }
            );
        };
        const exportPDFPersonas = () => {
            console.log("Acá reporte");
        };
        return {
            cambiarPass,
            promptContra,
            crearUsuario,
            eliminarPersona,
            getDate,
            exportPDFPersonas,
            personasDrop,
            editarUsuario,
            cambiarEstadoUsuario,
            niveles,
            usuario,
            generos,
            editarPersona,
            crearPersona,
            persona,
            personas_c,
            botonFoto,
            usuarios_c,
            confPass,
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
