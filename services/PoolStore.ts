export class PoolStore{
      
      pool:Pool;
      
      
    constructor(){
                         
        this.pool =new Pool('Titolo del pool');
        
        this.pool.options.push(new PoolOption('option1'));
        this.pool.options.push(new PoolOption('option2'));
        this.pool.options.push(new PoolOption('option3'));
               
        console.log(this.pool);
     };
   
}	


export class Pool{
   
   title:String;
   options:Array<PoolOption>;
   
   constructor(title:string){
      this.title=title;
      this.options=[];
   }
}

export class PoolOption{
   title:string;
   vote:number;
   
   constructor(title:string){
      this.title=title;
      this.vote=0;
   }
}
