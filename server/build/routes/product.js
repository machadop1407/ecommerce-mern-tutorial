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
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const errors_1 = require("../common/errors");
const router = express_1.default.Router();
exports.productRouter = router;
const product_1 = require("../models/product");
const user_1 = require("../models/user");
router.post("/purchase-cart", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerID, productIDs } = req.body;
    const user = yield user_1.UserModel.findOne({ customerID });
    const products = yield product_1.ProductModel.find({ _id: { $in: productIDs } });
    if (!user) {
        return res.status(400).json({ type: errors_1.ProductErrors.NO_USERS_FOUND });
    }
    if (products.length !== productIDs.length) {
        return res.status(400).json({ type: errors_1.ProductErrors.NO_PRODUCT_FOUND });
    }
    let totalPrice = 0;
    products.forEach((product) => {
        totalPrice += product.price;
    });
    if (user.availableMoney < totalPrice) {
        return res.status(400).json({ type: errors_1.ProductErrors.NO_AVAILABLE_MONEY });
    }
    user.availableMoney -= totalPrice;
    user.purchasedItems.push(...productIDs);
    const { availableMoney, purchasedItems } = user;
    res.json({ availableMoney, purchasedItems });
}));
