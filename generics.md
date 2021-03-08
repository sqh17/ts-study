### 泛型 Generics
泛型（Generics）是指在定义__函数、接口或类__的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

#### 小试牛刀

    function returnItem<T>(val:T):T{
      return val
    }
    returnItem(17)

我们在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，在后面的输入 val: T 和输出 T 中即可使用了。返回的类型也不用添加，ts可以通过类型推断得出类型。

#### 泛型与any的区别
* 使用any类型会导致这个函数可以接收任何类型的arg参数，这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。
* 泛型不会丢失信息，像数据类型一样保持准确性，比如传入数值类型并返回数值类型。

#### 泛型变量
所谓的泛型变量就是确定一部分的类型，而不是整个类型。

    function getLen<T>(val:T):void{
      console.log(val.length); // 类型“T”上不存在属性“length”
    }

length，按照平常的泛型来写会报错，所以必须证明一下val是具有length属性的，所以加上[]。

    function getLen<T>(val:T[]):void{
      console.log(val.length);
    }
    getLen([1,2,3])

这样的优点：增加了灵活性，变向的确定了一部分类型。

#### 泛型约束

在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法。
还有一种情况，约束类型为某种类型。比如约束泛型为 number 或者 string 之一，当传入 boolean 类型的时候，就会报错。

    interface Lengthwise {
      length: number;
    }

    function loggingIdentity<T extends Lengthwise>(arg: T): T {
      console.log(arg.length);
      return arg;
    }
    loggingIdentity('2')
    loggingIdentity(2) // 类型“2”的参数不能赋给类型“Lengthwise”的参数。

现在这个泛型函数被定义了约束，因此它不再是适用于任意类型,传入符合约束类型的值，必须包含必须的属性

#### 多个类型参数

    function swap<T, U>(tuple: [T, U]): [U, T] {
        return [tuple[1], tuple[0]];
    }
    swap([7, 'seven']); // ['seven', 7]

#### 泛型接口

    interface ConfigFn {

      <T>(value: T): T;
    }

    var getData: ConfigFn = function <T>(value: T): T {
      return value;
    }

    getData<string>('张三');
    getData<number>(123)

泛型接口可以把泛型类型放在接口名的后面，里面<T>可以不用了，这样也直观，也更能确认属性的所有类型。


#### 泛型类

泛型类和泛型接口差不多，泛型类使用（ <>）括起泛型类型，跟在类名后面
    
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

类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。