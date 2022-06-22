"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Usuarios_OldUsuarios_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Layout.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Layout.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var primevue_splitbutton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/splitbutton */ "./node_modules/primevue/splitbutton/splitbutton.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SplitButton: primevue_splitbutton__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  setup: function setup() {
    var menuOptions = (0,vue__WEBPACK_IMPORTED_MODULE_2__.reactive)({
      show: true
    });
    return {
      menuOptions: menuOptions,
      irA: function irA(ruta) {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.visit(route(ruta));
      },
      direcciones: [{
        label: "Usuarios",
        command: function command() {
          _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.visit(route("usuarios"));
        }
      }, {
        label: "Ventas",
        command: function command() {
          _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.visit(route("ventas"));
        }
      }, {
        label: "Productos",
        command: function command() {
          _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.visit(route("productos"));
        }
      }, {
        label: "Categorias",
        command: function command() {
          _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.visit(route("categorias"));
        }
      }, {
        label: "Proveedores",
        command: function command() {
          _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.visit(route("proveedores"));
        }
      }, {
        label: "Transacciones",
        command: function command() {
          _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.visit(route("transacciones"));
        }
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Usuarios/OldUsuarios.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Usuarios/OldUsuarios.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_datatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/datatable */ "./node_modules/primevue/datatable/datatable.esm.js");
/* harmony import */ var primevue_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/textarea */ "./node_modules/primevue/textarea/textarea.esm.js");
/* harmony import */ var _Comun_IconoCrear_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Comun/IconoCrear.vue */ "./resources/js/Pages/Comun/IconoCrear.vue");
/* harmony import */ var _Comun_IconoEditar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Comun/IconoEditar.vue */ "./resources/js/Pages/Comun/IconoEditar.vue");
/* harmony import */ var _Comun_IconoEliminar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Comun/IconoEliminar.vue */ "./resources/js/Pages/Comun/IconoEliminar.vue");
/* harmony import */ var primevue_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primevue/inputtext */ "./node_modules/primevue/inputtext/inputtext.esm.js");
/* harmony import */ var primevue_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primevue/dropdown */ "./node_modules/primevue/dropdown/dropdown.esm.js");
/* harmony import */ var primevue_column__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primevue/column */ "./node_modules/primevue/column/column.esm.js");
/* harmony import */ var primevue_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primevue/calendar */ "./node_modules/primevue/calendar/calendar.esm.js");
/* harmony import */ var primevue_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primevue/dialog */ "./node_modules/primevue/dialog/dialog.esm.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Layout */ "./resources/js/Pages/Layout.vue");
/* harmony import */ var primevue_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primevue/tooltip */ "./node_modules/primevue/tooltip/tooltip.esm.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var primevue_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primevue/api */ "./node_modules/primevue/api/api.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! notiflix/build/notiflix-notify-aio */ "./node_modules/notiflix/build/notiflix-notify-aio.js");
/* harmony import */ var notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_16__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  directives: {
    Tooltip: primevue_tooltip__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  components: {
    Textarea: primevue_textarea__WEBPACK_IMPORTED_MODULE_1__["default"],
    Calendar: primevue_calendar__WEBPACK_IMPORTED_MODULE_8__["default"],
    InputText: primevue_inputtext__WEBPACK_IMPORTED_MODULE_5__["default"],
    Dropdown: primevue_dropdown__WEBPACK_IMPORTED_MODULE_6__["default"],
    Dialog: primevue_dialog__WEBPACK_IMPORTED_MODULE_9__["default"],
    IconoCrear: _Comun_IconoCrear_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    IconoEditar: _Comun_IconoEditar_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    IconoEliminar: _Comun_IconoEliminar_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    DataTable: primevue_datatable__WEBPACK_IMPORTED_MODULE_0__["default"],
    Column: primevue_column__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    usuario: {
      type: Object,
      required: true
    },
    usuarios: {
      type: Array,
      required: true
    },
    personas: {
      type: Array,
      required: true
    },
    empleados: {
      type: Array,
      required: true
    },
    clientes: {
      type: Array,
      required: true
    }
  },
  layout: _Layout__WEBPACK_IMPORTED_MODULE_10__["default"],
  setup: function setup(props) {
    var crearCliente = function crearCliente() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_12__.Inertia.post("/clientes/crear", {
        usuario: props.usuario
      });
    };

    var personas_c = props.personas.map(function (person) {
      return _objectSpread(_objectSpread({}, person), {}, {
        nombre_c: person.nombre + " " + person.apellido_p + " | " + person.ci
      });
    });
    var clientes_data = (0,vue__WEBPACK_IMPORTED_MODULE_14__.reactive)({
      accion: "Agregar",
      persona: ""
    });
    var generos = [{
      value: "M",
      label: "Masculino"
    }, {
      value: "F",
      label: "Femenino"
    }];
    var niveles = [{
      id: 1,
      nombre: "Administrador"
    }, {
      id: 2,
      nombre: "Empleado"
    }];

    var estado_persona = function estado_persona() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_12__.Inertia.post(route(data.persona_sel.deleted_at == null ? "personas_eliminar" : "personas_restaurar"), {
        id_persona: data.persona_sel.id_persona
      }, onPost);
    };

    var setEditPersonas = function setEditPersonas() {
      personas_data.accion = "Editar";
      data.verModalPersonas = true;
      personas_data.ci = data.persona_sel.ci;
      personas_data.nombre = data.persona_sel.nombre;
      personas_data.apellido_p = data.persona_sel.apellido_p;
      personas_data.apellido_m = data.persona_sel.apellido_m;
      personas_data.telefono = data.persona_sel.telefono;
      personas_data.direccion = data.persona_sel.direccion;
      personas_data.correo = data.persona_sel.correo;
      personas_data.genero = data.persona_sel.genero == "M" ? generos[0] : generos[1];
      personas_data.fecha_nacimiento = data.persona_sel.fecha_nacimiento;
    };

    var estado_usuario = function estado_usuario() {
      console.log(data.usuario_sel);

      if (data.usuario_sel.deleted_at == null) {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_12__.Inertia.post(route("usuarios_eliminar"), {
          id_usuario: data.usuario_sel.id_usuario
        }, onPost);
      } else {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_12__.Inertia.post(route("usuarios_restaurar"), {
          id_usuario: data.usuario_sel.id_usuario
        }, onPost);
      }
    };

    var personas_data = (0,vue__WEBPACK_IMPORTED_MODULE_14__.reactive)({
      accion: "Agregar",
      nombre: "",
      ci: "",
      apellido_p: "",
      apellido_m: "",
      telefono: "",
      direccion: "",
      correo: "",
      fecha_nacimiento: "",
      genero: ""
    });
    var usuarios_data = (0,vue__WEBPACK_IMPORTED_MODULE_14__.reactive)({
      accion: "Agregar",
      usuario: "",
      password: "",
      nivel: {}
    });
    var onPost = {
      /* Ni idea de cual sea, pero ahí van */
      preserveScroll: true,
      preserveState: true,
      onSuccess: function onSuccess(sucess) {
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_15__.Notify.success(sucess.props.flash.success);
        data.verModalUsuarios = false;
        data.verModalClientes = false;
        data.verModalEmpleados = false;
        data.verModalPersonas = false;
        data.cliente_sel = {};
        data.empleado_sel = {};
        data.persona_sel = {};
        data.usuario_sel = {};
        /* Limpiar datos de usuario*/

        for (var i in usuarios_data) {
          usuarios_data[i] = "";
        }

        for (var _i in personas_data) {
          personas_data[_i] = "";
        }
      },
      onError: function onError(error) {
        for (var i in error) {
          notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_15__.Notify.failure(error[i]);
        }
      }
    };

    var crearPersona = function crearPersona() {
      var _data$persona_sel, _personas_data$genero;

      /* Validar */
      if (personas_data.nombre == "") {
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_15__.Notify.failure("El nombre es requerido");
        return;
      }

      if (personas_data.ci == "") {
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_15__.Notify.failure("El ci es requerido");
        return;
      }

      if (personas_data.apellido_p == "") {
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_15__.Notify.failure("El apellido paterno es requerido");
        return;
      }
      /* Lo demás es nullable así que fin*/


      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_12__.Inertia.post(route(personas_data.accion == "Agregar" ? "personas_crear" : "personas_editar"), {
        id_persona: (_data$persona_sel = data.persona_sel) === null || _data$persona_sel === void 0 ? void 0 : _data$persona_sel.id_persona,
        nombre: personas_data.nombre,
        ci: personas_data.ci,
        apellido_p: personas_data.apellido_p,
        apellido_m: personas_data.apellido_m,
        telefono: personas_data.telefono,
        correo: personas_data.correo,
        direccion: personas_data.direccion,
        fecha_nacimiento: personas_data.fecha_nacimiento,
        genero: (_personas_data$genero = personas_data.genero) === null || _personas_data$genero === void 0 ? void 0 : _personas_data$genero.label
      }, onPost);
    };

    var crearUsuario = function crearUsuario() {
      /* Validate */
      if (usuarios_data.accion == "Agregar") {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_12__.Inertia.post(route("usuarios_crear"), {
          usuario: usuarios_data.usuario,
          password: usuarios_data.password,
          nivel: usuarios_data.nivel.id
        }, onPost);
      } else {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_12__.Inertia.post(route("usuarios_editar"), {
          id_usuario: data.usuario_sel.id_usuario,
          usuario: usuarios_data.usuario,
          password: usuarios_data.password == "" ? null : usuarios_data.password,
          nivel: usuarios_data.nivel.id
        }, onPost);
      }
    };

    var data = (0,vue__WEBPACK_IMPORTED_MODULE_14__.reactive)({
      verModalUsuarios: false,
      verModalClientes: false,
      verModalEmpleados: false,
      verModalPersonas: false,
      usuario_sel: {},
      empleado_sel: {},
      persona_sel: {},
      cliente_sel: {}
    });
    var clientes_c = (0,vue__WEBPACK_IMPORTED_MODULE_14__.computed)(function () {
      return props.clientes.map(function (cliente) {
        var persona = props.persona.find(function () {
          return cliente.id_persona == persona.id_persona;
        });
        return _objectSpread(_objectSpread({}, cliente), {}, {
          nombre: persona.nombre + " " + persona.apellido_p + "[".concat(persona.ci, "]")
        });
      });
    });
    var empleados_c = (0,vue__WEBPACK_IMPORTED_MODULE_14__.computed)(function () {
      return props.empleados.map(function (empleado) {
        var persona_emp = props.personas.find(function (persona) {
          return persona.id_persona == empleado.id_persona;
        });
        return _objectSpread(_objectSpread({}, empleado), {}, {
          nombre: persona_emp.nombre + " " + persona_emp.apellido_p + " " + persona_emp.apellido_m,
          usuario: props.usuarios.find(function (usuario) {
            return usuario.id_usuario == empleado.id_usuario;
          })
        });
      });
    });
    var usuarios_c = (0,vue__WEBPACK_IMPORTED_MODULE_14__.computed)(function () {
      return props.usuarios.map(function (usuario) {
        return _objectSpread(_objectSpread({}, usuario), {}, {
          id_usuario: usuario.id_usuario,
          usuario: usuario.usuario,
          nivel: usuario.nivel,
          estado: usuario.deleted_at == null ? "Activo" : usuario.deleted_at
        });
      });
    });
    var filters_c = (0,vue__WEBPACK_IMPORTED_MODULE_14__.reactive)({
      global: {
        value: "",
        matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_13__.FilterMatchMode.Contains
      }
    });
    var filters_e = (0,vue__WEBPACK_IMPORTED_MODULE_14__.reactive)({
      global: {
        value: "",
        matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_13__.FilterMatchMode.Contains
      }
    });
    var filters_u = (0,vue__WEBPACK_IMPORTED_MODULE_14__.reactive)({
      global: {
        value: "",
        matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_13__.FilterMatchMode.Contains
      }
    });
    var filters_p = (0,vue__WEBPACK_IMPORTED_MODULE_14__.reactive)({
      global: {
        value: "",
        matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_13__.FilterMatchMode.Contains
      }
    });

    var getDate = function getDate(date) {
      return dayjs__WEBPACK_IMPORTED_MODULE_16___default()(date).format("DD/MM/YYYY") == "Invalid Date" ? date : dayjs__WEBPACK_IMPORTED_MODULE_16___default()(date).format("DD/MM/YYYY");
    };

    return {
      clientes_data: clientes_data,
      estado_persona: estado_persona,
      setEditPersonas: setEditPersonas,
      crearPersona: crearPersona,
      generos: generos,
      personas_data: personas_data,
      estado_usuario: estado_usuario,
      crearUsuario: crearUsuario,
      niveles: niveles,
      usuarios_data: usuarios_data,
      getDate: getDate,
      filters_p: filters_p,
      clientes_c: clientes_c,
      empleados_c: empleados_c,
      data: data,
      filters_c: filters_c,
      filters_e: filters_e,
      filters_u: filters_u,
      usuarios_c: usuarios_c,
      personas_c: personas_c
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Comun/IconoCrear.vue?vue&type=template&id=7a418b2f":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Comun/IconoCrear.vue?vue&type=template&id=7a418b2f ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-plus-square",
  viewBox: "0 0 16 16"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_2, _hoisted_3];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_4);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Comun/IconoEditar.vue?vue&type=template&id=0dfaeb43":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Comun/IconoEditar.vue?vue&type=template&id=0dfaeb43 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-pencil-fill",
  viewBox: "0 0 16 16"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_3);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Comun/IconoEliminar.vue?vue&type=template&id=535a01ae":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Comun/IconoEliminar.vue?vue&type=template&id=535a01ae ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-file-earmark-minus-fill",
  viewBox: "0 0 16 16"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6 8.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_3);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Layout.vue?vue&type=template&id=7edced13":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Layout.vue?vue&type=template&id=7edced13 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "relative min-h-screen"
};
var _hoisted_2 = {
  "class": "flex flex-wrap items-center justify-between w-full py-4 lg:py-0 px-4 text-lg text-gray-700 bg-gray-600"
};
var _hoisted_3 = {
  "class": "flex"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/img/VanadisOK.png",
  "class": "object-contain h-20",
  alt: "Logo"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = [_hoisted_4];

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M4 6h16M4 12h16M4 18h16"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = [_hoisted_6];
var _hoisted_8 = {
  "class": "pt-2 text-base text-gray-700 lg:flex lg:justify-between lg:pt-0"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SplitButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SplitButton");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.irA('dashboard');
    }),
    "class": "text-white text-4xl"
  }, _hoisted_5)]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "menu-button",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.menuOptions.show = !$setup.menuOptions.show;
    }),
    "class": "h-6 w-6 cursor-pointer lg:hidden block",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _hoisted_7)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)('w-full lg:flex lg:items-center lg:w-auto' + ($setup.menuOptions.show ? ' hidden' : '')),
    id: "menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SplitButton, {
    label: "Dashboard",
    model: $setup.direcciones,
    "class": "p-button-md p-button-text mt-1.5"
  }, null, 8
  /* PROPS */
  , ["model"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "ml-6 text-white hover:text-red-600 mr-4 lg:p-4 py-2 block",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.irA('dashboard');
    })
  }, "Estadísticas")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "ml-6 text-white hover:text-red-600 mr-4 lg:p-4 py-2 block",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.irA('dashboard');
    })
  }, "Reportes")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "ml-6 text-white hover:text-red-600 mr-4 lg:p-4 py-2 block",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.irA('logout');
    })
  }, "Cerrar sesión")])])], 2
  /* CLASS */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("article", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <footer class=\"absolute w-full bottom-0 mt-2\">\n            <div class=\"flex bg-gray-700 h-10 justify-center\">\n                <p class=\"text-center self-center text-white\">\n                    Hecho por\n                    <a\n                        class=\"text-green-400\"\n                        href=\"https://github.com/CraniumAdamantium\"\n                        >Link\n                    </a>\n                    y\n                    <a class=\"text-blue-500\" href=\"https://github.com/Hyhy092\"\n                        >Wits</a\n                    >\n                </p>\n            </div>\n        </footer> ")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Usuarios/OldUsuarios.vue?vue&type=template&id=4f9e4b6a":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Usuarios/OldUsuarios.vue?vue&type=template&id=4f9e4b6a ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex flex-wrap mx-4 mt-4 pb-10 justify-center gap-2"
};
var _hoisted_2 = {
  key: 0
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-lg text-center text-white"
}, "Usuarios", -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "No hay usuarios", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "flex flex-col justify-center space-x-2 gap-2"
};
var _hoisted_6 = {
  "class": "p-input-icon-left mx-auto mb-2"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "pi pi-search"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "flex justify-center flex-wrap gap-2"
};
var _hoisted_9 = ["disabled"];
var _hoisted_10 = ["disabled"];

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-lg text-center text-white"
}, "Clientes", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("No hay clientes ");

