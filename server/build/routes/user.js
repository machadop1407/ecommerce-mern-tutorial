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
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const router = express_1.default.Router();
exports.userRouter = router;
const user_1 = require("../models/user");
router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield user_1.UserModel.findOne({ username });
    if (user) {
        return res.status(400).json({ message: "Username already exists" });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    const newUser = new user_1.UserModel({ username, password: hashedPassword });
    yield newUser.save();
    res.json({ message: "User registered successfully" });
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield user_1.UserModel.findOne({ username });
    if (!user) {
        return res
            .status(400)
            .json({ message: "Username or password is incorrect" });
    }
    const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        return res
            .status(400)
            .json({ message: "Username or password is incorrect" });
    }
    const token = jsonwebtoken_1.default.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id });
}));
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        jsonwebtoken_1.default.verify(authHeader, "secret", (err) => {
            if (err) {
                return res.sendStatus(403);
            }
            next();
        });
    }
    else {
        res.sendStatus(401);
    }
};
exports.verifyToken = verifyToken;
