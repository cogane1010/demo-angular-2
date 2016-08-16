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
var demo_service_1 = require('./demo.service');
var DemoComponent = (function () {
    function DemoComponent(demoService) {
        this.demoService = demoService;
        this.newName = '';
        this.names = [];
    }
    DemoComponent.prototype.ngOnInit = function () {
        this.getNames();
    };
    DemoComponent.prototype.getNames = function () {
        var _this = this;
        this.demoService.get()
            .subscribe(function (names) { return _this.names = names; }, function (error) { return _this.errorMessage = error; });
    };
    DemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-demo',
            template: "\n  <h4> demo component </h4>\n  <ul>\n    <li *ngFor=\"let name of names\">{{name}}</li>\n  </ul>\n  ",
        }), 
        __metadata('design:paramtypes', [demo_service_1.DemoService])
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rZGVtby9kZW1vLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlDLGVBQWUsQ0FBQyxDQUFBO0FBQ2pELDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBZTdDO0lBS0EsdUJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSjFDLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsVUFBSyxHQUFVLEVBQUUsQ0FBQztJQUUyQixDQUFDO0lBRTlDLGdDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFakIsQ0FBQztJQUVILGdDQUFRLEdBQVI7UUFBQSxpQkFNRztRQUxFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFO2FBQ0wsU0FBUyxDQUNSLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLEVBQzNCLFVBQUEsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQ3ZDLENBQUM7SUFDdkIsQ0FBQztJQS9CSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLHdHQUtUO1NBRUYsQ0FBQzs7cUJBQUE7SUFzQkYsb0JBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBbkJZLHFCQUFhLGdCQW1CekIsQ0FBQSIsImZpbGUiOiJhcHAvK2RlbW8vZGVtby5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlbW9TZXJ2aWNlIH0gZnJvbSAnLi9kZW1vLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLWRlbW8nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGg0PiBkZW1vIGNvbXBvbmVudCA8L2g0PlxyXG4gIDx1bD5cclxuICAgIDxsaSAqbmdGb3I9XCJsZXQgbmFtZSBvZiBuYW1lc1wiPnt7bmFtZX19PC9saT5cclxuICA8L3VsPlxyXG4gIGAsXHJcbiAgXHJcbn0pXHJcbiBcclxuXHJcbmV4cG9ydCBjbGFzcyBEZW1vQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHsgXHJcbiAgbmV3TmFtZTogc3RyaW5nID0gJyc7XHJcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbiAgbmFtZXM6IGFueVtdID0gW107XHJcblxyXG5jb25zdHJ1Y3RvciggcHVibGljIGRlbW9TZXJ2aWNlOiBEZW1vU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgIHRoaXMuZ2V0TmFtZXMoKTsgIFxyXG4gICBcclxuICB9XHJcblxyXG5nZXROYW1lcygpIHtcclxuICAgICB0aGlzLmRlbW9TZXJ2aWNlLmdldCgpXHJcbiAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmFtZXMgPT4gdGhpcy5uYW1lcyA9IG5hbWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gIH1cclxufVxyXG5cclxuIl19
