if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var PoolComponent = (function () {
    function PoolComponent() {
    }
    PoolComponent.prototype.test = function () {
        console.log("test" + this.pool_prop);
        var output = '';
        for (var property in this.pool_prop) {
            output += property + ': ' + this.pool_prop[property] + '; ';
        }
        console.log(output);
    };
    PoolComponent = __decorate([
        angular2_1.Component({
            selector: 'pool',
            properties: {
                'pool_prop': 'pool_prop'
            }
        }),
        angular2_1.View({
            template: "\n    <span>pool view</span>\n    <p>Titolo  : {{pool_prop.title}}</p>\n    <button (click)=\"test()\">test</button>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], PoolComponent);
    return PoolComponent;
})();
exports.PoolComponent = PoolComponent;
