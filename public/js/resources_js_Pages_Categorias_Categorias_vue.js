"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Categorias_Categorias_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Categorias/Categorias.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Categorias/Categorias.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_treetable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/treetable */ "./node_modules/primevue/treetable/treetable.esm.js");
/* harmony import */ var primevue_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/column */ "./node_modules/primevue/column/column.esm.js");
/* harmony import */ var primevue_inputtext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primevue/inputtext */ "./node_modules/primevue/inputtext/inputtext.esm.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout */ "./resources/js/Pages/Layout.vue");
/* harmony import */ var primevue_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primevue/datatable */ "./node_modules/primevue/datatable/datatable.esm.js");
/* harmony import */ var primevue_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primevue/api */ "./node_modules/primevue/api/api.esm.js");
/* harmony import */ var notiflix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! notiflix */ "./node_modules/notiflix/dist/notiflix-aio-3.2.5.min.js");
/* harmony import */ var notiflix__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(notiflix__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










var focus = {
  mounted: function mounted(el) {
    return el.focus();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  directives: {
    focus: focus
  },
  components: {
    DataTable: primevue_datatable__WEBPACK_IMPORTED_MODULE_4__["default"],
    TreeTable: primevue_treetable__WEBPACK_IMPORTED_MODULE_0__["default"],
    Column: primevue_column__WEBPACK_IMPORTED_MODULE_1__["default"],
    InputText: primevue_inputtext__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  layout: _Layout__WEBPACK_IMPORTED_MODULE_3__["default"],
  props: {
    usuario: {
      type: Object,
      required: true
    },
    categorias: {
      type: Array,
      required: true
    },
    marcas: {
      type: Array,
      required: true
    }
  },
  setup: function setup(props) {
    var arbol_c = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__.computed)(function () {
      return crearArbol(props.categorias);
    });

    var crearArbol = function crearArbol(lasCat) {
      var arrayToTree = function arrayToTree(array) {
        console.log("Partimos de", array);
        array.forEach(function (node) {
          node.key = node.id;
          node.data = {
            nombre: node.nombre,
            marcas: node.marcas.map(function (n) {
              return {
                nombre: n.nombre,
                id: n.id
              };
            })
          };
        });

        var findParentIndex = function findParentIndex(id_categoria_padre) {
          return array.findIndex(function (node) {
            return node.id == id_categoria_padre;
          });
        };

        var allParentsNull = function allParentsNull(arr) {
          return arr.find(function (node) {
            return node.id_categoria_padre != null;
          });
        };

        var hasChildren = function hasChildren(id) {
          return array.find(function (node) {
            return node.id_categoria_padre == id;
          });
        };

        var check = allParentsNull(array);
        /* Ignore here for filter */

        var count = 0;

        while (check) {
          for (var i = 0; i < array.length; i++) {
            if (array[i].id_categoria_padre != null) {
              if (hasChildren(array[i].id) == undefined) {
                var indexParent = findParentIndex(array[i].id_categoria_padre);

                if (indexParent != -1) {
                  var padre = array[indexParent];

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
        return [{
          key: null,
          data: {
            nombre: "Categorias",
            marcas: "Marcas"
          },
          children: array
        }];
      }; //Assign porque proxy prop no es editable


      return arrayToTree(_toConsumableArray(lasCat)); //Expand all
    };

    var onNodeUnselect = function onNodeUnselect(e) {
      data.categoria_seleccionada_keys = {};
      categoriaData.id_categoria_padre = "";
    };

    var onNodeSelect = function onNodeSelect(e) {
      data.selectedCategory = e;
      categoriaData.id_categoria_padre = e.key;

      if (e.key != null) {
        categoriaData.nombre = e.data.nombre;
      }

      data.categoria_seleccionada_keys = e;
    };

    var expandAll = function expandAll() {
      for (var node in data.categorias_tratadas) {
        expandNode(data.categorias_tratadas[node]);
      }

      data.expandedKeys = _objectSpread({}, data.expandedKeys);
    };

    var expandNode = function expandNode(node) {
      data.expandedKeys[node.key] = true;

      if (node.children && node.children.length) {
        var _iterator = _createForOfIteratorHelper(node.children),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var child = _step.value;
            expandNode(child);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    };

    var data = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__.reactive)({
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
        global: {
          value: null,
          matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_5__.FilterMatchMode.CONTAINS
        }
      }
    });
    var nuevaMarca = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__.reactive)({
      nombre: ""
    });

    var editMarca = function editMarca(u_data) {
      console.log(u_data);

      if (u_data.newData.nombre < 3) {
        notiflix__WEBPACK_IMPORTED_MODULE_6__.Notify.failure("El nombre debe tener al menos 3 caracteres");
        return;
      }

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_7__.Inertia.post(route("marca_update"), {
        id: u_data.newData.id,
        nombre: u_data.newData.nombre
      }, {
        preserveScroll: true,
        preserveState: true,
        onSuccess: function onSuccess() {
          notiflix__WEBPACK_IMPORTED_MODULE_6__.Notify.success("Marca actualizada");
        },
        onError: function onError(error) {
          for (var i in error) {
            notiflix__WEBPACK_IMPORTED_MODULE_6__.Notify.failure(error[i]);
          }
        }
      });
    };

    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__.onMounted)(function () {
      expandAll();
    });

    var crearMarca = function crearMarca() {
      if (nuevaMarca.nombre.length < 3) {
        notiflix__WEBPACK_IMPORTED_MODULE_6__.Notify.failure("El nombre debe tener al menos 3 caracteres");
        return;
      }

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_7__.Inertia.post(route("marca_create"), {
        nombre: nuevaMarca.nombre
      }, {
        preserveScroll: true,
        preserveState: true,
        onSuccess: function onSuccess() {
          nuevaMarca.nombre = "";
          notiflix__WEBPACK_IMPORTED_MODULE_6__.Notify.success("Marca creada");
        },
        onError: function onError(error) {
          for (var e in error) {
            notiflix__WEBPACK_IMPORTED_MODULE_6__.Notify.failure(error[e]);
          }
        }
      });
    };

    var eliminarMarca = function eliminarMarca(u_data) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_7__.Inertia.post(route("marca_delete"), {
        id: u_data.id
      }, {
        preserveScroll: true,
        preserveState: true,
        onSuccess: function onSuccess() {
          notiflix__WEBPACK_IMPORTED_MODULE_6__.Notify.success("Marca eliminada");
        },
        onError: function onError(error) {
          for (var i in error) {
            notiflix__WEBPACK_IMPORTED_MODULE_6__.Notify.failure(error[i]);
          }
        }
      });
    };

    var categoriaData = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__.reactive)({
      nombre: "",
      id: "",
      id_categoria_padre: ""
    });

    var crearCategoria = function crearCategoria() {
      if (categoriaData.nombre.length < 3) {
        notiflix__WEBPACK_IMPORTED_MODULE_6__.Notify.failure("El nombre de la categoría debe ser mayor a 3 caracteres");
        return;
      }

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_7__.Inertia.post(route("categoria_create"), {
        nombre: categoriaData.nombre,
        id_categoria_padre: categoriaData.id_categoria_padre
      }, {
        preserveScroll: true,
        preserveState: true,
        onSuccess: function onSuccess() {
          notiflix__WEBPACK_IMPORTED_MODULE_6__.Notify.success("Categoría creada");
        },
        onError: function onError(error) {
          for (var i in error) {
            notiflix__WEBPACK_IMPORTED_MODULE_6__.Notify.failure(error[i]);
          }
        }
      });
    };

    var log = function log(w) {
      console.log(w);
    };

    var aTexto = function aTexto(a) {
      if (typeof a == "string") {
        return "";
      }

      return a.map(function (e) {
        return e.nombre;
      }).join(", ");
    };

    var editarCategoria = function editarCategoria() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_7__.Inertia.post(route("categoria_update"), {
        id: categoriaData.id_categoria_padre,
        nombre: categoriaData.nombre
      }, {
        preserveScroll: true,
        preserveState: true,
        onSuccess: function onSuccess() {
          notiflix__WEBPACK_IMPORTED_MODULE_6__.Notify.success("Categoría actualizada");
        },
        onError: function onError(error) {
          for (var i in error) {
            notiflix__WEBPACK_IMPORTED_MODULE_6__.Notify.failure(error[i]);
          }
        }
      });
    };

    var eliminarCategoria = function eliminarCategoria(id) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_7__.Inertia.post(route("categoria_delete"), {
        id: categoriaData.id_categoria_padre
      }, {
        preserveScroll: true,
        preserveState: true,
        onSuccess: function onSuccess() {
          notiflix__WEBPACK_IMPORTED_MODULE_6__.Notify.success("Categoría eliminada");
        },
        onError: function onError(error) {
          for (var i in error) {
            notiflix__WEBPACK_IMPORTED_MODULE_6__.Notify.failure(error[i]);
          }
        }
      });
    };

    return {
      eliminarCategoria: eliminarCategoria,
      editarCategoria: editarCategoria,
      crearCategoria: crearCategoria,
      categoriaData: categoriaData,
      aTexto: aTexto,
      log: log,
      eliminarMarca: eliminarMarca,
      editMarca: editMarca,
      crearMarca: crearMarca,
      nuevaMarca: nuevaMarca,
      data: data,
      onNodeUnselect: onNodeUnselect,
      onNodeSelect: onNodeSelect,
      crearArbol: crearArbol,
      arbol_c: arbol_c
    };
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Categorias/Categorias.vue?vue&type=template&id=82d7e794":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Categorias/Categorias.vue?vue&type=template&id=82d7e794 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "pb-10 mx-2 sm:mx-4"
};
var _hoisted_2 = {
  "class": "flex flex-col md:flex-row gap-2"
};
var _hoisted_3 = {
  "class": "md:w-8/12 w-full"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-white text-3xl text-center"
}, "Categorias", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "flex flex-wrap gap-2"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "bg-green-500 p-2 rounded-lg text-white"
}, " Crear ", -1
/* HOISTED */
);

