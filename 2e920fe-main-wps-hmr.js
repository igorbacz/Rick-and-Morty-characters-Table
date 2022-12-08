"use strict";
self["webpackHotUpdateexercise_website"]("main",{

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var material_1 = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/index.js");
var theme_1 = __webpack_require__(/*! ./theme */ "./src/theme.tsx");
var SearchBar_1 = __webpack_require__(/*! ./components/SearchBar */ "./src/components/SearchBar.tsx");
var Layout_1 = __webpack_require__(/*! ./components/Layout */ "./src/components/Layout.tsx");
var App = function () {
    var _a = (0, react_1.useState)([]), dataConst = _a[0], setDataConst = _a[1];
    var fetchCharacters = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://rickandmortyapi.com/api/character")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Could not fetch characters data");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    setDataConst(data.results);
                    return [2 /*return*/, data.results];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        fetchCharacters();
    }, []);
    return (react_1.default.createElement(material_1.ThemeProvider, { theme: theme_1.theme },
        react_1.default.createElement(Layout_1.Layout, null,
            react_1.default.createElement(SearchBar_1.SearchBar, { dataConst: dataConst }))));
};
exports["default"] = App;


/***/ }),

/***/ "./src/components/SearchBar.tsx":
/*!**************************************!*\
  !*** ./src/components/SearchBar.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchBar = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var InputLabel_1 = __importDefault(__webpack_require__(/*! @mui/material/InputLabel */ "./node_modules/@mui/material/esm/InputLabel/index.js"));
