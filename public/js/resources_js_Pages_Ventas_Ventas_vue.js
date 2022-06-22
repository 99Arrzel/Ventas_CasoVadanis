(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Ventas_Ventas_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Layout.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Layout.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Ventas/Ventas.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Ventas/Ventas.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Layout.vue */ "./resources/js/Pages/Layout.vue");
/* harmony import */ var primevue_inputtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/inputtext */ "./node_modules/primevue/inputtext/inputtext.esm.js");
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primevue_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primevue/calendar */ "./node_modules/primevue/calendar/calendar.esm.js");
/* harmony import */ var _CodigoControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CodigoControl */ "./resources/js/Pages/Ventas/CodigoControl.js");
/* harmony import */ var _CodigoControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_CodigoControl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primevue_column__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primevue/column */ "./node_modules/primevue/column/column.esm.js");
/* harmony import */ var primevue_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primevue/datatable */ "./node_modules/primevue/datatable/datatable.esm.js");
/* harmony import */ var primevue_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primevue/dropdown */ "./node_modules/primevue/dropdown/dropdown.esm.js");
/* harmony import */ var notiflix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! notiflix */ "./node_modules/notiflix/dist/notiflix-aio-3.2.5.min.js");
/* harmony import */ var notiflix__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(notiflix__WEBPACK_IMPORTED_MODULE_8__);











/** GenerateControlCode requiere
 * @param {String} authorizationNumber Numero de autorizacion
 * @param {String} invoiceNumber Numero de factura
 * @param {String} nitci Número de Identificación Tributaria o Carnet de Identidad
 * @param {String} dateOfTransaction fecha de transaccion de la forma AAAAMMDD
 * @param {String} transactionAmount Monto de la transacción
 * @param {String} dosageKey Llave de dosificación
 *  */

console.log(_CodigoControl__WEBPACK_IMPORTED_MODULE_4__.generateControlCode);
/** Según https://impuestos.com.bo/aspectos-tecnicos-de-las-facturas/#:~:text=Datos%20de%20Dosificaci%C3%B3n.,Documento%20Equivalente%20(dato%20num%C3%A9rico)%3B
 *  La leyenda debe ser asignada automaticamente por el SFV (SIN)
 */

/** Código/Númeor de autorización también lo asigna el SFV (SIN)
 *
 *
 * */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Dropdown: primevue_dropdown__WEBPACK_IMPORTED_MODULE_7__["default"],
    InputText: primevue_inputtext__WEBPACK_IMPORTED_MODULE_1__["default"],
    Calendar: primevue_calendar__WEBPACK_IMPORTED_MODULE_3__["default"],
    DataTable: primevue_datatable__WEBPACK_IMPORTED_MODULE_6__["default"],
    Column: primevue_column__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  layout: _Layout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    usuario: {
      type: Object,
      required: true
    },
    personas: {
      type: Array,
      required: true
    },
    ventas: {
      type: Array,
      required: true
    },
    productos: {
      type: Array,
      required: true
    }
  },
  setup: function setup(props) {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__.onMounted)(function () {
      setInterval(function () {
        datosFactura.fecha = new Date();
      }, 1000);
    });
    var productos_c = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__.computed)(function () {
      /* Lo mismo que productos, pero vamos a filtar los valores en datosFactura.detalles */
      return props.productos.filter(function (producto) {
        return !datosFactura.detalles.some(function (detalle) {
          return detalle.producto.id === producto.id;
        });
      });
    });
    var toPush = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_10__.reactive)({
      producto: "",
      cantidad: ""
    });

    var pushItem = function pushItem() {
      /* Validar */
      if (toPush.cantidad.trim() === "") {
        notiflix__WEBPACK_IMPORTED_MODULE_8__.Notify.failure("La cantidad no puede estar vacía");
        return;
      }

      if (toPush.producto.length == 0) {
        notiflix__WEBPACK_IMPORTED_MODULE_8__.Notify.failure("El producto no puede estar vacío");
        return;
      }
      /* Agregar */


      datosFactura.detalles.push({
        producto: toPush.producto,
        cantidad: toPush.cantidad,
        pu: toPush.producto.precio,
        desc: toPush.producto.descuento,

        /* Calculamos el valor con la cantidad * el producto menos el producto * cantidad */
        st: toPush.cantidad * toPush.producto.precio
        /* Falta el  */

      });
      /* Limpiar */

      toPush.producto = "";
      toPush.cantidad = "";
    };

    var datosFactura = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_10__.reactive)({
      fecha: "",
      codigo_control: "",
      ley_grabada: "",
      persona: "",
      proveedor: "",
      marca: "",
      cantidad: "",
      precio: "",
      total: "",
      detalles: []
    });
    return {
      pushItem: pushItem,
      productos_c: productos_c,
      toPush: toPush,
      datosFactura: datosFactura
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Layout.vue?vue&type=template&id=7edced13":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Layout.vue?vue&type=template&id=7edced13 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Ventas/Ventas.vue?vue&type=template&id=206684d6":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Ventas/Ventas.vue?vue&type=template&id=206684d6 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mt-2 sm:mx-4 mx-2 pb-10"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-white"
}, "Fecha", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "sm:w-fit w-full"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Cantidad", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "sm:w-fit w-full"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Producto", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "mt-6 p-2 rounded-lg bg-green-500"
}, " Añadir ", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Añade algo a la factura! ");

