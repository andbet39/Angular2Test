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
var pool_1 = require('pool');
var poolstore_1 = require('services/poolstore');
var PoolApp = (function () {
    function PoolApp(poolStore) {
        this.pool = poolStore.pool;
        console.log("PoolApp constructor called");
        console.log(this.pool);
    }
    PoolApp.prototype.addVote = function (option) {
        option.vote++;
    };
    PoolApp = __decorate([
        angular2_1.Component({
            selector: 'pool-app',
            injectables: [poolstore_1.PoolStore]
        }),
        angular2_1.View({
            template: "\n    <h1>{{pool.title}}</h1>\n         <ul>\n           <li *for=\"#pool_option of pool.options\">\n               {{pool_option.title}} <button (click)=\"addVote(pool_option)\">{{pool_option.vote}}</button></li>\n         <ul>  \n    ",
            directives: [pool_1.PoolComponent, angular2_1.For]
        }), 
        __metadata('design:paramtypes', [poolstore_1.PoolStore])
    ], PoolApp);
    return PoolApp;
})();
angular2_1.bootstrap(PoolApp);
