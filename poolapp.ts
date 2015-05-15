/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap,For} from 'angular2/angular2';
import {PoolComponent} from 'pool';
import {PoolStore,Pool,PoolOption} from 'services/poolstore';


@Component({
    selector: 'pool-app',
    injectables: [PoolStore]
})
@View({
    template: `
    <h1>{{pool.title}}</h1>
         <ul>
           <li *for="#pool_option of pool.options">
               {{pool_option.title}} <button (click)="addVote(pool_option)">{{pool_option.vote}}</button></li>
         <ul>  
    `
    ,
    directives: [PoolComponent,For]       
})
class PoolApp  {
     
   pool:Pool;
      
   constructor(poolStore: PoolStore) {
         this.pool = poolStore.pool;
         console.log("PoolApp constructor called");
         console.log(this.pool);
   }
   
   addVote(option:PoolOption) {
      option.vote++;
   }

}

bootstrap(PoolApp);