var _hoisted_9 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Calendar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Calendar");

  var _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputText");

  var _component_Dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dropdown");

  var _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Column");

  var _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DataTable");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Calendar, {
    modelValue: $setup.datosFactura.fecha,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.datosFactura.fecha = $event;
    }),
    showTime: true,
    showSeconds: true,
    disabled: ""
  }, null, 8
  /* PROPS */
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
    value: $setup.datosFactura.detalles
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $setup.pushItem && $setup.pushItem.apply($setup, arguments);
        }, ["prevent"])),
        "class": "flex flex-wrap justify-center gap-2"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        modelValue: $setup.toPush.cantidad,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $setup.toPush.cantidad = $event;
        }),
        type: "number",
        min: "1"
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, {
        options: $setup.productos_c,
        modelValue: $setup.toPush.producto,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.toPush.producto = $event;
        }),
        optionLabel: "nombre",
        filter: true
      }, {
        option: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("".concat(slotProps.option.nombre, " - ").concat(slotProps.option.marca.nombre, " | ").concat(slotProps.option.categoria.nombre)), 1
          /* TEXT */
          )])];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["options", "modelValue"])]), _hoisted_7], 32
      /* HYDRATE_EVENTS */
      )];
    }),
    empty: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Cantidad",
        field: "cantidad"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Producto",
        field: "producto"
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.producto.nombre + " - " + slotProps.data.producto.marca.nombre), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Precio Unitario",
        field: "pu"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Descuento",
        field: "desc"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Sub total",
        field: "st"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, null, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            onClick: function onClick($event) {
              return _ctx.removeItem(slotProps);
            },
            "class": "p-2 rounded-lg bg-red-500"
          }, " Eliminar ", 8
          /* PROPS */
          , _hoisted_9)];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value"])])]);
}

/***/ }),

/***/ "./resources/js/Pages/Ventas/CodigoControl.js":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Ventas/CodigoControl.js ***!
  \****************************************************/
/***/ (() => {

/* Fuente: https://www.jc-mouse.net/desarrollo-web/codigo-de-control-v7-en-javascript */

/**
 * Retorna mensaje encriptado
 * @param {string} message mensaje a encriptar
 * @param {string} key llave para encriptar
 * @param {boolean} unscripted sin guion TRUE|FALSE
 * @return {string} mensaje encriptado
 */
function encryptMessageRC4(message, key, unscripted) {
  var state = new Array(255);
  var x = 0;
  var y = 0;
  var index1 = 0;
  var index2 = 0;
  var nmen = "";
  var messageEncryption = "";

  for (i = 0; i <= 255; i++) {
    state[i] = i;
  }

  for (i = 0; i <= 255; i++) {
    //Index2 = ( ObtieneASCII(key[Index1]) + State[I] + Index2 ) MODULO 256
    index2 = (key.charAt(index1).charCodeAt() + state[i] + index2) % 256; //IntercambiaValor( State[I], State[Index2] )

    var aux = state[i];
    state[i] = state[index2];
    state[index2] = aux; //Index1 = (Index1 + 1) MODULO LargoCadena(Key)

    index1 = (index1 + 1) % key.length;
  } //PARA I = 0 HASTA LargoCadena(Mensaje)-1 HACER


  for (i = 0; i < message.length; i++) {
    //X = (X + 1) MODULO 256
    x = (x + 1) % 256; //Y = (State[X] + Y) MODULO 256

    y = (state[x] + y) % 256; //IntercambiaValor( State[X] , State[Y] )

    var aux = state[x];
    state[x] = state[y];
    state[y] = aux; //NMen = ObtieneASCII(Mensaje[I]) XOR State[(State[X] + State[Y]) MODULO 256]

    nmen = message.charAt(i).charCodeAt() ^ state[(state[x] + state[y]) % 256]; //MensajeCifrado = MensajeCifrado + "-" + RellenaCero(ConvierteAHexadecimal(NMen))

    var nmenHex = nmen.toString(16).toUpperCase();
    messageEncryption = messageEncryption + (unscripted ? "" : "-") + (nmenHex.length === 1 ? "0" + nmenHex : nmenHex);
  }

  return unscripted ? messageEncryption : messageEncryption.substring(1, messageEncryption.length);
} //encryptMessageRC4:end

/**
 * Codifica cadena en base 64
 * @param {string} value texto a codificar
 * @return {string} cadena en Base64
 */


function convertBase64(value) {
  var dictionary = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "+", "/");
  var quotient = 1;
  var word = "";
  var remainder;

  while (quotient > 0) {
    quotient = Math.floor(value / 64);
    remainder = value % 64;
    word = dictionary[remainder] + word;
    value = quotient;
  }

  return word;
}
/*
For more info on the algorithm: http://en.wikipedia.org/wiki/Verhoeff_algorithm
by Sergey Petushkov, 2014
*/
// multiplication table d


var d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]]; // permutation table p

