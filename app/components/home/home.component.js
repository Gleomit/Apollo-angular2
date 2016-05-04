System.register(['angular2/core', '../../directives/sample.directive', 'sharedServices/test.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sample_directive_1, test_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sample_directive_1_1) {
                sample_directive_1 = sample_directive_1_1;
            },
            function (test_service_1_1) {
                test_service_1 = test_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(testService) {
                    this.testService = testService;
                    this.testService.sayHello();
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/home/home.component.html',
                        styleUrls: ['app/components/home/home.component.css'],
                        directives: [sample_directive_1.SampleDirective],
                        providers: [test_service_1.TestService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof test_service_1.TestService !== 'undefined' && test_service_1.TestService) === 'function' && _a) || Object])
                ], HomeComponent);
                return HomeComponent;
                var _a;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map