var _hoisted_7 = ["disabled"];
var _hoisted_8 = ["disabled"];

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" No hay categorías ");

var _hoisted_10 = {
  "class": "w-full md:w-4/12"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-white text-3xl text-center"
}, "Marcas", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "flex flex-wrap gap-2 justify-center"
};
var _hoisted_13 = {
  "class": "w-fit flex flex-row"
};
var _hoisted_14 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputText");

  var _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Column");

  var _component_TreeTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TreeTable");

  var _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DataTable");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TreeTable, {
    value: $setup.arbol_c,
    expandedKeys: $setup.data.expandedKeys,
    selectionMode: "single",
    selectionKeys: $setup.data.selectedCategoryKeysKeys,
    "onUpdate:selectionKeys": _cache[6] || (_cache[6] = function ($event) {
      return $setup.data.selectedCategoryKeysKeys = $event;
    }),
    onNodeSelect: $setup.onNodeSelect,
    onNodeUnselect: $setup.onNodeUnselect,
    filters: $setup.data.filters,
    filterMatchMode: "custom",
    "class": "p-datatable-sm"
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $setup.crearCategoria && $setup.crearCategoria.apply($setup, arguments);
        }, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        "class": "w-fit",
        modelValue: $setup.categoriaData.nombre,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.categoriaData.nombre = $event;
        }),
        placeholder: "Nombre de categoria"
      }, null, 8
      /* PROPS */
      , ["modelValue"]), _hoisted_6], 32
      /* HYDRATE_EVENTS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $setup.editarCategoria && $setup.editarCategoria.apply($setup, arguments);
        }, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        "class": "w-fit",
        modelValue: $setup.categoriaData.nombre,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.categoriaData.nombre = $event;
        }),
        placeholder: "Selecciona una categoría para editar",
        disabled: $setup.categoriaData.id_categoria_padre == '' || $setup.categoriaData.id_categoria_padre == null
      }, null, 8
      /* PROPS */
      , ["modelValue", "disabled"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "bg-yellow-500 p-2 rounded-lg text-white disabled:bg-gray-500",
        disabled: $setup.categoriaData.id_categoria_padre == '' || $setup.categoriaData.id_categoria_padre == null
      }, " Editar ", 8
      /* PROPS */
      , _hoisted_7)], 32
      /* HYDRATE_EVENTS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "bg-red-500 p-2 rounded-lg text-white disabled:bg-gray-500",
        onClick: _cache[4] || (_cache[4] = function () {
          return $setup.eliminarCategoria && $setup.eliminarCategoria.apply($setup, arguments);
        }),
        disabled: $setup.categoriaData.id_categoria_padre == '' || $setup.categoriaData.id_categoria_padre == null
      }, " Eliminar ", 8
      /* PROPS */
      , _hoisted_8)])];
    }),
    empty: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "nombre",
        expander: true,
        filterMatchMode: "contains"
      }, {
        header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
            "class": "w-40",
            type: "text",
            modelValue: $setup.data.filters['name'],
            "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
              return $setup.data.filters['name'] = $event;
            }),
            placeholder: "Filtrar por nombre"
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "expandedKeys", "selectionKeys", "onNodeSelect", "onNodeUnselect", "filters"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
    value: $props.marcas,
    "class": "p-datatable-sm",
    filters: $setup.data.filtersMarca,
    "onUpdate:filters": _cache[10] || (_cache[10] = function ($event) {
      return $setup.data.filtersMarca = $event;
    }),
    editMode: "cell",
    scrollable: true,
    onCellEditComplete: $setup.editMarca,
    rows: 10,
    paginator: true
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        type: "text",
        modelValue: $setup.data.filtersMarca['global'].value,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
          return $setup.data.filtersMarca['global'].value = $event;
        }),
        "class": "mr-auto",
        placeholder: "Filtrar por nombre"
      }, null, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        style: {
          "width": "150px"
        },
        type: "text",
        modelValue: $setup.nuevaMarca.nombre,
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
          return $setup.nuevaMarca.nombre = $event;
        }),
        "class": "p-column-filter",
        placeholder: "Crear marca"
      }, null, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "bg-green-500 rounded-tr-lg rounded-br-lg px-1.5 text-white",
        onClick: _cache[9] || (_cache[9] = function () {
          return $setup.crearMarca && $setup.crearMarca.apply($setup, arguments);
        })
      }, " Crear ")])])];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "nombre",
        header: "Nombre"
      }, {
        editor: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
            modelValue: slotProps.data.nombre,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return slotProps.data.nombre = $event;
            },
            placeholder: "Nombre"
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, null, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            "class": "bg-red-500 rounded-lg px-2",
            onClick: function onClick($event) {
              return $setup.eliminarMarca(slotProps.data);
            }
          }, " X ", 8
          /* PROPS */
          , _hoisted_14)];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "filters", "onCellEditComplete"])])])]);
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

