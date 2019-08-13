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
const api_1 = require("../../helpers/api");
function RegistrationForm() {
    const [username, setUsername] = react_1.useState('');
    const [password, setPassword] = react_1.useState('');
    const [confirmPassword, setConfirmPassword] = react_1.useState('');
    const [email, setEmail] = react_1.useState('');
    const register = async () => {
        const registerPayload = {
            username,
            password,
            confirmPassword,
            email,
        };
        const data = await api_1.postData('/authenticate/register', JSON.stringify(registerPayload));
        // @TODO dispatch user details to global state here
        console.log(data);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h3", null, "Registration"),
        react_1.default.createElement("div", null, "Username"),
        react_1.default.createElement("input", { onChange: e => setUsername(e.target.value), type: "text" }),
        react_1.default.createElement("div", null, "Password"),
        react_1.default.createElement("input", { onChange: e => setPassword(e.target.value), type: "text" }),
        react_1.default.createElement("div", null, "Confirm Password"),
        react_1.default.createElement("input", { onChange: e => setConfirmPassword(e.target.value), type: "text" }),
        react_1.default.createElement("div", null, "Email"),
        react_1.default.createElement("input", { onChange: e => setEmail(e.target.value), type: "text" }),
        react_1.default.createElement("button", { onClick: register }, "Register")));
}
exports.default = RegistrationForm;