var _hoisted_13 = {
  "class": "flex flex-col justify-center space-x-2 gap-2"
};
var _hoisted_14 = {
  "class": "p-input-icon-left mx-auto mb-2"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "pi pi-search"
}, null, -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "flex justify-center flex-wrap gap-2"
};
var _hoisted_17 = ["disabled"];
var _hoisted_18 = ["disabled"];
var _hoisted_19 = {
  key: 1
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-lg text-center text-white"
}, "Empleados", -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "flex flex-col justify-center space-x-2 gap-2"
};
var _hoisted_22 = {
  "class": "p-input-icon-left mx-auto mb-2"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "pi pi-search"
}, null, -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "flex justify-center flex-wrap gap-2"
};
var _hoisted_25 = ["disabled"];
var _hoisted_26 = ["disabled"];

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("No hay empleados ");

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(">");

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-lg text-center text-white"
}, "Personas", -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "flex sm:flex-row flex-col justify-center space-x-2 gap-2"
};
var _hoisted_31 = {
  "class": "p-input-icon-left mx-auto lg:mr-auto lg:ml-0 mb-2"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "pi pi-search"
}, null, -1
/* HOISTED */
);

var _hoisted_33 = {
  "class": "flex justify-center flex-wrap gap-2"
};
var _hoisted_34 = ["disabled"];
var _hoisted_35 = ["disabled"];

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("No hay personas ");

