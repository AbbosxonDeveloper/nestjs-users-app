"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.sign = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const jwtkey = process.env.JWT;
const sign = (payload) => jsonwebtoken_1.default === null || jsonwebtoken_1.default === void 0 ? void 0 : jsonwebtoken_1.default.sign(payload, jwtkey);
exports.sign = sign;
const verify = (token) => jsonwebtoken_1.default === null || jsonwebtoken_1.default === void 0 ? void 0 : jsonwebtoken_1.default.verify(token, jwtkey);
exports.verify = verify;
//# sourceMappingURL=jwt.js.map