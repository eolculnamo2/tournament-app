"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// External Dependencies
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const mongoose_1 = __importDefault(require("mongoose"));
// Internal Dependencies
const contollers_1 = require("./contollers");
const passport_1 = __importDefault(require("./services/passport"));
dotenv_1.default.config();
const app = express_1.default();
app.use(compression_1.default());
app.use('/', contollers_1.PageController);
app.use('/authenticate', passport_1.default);
if (process.env.MONGO_URI) {
    mongoose_1.default.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
    });
}
else {
    throw Error('process.env.MONGO_URL is undefined!');
}
mongoose_1.default.connection
    .once('open', () => {
    console.log('Connected to Mongo via Mongoose');
})
    .on('error', err => {
    console.log('Connection Error: ', err);
});
app.listen(8080, () => console.log('ON'));