/***/ "./resources/js/Pages/Categorias/Categorias.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Categorias/Categorias.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Categorias_vue_vue_type_template_id_82d7e794__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categorias.vue?vue&type=template&id=82d7e794 */ "./resources/js/Pages/Categorias/Categorias.vue?vue&type=template&id=82d7e794");
/* harmony import */ var _Categorias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categorias.vue?vue&type=script&lang=js */ "./resources/js/Pages/Categorias/Categorias.vue?vue&type=script&lang=js");
/* harmony import */ var _home_link_pruebas_public_html_ultimo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_link_pruebas_public_html_ultimo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Categorias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Categorias_vue_vue_type_template_id_82d7e794__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Categorias/Categorias.vue"]])
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

/***/ "./resources/js/Pages/Categorias/Categorias.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Categorias/Categorias.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Categorias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Categorias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Categorias.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Categorias/Categorias.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/Categorias/Categorias.vue?vue&type=template&id=82d7e794":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Categorias/Categorias.vue?vue&type=template&id=82d7e794 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Categorias_vue_vue_type_template_id_82d7e794__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Categorias_vue_vue_type_template_id_82d7e794__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Categorias.vue?vue&type=template&id=82d7e794 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Categorias/Categorias.vue?vue&type=template&id=82d7e794");


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


/***/ })

}]);