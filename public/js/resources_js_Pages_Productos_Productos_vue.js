"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Productos_Productos_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Productos/Productos.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Productos/Productos.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Layout.vue */ "./resources/js/Pages/Layout.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var primevue_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primevue/datatable */ "./node_modules/primevue/datatable/datatable.esm.js");
/* harmony import */ var primevue_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primevue/column */ "./node_modules/primevue/column/column.esm.js");
/* harmony import */ var primevue_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primevue/inputtext */ "./node_modules/primevue/inputtext/inputtext.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var primevue_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primevue/dropdown */ "./node_modules/primevue/dropdown/dropdown.esm.js");
/* harmony import */ var primevue_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primevue/calendar */ "./node_modules/primevue/calendar/calendar.esm.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var notiflix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! notiflix */ "./node_modules/notiflix/dist/notiflix-aio-3.2.5.min.js");
/* harmony import */ var notiflix__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(notiflix__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primevue_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primevue/api */ "./node_modules/primevue/api/api.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Import layout */












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Calendar: primevue_calendar__WEBPACK_IMPORTED_MODULE_7__["default"],
    DataTable: primevue_datatable__WEBPACK_IMPORTED_MODULE_2__["default"],
    Column: primevue_column__WEBPACK_IMPORTED_MODULE_3__["default"],
    InputText: primevue_inputtext__WEBPACK_IMPORTED_MODULE_4__["default"],
    Dropdown: primevue_dropdown__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  layout: _Layout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    usuario: {
      type: Object,
      required: true
    },
    productos: {
      type: Array,
      required: true
    },
    marcas: {
      type: Array,
      required: true
    },
    detalles: {
      type: Array,
      required: true
    },
    categorias: {
      type: Array,
      required: true
    }
  },
  setup: function setup(props) {
    var filters = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_10__.ref)({
      global: {
        value: null,
        matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_9__.FilterMatchMode.CONTAINS
      }
    });
    var nuevoProducto = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_10__.reactive)({
      nombre: "",
      precio: "",
      descuento: "",
      cantidad: "",
      descripcion: "",
      fecha_expiracion: "",
      categoria: "",
      marca: "",
      detalle: ""
    });

    var crearProducto = function crearProducto() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.post(route("productos_create"), {
        nombre: nuevoProducto.nombre,
        precio: nuevoProducto.precio,
        descuento: nuevoProducto.descuento,
        cantidad: nuevoProducto.cantidad,
        descripcion: nuevoProducto.descripcion,
        fecha_expiracion: nuevoProducto.fecha_expiracion,
        id_categoria: nuevoProducto.categoria.id,
        id_marca: nuevoProducto.marca.id,
        id_detalle: nuevoProducto.detalle.id
      }, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: function onSuccess() {
          nuevoProducto.nombre = "";
          nuevoProducto.precio = "";
          nuevoProducto.descuento = "";
          nuevoProducto.cantidad = "";
          nuevoProducto.descripcion = "";
          nuevoProducto.fecha_expiracion = "";
          nuevoProducto.categoria = "";
          nuevoProducto.marca = "";
          nuevoProducto.detalle = "";
          notiflix__WEBPACK_IMPORTED_MODULE_8__.Notify.success("Producto creado correctamente");
        },
        onError: function onError(error) {
          for (var i in error) {
            notiflix__WEBPACK_IMPORTED_MODULE_8__.Notify.failure(error[i]);
          }
        }
      });
    };

    var productos_c = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_11__.computed)(function () {
      return props.productos.map(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          fecha_expiracion_c: new Date(p.fecha_expiracion)
        });
      });
    });

    var getDate = function getDate(date) {
      var conv = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(date).format("DD/MM/YYYY");
      return conv != "Invalid Date" ? conv : "";
    };

    var data = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_10__.reactive)({
      expandido: [],
      editRow: []
    });

    var log = function log(d, e) {
      console.log(d);
      console.log(e);
    };

    var editarProducto = function editarProducto(e) {
      console.log(e);
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.post(route("productos_update"), {
        id: e.newData.id,
        nombre: e.newData.nombre,
        precio: e.newData.precio,
        descuento: e.newData.descuento,
        cantidad: e.newData.cantidad,
        descripcion: e.newData.descripcion,
        fecha_expiracion: e.newData.fecha_expiracion_c,
        id_categoria: e.newData.categoria.id,
        id_marca: e.newData.marca.id,
        id_detalle: e.newData.detalle.id
      }, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: function onSuccess() {
          notiflix__WEBPACK_IMPORTED_MODULE_8__.Notify.success("Producto editado correctamente");
        },
        onError: function onError(error) {
          for (var i in error) {
            notiflix__WEBPACK_IMPORTED_MODULE_8__.Notify.failure(error[i]);
          }
        }
      });
    };

    return {
      filters: filters,
      crearProducto: crearProducto,
      nuevoProducto: nuevoProducto,
      productos_c: productos_c,
      editarProducto: editarProducto,
      log: log,
      getDate: getDate,
      data: data
    };
  }
});

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Productos/Productos.vue?vue&type=template&id=5e2ce55e":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Productos/Productos.vue?vue&type=template&id=5e2ce55e ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mx-2 sm:mx-4 mt-2 pb-12"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-center text-white text-2xl"
}, "Productos", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "sm:w-fit w-full"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Nombre*", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "sm:w-fit w-full"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Precio*", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "sm:w-fit w-full"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Descuento*", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "sm:w-fit w-full"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Cantidad*", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "sm:w-fit w-full"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Descripción*", -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "sm:w-fit w-full"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Fecha expiración*", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "sm:w-fit w-full"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Categoria*", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "sm:w-fit w-full"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Marca*", -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "sm:w-fit w-full"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Detalle*", -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "flex"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "text-white rounded-tr-lg rounded-br-lg p-2 bg-green-500"
}, " Crear ", -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "sm:w-fit w-full"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-center"
}, "Buscar", -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Sin productos ");

