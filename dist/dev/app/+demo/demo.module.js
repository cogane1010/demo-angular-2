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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var demo_component_1 = require('./demo.component');
var demo_service_1 = require('./demo.service');
var DemoModule = (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [demo_component_1.DemoComponent],
            exports: [demo_component_1.DemoComponent],
            providers: [demo_service_1.DemoService]
        }), 
        __metadata('design:paramtypes', [])
    ], DemoModule);
    return DemoModule;
}());
exports.DemoModule = DemoModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rZGVtby9kZW1vLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLCtCQUE4QixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2pELDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBUzdDO0lBQUE7SUFBMEIsQ0FBQztJQVAzQjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7WUFDdkIsWUFBWSxFQUFFLENBQUMsOEJBQWEsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1lBQ3hCLFNBQVMsRUFBRyxDQUFDLDBCQUFXLENBQUM7U0FDNUIsQ0FBQzs7a0JBQUE7SUFFd0IsaUJBQUM7QUFBRCxDQUExQixBQUEyQixJQUFBO0FBQWQsa0JBQVUsYUFBSSxDQUFBIiwiZmlsZSI6ImFwcC8rZGVtby9kZW1vLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERlbW9Db21wb25lbnQgfSBmcm9tICcuL2RlbW8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVtb1NlcnZpY2UgfSBmcm9tICcuL2RlbW8uc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtEZW1vQ29tcG9uZW50XSxcclxuICAgIGV4cG9ydHM6IFtEZW1vQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVycyA6IFtEZW1vU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEZW1vTW9kdWxlIHsgfSJdfQ==
