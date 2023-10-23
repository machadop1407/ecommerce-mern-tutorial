"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    availableMoney: { type: Number, default: 5000 },
    purchasedItems: [
        { type: mongoose_1.Schema.Types.ObjectId, ref: "product", default: [] },
    ],
});
exports.UserModel = (0, mongoose_1.model)("user", UserSchema);
