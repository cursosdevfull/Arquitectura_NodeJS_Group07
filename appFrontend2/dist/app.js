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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Evt(prefix) {
    return function (target, propertyKey) {
        console.log("target", target);
        console.log("propertyKey", propertyKey);
        let value = "";
        const getter = () => {
            console.log("Getter");
            return value;
        };
        const setter = (next) => {
            console.log("Setter");
            value = `${prefix}${next}`;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
function Component(config) {
    return function (target) {
        const instance = new target();
        const element = document.querySelector(config.selector);
        if (element) {
            element.innerHTML = config.template;
            element.querySelector("h1").textContent = instance.eventBus;
            const button = element.querySelector("button");
            if (button) {
                button.addEventListener("click", instance.showProductList.bind(instance));
                //instance.addProduct("Book", 50);
            }
        }
    };
}
function ValidatePassword(regexp) {
    return function (target, propertyKey) {
        let value = "";
        const getter = () => {
            console.log("Getter");
            return value;
        };
        const setter = (next) => {
            console.log("Setter");
            if (regexp.test(next)) {
                value = next;
            }
            else {
                throw new Error("Password is invalid");
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
function MinQuantity(min) {
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            if (args[1] < min) {
                throw new Error("Quantity is too low");
            }
            else {
                return original.apply(this, args);
            }
        };
    };
}
function MinLen(min) {
    return function (target, propertyKey, parameterIndex) {
        console.log("target2", target);
        console.log("propertyKey2", propertyKey);
        console.log("parameterIndex2", parameterIndex);
        const originalMethod = target[propertyKey];
        target[propertyKey] = function (...args) {
            console.log("args", args);
            if (args[parameterIndex].length < min) {
                throw new Error("Product name is too short");
            }
            else {
                return originalMethod.apply(this, args);
            }
        };
    };
}
let Bookstore = class Bookstore {
    constructor() {
        this.eventBus = "EventBus";
        this.password = "Testing123456";
        this.productList = [];
    }
    addProduct(product, quantity) {
        this.productList.push({ product, quantity });
        console.log("Product List", this.productList);
    }
    showProductList() {
        this.addProduct("Book", 50);
        console.log("Product List", this.productList);
    }
};
__decorate([
    Evt("on"),
    __metadata("design:type", Object)
], Bookstore.prototype, "eventBus", void 0);
__decorate([
    ValidatePassword(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i),
    __metadata("design:type", Object)
], Bookstore.prototype, "password", void 0);
__decorate([
    MinQuantity(10),
    __param(0, MinLen(20)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], Bookstore.prototype, "addProduct", null);
Bookstore = __decorate([
    Component({
        selector: "#app",
        template: "<h1></h1><button>Click</button>",
    })
], Bookstore);
