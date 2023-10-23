"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("./routes/user");
const product_1 = require("./routes/product");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/auth", user_1.userRouter);
app.use("/product", product_1.productRouter);
mongoose_1.default.connect("mongodb+srv://machadop1407:mypassword@cluster0.jqxu4ha.mongodb.net/Cluster0");
app.listen(3001, () => console.log("Server started"));
