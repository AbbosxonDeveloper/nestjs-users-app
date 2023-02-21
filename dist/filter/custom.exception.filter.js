"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
const common_1 = require("@nestjs/common");
let Filter = class Filter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        if (exception instanceof common_1.HttpException) {
            response.json(exception);
        }
        else {
            console.log(exception);
            response.json({ status: 500, message: 'Internal server Error' });
        }
    }
};
Filter = __decorate([
    (0, common_1.Catch)()
], Filter);
exports.Filter = Filter;
//# sourceMappingURL=custom.exception.filter.js.map