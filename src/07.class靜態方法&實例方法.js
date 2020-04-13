//用構造函數定義對象
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.say = function f() {
    console.log('Person實例方法');
};
Person.play = function () {
    console.log('Person靜態方法')
};

//new出來的name與age是實例屬性
const person = new Person('Mark', 18);

console.log(person);
person.say();
Person.play();

//用class定義對象 實際上還是使用構造函數最為實現，class屬於js的語法糖
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

//靜態屬性
    static info = 'new message';

    hello() {
        console.log('Animal 實例方法');
    }

    static play() {
        console.log('Animal 靜態方法');
    }
}

const animal = new Animal('Black', 5);
console.log(animal);
animal.hello();
Animal.play();
