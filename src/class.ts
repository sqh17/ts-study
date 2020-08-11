class Person_Class{
  name:string;
  age:number;
  constructor(name:string,age:number){
      this.name = name;
      this.age = age;
      console.log('this',this)
  }
  say():void{
      alert(this.name)
  }
}
var peter_class = new Person_Class('peter',25); 