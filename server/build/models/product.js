"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    stockQuantity: { type: Number, required: true },
    imageURL: { type: String, required: true },
});
exports.ProductModel = (0, mongoose_1.model)("product", ProductSchema);