var MenuItem_1 = __importDefault(__webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/esm/MenuItem/index.js"));
var FormControl_1 = __importDefault(__webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/esm/FormControl/index.js"));
var Select_1 = __importDefault(__webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/esm/Select/index.js"));
var style_1 = __webpack_require__(/*! ./style */ "./src/components/style.ts");
var material_1 = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/index.js");
var Search_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js"));
var theme_1 = __webpack_require__(/*! ../theme */ "./src/theme.tsx");
var TableComponent_1 = __webpack_require__(/*! ./TableComponent */ "./src/components/TableComponent.tsx");
var SearchBar = function (_a) {
    var dataConst = _a.dataConst;
    var _b = (0, react_1.useState)(""), searchInput = _b[0], setSearchInput = _b[1];
    var _c = (0, react_1.useState)(""), species = _c[0], setSpecies = _c[1];
    var handleChangespecies = function (event) {
        var target = event.target;
        setSpecies(target.value);
    };
    var handleChangeSearchInput = function (event) {
        var target = event.target;
        setSearchInput(target.value);
    };
    return (react_1.default.createElement(style_1.PageContainer, { sx: { backgroundColor: "secondary.light" } },
        react_1.default.createElement(style_1.SearchBoxWrapper, null,
            react_1.default.createElement(style_1.SearchBox, null,
                react_1.default.createElement(style_1.HeaderBox, null, "Characters"),
                react_1.default.createElement(style_1.InputsBox, null,
                    react_1.default.createElement(material_1.TextField, { id: "outlined-basic", label: "Search", variant: "outlined", onChange: handleChangeSearchInput, value: searchInput, size: "small", color: "secondary", InputProps: {
                            endAdornment: (react_1.default.createElement(material_1.IconButton, null,
                                react_1.default.createElement(Search_1.default, { color: "warning" }))),
                        }, sx: { width: "140px", borderRadius: "5px" } }),
                    react_1.default.createElement(FormControl_1.default, { size: "small" },
                        react_1.default.createElement(InputLabel_1.default, { id: "demo-simple-select-label" }, "Species"),
                        react_1.default.createElement(Select_1.default, { labelId: "demo-simple-select-label", id: "demo-simple-select", value: species, label: "Species", onChange: handleChangespecies, size: "small", sx: { width: "140px", borderRadius: "5px" }, color: "secondary" },
                            react_1.default.createElement(MenuItem_1.default, { value: "Human" }, "Human"),
                            react_1.default.createElement(MenuItem_1.default, { value: "Alien" }, "Alien")))))),
        react_1.default.createElement(material_1.Box, null,
            react_1.default.createElement(TableComponent_1.TableComponent, { dataConst: dataConst, theme: theme_1.theme, species: species, searchInput: searchInput }))));
};
exports.SearchBar = SearchBar;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f967e8823081ce645ea7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFrQjtBQUNwRyx5QkFBeUIsUUFBUSx1Q0FBdUM7QUFDeEUsMkVBQTJFLGVBQWU7QUFDMUYsOEVBQThFLGdDQUFnQztBQUM5RywwRUFBMEUscUpBQXFKLHFDQUFxQyxzQkFBc0I7QUFDMVIsZ0ZBQWdGLGdCQUFnQjtBQUNoRyxnRkFBZ0YsZ0JBQWdCO0FBQ2hHO0FBQ0EsNkVBQTZFLHdGQUF3RjtBQUNySztBQUNBLGlCQUFpQjs7Ozs7Ozs7O1VDcEVqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4ZXJjaXNlX3dlYnNpdGUvLi9zcmMvYXBwLnRzeCIsIndlYnBhY2s6Ly9leGVyY2lzZV93ZWJzaXRlLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyLnRzeCIsIndlYnBhY2s6Ly9leGVyY2lzZV93ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7XG52YXIgdGhlbWVfMSA9IHJlcXVpcmUoXCIuL3RoZW1lXCIpO1xudmFyIFNlYXJjaEJhcl8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9TZWFyY2hCYXJcIik7XG52YXIgTGF5b3V0XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL0xheW91dFwiKTtcbnZhciBBcHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFtdKSwgZGF0YUNvbnN0ID0gX2FbMF0sIHNldERhdGFDb25zdCA9IF9hWzFdO1xuICAgIHZhciBmZXRjaENoYXJhY3RlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzcG9uc2UsIGRhdGE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXJcIildO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmZXRjaCBjaGFyYWN0ZXJzIGRhdGFcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UuanNvbigpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHNldERhdGFDb25zdChkYXRhLnJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZGF0YS5yZXN1bHRzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH07XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZldGNoQ2hhcmFjdGVycygpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVGhlbWVQcm92aWRlciwgeyB0aGVtZTogdGhlbWVfMS50aGVtZSB9LFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChMYXlvdXRfMS5MYXlvdXQsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTZWFyY2hCYXJfMS5TZWFyY2hCYXIsIHsgZGF0YUNvbnN0OiBkYXRhQ29uc3QgfSkpKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2VhcmNoQmFyID0gdm9pZCAwO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBJbnB1dExhYmVsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvSW5wdXRMYWJlbFwiKSk7XG52YXIgTWVudUl0ZW1fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9NZW51SXRlbVwiKSk7XG52YXIgRm9ybUNvbnRyb2xfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbFwiKSk7XG52YXIgU2VsZWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvU2VsZWN0XCIpKTtcbnZhciBzdHlsZV8xID0gcmVxdWlyZShcIi4vc3R5bGVcIik7XG52YXIgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsXCIpO1xudmFyIFNlYXJjaF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaFwiKSk7XG52YXIgdGhlbWVfMSA9IHJlcXVpcmUoXCIuLi90aGVtZVwiKTtcbnZhciBUYWJsZUNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vVGFibGVDb21wb25lbnRcIik7XG52YXIgU2VhcmNoQmFyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGRhdGFDb25zdCA9IF9hLmRhdGFDb25zdDtcbiAgICB2YXIgX2IgPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoXCJcIiksIHNlYXJjaElucHV0ID0gX2JbMF0sIHNldFNlYXJjaElucHV0ID0gX2JbMV07XG4gICAgdmFyIF9jID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFwiXCIpLCBzcGVjaWVzID0gX2NbMF0sIHNldFNwZWNpZXMgPSBfY1sxXTtcbiAgICB2YXIgaGFuZGxlQ2hhbmdlc3BlY2llcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBzZXRTcGVjaWVzKHRhcmdldC52YWx1ZSk7XG4gICAgfTtcbiAgICB2YXIgaGFuZGxlQ2hhbmdlU2VhcmNoSW5wdXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgc2V0U2VhcmNoSW5wdXQodGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc3R5bGVfMS5QYWdlQ29udGFpbmVyLCB7IHN4OiB7IGJhY2tncm91bmRDb2xvcjogXCJzZWNvbmRhcnkubGlnaHRcIiB9IH0sXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHN0eWxlXzEuU2VhcmNoQm94V3JhcHBlciwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHN0eWxlXzEuU2VhcmNoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHN0eWxlXzEuSGVhZGVyQm94LCBudWxsLCBcIkNoYXJhY3RlcnNcIiksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc3R5bGVfMS5JbnB1dHNCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsXzEuVGV4dEZpZWxkLCB7IGlkOiBcIm91dGxpbmVkLWJhc2ljXCIsIGxhYmVsOiBcIlNlYXJjaFwiLCB2YXJpYW50OiBcIm91dGxpbmVkXCIsIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VTZWFyY2hJbnB1dCwgdmFsdWU6IHNlYXJjaElucHV0LCBzaXplOiBcInNtYWxsXCIsIGNvbG9yOiBcInNlY29uZGFyeVwiLCBJbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50OiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobWF0ZXJpYWxfMS5JY29uQnV0dG9uLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTZWFyY2hfMS5kZWZhdWx0LCB7IGNvbG9yOiBcIndhcm5pbmdcIiB9KSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgc3g6IHsgd2lkdGg6IFwiMTQwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEZvcm1Db250cm9sXzEuZGVmYXVsdCwgeyBzaXplOiBcInNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KElucHV0TGFiZWxfMS5kZWZhdWx0LCB7IGlkOiBcImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiIH0sIFwiU3BlY2llc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNlbGVjdF8xLmRlZmF1bHQsIHsgbGFiZWxJZDogXCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIiwgaWQ6IFwiZGVtby1zaW1wbGUtc2VsZWN0XCIsIHZhbHVlOiBzcGVjaWVzLCBsYWJlbDogXCJTcGVjaWVzXCIsIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VzcGVjaWVzLCBzaXplOiBcInNtYWxsXCIsIHN4OiB7IHdpZHRoOiBcIjE0MHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiB9LCBjb2xvcjogXCJzZWNvbmRhcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtXzEuZGVmYXVsdCwgeyB2YWx1ZTogXCJIdW1hblwiIH0sIFwiSHVtYW5cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW1fMS5kZWZhdWx0LCB7IHZhbHVlOiBcIkFsaWVuXCIgfSwgXCJBbGllblwiKSkpKSkpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChtYXRlcmlhbF8xLkJveCwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFRhYmxlQ29tcG9uZW50XzEuVGFibGVDb21wb25lbnQsIHsgZGF0YUNvbnN0OiBkYXRhQ29uc3QsIHRoZW1lOiB0aGVtZV8xLnRoZW1lLCBzcGVjaWVzOiBzcGVjaWVzLCBzZWFyY2hJbnB1dDogc2VhcmNoSW5wdXQgfSkpKSk7XG59O1xuZXhwb3J0cy5TZWFyY2hCYXIgPSBTZWFyY2hCYXI7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmOTY3ZTg4MjMwODFjZTY0NWVhN1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==