var p = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]]; // inverse table inv

var inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9]; // converts string or number to an array and inverts it

function invArray(array) {
  if (Object.prototype.toString.call(array) == "[object Number]") {
    array = String(array);
  }

  if (Object.prototype.toString.call(array) == "[object String]") {
    array = array.split("").map(Number);
  }

  return array.reverse();
} // generates checksum


function generateVerhoeff(array) {
  var c = 0;
  var invertedArray = invArray(array);

  for (var i = 0; i < invertedArray.length; i++) {
    c = d[c][p[(i + 1) % 8][invertedArray[i]]];
  }

  return inv[c];
} // validates checksum


function validate(array) {
  var c = 0;
  var invertedArray = invArray(array);

  for (var i = 0; i < invertedArray.length; i++) {
    c = d[c][p[i % 8][invertedArray[i]]];
  }

  return c === 0;
}
/**
 * Generar codigo de control v7 de Impuestos Nacionales de Bolivia
 * @requires Base64SIN.js
 * @requires AllegedRC4.js
 * @param {String} authorizationNumber Numero de autorizacion
 * @param {String} invoiceNumber Numero de factura
 * @param {String} nitci Número de Identificación Tributaria o Carnet de Identidad
 * @param {String} dateOfTransaction fecha de transaccion de la forma AAAAMMDD
 * @param {String} transactionAmount Monto de la transacción
 * @param {String} dosageKey Llave de dosificación
 * @return {String} Codigo de control generado
 */


