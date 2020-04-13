class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('大家好');
    }
}

class American extends Person{
    //默認處理了構造函數賦值
    constructor(name,age,idNumber) {
        super(name,age);
        this.idNumber = idNumber;
    }

}

class Chinese  extends Person{

}

const a = new American('Jack',18,9527);
console.log(a);
a.sayHello();

const b = new Chinese('Apple',20);
console.log(b);
b.sayHello();
