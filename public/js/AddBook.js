"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["AddBook"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/book/AddBook.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/book/AddBook.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      fields: {},
      errors: {}
    };
  },
  methods: {
    addBook: function addBook() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.axios.post('/api/v1/addbook', _this.fields).then(function (response) {
                  _this.fields = {};

                  _this.$utils.showSuccess('Success', response.data.success.message);
                })["catch"](function (error) {
                  _this.errors = error.response.data.errors;
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/book/EditBook.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/book/EditBook.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      fields: {},
      errors: {},
      bookId: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    var id = this.$route.params.id;
    this.bookId = id;
    this.axios.get("/api/v1/editbook/".concat(id)).then(function (response) {
      _this.fields = response.data;
    })["catch"](function (error) {
      console.log(error.response.data.message);
    });
  },
  methods: {
    updateBook: function updateBook() {
      var _this2 = this;

      this.axios.post("/api/v1/updatebook/".concat(this.bookId), this.fields).then(function (response) {
        _this2.$utils.showSuccess('Success', response.data.success.message);

        _this2.$router.push({
          name: 'book'
        });
      })["catch"](function (error) {
        _this2.errors = error.response.data.message;
        console.log(error.response.data.message);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/book/AddBook.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/book/AddBook.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddBook_vue_vue_type_template_id_380b1863___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddBook.vue?vue&type=template&id=380b1863& */ "./resources/js/views/book/AddBook.vue?vue&type=template&id=380b1863&");
/* harmony import */ var _AddBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddBook.vue?vue&type=script&lang=js& */ "./resources/js/views/book/AddBook.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddBook_vue_vue_type_template_id_380b1863___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddBook_vue_vue_type_template_id_380b1863___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/book/AddBook.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/book/EditBook.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/book/EditBook.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditBook_vue_vue_type_template_id_6a64d1aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditBook.vue?vue&type=template&id=6a64d1aa& */ "./resources/js/views/book/EditBook.vue?vue&type=template&id=6a64d1aa&");
/* harmony import */ var _EditBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditBook.vue?vue&type=script&lang=js& */ "./resources/js/views/book/EditBook.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditBook_vue_vue_type_template_id_6a64d1aa___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditBook_vue_vue_type_template_id_6a64d1aa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/book/EditBook.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/book/AddBook.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/book/AddBook.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddBook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/book/AddBook.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/book/EditBook.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/book/EditBook.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditBook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/book/EditBook.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/book/AddBook.vue?vue&type=template&id=380b1863&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/book/AddBook.vue?vue&type=template&id=380b1863& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_template_id_380b1863___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_template_id_380b1863___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_template_id_380b1863___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddBook.vue?vue&type=template&id=380b1863& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/book/AddBook.vue?vue&type=template&id=380b1863&");


/***/ }),

/***/ "./resources/js/views/book/EditBook.vue?vue&type=template&id=6a64d1aa&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/book/EditBook.vue?vue&type=template&id=6a64d1aa& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBook_vue_vue_type_template_id_6a64d1aa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBook_vue_vue_type_template_id_6a64d1aa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBook_vue_vue_type_template_id_6a64d1aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditBook.vue?vue&type=template&id=6a64d1aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/book/EditBook.vue?vue&type=template&id=6a64d1aa&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/book/AddBook.vue?vue&type=template&id=380b1863&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/book/AddBook.vue?vue&type=template&id=380b1863& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "col-lg-4 offset-lg-4 mt-5" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [
          _vm._v("\n                Create Book\n            ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", [
            _c("div", { staticClass: "mb-3" }, [
              _c(
                "label",
                { staticClass: "form-label", attrs: { for: "title" } },
                [_vm._v("Title")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.title,
                    expression: "fields.title"
                  }
                ],
                staticClass: "form-control",
                class: _vm.errors.title ? "is-invalid" : "",
                attrs: { type: "text", id: "title" },
                domProps: { value: _vm.fields.title },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "title", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.errors.title
                ? _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.title[0]))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-3" }, [
              _c(
                "label",
                { staticClass: "form-label", attrs: { for: "author" } },
                [_vm._v("Author")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.author,
                    expression: "fields.author"
                  }
                ],
                staticClass: "form-control",
                class: _vm.errors.author ? "is-invalid" : "",
                attrs: { type: "text", id: "author" },
                domProps: { value: _vm.fields.author },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "author", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.errors.author
                ? _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.author[0]))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-3" }, [
              _c(
                "label",
                { staticClass: "form-label", attrs: { for: "description" } },
                [_vm._v("Description")]
              ),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.description,
                    expression: "fields.description"
                  }
                ],
                staticClass: "form-control",
                class: _vm.errors.description ? "is-invalid" : "",
                attrs: { id: "description" },
                domProps: { value: _vm.fields.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "description", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.errors.description
                ? _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.description[0]))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-3" }, [
              _c(
                "label",
                { staticClass: "form-label", attrs: { for: "price" } },
                [_vm._v("Price")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.price,
                    expression: "fields.price"
                  }
                ],
                staticClass: "form-control",
                class: _vm.errors.price ? "is-invalid" : "",
                attrs: { type: "number", id: "price" },
                domProps: { value: _vm.fields.price },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "price", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.errors.price
                ? _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.price[0]))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: { type: "submit" },
                on: { click: _vm.addBook }
              },
              [_vm._v("Add")]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/book/EditBook.vue?vue&type=template&id=6a64d1aa&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/book/EditBook.vue?vue&type=template&id=6a64d1aa& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "col-lg-4 offset-lg-4 mt-5" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [
          _vm._v("\n                Edit Book\n            ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", [
            _c("div", { staticClass: "mb-3" }, [
              _c(
                "label",
                { staticClass: "form-label", attrs: { for: "title" } },
                [_vm._v("Title")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.title,
                    expression: "fields.title"
                  }
                ],
                staticClass: "form-control",
                class: _vm.errors.title ? "is-invalid" : "",
                attrs: { type: "text", id: "title" },
                domProps: { value: _vm.fields.title },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "title", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.errors.title
                ? _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.title[0]))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-3" }, [
              _c(
                "label",
                { staticClass: "form-label", attrs: { for: "author" } },
                [_vm._v("Author")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.author,
                    expression: "fields.author"
                  }
                ],
                staticClass: "form-control",
                class: _vm.errors.author ? "is-invalid" : "",
                attrs: { type: "text", id: "author" },
                domProps: { value: _vm.fields.author },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "author", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.errors.author
                ? _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.author[0]))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-3" }, [
              _c(
                "label",
                { staticClass: "form-label", attrs: { for: "description" } },
                [_vm._v("Description")]
              ),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.description,
                    expression: "fields.description"
                  }
                ],
                staticClass: "form-control",
                class: _vm.errors.description ? "is-invalid" : "",
                attrs: { id: "description" },
                domProps: { value: _vm.fields.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "description", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.errors.description
                ? _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.description[0]))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-3" }, [
              _c(
                "label",
                { staticClass: "form-label", attrs: { for: "price" } },
                [_vm._v("Price")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.price,
                    expression: "fields.price"
                  }
                ],
                staticClass: "form-control",
                class: _vm.errors.price ? "is-invalid" : "",
                attrs: { type: "number", id: "price" },
                domProps: { value: _vm.fields.price },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "price", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.errors.price
                ? _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.price[0]))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: { type: "submit" },
                on: { click: _vm.updateBook }
              },
              [_vm._v("Update")]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);