function generateControlCode(authorizationNumber, invoiceNumber, nitci, dateOfTransaction, transactionAmount, dosageKey) {
  //redondea monto de transaccion
  transactionAmount = roundUp(transactionAmount);
  /* ========== PASO 1 ============= */

  invoiceNumber = addVerhoeffDigit(invoiceNumber, 2);
  nitci = addVerhoeffDigit(nitci, 2);
  dateOfTransaction = addVerhoeffDigit(dateOfTransaction, 2);
  transactionAmount = addVerhoeffDigit(transactionAmount, 2); //se suman todos los valores obtenidos

  var sumOfVariables = Number(invoiceNumber) + Number(nitci) + Number(dateOfTransaction) + Number(transactionAmount); //A la suma total se añade 5 digitos Verhoeff

  var sumOfVariables5Verhoeff = addVerhoeffDigit(sumOfVariables, 5);
  /* ========== PASO 2 ============= */

  var fiveDigitsVerhoeff = sumOfVariables5Verhoeff.substr(sumOfVariables5Verhoeff.length - 5, 5);
  var numbers = fiveDigitsVerhoeff.split("");

  for (i = 0; i < 5; i++) {
    numbers[i] = parseInt(numbers[i]) + 1;
  }

  string1 = dosageKey.substr(0, numbers[0]);
  string2 = dosageKey.substr(numbers[0], numbers[1]);
  string3 = dosageKey.substr(numbers[0] + numbers[1], numbers[2]);
  string4 = dosageKey.substr(numbers[0] + numbers[1] + numbers[2], numbers[3]);
  string5 = dosageKey.substr(numbers[0] + numbers[1] + numbers[2] + numbers[3], numbers[4]);
  var authorizationNumberDKey = authorizationNumber + string1;
  var invoiceNumberdKey = invoiceNumber + string2;
  var NITCIDKey = nitci + string3;
  var dateOfTransactionDKey = dateOfTransaction + string4;
  var transactionAmountDKey = transactionAmount + string5;
  /* ========== PASO 3 ============= */
  //se concatena cadenas de paso 2

  var stringDKey = authorizationNumberDKey.toString() + invoiceNumberdKey.toString() + NITCIDKey.toString() + dateOfTransactionDKey.toString() + transactionAmountDKey.toString(); //Llave para cifrado + 5 digitos Verhoeff generado en paso 2

  var keyForEncryption = dosageKey.toString() + fiveDigitsVerhoeff.toString(); //se aplica AllegedRC4

  var allegedRC4String = encryptMessageRC4(stringDKey, keyForEncryption, true);
  /* ========== PASO 4 ============= */
  //cadena encriptada en paso 3 se convierte a un Array

  var chars = allegedRC4String.split(""); //se suman valores ascii

  var totalAmount = 0;
  var sp1 = 0;
  var sp2 = 0;
  var sp3 = 0;
  var sp4 = 0;
  var sp5 = 0;
  var tmp = 1;

  for (i = 0; i < allegedRC4String.length; i++) {
    totalAmount += chars[i].charCodeAt(); //se extrae ascii y se suma

    switch (tmp) {
      case 1:
        sp1 += chars[i].charCodeAt();
        break;

      case 2:
        sp2 += chars[i].charCodeAt();
        break;

      case 3:
        sp3 += chars[i].charCodeAt();
        break;

      case 4:
        sp4 += chars[i].charCodeAt();
        break;

      case 5:
        sp5 += chars[i].charCodeAt();
        break;
    }

    tmp = tmp < 5 ? tmp + 1 : 1;
  }
  /* ========== PASO 5 ============= */
  //suma total * sumas parciales dividido entre resultados obtenidos
  //entre el dígito Verhoeff correspondiente más 1 (paso 2)


  var tmp1 = Math.floor(totalAmount * sp1 / numbers[0]);
  var tmp2 = Math.floor(totalAmount * sp2 / numbers[1]);
  var tmp3 = Math.floor(totalAmount * sp3 / numbers[2]);
  var tmp4 = Math.floor(totalAmount * sp4 / numbers[3]);
  var tmp5 = Math.floor(totalAmount * sp5 / numbers[4]); //se suman todos los resultados

  var sumProduct = tmp1 + tmp2 + tmp3 + tmp4 + tmp5; //se obtiene base64

  var base64SIN = convertBase64(sumProduct);
  /* ========== PASO 6 ============= */
  //Aplicar el AllegedRC4 a la anterior expresión obtenida

  return encryptMessageRC4(base64SIN, dosageKey + fiveDigitsVerhoeff);
}
/**
 * Añade N digitos Verhoeff a una cadena de texto
 * @requires Verhoeff.js
 * @param {string} value
 * @param {int} max numero de digitos a agregar
 * @return {String} cadena original + N digitos Verhoeff
 */


function addVerhoeffDigit(value, max) {
  for (i = 1; i <= max; i++) {
    val = generateVerhoeff(value);
    value += val.toString();
  }

  return value;
}
/**
 * Redondea hacia arriba
 * @param {String} value cadena con valor numerico de la forma 123 | 123.4 | 123,4
 * @return {String} numero redondeado
 */


function roundUp(value) {
  //reemplaza (,) por (.)
  var value2 = value.replace(",", "."); //redondea a 0 decimales

  return Math.round(value2);
}

/***/ }),

/***/ "./resources/js/Pages/Layout.vue":
/*!***************************************!*\
  !*** ./resources/js/Pages/Layout.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/Pages/Ventas/Ventas.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Ventas/Ventas.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ventas_vue_vue_type_template_id_206684d6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ventas.vue?vue&type=template&id=206684d6 */ "./resources/js/Pages/Ventas/Ventas.vue?vue&type=template&id=206684d6");
/* harmony import */ var _Ventas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ventas.vue?vue&type=script&lang=js */ "./resources/js/Pages/Ventas/Ventas.vue?vue&type=script&lang=js");
/* harmony import */ var _home_link_pruebas_public_html_ultimo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_link_pruebas_public_html_ultimo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Ventas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Ventas_vue_vue_type_template_id_206684d6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Ventas/Ventas.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Layout.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Layout.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Layout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Ventas/Ventas.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Ventas/Ventas.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Ventas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Ventas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Ventas.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Ventas/Ventas.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Layout.vue?vue&type=template&id=7edced13":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Layout.vue?vue&type=template&id=7edced13 ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_7edced13__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_7edced13__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=template&id=7edced13 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Layout.vue?vue&type=template&id=7edced13");


/***/ }),

/***/ "./resources/js/Pages/Ventas/Ventas.vue?vue&type=template&id=206684d6":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Ventas/Ventas.vue?vue&type=template&id=206684d6 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Ventas_vue_vue_type_template_id_206684d6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Ventas_vue_vue_type_template_id_206684d6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Ventas.vue?vue&type=template&id=206684d6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Ventas/Ventas.vue?vue&type=template&id=206684d6");


/***/ })

}]);