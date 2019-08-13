"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_1 = require("react-router");
const react_router_2 = require("react-router");
const history_1 = require("history");
const pages_1 = __importDefault(require("./pages"));
const GlobalContext_1 = __importDefault(require("./contexts/global/GlobalContext"));
const GlobalState_1 = __importDefault(require("./contexts/global/GlobalState"));
const reducer_1 = __importDefault(require("./contexts/reducer"));
const components_1 = require("./components");
const history = history_1.createBrowserHistory();
function App() {
    const [state, dispatch] = react_1.useReducer(reducer_1.default, GlobalState_1.default);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(GlobalContext_1.default.Provider, { value: { state, dispatch } },
            react_1.default.createElement(react_router_2.Router, { history: history },
                react_1.default.createElement(components_1.Header, null),
                react_1.default.createElement(react_router_1.Switch, null, pages_1.default.map((route, i) => {
                    return (react_1.default.createElement(react_router_1.Route, { exact: true, path: route.path, component: route.component, key: 'route' + i }));
                }))))));
}
exports.default = App;
