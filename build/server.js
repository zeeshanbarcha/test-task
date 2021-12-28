"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./config/dbConfig");
const userRoute_1 = __importDefault(require("./route/userRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', userRoute_1.default);
app.listen(3000, () => {
    console.log(`app is listening on port 3000`);
});
