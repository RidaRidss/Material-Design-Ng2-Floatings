"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var NgFloatingButtonComponent = (function () {
    function NgFloatingButtonComponent() {
        this.isOpen = false;
        this.state = 'closed';
        this.toggle = 'click';
    }
    NgFloatingButtonComponent.prototype.clicked = function () {
        if (this.toggle != 'click')
            return false;
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.state = 'open';
        }
        else {
            this.state = 'closed';
        }
    };
    NgFloatingButtonComponent.prototype.entered = function () {
        if (this.toggle != 'hover')
            return false;
        this.state = 'open';
    };
    NgFloatingButtonComponent.prototype.leaved = function () {
        if (this.toggle != 'hover')
            return false;
        this.state = 'closed';
    };
    NgFloatingButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], NgFloatingButtonComponent.prototype, "placement");
    __decorate([
        core_1.Input()
    ], NgFloatingButtonComponent.prototype, "effect");
    __decorate([
        core_1.Input()
    ], NgFloatingButtonComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], NgFloatingButtonComponent.prototype, "iconClass");
    __decorate([
        core_1.Input()
    ], NgFloatingButtonComponent.prototype, "activeIconClass");
    __decorate([
        core_1.Input()
    ], NgFloatingButtonComponent.prototype, "toggle");
    __decorate([
        core_1.Input()
    ], NgFloatingButtonComponent.prototype, "buttons");
    NgFloatingButtonComponent = __decorate([
        core_1.Component({
            selector: 'ng2-floating-button',
            templateUrl: './ng-floating-button.component.html',
            styleUrls: ['./mfb.scss', './ng-floating-button.component.sass']
        })
    ], NgFloatingButtonComponent);
    return NgFloatingButtonComponent;
}());
exports.NgFloatingButtonComponent = NgFloatingButtonComponent;
