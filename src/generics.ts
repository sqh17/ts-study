function returnItem<T>(val:T):T{
  return val
}
returnItem([1,2,3,4]);

function getLen<T>(val:T[]):void{
  console.log(val.length);
}
// getLen([1,2,3])

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]

// interface type{
//   name:string,
//   age:number
// }

// function sum_generics<T>(val:T){
//   console.log(val)
// }
// sum_generics<type>({name:'peter',age:18,color:'red'})
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// loggingIdentity('2')
// loggingIdentity(2)

interface ConfigFn {
  <T>(value: T): T;
}

var getData: ConfigFn = function <T>(val: T): T {
  return val;
}

// getData<string>('张三');
// getData<number>(123)

class GetMin<T>{
  arr:T[]=[];
  add(ele:T){
      this.arr.push(ele);
  }
 min():T{
    var min=this.arr[0];
    this.arr.forEach(function (value) {
       if(value<min){
           min=value;
       }
    });
    return min;
 }
}
var gm1= new  GetMin<number>();
gm1.add(5);
gm1.add(3);
gm1.add(2);
gm1.add(9);
console.log(gm1.min()); //2