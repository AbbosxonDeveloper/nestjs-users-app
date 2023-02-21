"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class Address {
}
__decorate([
    (0, swagger_1.ApiProperty)({ name: "city", type: 'string', required: true, example: "Toshkent" }),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: "district", type: 'string', required: true, example: "Bektemir" }),
    __metadata("design:type", String)
], Address.prototype, "district", void 0);
class CreateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ name: "name", type: 'string', required: true, example: "Toshmat" }),
    (0, class_transformer_1.Transform)(({ value }) => value === null || value === void 0 ? void 0 : value.trim()),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 30),
    __metadata("design:type", String)
], CreateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: "password", type: 'string', required: false, example: "12345678" }),
    (0, class_validator_1.Length)(8, 30),
    (0, class_transformer_1.Transform)(({ value }) => value === null || value === void 0 ? void 0 : value.trim()),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", String)
], CreateDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: "age", type: 'number', required: false, example: 13 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Address, name: "address" }),
    __metadata("design:type", Address)
], CreateDto.prototype, "address", void 0);
exports.CreateDto = CreateDto;
//# sourceMappingURL=create.dto.js.map