var _hoisted_37 = {
  "class": "text-white text-2xl"
};
var _hoisted_38 = {
  "class": "flex lg:flex-row flex-col gap-2 justify-center"
};
var _hoisted_39 = {
  "class": "w-full"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Usuario*", -1
/* HOISTED */
);

var _hoisted_41 = {
  "class": "w-full"
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Contraseña*", -1
/* HOISTED */
);

var _hoisted_43 = {
  "class": "w-full"
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Nivel*", -1
/* HOISTED */
);

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Agrega un cliente ");

var _hoisted_46 = {
  "class": "flex"
};
var _hoisted_47 = {
  "class": "text-white text-2xl"
};
var _hoisted_48 = {
  "class": "grid lg:grid-cols-2 grid-cols-1 gap-2"
};
var _hoisted_49 = {
  "class": "w-full"
};

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Nombre*", -1
/* HOISTED */
);

var _hoisted_51 = {
  "class": "w-full"
};

var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "CI*", -1
/* HOISTED */
);

var _hoisted_53 = {
  "class": "w-full"
};

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Apellido Paterno*", -1
/* HOISTED */
);

var _hoisted_55 = {
  "class": "w-full"
};

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Apellido Materno", -1
/* HOISTED */
);

var _hoisted_57 = {
  "class": "w-full"
};

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Teléfono", -1
/* HOISTED */
);

