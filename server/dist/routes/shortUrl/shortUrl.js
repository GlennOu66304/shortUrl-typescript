"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Route
// const { Router } = require("express");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// data model import
// const BucketListItem = require("../../models/BucketListItem");
const controller_1 = __importDefault(require("./controller")); //need to add extension js, other wise will cause the error
// // build:save()
router.post("/", controller_1.default.createUrl);
// // // update:findByIdAndUpdate()
// router.put("/:id", BucketListItemController.updatePost);
// // // delete the post:findByIdAndDelete()
// router.delete("/:id", BucketListItemController.deletePost);
// module.exports = router;
exports.default = router;
