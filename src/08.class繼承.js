class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}

class American extends Person{

}

class Chinese  extends Person{

}

const a = new American('Jack',18);
console.log(a);

const b = new Chinese('Apple',20);
console.log(b);