var _hoisted_59 = {
  "class": "w-full"
};

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Correo", -1
/* HOISTED */
);

var _hoisted_61 = {
  "class": "w-full"
};

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Género", -1
/* HOISTED */
);

var _hoisted_63 = {
  "class": "w-full"
};

var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Fecha de nacimiento", -1
/* HOISTED */
);

var _hoisted_65 = {
  "class": "col-span-2"
};

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Dirección", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputText");

  var _component_IconoCrear = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconoCrear");

  var _component_IconoEditar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconoEditar");

  var _component_IconoEliminar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconoEliminar");

  var _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Column");

  var _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DataTable");

  var _component_Dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dropdown");

  var _component_Dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dialog");

  var _component_Calendar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Calendar");

  var _component_Textarea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Textarea");

  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Para usuarios "), $props.usuario.nivel == 'Administrador' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
    value: $setup.usuarios_c,
    paginator: true,
    rows: 5,
    selectionMode: "single",
    selection: $setup.data.usuario_sel,
    "onUpdate:selection": _cache[4] || (_cache[4] = function ($event) {
      return $setup.data.usuario_sel = $event;
    }),
    filters: $setup.filters_u,
    "onUpdate:filters": _cache[5] || (_cache[5] = function ($event) {
      return $setup.filters_u = $event;
    })
  }, {
    empty: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4];
    }),
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _$setup$data$usuario_, _$setup$data$usuario_2, _$setup$data$usuario_3, _$setup$data$usuario_4;

      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        type: "text",
        modelValue: $setup.filters_u['global'].value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.filters_u['global'].value = $event;
        }),
        placeholder: "Buscar"
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        "class": "disabled:bg-green-800 bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2.5",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $setup.data.verModalUsuarios = true;
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconoCrear)])), [[_directive_tooltip, 'Crear usuario', void 0, {
        bottom: true
      }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        "class": "disabled:bg-gray-500 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-4 py-2.5",
        disabled: Object.keys((_$setup$data$usuario_ = $setup.data.usuario_sel) !== null && _$setup$data$usuario_ !== void 0 ? _$setup$data$usuario_ : {}).length === 0,
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return $setup.usuarios_data.accion = 'Editar', $setup.data.verModalUsuarios = true, $setup.usuarios_data.usuario = $setup.data.usuario_sel.usuario, $setup.usuarios_data.nivel = $setup.niveles.find(function (n) {
            var _ref;

            return (_ref = n.nombre == $setup.data.usuario_sel.nivel) !== null && _ref !== void 0 ? _ref : '';
          });
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconoEditar)], 8
      /* PROPS */
      , _hoisted_9)), [[_directive_tooltip, 'Editar usuario seleccionado', void 0, {
        bottom: true
      }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["disabled:bg-gray-500 text-white rounded-lg px-4 py-2.5", ((_$setup$data$usuario_2 = $setup.data.usuario_sel) === null || _$setup$data$usuario_2 === void 0 ? void 0 : _$setup$data$usuario_2.deleted_at) == null ? 'bg-red-500 hover:bg-red-600' : 'bg-sky-500']),
        disabled: Object.keys((_$setup$data$usuario_3 = $setup.data.usuario_sel) !== null && _$setup$data$usuario_3 !== void 0 ? _$setup$data$usuario_3 : {}).length === 0,
        onClick: _cache[3] || (_cache[3] = function ($event) {
          return $setup.estado_usuario();
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconoEliminar)], 10
      /* CLASS, PROPS */
      , _hoisted_10)), [[_directive_tooltip, ((_$setup$data$usuario_4 = $setup.data.usuario_sel) === null || _$setup$data$usuario_4 === void 0 ? void 0 : _$setup$data$usuario_4.deleted_at) == null ? 'Eliminar usuario seleccionado' : 'Restaurar usuario seleccionado', void 0, {
        bottom: true
      }]])])])];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Usuario",
        field: "usuario",
        sortable: true
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Nivel",
        field: "nivel",
        sortable: true
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Estado",
        field: "estado",
        sortable: true
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(slotProps.data.estado == 'Activo' ? 'bg-green-500 text-white p-2 rounded-lg' : 'bg-red-500 text-white p-2 rounded-lg')
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getDate(slotProps.data.estado)), 3
          /* TEXT, CLASS */
          )];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "selection", "filters"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Para Clientes "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
    value: $setup.clientes_c,
    paginator: true,
    rows: 10,
    selectionMode: "single",
    selection: $setup.data.cliente_sel,
    "onUpdate:selection": _cache[8] || (_cache[8] = function ($event) {
      return $setup.data.cliente_sel = $event;
    }),
    filters: $setup.filters_c,
    "onUpdate:filters": _cache[9] || (_cache[9] = function ($event) {
      return $setup.filters_c = $event;
    })
  }, {
    empty: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12];
    }),
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _$setup$data$cliente_, _$setup$data$cliente_2;

      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        type: "text",
        modelValue: $setup.filters_c['global'].value,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $setup.filters_c['global'].value = $event;
        }),
        placeholder: "Buscar cliente..."
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        "class": "disabled:bg-green-800 bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2.5",
        onClick: _cache[7] || (_cache[7] = function ($event) {
          return $setup.data.verModalClientes = true;
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconoCrear)])), [[_directive_tooltip, 'Agregar cliente', void 0, {
        bottom: true
      }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        "class": "disabled:bg-gray-500 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-4 py-2.5",
        disabled: Object.keys((_$setup$data$cliente_ = $setup.data.cliente_sel) !== null && _$setup$data$cliente_ !== void 0 ? _$setup$data$cliente_ : {}).length === 0
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconoEditar)], 8
      /* PROPS */
      , _hoisted_17)), [[_directive_tooltip, 'Editar cliente', void 0, {
        bottom: true
      }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        "class": "disabled:bg-gray-500 bg-red-400 hover:bg-red-500 text-white rounded-lg px-4 py-2.5",
        disabled: Object.keys((_$setup$data$cliente_2 = $setup.data.cliente_sel) !== null && _$setup$data$cliente_2 !== void 0 ? _$setup$data$cliente_2 : {}).length === 0
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconoEliminar)], 8
      /* PROPS */
      , _hoisted_18)), [[_directive_tooltip, 'Eliminar cliente', void 0, {
        bottom: true
      }]])])])];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Nombre ",
        field: "nombre"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Estado",
        field: "deleted_at"
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data[slotProps.field] == null ? "Activo" : "Creado en " + slotProps.data[slotProps.field]), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "selection", "filters"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Empleados "), $props.usuario.nivel == 'Administrador' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
    value: $setup.empleados_c,
    paginator: true,
    rows: 10,
    selectionMode: "single",
    selection: $setup.data.empleado_sel,
    "onUpdate:selection": _cache[12] || (_cache[12] = function ($event) {
      return $setup.data.empleado_sel = $event;
    }),
    filters: $setup.filters_e,
    "onUpdate:filters": _cache[13] || (_cache[13] = function ($event) {
      return $setup.filters_e = $event;
    })
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _$setup$data$empleado, _$setup$data$empleado2;

      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        type: "text",
        modelValue: $setup.filters_e['global'].value,
        "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
          return $setup.filters_e['global'].value = $event;
        }),
        placeholder: "Buscar empleado..."
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        "class": "disabled:bg-green-800 bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2.5",
        onClick: _cache[11] || (_cache[11] = function ($event) {
          return $setup.data.verModalEmpleados = true;
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconoCrear)])), [[_directive_tooltip, 'Agregar empleado', void 0, {
        bottom: true
      }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        "class": "disabled:bg-gray-500 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-4 py-2.5",
        disabled: Object.keys((_$setup$data$empleado = $setup.data.empleado_sel) !== null && _$setup$data$empleado !== void 0 ? _$setup$data$empleado : {}).length === 0
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconoEditar)], 8
      /* PROPS */
      , _hoisted_25)), [[_directive_tooltip, 'Editar empleado', void 0, {
        bottom: true
      }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        "class": "disabled:bg-gray-500 bg-red-400 hover:bg-red-500 text-white rounded-lg px-4 py-2.5",
        disabled: Object.keys((_$setup$data$empleado2 = $setup.data.empleado_sel) !== null && _$setup$data$empleado2 !== void 0 ? _$setup$data$empleado2 : {}).length === 0
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconoEliminar)], 8
      /* PROPS */
      , _hoisted_26)), [[_directive_tooltip, 'Eliminar empleado', void 0, {
        bottom: true
      }]])])])];
    }),
    empty: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_27];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Nombre",
        sortable: true,
        field: "nombre"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Usuario",
        sortable: true,
        field: "usuario"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Creado en",
        sortable: true,
        field: "created_at"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Salario Bs.-",
        sortable: true,
        field: "salario"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Estado",
        sortable: true,
        field: "deleted_at"
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data[slotProps.field] == null ? "Activo" : "Creado en " + slotProps.data[slotProps.field]), 1
          /* TEXT */
          )];
        }),
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_28];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "selection", "filters"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Para personas "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
    value: $props.personas,
    paginator: true,
    rows: 10,
    selectionMode: "single",
    selection: $setup.data.persona_sel,
    "onUpdate:selection": _cache[18] || (_cache[18] = function ($event) {
      return $setup.data.persona_sel = $event;
    }),
    filters: $setup.filters_p,
    "onUpdate:filters": _cache[19] || (_cache[19] = function ($event) {
      return $setup.filters_p = $event;
    })
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _$setup$data$persona_, _$setup$data$persona_2, _$setup$data$persona_3;

      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        type: "text",
        modelValue: $setup.filters_p['global'].value,
        "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
          return $setup.filters_p['global'].value = $event;
        }),
        placeholder: "Buscar personas..."
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        "class": "disabled:bg-green-800 bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2.5",
        onClick: _cache[15] || (_cache[15] = function ($event) {
          return $setup.data.verModalPersonas = true;
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconoCrear)])), [[_directive_tooltip, 'Agregar persona', void 0, {
        bottom: true
      }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        "class": "disabled:bg-gray-500 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-4 py-2.5",
        disabled: Object.keys((_$setup$data$persona_ = $setup.data.persona_sel) !== null && _$setup$data$persona_ !== void 0 ? _$setup$data$persona_ : {}).length === 0,
        onClick: _cache[16] || (_cache[16] = function ($event) {
          return $setup.setEditPersonas();
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconoEditar)], 8
      /* PROPS */
      , _hoisted_34)), [[_directive_tooltip, 'Editar persona', void 0, {
        bottom: true
      }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["disabled:bg-gray-500 text-white rounded-lg px-4 py-2.5", ((_$setup$data$persona_2 = $setup.data.persona_sel) === null || _$setup$data$persona_2 === void 0 ? void 0 : _$setup$data$persona_2.deleted_at) == null ? 'bg-red-500 hover:bg-red-600' : 'bg-sky-500']),
        disabled: Object.keys((_$setup$data$persona_3 = $setup.data.persona_sel) !== null && _$setup$data$persona_3 !== void 0 ? _$setup$data$persona_3 : {}).length === 0,
        onClick: _cache[17] || (_cache[17] = function ($event) {
          return $setup.estado_persona();
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconoEliminar)], 10
      /* CLASS, PROPS */
      , _hoisted_35)), [[_directive_tooltip, 'Eliminar persona', void 0, {
        bottom: true
      }]])])])];
    }),
    empty: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_36];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        sortable: true,
        field: "nombre",
        header: "Nombre"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        sortable: true,
        field: "ci",
        header: "CI"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        sortable: true,
        field: "apellido_p",
        header: "Apellido Paterno"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        sortable: true,
        field: "apellido_m",
        header: "Apellido Materno"
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data[slotProps.field] == null ? "-" : slotProps.data[slotProps.field]), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        sortable: true,
        field: "telefono",
        header: "Teléfono"
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data[slotProps.field] == null ? "-" : slotProps.data[slotProps.field]), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        sortable: true,
        field: "direccion",
        header: "Dirección"
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data[slotProps.field] == null ? "-" : slotProps.data[slotProps.field]), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        sortable: true,
        field: "correo",
        header: "Correo"
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data[slotProps.field] == null ? "-" : slotProps.data[slotProps.field]), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        sortable: true,
        field: "fecha_nacimiento",
        header: "Fecha de nacimiento"
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getDate(slotProps.data[slotProps.field]) == null ? "-" : $setup.getDate(slotProps.data[slotProps.field])), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        sortable: true,
        field: "genero",
        header: "Género"
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data[slotProps.field] == null ? "-" : slotProps.data[slotProps.field]), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "deleted_at",
        header: "Estado",
        sortable: true
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Definimos si está activo o no "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["p-2 rounded-lg w-fit", slotProps.data[slotProps.field] == null ? 'bg-green-500' : 'bg-red-500'])
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data[slotProps.field] == null ? "Activo" : $setup.getDate(slotProps.data[slotProps.field])), 3
          /* TEXT, CLASS */
          )];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "selection", "filters"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Dialogs"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Para usuario "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {
    breakpoints: {
      '960px': '75vw',
      '640px': '100vw'
    },
    style: {
      width: '50vw'
    },
    modal: true,
    visible: $setup.data.verModalUsuarios,
    "onUpdate:visible": _cache[24] || (_cache[24] = function ($event) {
      return $setup.data.verModalUsuarios = $event;
    })
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_37, " Estás " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.usuarios_data.accion == "Agregar" ? "agregando un usuario" : "editando un usuario "), 1
      /* TEXT */
      )];
    }),
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["rounded-lg p-2 shadow disabled:bg-gray-400", $setup.usuarios_data.accion == 'Agregar' ? 'bg-green-500' : 'bg-yellow-500']),
        onClick: _cache[23] || (_cache[23] = function ($event) {
          return $setup.crearUsuario();
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.usuarios_data.accion), 3
      /* TEXT, CLASS */
      )];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        type: "text",
        "class": "w-full",
        placeholder: "Nombre de usuario",
        modelValue: $setup.usuarios_data.usuario,
        "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
          return $setup.usuarios_data.usuario = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        type: "password",
        "class": "w-full",
        placeholder: "Contraseña",
        modelValue: $setup.usuarios_data.password,
        "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
          return $setup.usuarios_data.password = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, {
        options: $setup.niveles,
        "class": "min-w-full w-full",
        optionLabel: "nombre",
        modelValue: $setup.usuarios_data.nivel,
        "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
          return $setup.usuarios_data.nivel = $event;
        }),
        placeholder: "Selecciona un nivel"
      }, null, 8
      /* PROPS */
      , ["options", "modelValue"])])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["visible"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Clientes "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {
    breakpoints: {
      '960px': '75vw',
      '640px': '100vw'
    },
    style: {
      width: '50vw'
    },
    modal: true,
    visible: $setup.data.verModalClientes,
    "onUpdate:visible": _cache[27] || (_cache[27] = function ($event) {
      return $setup.data.verModalClientes = $event;
    })
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_45];
    }),
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["rounded-lg p-2 shadow disabled:bg-gray-400", $setup.clientes_data.accion == 'Agregar' ? 'bg-green-500' : 'bg-yellow-500']),
        onClick: _cache[26] || (_cache[26] = function ($event) {
          return _ctx.crearCliente();
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.clientes_data.accion), 3
      /* TEXT, CLASS */
      )];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, {
        "class": "mx-auto",
        options: $setup.personas_c,
        optionLabel: "nombre_c",
        placeholder: "Selecciona una persona",
        modelValue: $setup.clientes_data.persona,
        "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
          return $setup.clientes_data.persona = $event;
        })
      }, null, 8
      /* PROPS */
      , ["options", "modelValue"])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["visible"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {
    breakpoints: {
      '960px': '75vw',
      '640px': '100vw'
    },
    style: {
      width: '50vw'
    },
    modal: true,
    visible: $setup.data.verModalEmpleados,
    "onUpdate:visible": _cache[28] || (_cache[28] = function ($event) {
      return $setup.data.verModalEmpleados = $event;
    })
  }, null, 8
  /* PROPS */
  , ["visible"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {
    breakpoints: {
      '960px': '75vw',
      '640px': '100vw'
    },
    style: {
      width: '50vw'
    },
    modal: true,
    visible: $setup.data.verModalPersonas,
    "onUpdate:visible": _cache[39] || (_cache[39] = function ($event) {
      return $setup.data.verModalPersonas = $event;
    })
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_47, " Estás " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.personas_data.accion == "Agregar" ? "agregando una persona" : "editando una persona "), 1
      /* TEXT */
      )];
    }),
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["rounded-lg p-2 shadow disabled:bg-gray-400", $setup.personas_data.accion == 'Agregar' ? 'bg-green-500' : 'bg-yellow-500']),
        onClick: _cache[38] || (_cache[38] = function ($event) {
          return $setup.crearPersona();
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.personas_data.accion), 3
      /* TEXT, CLASS */
      )];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        "class": "w-full",
        modelValue: $setup.personas_data.nombre,
        "onUpdate:modelValue": _cache[29] || (_cache[29] = function ($event) {
          return $setup.personas_data.nombre = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [_hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        type: "number",
        "class": "w-full",
        modelValue: $setup.personas_data.ci,
        "onUpdate:modelValue": _cache[30] || (_cache[30] = function ($event) {
          return $setup.personas_data.ci = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [_hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        "class": "w-full",
        modelValue: $setup.personas_data.apellido_p,
        "onUpdate:modelValue": _cache[31] || (_cache[31] = function ($event) {
          return $setup.personas_data.apellido_p = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        "class": "w-full",
        modelValue: $setup.personas_data.apellido_m,
        "onUpdate:modelValue": _cache[32] || (_cache[32] = function ($event) {
          return $setup.personas_data.apellido_m = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [_hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        type: "number",
        "class": "w-full",
        modelValue: $setup.personas_data.telefono,
        "onUpdate:modelValue": _cache[33] || (_cache[33] = function ($event) {
          return $setup.personas_data.telefono = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [_hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        type: "email",
        placeholder: "Correo",
        "class": "w-full",
        modelValue: $setup.personas_data.correo,
        "onUpdate:modelValue": _cache[34] || (_cache[34] = function ($event) {
          return $setup.personas_data.correo = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [_hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, {
        options: $setup.generos,
        "class": "min-w-full w-full",
        optionLabel: "label",
        modelValue: $setup.personas_data.genero,
        "onUpdate:modelValue": _cache[35] || (_cache[35] = function ($event) {
          return $setup.personas_data.genero = $event;
        }),
        placeholder: "Selecciona un Genero"
      }, null, 8
      /* PROPS */
      , ["options", "modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [_hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Calendar, {
        placeholder: "Selecciona una fecha",
        "class": "w-full",
        modelValue: $setup.personas_data.fecha_nacimiento,
        "onUpdate:modelValue": _cache[36] || (_cache[36] = function ($event) {
          return $setup.personas_data.fecha_nacimiento = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [_hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Textarea, {
        placeholder: "Introduce la dirección de esta persona",
        autoResize: true,
        rows: "5",
        cols: "30",
        "class": "w-full",
        modelValue: $setup.personas_data.direccion,
        "onUpdate:modelValue": _cache[37] || (_cache[37] = function ($event) {
          return $setup.personas_data.direccion = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])])])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["visible"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Comun/IconoCrear.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Comun/IconoCrear.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IconoCrear_vue_vue_type_template_id_7a418b2f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconoCrear.vue?vue&type=template&id=7a418b2f */ "./resources/js/Pages/Comun/IconoCrear.vue?vue&type=template&id=7a418b2f");
/* harmony import */ var _home_link_pruebas_public_html_ultimo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_home_link_pruebas_public_html_ultimo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_IconoCrear_vue_vue_type_template_id_7a418b2f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Comun/IconoCrear.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Comun/IconoEditar.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Comun/IconoEditar.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IconoEditar_vue_vue_type_template_id_0dfaeb43__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconoEditar.vue?vue&type=template&id=0dfaeb43 */ "./resources/js/Pages/Comun/IconoEditar.vue?vue&type=template&id=0dfaeb43");
/* harmony import */ var _home_link_pruebas_public_html_ultimo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_home_link_pruebas_public_html_ultimo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_IconoEditar_vue_vue_type_template_id_0dfaeb43__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Comun/IconoEditar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Comun/IconoEliminar.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Comun/IconoEliminar.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IconoEliminar_vue_vue_type_template_id_535a01ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconoEliminar.vue?vue&type=template&id=535a01ae */ "./resources/js/Pages/Comun/IconoEliminar.vue?vue&type=template&id=535a01ae");
/* harmony import */ var _home_link_pruebas_public_html_ultimo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_home_link_pruebas_public_html_ultimo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_IconoEliminar_vue_vue_type_template_id_535a01ae__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Comun/IconoEliminar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Layout.vue":
/*!***************************************!*\
  !*** ./resources/js/Pages/Layout.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_7edced13__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=7edced13 */ "./resources/js/Pages/Layout.vue?vue&type=template&id=7edced13");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js */ "./resources/js/Pages/Layout.vue?vue&type=script&lang=js");
/* harmony import */ var _home_link_pruebas_public_html_ultimo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_link_pruebas_public_html_ultimo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Layout_vue_vue_type_template_id_7edced13__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Layout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Usuarios/OldUsuarios.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Usuarios/OldUsuarios.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OldUsuarios_vue_vue_type_template_id_4f9e4b6a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OldUsuarios.vue?vue&type=template&id=4f9e4b6a */ "./resources/js/Pages/Usuarios/OldUsuarios.vue?vue&type=template&id=4f9e4b6a");
/* harmony import */ var _OldUsuarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OldUsuarios.vue?vue&type=script&lang=js */ "./resources/js/Pages/Usuarios/OldUsuarios.vue?vue&type=script&lang=js");
/* harmony import */ var _home_link_pruebas_public_html_ultimo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_link_pruebas_public_html_ultimo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_OldUsuarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_OldUsuarios_vue_vue_type_template_id_4f9e4b6a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Usuarios/OldUsuarios.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Layout.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Layout.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Layout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Usuarios/OldUsuarios.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Usuarios/OldUsuarios.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OldUsuarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OldUsuarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./OldUsuarios.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Usuarios/OldUsuarios.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Comun/IconoCrear.vue?vue&type=template&id=7a418b2f":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Comun/IconoCrear.vue?vue&type=template&id=7a418b2f ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IconoCrear_vue_vue_type_template_id_7a418b2f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IconoCrear_vue_vue_type_template_id_7a418b2f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IconoCrear.vue?vue&type=template&id=7a418b2f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Comun/IconoCrear.vue?vue&type=template&id=7a418b2f");


/***/ }),

/***/ "./resources/js/Pages/Comun/IconoEditar.vue?vue&type=template&id=0dfaeb43":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Comun/IconoEditar.vue?vue&type=template&id=0dfaeb43 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IconoEditar_vue_vue_type_template_id_0dfaeb43__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IconoEditar_vue_vue_type_template_id_0dfaeb43__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IconoEditar.vue?vue&type=template&id=0dfaeb43 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Comun/IconoEditar.vue?vue&type=template&id=0dfaeb43");


/***/ }),

/***/ "./resources/js/Pages/Comun/IconoEliminar.vue?vue&type=template&id=535a01ae":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Comun/IconoEliminar.vue?vue&type=template&id=535a01ae ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IconoEliminar_vue_vue_type_template_id_535a01ae__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IconoEliminar_vue_vue_type_template_id_535a01ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IconoEliminar.vue?vue&type=template&id=535a01ae */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Comun/IconoEliminar.vue?vue&type=template&id=535a01ae");


/***/ }),

/***/ "./resources/js/Pages/Layout.vue?vue&type=template&id=7edced13":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Layout.vue?vue&type=template&id=7edced13 ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_7edced13__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_7edced13__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=template&id=7edced13 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Layout.vue?vue&type=template&id=7edced13");


/***/ }),

/***/ "./resources/js/Pages/Usuarios/OldUsuarios.vue?vue&type=template&id=4f9e4b6a":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Usuarios/OldUsuarios.vue?vue&type=template&id=4f9e4b6a ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OldUsuarios_vue_vue_type_template_id_4f9e4b6a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OldUsuarios_vue_vue_type_template_id_4f9e4b6a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./OldUsuarios.vue?vue&type=template&id=4f9e4b6a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Usuarios/OldUsuarios.vue?vue&type=template&id=4f9e4b6a");


/***/ })

}]);