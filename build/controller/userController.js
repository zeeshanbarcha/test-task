"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("../entity/user");
const http_status_1 = __importDefault(require("http-status"));
class UserController {
}
exports.UserController = UserController;
_a = UserController;
UserController.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const user = (0, typeorm_1.getRepository)(user_1.User).create(data);
        const result = yield (0, typeorm_1.getRepository)(user_1.User).save(user);
        res.status(http_status_1.default.CREATED).json(result);
    }
    catch (err) {
        res.status(http_status_1.default.NOT_FOUND).json(err);
    }
});
UserController.getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(req.query.id);
        const phoneNumber = req.query.phoneNumber;
        if (userId && phoneNumber) {
            const user = yield (0, typeorm_1.getRepository)(user_1.User).findOne(userId);
            res.status(http_status_1.default.OK).json(user);
        }
        else {
            const user = yield (0, typeorm_1.getRepository)(user_1.User).find();
            res.status(http_status_1.default.OK).json(user);
        }
    }
    catch (err) {
        res.status(http_status_1.default.NOT_FOUND).json(err);
    }
});
UserController.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(req.query.id);
        const phoneNumber = req.query.phoneNumber;
        const user = yield (0, typeorm_1.getRepository)(user_1.User).delete(userId);
        res.status(http_status_1.default.OK).json(user);
    }
    catch (err) {
        res.status(http_status_1.default.NOT_FOUND).json(err);
    }
});
UserController.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(req.query.id);
        const phoneNumber = req.query.phoneNumber;
        const data = req.body;
        const user = yield (0, typeorm_1.getRepository)(user_1.User).findOne(userId);
        if (user) {
            (0, typeorm_1.getRepository)(user_1.User).merge(user, data);
            const result = yield (0, typeorm_1.getRepository)(user_1.User).save(user);
            return res.status(http_status_1.default.NO_CONTENT).json();
        }
    }
    catch (err) {
        res.status(http_status_1.default.NOT_FOUND).json(err);
    }
});
