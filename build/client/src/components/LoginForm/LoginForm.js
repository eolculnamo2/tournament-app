"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function LoginForm() {
    const [username, setUsername] = react_1.useState('');
    const [password, setPassword] = react_1.useState('');
    const login = () => {
        const loginPayload = {
            username,
            password,
        };
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h3", null, "Login"),
        react_1.default.createElement("div", null, "Username"),
        react_1.default.createElement("input", { onChange: e => setUsername(e.target.value), type: "text" }),
        react_1.default.createElement("div", null, "Password"),
        react_1.default.createElement("input", { onChange: e => setPassword(e.target.value), type: "text" })));
}
exports.default = LoginForm;