var _hoisted_26 = {
  "class": "bg-sky-500 px-2 rounded-lg"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputText");

  var _component_Calendar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Calendar");

  var _component_Dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dropdown");

  var _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Column");

  var _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DataTable");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
    value: $setup.productos_c,
    rowGroupMode: "subheader",
    groupRowsBy: "id_grupo_producto",
    sortMode: "single",
    expandableRowGroups: true,
    expandedRowGroups: $setup.data.expandido,
    "onUpdate:expandedRowGroups": _cache[11] || (_cache[11] = function ($event) {
      return $setup.data.expandido = $event;
    }),
    responsiveLayout: "scroll",
    sortField: "id_grupo_producto",
    sortOrder: 1,
    "class": "p-datatable-sm",
    filters: $setup.filters,
    "onUpdate:filters": _cache[12] || (_cache[12] = function ($event) {
      return $setup.filters = $event;
    }),
    editMode: "row",
    editingRows: $setup.data.editRow,
    "onUpdate:editingRows": _cache[13] || (_cache[13] = function ($event) {
      return $setup.data.editRow = $event;
    }),
    onRowEditSave: $setup.editarProducto,
    showGridlines: ""
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $setup.crearProducto && $setup.crearProducto.apply($setup, arguments);
        }, ["prevent"])),
        "class": "flex flex-wrap gap-2 justify-center"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        "class": "w-full",
        modelValue: $setup.nuevoProducto.nombre,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.nuevoProducto.nombre = $event;
        }),
        type: "text"
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        min: "0",
        type: "number",
        "class": "w-full",
        modelValue: $setup.nuevoProducto.precio,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $setup.nuevoProducto.precio = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        min: "0",
        max: "100",
        type: "number",
        "class": "w-full",
        modelValue: $setup.nuevoProducto.descuento,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.nuevoProducto.descuento = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        min: "0",
        type: "number",
        "class": "w-full",
        modelValue: $setup.nuevoProducto.cantidad,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $setup.nuevoProducto.cantidad = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        "class": "w-full",
        type: "text",
        modelValue: $setup.nuevoProducto.descripcion,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $setup.nuevoProducto.descripcion = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Calendar, {
        placeholder: "dd/mm/aaaa",
        format: "dd/mm/yyyy",
        "class": "w-full",
        modelValue: $setup.nuevoProducto.fecha_expiracion,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $setup.nuevoProducto.fecha_expiracion = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, {
        filter: true,
        options: $props.categorias,
        optionLabel: "nombre",
        "class": "w-full",
        modelValue: $setup.nuevoProducto.categoria,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $setup.nuevoProducto.categoria = $event;
        })
      }, null, 8
      /* PROPS */
      , ["options", "modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, {
        filter: true,
        options: $props.marcas,
        optionLabel: "nombre",
        "class": "w-full",
        modelValue: $setup.nuevoProducto.marca,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
          return $setup.nuevoProducto.marca = $event;
        })
      }, null, 8
      /* PROPS */
      , ["options", "modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, {
        filter: true,
        options: $props.detalles,
        optionLabel: "nombre",
        "class": "w-full",
        modelValue: $setup.nuevoProducto.detalle,
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
          return $setup.nuevoProducto.detalle = $event;
        })
      }, {
        option: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("".concat(slotProps.option.nombre, "[").concat(slotProps.option.cantidad, " - ").concat($setup.getDate(slotProps.option.transaccion.fecha), "]")), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["options", "modelValue"]), _hoisted_22])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        modelValue: $setup.filters['global'].value,
        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
          return $setup.filters['global'].value = $event;
        }),
        "class": "w-full",
        placeholder: "Buscar..."
      }, null, 8
      /* PROPS */
      , ["modelValue"])])], 32
      /* HYDRATE_EVENTS */
      )];
    }),
    empty: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_25];
    }),
    groupheader: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("".concat(slotProps.data.nombre, " ").concat(slotProps.data.marca.nombre)), 1
      /* TEXT */
      )];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "id_grupo_producto",
        header: "Productos"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "nombre",
        header: "Nombre",
        style: {
          "min-width": "150px"
        }
      }, {
        editor: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
          var data = _ref.data,
              field = _ref.field;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
            modelValue: data[field],
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return data[field] = $event;
            },
            style: {
              "max-width": "150px"
            },
            type: "text"
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "precio",
        header: "Precio",
        style: {
          "min-width": "100px"
        }
      }, {
        editor: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
          var data = _ref2.data,
              field = _ref2.field;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
            style: {
              "max-width": "100px"
            },
            modelValue: data[field],
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return data[field] = $event;
            },
            type: "number",
            min: "0"
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "descuento",
        header: "Descuento",
        style: {
          "min-width": "100px"
        }
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.descuento) + "%", 1
          /* TEXT */
          )];
        }),
        editor: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref3) {
          var data = _ref3.data,
              field = _ref3.field;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
            modelValue: data[field],
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return data[field] = $event;
            },
            style: {
              "max-width": "100px"
            },
            type: "number",
            min: "0"
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "cantidad",
        header: "Cantidad",
        style: {
          "min-width": "100px"
        }
      }, {
        editor: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref4) {
          var data = _ref4.data,
              field = _ref4.field;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
            modelValue: data[field],
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return data[field] = $event;
            },
            "class": "w-fit",
            style: {
              "max-width": "100px"
            },
            type: "number",
            min: "0"
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "descripcion",
        header: "Descripción",
        style: {
          "min-width": "200px"
        }
      }, {
        editor: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref5) {
          var data = _ref5.data,
              field = _ref5.field;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
            style: {
              "max-width": "200px"
            },
            modelValue: data[field],
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return data[field] = $event;
            },
            type: "text"
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "fecha_expiracion",
        header: "Fecha de expiración",
        style: {
          "min-width": "100px"
        }
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getDate(slotProps.data.fecha_expiracion) != "" ? $setup.getDate(slotProps.data.fecha_expiracion) : "-"), 1
          /* TEXT */
          )];
        }),
        editor: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref6) {
          var data = _ref6.data;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Calendar, {
            style: {
              "max-width": "150px"
            },
            modelValue: data.fecha_expiracion_c,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return data.fecha_expiracion_c = $event;
            },
            type: "text"
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "marca",
        header: "Marca",
        style: {
          "min-width": "200px"
        }
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.marca.nombre), 1
          /* TEXT */
          )];
        }),
        editor: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref7) {
          var data = _ref7.data,
              field = _ref7.field;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, {
            filter: true,
            options: $props.marcas,
            optionLabel: "nombre",
            style: {
              "max-width": "150px"
            },
            modelValue: data[field],
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return data[field] = $event;
            },
            type: "text"
          }, null, 8
          /* PROPS */
          , ["options", "modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "categoria",
        header: "Categoria",
        style: {
          "min-width": "200px"
        }
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.categoria.nombre), 1
          /* TEXT */
          )];
        }),
        editor: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref8) {
          var data = _ref8.data,
              field = _ref8.field;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, {
            filter: true,
            options: $props.categorias,
            optionLabel: "nombre",
            style: {
              "max-width": "150px"
            },
            modelValue: data[field],
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return data[field] = $event;
            },
            type: "text"
          }, null, 8
          /* PROPS */
          , ["options", "modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "detalle",
        header: "Detalle Transacción",
        style: {
          "min-width": "200px"
        }
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("".concat(slotProps.data.detalle.nombre, " [").concat(slotProps.data.detalle.cantidad, " - ").concat($setup.getDate(slotProps.data.detalle.transaccion.fecha), "]")), 1
          /* TEXT */
          )];
        }),
        editor: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref9) {
          var data = _ref9.data,
              field = _ref9.field;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, {
            filter: true,
            options: $props.detalles,
            optionLabel: "nombre",
            style: {
              "max-width": "150px"
            },
            modelValue: data[field],
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return data[field] = $event;
            }
          }, {
            option: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("".concat(slotProps.option.nombre, "[").concat(slotProps.option.cantidad, " - ").concat($setup.getDate(slotProps.option.transaccion.fecha), "]")), 1
              /* TEXT */
              )];
            }),
            _: 2
            /* DYNAMIC */

          }, 1032
          /* PROPS, DYNAMIC_SLOTS */
          , ["options", "modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "deleted_at",
        header: "Estado",
        style: {
          "min-width": "200px"
        }
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-fit rounded-lg px-2", slotProps.data.deleted_at == null ? 'bg-green-500' : 'bg-red-500'])
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.deleted_at == null ? "Actual" : "Historico desde " + $setup.getDate(slotProps.data.deleted_at)), 3
          /* TEXT, CLASS */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "created_at",
        header: "Fecha de creación",
        style: {
          "min-width": "100px"
        }
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getDate(slotProps.data.created_at)), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        rowEditor: true,
        style: {
          "width": "10%",
          "min-width": "8rem"
        },
        bodyStyle: "text-align:center",
        header: "Editar"
      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "expandedRowGroups", "filters", "editingRows", "onRowEditSave"])]);
}

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

/***/ "./resources/js/Pages/Productos/Productos.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Productos/Productos.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Productos_vue_vue_type_template_id_5e2ce55e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Productos.vue?vue&type=template&id=5e2ce55e */ "./resources/js/Pages/Productos/Productos.vue?vue&type=template&id=5e2ce55e");
/* harmony import */ var _Productos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Productos.vue?vue&type=script&lang=js */ "./resources/js/Pages/Productos/Productos.vue?vue&type=script&lang=js");
/* harmony import */ var _home_link_pruebas_public_html_ultimo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_link_pruebas_public_html_ultimo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Productos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Productos_vue_vue_type_template_id_5e2ce55e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Productos/Productos.vue"]])
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

/***/ "./resources/js/Pages/Productos/Productos.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Productos/Productos.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Productos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Productos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Productos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Productos/Productos.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/Productos/Productos.vue?vue&type=template&id=5e2ce55e":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Productos/Productos.vue?vue&type=template&id=5e2ce55e ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Productos_vue_vue_type_template_id_5e2ce55e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Productos_vue_vue_type_template_id_5e2ce55e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Productos.vue?vue&type=template&id=5e2ce55e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Productos/Productos.vue?vue&type=template&id=5e2ce55e");


/***/ })

}]);