"use strict";
self["webpackHotUpdatericky_and_morty"]("main",{

/***/ "./src/context/ContextProvider.tsx":
/*!*****************************************!*\
  !*** ./src/context/ContextProvider.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CharactersProvider = exports.CharactersContext = void 0;
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var CharactersContext = (0, react_1.createContext)({});
exports.CharactersContext = CharactersContext;
var CharactersProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)([]), data = _b[0], setData = _b[1];
    var _c = (0, react_1.useState)([]), filteredData = _c[0], setFilteredData = _c[1];
    var _d = (0, react_1.useState)(""), searchInput = _d[0], setSearchInput = _d[1];
    var _e = (0, react_1.useState)([]), species = _e[0], setSpecies = _e[1];
    var fetchData = function (url) { return __awaiter(void 0, void 0, void 0, function () {
        var res, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    result = _a.sent();
                    setData(function (_characters) {
                        return __spreadArray(__spreadArray([], _characters, true), result.results, true);
                    });
                    if (result.info && result.info.next) {
                        fetchData(result.info.next);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        fetchData("https://rickandmortyapi.com/api/character");
    }, []);
    (0, react_1.useEffect)(function () {
        setFilteredData(data);
    }, [data]);
    (0, react_1.useEffect)(function () {
        filteredHandler();
    }, [searchInput, species]);
    var filteredHandler = function () {
        if (species.length === 0 && searchInput) {
            var characters = data.filter(function (el) { return el.name.toLowerCase().includes(searchInput.toLowerCase()); });
            setFilteredData(characters);
        }
        else if (species.length > 0 && !searchInput) {
            console.log(species);
            var characters = data.filter(function (el) { return species.includes(el.species); });
            setFilteredData(characters);
            console.log(characters);
        }
        else if (species.length > 0 && searchInput) {
            var characters = data
                .filter(function (el) { return species.includes(el.species); })
                .filter(function (el) { return el.name.toLowerCase().includes(searchInput.toLowerCase()); });
            setFilteredData(characters);
        }
        else {
            setFilteredData(data);
        }
    };
    return ((0, jsx_runtime_1.jsx)(CharactersContext.Provider, __assign({ value: {
            data: data,
            setData: setData,
            filteredData: filteredData,
            setFilteredData: setFilteredData,
            searchInput: searchInput,
            setSearchInput: setSearchInput,
            species: species,
            setSpecies: setSpecies,
            filteredHandler: filteredHandler,
        } }, { children: children })));
};
exports.CharactersProvider = CharactersProvider;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("48771b103980c217b658")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDIwYjJkOS1tYWluLXdwcy1obXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGNBQWMsNkJBQTZCLDBCQUEwQixjQUFjLHFCQUFxQjtBQUN4RyxpQkFBaUIsb0RBQW9ELHFFQUFxRSxjQUFjO0FBQ3hKLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLG1DQUFtQyxTQUFTO0FBQzVDLG1DQUFtQyxXQUFXLFVBQVU7QUFDeEQsMENBQTBDLGNBQWM7QUFDeEQ7QUFDQSw4R0FBOEcsT0FBTztBQUNySCxpRkFBaUYsaUJBQWlCO0FBQ2xHLHlEQUF5RCxnQkFBZ0IsUUFBUTtBQUNqRiwrQ0FBK0MsZ0JBQWdCLGdCQUFnQjtBQUMvRTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsVUFBVSxZQUFZLGFBQWEsU0FBUyxVQUFVO0FBQ3RELG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxPQUFPO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDBCQUEwQixHQUFHLHlCQUF5QjtBQUN0RCxvQkFBb0IsbUJBQU8sQ0FBQyw4REFBbUI7QUFDL0MsY0FBYyxtQkFBTyxDQUFDLDRDQUFPO0FBQzdCLHFEQUFxRDtBQUNyRCx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHlEQUF5RCxtRUFBbUU7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsc0NBQXNDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msc0NBQXNDO0FBQzlFLHdDQUF3QyxtRUFBbUU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsSUFBSSxvQkFBb0I7QUFDbkM7QUFDQSwwQkFBMEI7Ozs7Ozs7OztVQ25JMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaWNreS1hbmQtbW9ydHkvLi9zcmMvY29udGV4dC9Db250ZXh0UHJvdmlkZXIudHN4Iiwid2VicGFjazovL3JpY2t5LWFuZC1tb3J0eS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DaGFyYWN0ZXJzUHJvdmlkZXIgPSBleHBvcnRzLkNoYXJhY3RlcnNDb250ZXh0ID0gdm9pZCAwO1xudmFyIGpzeF9ydW50aW1lXzEgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBDaGFyYWN0ZXJzQ29udGV4dCA9ICgwLCByZWFjdF8xLmNyZWF0ZUNvbnRleHQpKHt9KTtcbmV4cG9ydHMuQ2hhcmFjdGVyc0NvbnRleHQgPSBDaGFyYWN0ZXJzQ29udGV4dDtcbnZhciBDaGFyYWN0ZXJzUHJvdmlkZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbjtcbiAgICB2YXIgX2IgPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoW10pLCBkYXRhID0gX2JbMF0sIHNldERhdGEgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoW10pLCBmaWx0ZXJlZERhdGEgPSBfY1swXSwgc2V0RmlsdGVyZWREYXRhID0gX2NbMV07XG4gICAgdmFyIF9kID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFwiXCIpLCBzZWFyY2hJbnB1dCA9IF9kWzBdLCBzZXRTZWFyY2hJbnB1dCA9IF9kWzFdO1xuICAgIHZhciBfZSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShbXSksIHNwZWNpZXMgPSBfZVswXSwgc2V0U3BlY2llcyA9IF9lWzFdO1xuICAgIHZhciBmZXRjaERhdGEgPSBmdW5jdGlvbiAodXJsKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzLCByZXN1bHQ7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKHVybCldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXMuanNvbigpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShmdW5jdGlvbiAoX2NoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIF9jaGFyYWN0ZXJzLCB0cnVlKSwgcmVzdWx0LnJlc3VsdHMsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pbmZvICYmIHJlc3VsdC5pbmZvLm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoRGF0YShyZXN1bHQuaW5mby5uZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICBmZXRjaERhdGEoXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3RlclwiKTtcbiAgICB9LCBbXSk7XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldEZpbHRlcmVkRGF0YShkYXRhKTtcbiAgICB9LCBbZGF0YV0pO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICBmaWx0ZXJlZEhhbmRsZXIoKTtcbiAgICB9LCBbc2VhcmNoSW5wdXQsIHNwZWNpZXNdKTtcbiAgICB2YXIgZmlsdGVyZWRIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc3BlY2llcy5sZW5ndGggPT09IDAgJiYgc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgIHZhciBjaGFyYWN0ZXJzID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoSW5wdXQudG9Mb3dlckNhc2UoKSk7IH0pO1xuICAgICAgICAgICAgc2V0RmlsdGVyZWREYXRhKGNoYXJhY3RlcnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNwZWNpZXMubGVuZ3RoID4gMCAmJiAhc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNwZWNpZXMpO1xuICAgICAgICAgICAgdmFyIGNoYXJhY3RlcnMgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIHNwZWNpZXMuaW5jbHVkZXMoZWwuc3BlY2llcyk7IH0pO1xuICAgICAgICAgICAgc2V0RmlsdGVyZWREYXRhKGNoYXJhY3RlcnMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2hhcmFjdGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3BlY2llcy5sZW5ndGggPiAwICYmIHNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVycyA9IGRhdGFcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gc3BlY2llcy5pbmNsdWRlcyhlbC5zcGVjaWVzKTsgfSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaElucHV0LnRvTG93ZXJDYXNlKCkpOyB9KTtcbiAgICAgICAgICAgIHNldEZpbHRlcmVkRGF0YShjaGFyYWN0ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldEZpbHRlcmVkRGF0YShkYXRhKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuICgoMCwganN4X3J1bnRpbWVfMS5qc3gpKENoYXJhY3RlcnNDb250ZXh0LlByb3ZpZGVyLCBfX2Fzc2lnbih7IHZhbHVlOiB7XG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgc2V0RGF0YTogc2V0RGF0YSxcbiAgICAgICAgICAgIGZpbHRlcmVkRGF0YTogZmlsdGVyZWREYXRhLFxuICAgICAgICAgICAgc2V0RmlsdGVyZWREYXRhOiBzZXRGaWx0ZXJlZERhdGEsXG4gICAgICAgICAgICBzZWFyY2hJbnB1dDogc2VhcmNoSW5wdXQsXG4gICAgICAgICAgICBzZXRTZWFyY2hJbnB1dDogc2V0U2VhcmNoSW5wdXQsXG4gICAgICAgICAgICBzcGVjaWVzOiBzcGVjaWVzLFxuICAgICAgICAgICAgc2V0U3BlY2llczogc2V0U3BlY2llcyxcbiAgICAgICAgICAgIGZpbHRlcmVkSGFuZGxlcjogZmlsdGVyZWRIYW5kbGVyLFxuICAgICAgICB9IH0sIHsgY2hpbGRyZW46IGNoaWxkcmVuIH0pKSk7XG59O1xuZXhwb3J0cy5DaGFyYWN0ZXJzUHJvdmlkZXIgPSBDaGFyYWN0ZXJzUHJvdmlkZXI7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0ODc3MWIxMDM5ODBjMjE3YjY1OFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==