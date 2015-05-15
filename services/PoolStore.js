var PoolStore = (function () {
    function PoolStore() {
        this.pool = new Pool('Titolo del pool');
        this.pool.options.push(new PoolOption('option1'));
        this.pool.options.push(new PoolOption('option2'));
        this.pool.options.push(new PoolOption('option3'));
        console.log(this.pool);
    }
    ;
    return PoolStore;
})();
exports.PoolStore = PoolStore;
var Pool = (function () {
    function Pool(title) {
        this.title = title;
        this.options = [];
    }
    return Pool;
})();
exports.Pool = Pool;
var PoolOption = (function () {
    function PoolOption(title) {
        this.title = title;
        this.vote = 0;
    }
    return PoolOption;
})();
exports.PoolOption = PoolOption;
