//用構造函數定義對象
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//new出來的name與age是實例屬性
const person = new Person('Mark', 18);

console.log(person);
console.log(person.name);
console.log(person.age);

//用class定義對象

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
//靜態屬性
    static info = 'new message';
}

const animal = new Animal('Black', 5);
console.log(animal);
console.log(animal.name);
console.log(animal.age);
console.log(Animal.info);

